<template>
  <div id="app">
    <BookmarksCards :cards="cards" :click="handleClick"/>
    <p style="font-size: 10px">{{ version }}</p>
  </div>
</template>

<script>
import BookmarksCards from '@/components/BookmarksCards.vue'
import { bookmarksToCards } from "@/helpers/bookmarks-to-cards";
import { getBrowserInstance } from "@/helpers/browser-instance";
import sample from '@/data/sample-cards.ts';

const cards = []

export default {
  name: 'App',
  components: { BookmarksCards },
  data() {
    try {
      bookmarksToCards(getBrowserInstance().bookmarks.getTree, cards)
    } catch (error) {
      cards.push(...sample)
    }
    return {
      cards: cards,
      version: process.env.VUE_APP_VERSION + " [" + process.env.VUE_APP_VERSION_DATE + "]"
    }
  },
  methods: {
    handleClick(url) {
      window.location.href = url
    }
  }  
}

</script>

<style>
  /* yellow: #F2CC38, green: #00A082 */
  /* padding: 0px 6px 0px 6px; */
  body {
    padding: 15px;
    background-color: #424242;
  }
</style>
