<!-- UserSelection.vue -->
<template>
  <div class="user-selection">
    <h1>Select User</h1>
    <div v-for="(user, index) in users" :key="index" @click="selectUser(user)" class="user">
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
      localStorage.setItem('selectedUser', JSON.stringify(user));
      this.$router.push({ path: '/chat' });
    }
  }
}
</script>

<style scoped>
.user-selection{
  display: flex;
  height: 100vh;
  width: 100vh;
  margin: auto;
  flex-direction: column;
}
.user-selection h1{
  justify-content: center;
  padding: 15px;
  border: 2px solid  #769de6;
  border-radius: 10px;
  background-color:  rgb(124, 122, 122);
  margin: 30px auto 0px auto;
  margin-bottom: 20px;
  color: #fff;
}

.user{
  width: 80%;
  padding: 15px;
  border: 2px solid  #769de6;
  border-radius: 10px;
  background-color:  rgb(124, 122, 122);
  margin: 0px auto 0px auto;
  margin-bottom: 20px;
  color: #fff;
}

.user:hover{
  width: 80%;
  padding: 15px;
  transition: 2s;
  border: 2px solid  #769de6;
  border-radius: 10px;
  background-color:#0056b3;
    margin: 0px auto 0px auto;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
