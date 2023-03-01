<script setup></script>

<template>
  <div class="container-fuild mb-3 mt-3">
    <div class="row">
      <div class="col-2">
        <a class="navbar-brand w-100 d-flex mt-3 justify-content-center" href="#">
          <img src="/images/logo-muji.svg" alt="" class=""/>
        </a>
      </div>
      <div class="col-9 mt-1">
        <form class="d-flex">
          <button class="btn " type="submit">
            <img src="/images/zoom-in.svg" alt="" />
          </button>
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
      <div class="col-1 mt-1">
        <a class="nav-link active lm" aria-current="page" href="#">
          <img src="/images/ser.png" class="imgbox" />
          <p class="word imgbox m-0">客服</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.word {
  font-size: 0.2rem;
}
.imgbox {
  width: 1.5rem;
  height: 1.5rem;
}
.box {
  width: 1rem;
  height: 1rem;
}
.inputBox {
  width: 73rem;
}
.borderbox {
  border-radius: 0 !important;
}
.searchBox {
  border: 1px solid black;
  border-radius: 0 !important;
}
.rp {
  padding-right: 10rem;
}
.lm {
  margin-left: 3rem;
}
</style>
