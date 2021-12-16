<template>
  <main role="main">
    <div class="bg-gray-100">
      <div class="max-w-5xl mx-auto pt-10 pb-10">
        <ul v-if="posts.length" class="flex flex-wrap -mx-2 overflow-hidden">
          <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3" v-for="(post, index) in posts"
              :key="index">
            <Post :data="post" />
          </li>
        </ul>
      </div>
      <div class="text-center m-auto pt-4 pb-4">
        <paginate
          v-if="pages.total > 1"
          v-model="currentPage"
          :page-count="pages.total"
          :page-range="pages.per_page"
          :margin-pages="pages.total"
          :click-handler="doSwitchPage"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'flex justify-center mt-10 space-x-1'"
          :class="'flex justify-center mt-10 space-x-1'"
          :page-class="'flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600'"
          :page-link-class="'flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600'"
          :prev-class="'flex items-center justify-center h-8 w-8 rounded text-gray-400'"
          :prev-link-class="'flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400'"
          :next-class="'flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600'"
          :next-link-class="'flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600'"
          :active-class="'bg-blue-400'"
          :hide-prev-next="false"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Posts',
  props: {
    activePage: {
      type: Number,
      default: 1
    },
    pages: {
      type: Object,
      default: () => {
      }
    },
    posts: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  watch: {
    activePage(current) {
      this.currentPage = current
    }
  },
  methods: {
    doSwitchPage(arg) {
      this.$emit('switchPage', arg)
    }
  }
})
</script>

<style scoped>

</style>
