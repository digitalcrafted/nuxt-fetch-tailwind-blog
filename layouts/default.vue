<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'DefaultLayout',
  head() {
    const img = 'https://cdn.pixabay.com/photo/2015/07/10/15/42/ford-839538_1280.jpg'
    return {
      title: 'About Fetch',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'og:title', property: 'og:title', content: 'About Fetch'},
        {hid: 'description', name: 'description', content: 'on strategy, workflows and code'},
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'on strategy, workflows and code',
        },
        {hid: 'og:image', property: 'og:image', content: img},
        {
          hid: 'og:url',
          property: 'og:url',
          content: window.location.href,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ]
    }
  }
})
</script>
