<template>
  <section role="complementary">
    <div class="bg-hero-bg bg-cover bg-center" :style="{ backgroundImage: 'url(' + image + ')' }">
      <div class="container px-4 mx-auto flex h-80">
        <div class="text-center text-white max-w-2xl m-auto">
          <h1 class="text-3xl md:text-4xl font-semibold mb-2 text-shadow text-fuchsia-900">{{ caption }}</h1>
          <h2 class="text-2xl md:text-1xl sm:text-1xl font-semibold md:leading-loose text-shadow text-fuchsia-900">
            {{ subCaption }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Hero',
  props: {
    image: {
      type: String,
      default: 'https://cdn.pixabay.com/photo/2015/07/10/15/42/ford-839538_1280.jpg'
    },
    caption: {
      type: String,
      default: 'Thoughts'
    },
    subCaption: {
      type: String,
      default: 'on strategy, workflows and code'
    }
  }
})
</script>

<style scoped>

</style>
