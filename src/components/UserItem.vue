<!-- UserItem.vue -->
<template>
  <div 
    class="user"
    @click="selectUser"
    :class="{ 'selected': isSelected }" 
  >
    <div>{{ user.name }}</div>
    <div>{{ user.status }}</div>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: Object,
    isSelected: Boolean
  },
  methods: {
    selectUser() {
      this.$emit('select', this.user);
    }
  }
}
</script>

<style scoped>
.user {
  width: 80%;
  padding: 15px;
  border: 3px solid #769de6;
  border-radius: 10px;
  background-color: rgb(124, 122, 122);
  margin-left: 20px;
  margin-bottom: 20px;
  color: #fff;
}

.user:hover {
  width: 80%;
  padding: 15px;
  transition: 1s;
  border: 2px solid #769de6;
  border-radius: 10px;
  background-color: #0056b3;
  margin-left: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}

.selected {
  background-color: #0056b3;
}
</style>