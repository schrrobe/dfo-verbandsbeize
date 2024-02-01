<template>
  <div
    class="page-overlay"
    :class="{ 'page-overlay--full': full }"
    @mousedown="handleClick"
  >
    <slot />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "DfoPageOverlay",
  props: {
    full: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const handleClick = (event) => {
      if (event.target !== overlayRef.value) {
        return;
      }
      emit("click", event);
    };

    const overlayRef = ref(null);

    onMounted(() => {
      document.body.classList.add("no-scrolling");
    });

    onUnmounted(() => {
      document.body.classList.remove("no-scrolling");
    });

    return { handleClick, overlayRef };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../css/app.scss";
.page-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: $pad;
  overflow-y: scroll;
  background-color: rgb(55 55 55 / 90%);
  transition: all 0.3s ease-in-out;

  &.page-overlay--full {
    padding: 0;
  }
}
</style>
