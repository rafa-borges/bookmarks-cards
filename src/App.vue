<template>
  <div id="app">
    <BookmarksCards :cards="cards" :click-on-card="handleClickOnCard" :click-on-card-item="handleClickOnCardItem"/>
    <p style="font-size: 10px">{{ version }}</p>
  </div>
</template>

<script>
import BookmarksCards from '@/components/BookmarksCards.vue'
import { getBrowserInstance } from "@/helpers/browser-instance"
import { bookmarksToCards } from "@/helpers/bookmarks-to-cards"
import { sessionsToCards } from "@/helpers/sessions-to-cards"
import { cardClicked, cardItemClicked } from "@/helpers/card-handlers"
import sample from '@/data/sample-cards.ts'

const cards = []

export default {
  name: 'App',
  components: { BookmarksCards },
  data() {
    try {
      const browser = getBrowserInstance()
      bookmarksToCards(browser.bookmarks.getTree, cards)
      sessionsToCards(browser.sessions.getRecentlyClosed, cards)
    } catch (error) {
      cards.push(...sample)
    }
    return {
      cards: cards,
      version: process.env.VUE_APP_VERSION + " [" + process.env.VUE_APP_VERSION_DATE + "]"
    }
  },
  methods: {
    handleClickOnCard(card) {
      cardClicked(card)
    },
    handleClickOnCardItem(cardItem) {
      cardItemClicked(cardItem)
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
