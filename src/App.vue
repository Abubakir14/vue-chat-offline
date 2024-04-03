<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <ChatRoom :darkMode="darkMode" />
  </div>
</template>

<script>
import ChatRoom from './components/ChatRoom.vue'

export default {
  name: 'App',
  components: {
    ChatRoom
  },
  data() {
    return {
      darkMode: false
    };
  }
}
</script>

<style>
body{
  height: 100%;
  margin: 0;
}
</style>
