<template>
  <div class="bg-hero-bg" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="container px-4 mx-auto flex h-80">
      <div class="text-center text-white max-w-2xl m-auto">
        <h1 class="text-3xl md:text-4xl font-semibold mb-2 text-shadow">{{  caption }}</h1>
        <h2 class="text-2xl md:text-1xl sm:text-1xl font-semibold md:leading-loose text-shadow">{{ subCaption }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    image: {
      type: String,
      default: 'https://bo.factorial.io/sites/default/files/styles/hero_image__large__1x/public/2020-04/_99B5622.jpg.webp?h=b9aa6a85&itok=lx7mK32f'
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
}
</script>

<style scoped>

</style>
