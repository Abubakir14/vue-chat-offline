<template>
  <div class="user-selection">
    <h1>Select User:</h1>
    <div v-for="(user, index) in users" :key="index" @click="selectUser(user)">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSelection',
  data() {
    return {
      users: [
        { name: 'Jack', status: '*out*' },
        { name: 'BIBER', status: '*meter*' },
        { name: 'NEDO', status: '*mimo*' }
      ]
    };
  },
  methods: {
    selectUser(user) {
      // Здесь вы можете сохранить выбранного пользователя в localStorage или Vuex
      // Затем перенаправьте пользователя на страницу чата
       localStorage.setItem('selectedUser', JSON.stringify(user));
      this.$router.push('/chat');
    }
  }
}
</script>

<style scoped>
/* Стили для компонента выбора пользователя */
</style>
