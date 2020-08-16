<template>
  <b-card-group columns>
    <b-card v-for="(card, i) in cards" :key="i" no-body>
      <b-card-header>{{ card.name }}</b-card-header>
      <b-list-group> 
        <b-list-group-item v-for="(bookmark, j) in card.bookmarks" :key="j" @click="click(bookmark.url)">
          <b-img v-if="bookmark.icon" :src="bookmark.icon" class="bookmark-icon"/>
          {{ bookmark.name }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-card-group>
</template>

<script>

export default {
  name: 'BookmarksCards',
  components: {},
  props: {
    cards: Array,
    click: Function
  }
}
</script>

<style scoped>
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
    padding: 6px 6px 6px 10px;
  }
  .card-body {
    border-color: #000000;
  }
  .card-columns {
    column-count: 5;
  } 
</style>
