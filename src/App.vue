<!-- App.vue -->
<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      darkMode: false
    };
  }
}
</script>

<style>
body {
  height: 100%;
  margin: 0;
}
</style>
