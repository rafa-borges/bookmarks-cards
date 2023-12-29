<template>
  <div>
    <b-card v-for="(card, i) in keyCards(cards)" :key="i" no-body class="key-link">
      <b-list-group horizontal>
        <b-list-group-item v-for="(item, j) in card.items" :key="j" @click="clickOnCardItem(item)" class="flex-fill key-link">
          <b-img v-if="item.icon" :src="item.icon" class="item-icon"/>
          {{ item.name }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
    <div style="margin: 10px"/>
    <b-card-group columns>
      <b-card v-for="(card, i) in standardCards(cards)" :key="i" no-body>
        <b-card-header @click="clickOnCard(card)">{{ card.name }}</b-card-header>
        <b-list-group>
          <b-list-group-item v-for="(item, j) in card.items" :key="j" @click="clickOnCardItem(item)" class="standard-link">
            <b-img v-if="item.icon" :src="item.icon" class="item-icon"/>
            {{ item.name }}
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    cards: Array,
    clickOnCard: Function,
    clickOnCardItem: Function
  }, 
  methods: {
    keyCards(cards) {
      return cards.slice(0, 1)
    },
    standardCards(cards) {
      return cards.slice(1)
    }    
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
    cursor: pointer;
  }
  div.list-group-item:hover {
    border-radius: 4px;
  }
  div.list-group-item.key-link {
    font-weight: bold;
    font-size: 14px;
    min-height: 24px;
    background: #F2CC38;
    color: #1e1e1e;
  }
  div.list-group-item.key-link:hover {
    background-color: #00A082;
    color: #f1f1f1;
  }
  div.list-group-item.standard-link {
    font-size: 13px;
    background: #363636;
    color: #f1f1f1;
  }
  div.list-group-item.standard-link:hover {
    background-color: #00A082;
    color: #F2CC38;
  }
  .item-icon {
    margin-top: -2px;
    margin-right: 1px;
    height: 16px;
    width: 16px;
  }
  .card {
    border-color: #000000;
    min-width: 150px;
    max-width: 600px;
    background: #363636;
  }
  .card-header {
    background-color: #1e1e1e;
    border-color: #000000;
    color: #00A082;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 6px 6px 10px;
    cursor: pointer;
  }
  .card-header:hover {
    background-color: #00A082;
    color: #F2CC38;
  }
  .card-body {
    border-color: #000000;
  }
  .card-columns {
    column-count: 1;
  }
  div.key-link {
    text-align: center;
    max-width: 100%;
    background: #F2CC38;
  }

  @media (min-width: 630px) {
    .card-columns {
      column-count: 2;
    }
  }

  @media (min-width: 1000px) {
    .card {
      max-width: 400px;
    }
    .card-columns {
      column-count: 3;
    }
  }

  @media (min-width: 1300px) {
    .card-columns {
      column-count: 4;
    }
  }

  @media (min-width: 1600px) {
    .card-columns {
      column-count: 5;
    }
  }

  @media (min-width: 1900px) {
    .card-columns {
      column-count: 6;
    }
  }

  @media (min-width: 2100px) {
    .card-columns {
      column-count: 7;
    }
  }

  @media (min-width: 2400px) {
    .card-columns {
      column-count: 8;
    }
  }

</style>
