<template>
  <q-layout view="hHh lpR fFf">
    <DfoHeader> </DfoHeader>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal bordered class="bg-grey-9 text-white">
      <q-toolbar> </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import DfoHeader from "../components/organisms/header/header.vue";

export default defineComponent({
  name: "MainLayout",

  components: { DfoHeader },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<styles lang="scss">
@import "../css/app.scss";
</styles>
