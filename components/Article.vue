<template>
  <main role="main">
    <div class="relative">
      <div class="max-w-3xl mt-3 mx-auto">
        <article class="prose lg:prose-xl" v-html="post.post" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Article',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<style scoped>

</style>
