<template>
   <q-page class=""> <!--flex flex-center -->
    <DfoSlider></DfoSlider>
    <DfoWelcome></DfoWelcome>
    <DfoAblauf></DfoAblauf>
    <DfoFaq :faqs="faqs"></DfoFaq>




  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import DfoSlider from '../components/organisms/slider/slider.vue';
import DfoWelcome from '../components/organisms/welcome/welcome.vue'
import DfoAblauf from '../components/organisms/ablauf/ablauf.vue';
import DfoFaq from '../components/organisms/faq/faq.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { DfoSlider, DfoWelcome, DfoAblauf, DfoFaq },
  setup() {
    const faqs = [
      {
        question: 'Frage 1',
        answer: 'Antwort 1',
      },
      {
        question: 'Frage 2',
        answer: 'Antwort 2',
      },
      {
        question: 'Frage 3',
        answer: 'Antwort 3',
      },
    ];

    return {
      faqs,
    };
  },
});
</script>
