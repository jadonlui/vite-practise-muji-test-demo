<script setup>
import ShowSide from "./ShowSide.vue";
import { useSideWord } from "../../composables/useSideWord.js";
const { sideWord1, sideWordLady, sideWordMen, sideWordInside, sideWordHome } =
  useSideWord();
</script>

<template>
  <div class="card">
    <div class="leftmar card-body">
      <div>
        <h5 class="mb-4">推薦情報</h5>
      </div>
      <div v-for="data in sideWord1">
        <ShowSide :one="data.title" :two="data.hoverWord" />
      </div>
    </div>
  </div>
  <div class="card">
    <div class="leftmar card-body">
      <div>
        <h5 class="mb-4">女裝</h5>
      </div>
      <div v-for="data in sideWordLady">
        <ShowSide :one="data.title" :two="data.hoverWord" />
      </div>
    </div>
  </div>
  <div class="card">
    <div class="leftmar card-body">
      <div>
        <h5 class="mb-4">男裝</h5>
      </div>
      <div v-for="data in sideWordMen">
        <ShowSide :one="data.title" :two="data.hoverWord" />
      </div>
    </div>
  </div>
  <div class="card">
    <div class="leftmar card-body">
      <div>
        <h5 class="mb-4">內衣</h5>
      </div>
      <div v-for="data in sideWordInside">
        <ShowSide :one="data.title" :two="data.hoverWord" />
      </div>
    </div>
  </div>
  <div class="card">
    <div class="leftmar card-body">
      <div>
        <h5 class="mb-4">家具</h5>
      </div>
      <div v-for="data in sideWordHome">
        <ShowSide :one="data.title" :two="data.hoverWord" />
      </div>
    </div>
  </div>
</template>

<style>
.leftmar {
  margin-left: 1rem;
}
</style>
