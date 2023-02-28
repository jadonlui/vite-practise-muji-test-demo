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
              <p>{{ props.one }}</p>
            </div>
            <div class="imgBox">
              <!-- <img src="../../images/right.svg" /> -->
            </div>
          </div>
        </a>
      
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="tt in props.two">
              <a class="dropdown-item" href="#">
                {{ tt }}
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
.dropdown:hover .dropdown-menu {
  display: block;
  transform: translate(10rem, -2.5rem);
}
@media screen and (max-width: 1200px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    transform: translate(6rem, -2rem);
  }
}
@media screen and (max-width: 960px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    transform: translate(4rem, -2rem);
  }
}
</style>
