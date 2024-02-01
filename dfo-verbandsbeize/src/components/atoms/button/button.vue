<template>
  <component :is="getTag" :class="classes" :href="href" :to="to">
    <template v-if="!loading">
      <q-icon
        v-if="iconLeft"
        :color="iconColor"
        class="icon icon--left"
        :name="iconLeft"
        size="22px"
      />
      <slot name="iconLeft" />
      <template v-if="hasIcon">
        <!--        Button text-->
        <slot />
      </template>
      <template v-else>
        <!--        Button text-->
        <slot />
      </template>
      <q-icon
        v-if="iconOnly"
        :color="iconColor"
        class="icon icon--left"
        :name="iconLeft"
        :size="20"
      />
      <q-icon
        v-if="iconRight"
        :color="iconColor"
        class="icon icon--left"
        :name="iconLeft"
        :size="20"
      />
      <slot name="iconRight" />
    </template>
    <!-- <template v-else>
      <pw-loading-spinner
        v-if="hasLightLoadingSpinner"
        bubble
        light
      />
      <pw-loading-spinner
        v-else
        bubble
      />
    </template> -->
  </component>
</template>

<script>
import { defineComponent } from "vue";
// import PwLoadingSpinner from '../loading-spinner/LoadingSpinner.vue'
// import router from '@/router/index.js';

export default defineComponent({
  name: "DfoButton",
  // components: {PwLoadingSpinner, PwIcon},
  props: {
    href: String,
    to: String,
    type: String, //'button'| 'submit' | 'reset'
    disabled: Boolean,
    target: String, //_self | _blank
    tabindex: Number,
    tag: String, // a, button, router-link
    block: Boolean,
    variant: String, // primary,primary-inverse, secondary, terriary, paid, credit, payment-reminder, download
    iconLeft: String,
    iconRight: String,
    iconOnly: String,
    loading: Boolean,
  },
  computed: {
    getTag() {
      if (!this.tag) {
        return "button";
      }
      if (this.tag === "button") {
        return "button";
      }
      if (this.tag === "a") {
        return "a";
      }
      if (this.tag === "router-link") {
        return "router-link";
      }

      return "button";
    },

    classes() {
      return {
        button: this.getTag === "button",
        "router-link": this.getTag === "router-link",
        [`button--variant-${this.variant}`]: this.variant,
        "button--block": this.block,
        "button--disabled": this.disabled,
        "button--icon-left": this.iconLeft,
        "button--icon-right": this.iconRight,
        "button--icon-only": this.hasIcon && !this.hasText,
        "button--loading": this.loading,
      };
    },

    hasIcon() {
      return this.iconLeft || this.iconRight;
    },

    hasText() {
      return this.$slots;
    },

    hasIconAndText() {
      return this.hasIcon && this.areAllSlotsEmpty;
    },

    areAllSlotsEmpty() {
      for (const key in this.$slots) {
        if (this.$slots[key]) {
          return false; // At least one slot is not empty
        }
      }
      return true; // All slots are empty
    },

    iconColor() {
      if (
        ["primary", "download", "paid", "credit", "payment-reminder"].includes(
          this.variant
        )
      ) {
        return "white";
      }
      if (["primary-inverse"].includes(this.variant)) {
        return "purple-darkest";
      }
      return "white";
    },

    hasLightLoadingSpinner() {
      return [
        "primary",
        "download",
        "paid",
        "credit",
        "payment-reminder",
      ].includes(this.variant);
    },
  },
});
</script>

<style scoped lang="scss">
@import "../../../css/app.scss";
a,
button,
.button {
  position: relative;
  display: inline-block;
  align-self: baseline;
  width: auto;
  margin: 0;
  padding: 0;
  overflow: visible;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  text-transform: inherit;
  text-decoration: none;
  text-shadow: none;
  vertical-align: baseline;
  background-color: transparent;
  background-image: none;
  border: 0;
  border-radius: 0;
  outline: 0;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  appearance: none;
  -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
  -webkit-font-smoothing: antialiased;

  &:focus {
    outline: none;
  }
}

// =======================
// Base
// =======================
%button-variant-base {
  padding: $pad $pad * 3;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 5px;

  .loading-spinner {
    top: -3px;
  }

  &.button--icon-only {
    padding-inline: 0;
  }
}
.button {
  // =======================
  // Primary
  // =======================
  &.button--variant-primary {
    @extend %button-variant-base;

    color: $white;
    background-color: $primary;
    // fill: white;

    &:hover {
      background-color: $primary;
      opacity: 0.8;
      border: 1px solid black;
    }
  }
  // =======================
  // Primary-inverse
  // =======================
  &.button--variant-primary-inverse {
    @extend %button-variant-base;

    color: $primary;
    border: 2px solid $primary;
    background-color: white;
    fill: white;

    &:hover {
      opacity: 0.8;
      border: 1px solid $primary;
    }
  }

  &.button--disabled {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
  }

  // =======================
  // Loading
  // =======================
  &.button--loading {
    pointer-events: none;
  }

  // =======================
  // Block
  // =======================
  &.button--block {
    display: block;
    width: 100%;
  }
}

// =======================
// Router-Link
// =======================

%router-link-base {
  padding: $pad $pad * 2;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  letter-spacing: 0.3cap;
}
.router-link {
  @extend %router-link-base;
  color: $white;
  background-color: $primary;
  fill: white;
  width: 100%;
  border-bottom: 1px solid $borders;
  border-top: 1px solid $borders;
  opacity: 0.8;

  &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: $primary;
    opacity: 1;
    border-bottom: 2px solid $white;
    border-top: 2px solid $white;
  }
}

.icon {
  margin-bottom: 5px;
  &.icon--left {
    margin-right: 5px;
  }
  &.icon--right {
    margin-left: 5px;
  }
  &.icon--only {
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>
