<template>
  <div id="app">
    <BookmarksCards :cards="cards" :click="handleClick"/>
    <p style="font-size: 10px">{{ version }}</p>
  </div>
</template>

<script>
import BookmarksCards from '@/components/BookmarksCards.vue'
import sample from '@/data/sample-cards.js';

export default {
  name: 'App',
  components: { BookmarksCards },
  data() {
    bookmarksData.fetch()
    return {
      cards: bookmarksData.cards,
      version: process.env.VUE_APP_VERSION + " [" + process.env.VUE_APP_VERSION_DATE + "]"
    }
  },
  methods: {
    handleClick(url) {
      window.location.href = url
    }
  }  
}

var bookmarksData = {

  cards: [],

  fetch() {
    try {
      this.chromeCards()
    } catch (error) {
      this.sampleCards()
    }
  },

  chromeCards() {
    const myself = this
    chrome.bookmarks.getTree( //eslint-disable-line
      function(chromeBookmarkTreeNodes) {
        for (const topTreeNode of chromeBookmarkTreeNodes) {
          for (const categoryTreeNode of topTreeNode.children) {
            myself.chromeCard(categoryTreeNode, "", 1)
          }
        }
      }     
    ) 
  },

  chromeCard(bookmarkNode, prefix, level) {
    // Direct bookmarks of the node
    const bookmarks = []
    for (const bookmark of bookmarkNode.children.filter(node => node.url)) {
      bookmarks.push({
        name: bookmark.title,
        url: bookmark.url,
        icon: "chrome://favicon/" + bookmark.url})
    }
    if (bookmarks.length > 0) {
      const name = level == 1 ? "Top Bookmarks" : prefix + bookmarkNode.title
      this.cards.push({ name: name, level: level, bookmarks: bookmarks})
    }
    // Children that have arrays of bookmarks
    for (const childNode of bookmarkNode.children.filter(node => node.children)) {
      const name = level == 1 ? "" : prefix + bookmarkNode.title + " → "
      this.chromeCard(childNode, name, level + 1)
    }
  },

  sampleCards() {
    for (let i = 0; i < 4; i++) {
      this.cards.push(...sample) 
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
