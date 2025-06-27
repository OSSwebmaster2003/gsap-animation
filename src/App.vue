<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
</script>

<template>
  <main>
    <Navbar />
    <Hero />
    <div class="h-dvh bg-black"></div>
  </main>
</template>

<style scoped></style>
