<script setup>
import { useImgsOne } from "../../composables/useImgsOne.js";

import ShowProductImg from "../Show/ShowProductImg.vue";
const { imgsInterview } = useImgsOne();
</script>

<template>
 <div class="container">
    <div class="row mb-4">
      <h3>服務與設備</h3>
      <div class="col-3" v-for="oneImgData in imgsInterview">
        <ShowProductImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
</div>


</template>

<style>

</style>
