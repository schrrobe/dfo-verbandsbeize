<template>
  <div :class="['modal', { 'modal--full': full }]">
    <div v-if="closable" class="m-actions">
      <button type="button" class="m-close" @click="close">
        <q-icon name="close" :size="20" color="white" />
      </button>
    </div>

    <slot name="beforeContent" />

    <div class="m-content">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "DfoModal",
  props: {
    closable: {
      type: Boolean,
      default: true,
    },
    loading: Boolean,
    small: Boolean,
    medium: Boolean,
    large: Boolean,
    full: Boolean,
    fixed: Boolean,
    overlay: Boolean,
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../css/app.scss";

.modal {
  position: relative;
  display: block;
  width: 100%;
  margin: 20% auto auto;
  background-color: $primary;
  border-radius: 2px;
  //box-shadow: 0 2px 10px 0 color.change(, $alpha: .15);
  transition: all 0.3s ease-in-out;

  @include bp(m) {
    margin: 100px auto auto;
  }

  .m-actions {
    display: flex;
    justify-content: end;
    padding: $pad;

    @include bp(m) {
      padding: 10px;
    }
  }

  .m-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: black;
    font-size: 30px;
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;

    .icon::after {
      content: "x";
    }
  }

  .m-content {
    padding: 0 $pad;

    @include bp(m) {
      padding: 10px;
    }

    .modal-header {
      min-height: 40px;
      margin-bottom: 25px;

      .headline {
        font-weight: 900;
      }
    }
  }

  &.modal--full {
    position: absolute;
    width: 100%;
    min-height: 100%;
    border-radius: 0;

    @include bp(m, max) {
      max-width: none;
    }

    @include bp(m) {
      position: relative;
      min-height: auto;
      border-radius: 20px;
    }
  }

  &.modal--fixed {
    position: fixed;
    top: 0;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);

    @include bp(m) {
      height: auto;
    }

    .m-content {
      height: calc(100% - 100px);
    }
  }

  &.modal--overlay {
    z-index: 110;
    margin-top: 0;
  }
}
</style>
