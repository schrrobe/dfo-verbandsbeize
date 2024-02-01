<template>
  <div class="container-flex">
    <div class="flex-item">
      <h1><span class="text-highlight">Herzlich Willkommen</span> bei der diesjährigen Verbandsbeize </h1>
    </div>
    <div class="vertical-divider show-desktop"></div>
    <div class="flex-item">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna et tincidunt volutpat, libero sem consequat arcu, ac tincidunt lectus augue in justo. Maecenas a justo eget ligula efficitur hendrerit vel vel lacus. Duis hendrerit vel ex nec pellentesque. Praesent auctor metus eget sapien tempus, vel dictum ligula</p>
      <p>nec pellentesque sapien sodales in. Integer aliquet nisl in metus fermentum, ut gravida ligula vulputate. Vestibulum fermentum odio in eros euismod, vel suscipit purus bibendum. Maecenas nec diam ut libero congue feugiat. Sed euismod elit vel nisi accumsan, et accumsan urna malesuada. Curabitur at facilisis eros, id tempus est.</p>

</div>

  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DfoWelcome',
  props: {

  },
})
</script>
<style lang="scss" scoped>
@import '../../../css/app.scss';
.container-flex{
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  background: $white;
  padding: $pad*2;
  display: flex;
  justify-content: space-around;
  pad: $pad*2;
  max-width: $max-width;

  @include bp(m){
    padding: $pad*6;
  }

  .flex-item{
    width: 100%;
    margin: auto 0;

    @include bp(m){
      width: 45%;
    }
  }

  h1 {
    font-size: $headline-h2;
    line-height: 2.2rem;
    color: $primary;
    font-weight: 600;
  }

  .vertical-divider {
    height: 100px;
    border: 1px solid $borders;
    margin: auto;
  }
}
</style>
