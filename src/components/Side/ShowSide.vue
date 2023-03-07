<script setup>
import $ from "jquery";
import { onMounted } from "vue";
const props = defineProps({
  one: {
    type: String,
    default: "",
  },
  two: {
    type: Array,
    default: () => [],
  },
});
console.log("test");
</script>

<template>
  <div>
    <div v-if="props.two.length !== 0">
      <li class="nav-item dropdown dropend">
        <a
          class="nav-link"
          href="#"
          id="navbarDropdown"
          role="button"
          aria-expanded="false"
        >
          <div class="d-flex justify-content-between">
            <div>
              <h6>{{ props.one }}</h6>
            </div>
            <div class="imgBox">
              <!-- <img src="../../images/right.svg" /> -->
            </div>
          </div>
        </a>

        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li v-for="tt in props.two">
            <a class="dropdown-item" href="#">
              <p>{{ tt }}</p>
            </a>
          </li>
        </ul>
      </li>
    </div>
    <div v-else>
      <h6 class="card-title">{{ props.one }}</h6>
    </div>
  </div>
</template>

<style>
.imgBox {
  width: 1.2rem;
  height: 1.2rem;
}
.dropdown-menu li:hover .sub-menu {
  visibility: visible;
}

@media screen and (max-width: 2800px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    transform: translate(24rem, -2rem);
  }
}
@media screen and (max-width: 2500px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    transform: translate(17rem, -1.9rem);
  }
}
@media screen and (max-width: 2300px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    transform: translate(10rem, -1.8rem);
  }
}

@media screen and (max-width: 2000px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    transform: translate(9rem, -1rem);
  }
}

@media screen and (max-width: 1800px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    transform: translate(7rem, -2rem);
  }
}

@media screen and (max-width: 1600px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    transform: translate(7rem, -2rem);
  }
}

@media screen and (max-width: 1300px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    transform: translate(6rem, -1.8rem);
  }
}

@media screen and (max-width: 960px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    transform: translate(4rem, -1.7rem);
  }
}
</style>
