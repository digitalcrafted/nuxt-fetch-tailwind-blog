<template>
  <div class="relative">
    <div class="max-w-3xl mt-3 mx-auto">
      <article class="prose lg:prose-xl" v-html="post.post" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
