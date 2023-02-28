import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons';
// import "bootstrap/dist/js/bootstrap.bundle.js";

import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

window.bootstrap = bootstrap;
import $ from "jquery/dist/jquery";

window.$ = $;
createApp(App).mount("#app");
