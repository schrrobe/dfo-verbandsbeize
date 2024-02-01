<template>
  <div class="container bg-white">
    <div class="skewed show-mobile"></div>
    <div class="container-flex">
      <h1 class="text-primary text-center space-6">
        <span class="text-highlight">Fragen & Antworten</span>
      </h1>
      <div class="q-pa-md">
        <q-list
          bordered
          class="faq-item"
          v-for="(faqItem, index) in faqs"
          :key="index"
        >
          <q-expansion-item>
            <template #header>
              <q-item-section avatar>
                <q-avatar icon="question_mark" text-color="primary" />
              </q-item-section>

              <q-item-section>
                {{ faqItem.question }}
              </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                {{ faqItem.answer }}
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />
        </q-list>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "DfoFaq",
  props: {
    faqs: Array,
  },
});
</script>
<style lang="scss" scoped>
@import "../../../css/app.scss";
.container {
  margin: auto;
  max-width: $max-width;
}
.container-flex {
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  padding: $pad * 2;
  display: flex;
  justify-content: space-around;
  pad: $pad * 2;
  max-width: $max-width;

  @include bp(m) {
    padding: $pad * 6;
  }
}
.faq-item {
  margin-bottom: $pad * 2;
  border: 2px solid $borders;
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
