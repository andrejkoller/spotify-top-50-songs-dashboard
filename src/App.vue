<script setup>
import Header from './components/header.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
