<template>
  <div class="">X</div>
  <div class="container-flex">
    <DfoButton
        tag="router-link"
        to="/"
        variant="primary"
        iconLeft="home"
        >Startseite</DfoButton>
  </div>

</template>

<script setup>
import { ref } from 'vue'
// import logoURL from '../assets/logo.png'
import DfoButton from '../../atoms/button/button.vue';

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>
<script>
// Set the component name explicitly
const componentName = 'DfoMenu';

export default {
  name: componentName,
  // Other component options go here
}
</script>
<style lang="scss" scoped>
@import '../../../css/app.scss';
.container-flex{
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  background: Primary;
  padding: $pad*2;
  display: flex;
  justify-content: space-around;
  pad: $pad*2;
  width: $max-width;

  @include bp(m){
    max-width: 300px;
  }
}

</style>
