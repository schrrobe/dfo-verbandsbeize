<template>
  <div>
  <q-carousel
     v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation
        arrows
        height="550px"
        class="text-white shadow-1">
    <q-carousel-slide name="1" img-src="../../../assets/img/harris-teaser.jpeg">
      <div class="row">
        <div class="col-12">
          <q-avatar size="120px">
            <img src="../../../assets/img/dfo-logo.svg" >
          </q-avatar>
        </div>
      </div>
      <div class="show-mobile">
        <div class="row justify-center content-center">
          <div class="glass-box">
            <h2 class="glass-box-title">
              <span class="text-highlight text-highlight-primary">
                Verbandsbeize 2024
              </span> vom Deutschen Falkenorden LV Nordrein-Westfalen</h2>
          </div>
      </div>
      </div>
      <div class="show-desktop">
        <div class="row justify-end content-end">
          <div class="glass-box">
            <h5 class="glass-box-title"><span class="text-highlight text-highlight-primary">Verbandsbeize 2024</span> vom Deutschen Falkenorden LV Nordrein-Westfalen</h5>
          </div>
      </div>
      </div>

    </q-carousel-slide>
    <q-carousel-slide name="2" img-src="../../../assets/img/harris-ansitz.jpeg">
      <div class="row">
        <div class="col-12">
          <q-avatar size="120px">
            <img src="../../../assets/img/dfo-logo.svg" >
          </q-avatar>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="3" img-src="https://cdn.quasar.dev/img/mountains.jpg">tree</q-carousel-slide>

  </q-carousel>
</div>
</template>
<script>
export default {
  name: 'DfoSlider',
  data(){
    return {
      slide: '1',
    }
  }

}
</script>
<style lang="scss" scoped>
@import '../../../css/app.scss';
.glass-box {
margin-top:40px;
width: 250px;
min-height: 150px;
padding: $pad;
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.1px);
-webkit-backdrop-filter: blur(7.1px);
border: 1px solid rgba(255, 255, 255, 0.3);

@include bp(m){
  margin-right: 15%;
  margin-top:150px;
  width: 400px;
}
.glass-box-title{
  font-size: $headline-h2;
  line-height: 1.8rem;
  font-weight: 600;
}
}
</style>
