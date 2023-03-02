<script setup></script>

<template>
  <div>
    <div class="container-fuild bigBox pt-5">
      <div class="row ">
        <div class="col-3 d-flex w-100 justify-content-center mb-5">
          <img src="/images/logo-muji.svg" alt="" />
        </div>
        <div class="col-9 d-flex  w-100 justify-content-center ">
          <div class="box">
            <p>店舗情報</p>
            <p>門市服務</p>
            <p>顧客服務</p>
            <p>最新消息</p>
          </div>
          <div class="box">
            <p>Café&MealMUJI</p>
            <p>空間改造企劃服務</p>
            <p>展店合作</p>
            <p>仿冒品提醒聲明</p>
          </div>
          <div class="box">
            <p>會員服務</p>
            <p>良品專欄</p>
            <p>大宗採購</p>
          </div>
          <div class="box">
            <p>人才招募</p>
            <p>無印良品訊息</p>
            <p>企業情報</p>
          </div>
        </div>
      </div>
      <p class="taiwanBox">台灣</p>
    </div>
  </div>
</template>

<style>
.bigBox{
    background-color:#f0f2f5; ;
}
.box {
  margin-left: 1rem;
  width: 10rem;
  height: 10rem;
}
.taiwanBox{
  margin-left: 1rem;
  padding-bottom: 1rem;
}
@media screen and (max-width: 1400px) {
  .box {
    width: 20rem;
    height: 15rem;
  }
}
</style>
