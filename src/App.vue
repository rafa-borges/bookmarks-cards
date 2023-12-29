<template>
    <BookmarksCards :cards="cards" :click-on-card="cardClicked" :click-on-card-item="cardItemClicked"/>
    <p style="font-size: 10px">{{ version }}</p>
</template>

<script setup lang="ts">
import BookmarksCards from '@/components/BookmarksCards.vue'
import { cardClicked, cardItemClicked } from "@/helpers/card-handlers"
</script>

<style>
  /* yellow: #F2CC38, green: #00A082 */
  /* padding: 0px 6px 0px 6px; */
  #body {
    padding: 15px;
    background-color: #424242;
  }
</style>