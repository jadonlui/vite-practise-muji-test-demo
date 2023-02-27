<script setup>
import ShowSide from "./ShowSide.vue";
import { useSideWord } from "../../composables/useSideWord.js";
const { sideWord1 } = useSideWord();
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
</template>

<style>
.leftmar {
  margin-left: 1rem;
}
</style>
