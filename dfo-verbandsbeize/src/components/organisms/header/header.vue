<template>
  <div class="">
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title>
          <!-- <q-avatar size="100px">
            <img src="../../../assets/img/dfo-logo.svg" >
          </q-avatar> -->
          <!-- DFO-Verbandsbeize -->
        </q-toolbar-title>
      <q-space />
      <DfoMenu></DfoMenu>

      <!-- <q-tabs v-model="tab" inline-label
        outside-arrows
        mobile-arrows>
        <q-route-tab
          label="Startseite"
          icon="home"
          to="/"
        />
        <q-route-tab
          label="Gruppen"
          icon="group"
          to="/gruppen"
        />
      </q-tabs> -->
    </q-toolbar>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import DfoMenu from '../../molecules/menu/menu'


export default defineComponent({
  name: 'DfoHeader',
  components: {DfoMenu,},


  setup() {

  }
})
</script>
<style lang="scss" scoped >
.items-end{
  margin: 20px
}
</style>
