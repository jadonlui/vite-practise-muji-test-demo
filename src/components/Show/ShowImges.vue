<script setup>
import { useImgsOne } from "../../composables/useImgsOne.js";
import ShowChildImg from "../Show/ShowChildImg.vue";
import ShowProductImg from "../Show/ShowProductImg.vue";

const {
  imgsDatas,
  imgsDatas2,
  imgsDatas3,
  imgsDatas4,
  imgsDatas5,
  imgsDatas6,
  imgsDatas7,
  imgsDatasNew,
  imgsDatasInside,
  imgsDatasLady,
  imgsDatasMan,
  imgsDatasShouse,
} = useImgsOne();

</script>

<template>
  <div class="container-fuild">
    <div class="row mb-4">
      <h3>特集</h3>
      <div class="col-3" v-for="oneImgData in imgsDatas">
        <ShowChildImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-3" v-for="oneImgData in imgsDatas2">
        <ShowChildImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
    <div class="row mb-4">
      <h3>3A生活提案</h3>
      <div class="col-4" v-for="oneImgData in imgsDatas3">
        <ShowChildImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
    <div class="row mb-4">
      <h3>門市服務</h3>
      <div class="col-4" v-for="oneImgData in imgsDatas4">
        <ShowChildImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
    <div class="row mb-4">
      <h3>良品服務</h3>
      <div class="col-4" v-for="oneImgData in imgsDatas5">
        <ShowChildImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
    <div class="row mb-4">
      <h3>生活影片</h3>
      <div class="col-4" v-for="oneImgData in imgsDatas6">
        <ShowChildImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
    <div class="row mb-4">
      <h3>良品專欄</h3>
      <div class="col-4" v-for="oneImgData in imgsDatas7">
        <ShowChildImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
    <div class="row mb-4">
      <h3>新產品</h3>
      <div class="col-3" v-for="oneImgData in imgsDatasNew">
        <ShowProductImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
    <div class="row mb-4">
      <h3>女裝</h3>
      <div class="col-3" v-for="oneImgData in imgsDatasLady">
        <ShowProductImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
    <div class="row mb-4">
      <h3>男裝</h3>
      <div class="col-3" v-for="oneImgData in imgsDatasMan">
        <ShowProductImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
    <div class="row mb-4">
      <h3>內衣</h3>
      <div class="col-3" v-for="oneImgData in imgsDatasInside">
        <ShowProductImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
    <div class="row mb-4">
      <h3>鞋子</h3>
      <div class="col-3" v-for="oneImgData in imgsDatasShouse">
        <ShowProductImg :src="oneImgData.imgSrc" :title="oneImgData.title" />
      </div>
    </div>
  </div>
</template>

<style></style>
