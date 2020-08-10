<template>
  <div id="app">
    <b-card-group :columns="true">
      <b-card v-for="(card, i) in cards" v-bind:key="i" :no-body="true">
        <b-card-header>
          <b-container :fluid="true">
            <b-row>
              <b-col cols="auto" class="mr-auto">{{ card.name }}</b-col>
              <b-col cols="auto"><b-link v-if="card.level > 2" @click="handleCollapse('card-' + i)">+</b-link></b-col>
            </b-row>
          </b-container>
        </b-card-header>
        <b-collapse :visible="card.level <= 2" :id="'card-' + i">      
          <b-list-group> 
            <b-list-group-item v-for="(bookmark, j) in card.bookmarks" v-bind:key="j" @click="handleClick(bookmark.url)">
              <b-img v-if="bookmark.icon" :src="bookmark.icon" class="bookmark-icon"/>
              {{ bookmark.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { BCard, BCollapse, BContainer, BImg, BListGroup, BListGroupItem } from 'bootstrap-vue';

export default {
  name: 'App',
  components: { BCard, BCollapse, BContainer, BImg, BListGroup, BListGroupItem },
  data: function() {
    bookmarksData.fetch()
    return {
      cards: bookmarksData.cards
    }
  },
  methods: {
    handleClick: function(url) {
      window.location.href = url
    },
    handleCollapse: function(collapseId) {
      this.$root.$emit('bv::toggle::collapse', collapseId)
    }
  }
}

var bookmarksData = {

  cards: [],

  fetch: function() {
    try {
      this.chromeCards()
    } catch (error) {
      this.sampleCards()
    }
  },

  chromeCards: function() {
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

  chromeCard: function(bookmarkNode, prefix, level) {
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

  sampleCards: function() {
    this.cards.push( { level: 1, name: "Key Links", bookmarks: [ 
      { name: "Mail", url: "https://gmail.com", icon: "https://www.google.com/s2/favicons?domain=https://www.gmail.com/" },
      { name: "Jira", url: "https://jira.com", icon: "https://www.google.com/s2/favicons?domain=https://www.jira.com" },
      { name: "Stackoverflow", url: "https://stackoverflow.com", icon: "https://www.google.com/s2/favicons?domain=https://www.stackoverflow.com" },
      { name: "Looker", url: "https://looker.com", icon: "https://www.google.com/s2/favicons?domain=https://looker.com" } ]})
    for (let i = 0; i < 10; i++) {
      this.cards.push({ level: 2, name: "Some More Links", bookmarks: [ { name: "Link 1" }, { name: "Link 2" }, { name: "Link 3" } ]})
    }
    this.cards.push({ level: 3, name: "Some More Links", bookmarks: [ { name: "Link 1" }, { name: "Link 2" }, { name: "Link 3" } ]})
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
  div.list-group {
    margin: 3px;
  }  
  div.list-group-item {
    margin: 2px;
    border: 2px 0px 2px 0px;
    padding: 0px 6px 0px 8px;
    vertical-align: middle;
    border: none;
    background: #363636;
    color: #f1f1f1;
    cursor: pointer;
    font-size: 14px;
    height: 24px;
  }
  div.list-group-item:hover {
    background-color: #00A082;
    color: #F2CC38;
    border-radius: 4px;
  }
  .bookmark-icon {
    margin-top: -2px;
    margin-right: 1px;
    height: 16px;
    width: 16px;
  }
  .card {
    border-color: #000000;
    max-width: 400px;
    background: #363636;
  }
  .card-header {
    background-color: #1e1e1e;
    border-color: #000000;
    color: #00A082;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 0px 6px 0px;
  }
  .card-body {
    border-color: #000000;
  }
  .card-columns {
    column-count: 4;
  }  
  a {
    color: #00A082;
  }
  a:hover {
    color: #F2CC38;
    text-decoration: none;
  }  
</style>
