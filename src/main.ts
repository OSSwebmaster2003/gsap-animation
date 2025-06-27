import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

createApp(App).mount("#app");
