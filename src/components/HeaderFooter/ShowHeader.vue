<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/images/logo-muji.svg" alt="" />
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex inputBox">
          <button class="btn searchBox" type="submit">
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
      <div>
        <div>
          <a class="nav-link active lm" aria-current="page" href="#">
            <img src="/images/ser.png" class="imgbox" />
            <p class="word imgbox m-0">客服</p>
          </a>
        </div>
      </div>
    </div>
  </nav>
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
