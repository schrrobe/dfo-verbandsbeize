<template>
  <div class="container bg-primary">
  <div class="skewed show-mobile"></div>
  <div class="container-flex">
    <h1 class="text-dark space-6"><span class="text-highlight">Ablauf</span></h1>
    <div class="q-px-lg q-py-md">
    <q-timeline :layout="layout" color="white">

      <q-timeline-entry
        title="Event Title"
        subtitle="Uhrzeit und datum?"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="Uhrzeit und datum?"
        side="right"
        icon="delete"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="Event Title"
        subtitle="Uhrzeit und datum?"
        side="left"
        icon="delete"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

    </q-timeline>
  </div>
  </div>
</div>
</template>
<script>
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar'
import { computed } from 'vue'
export default defineComponent({
  name: 'DfoAblauf',
  props: {

  },
  setup () {
    const $q = useQuasar()

    return {
      layout: computed(() => {
        return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
      })
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../../../css/app.scss';
.container {
  margin: auto;
  max-width: $max-width;
}
.container-flex {
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  padding: $pad*2;
  display: flex;
  justify-content: space-around;
  pad: $pad*2;
  max-width: $max-width;

  @include bp(m){
    padding: $pad*6;
  }
}
.skewed {
  position: block;
  width: 100%;
  height: 40px;
  background: $white;
  z-index: 0;
  transform: skewY(5.5deg);
  transform-origin: top right;
}
</style>
