<template>
  <div class="chat-container" :class="{ 'dark-mode': darkMode }">
    <div class="users">
      <div 
        v-for="(user, index) in filteredUsers" 
        :key="index"
        class="user"
        @click="selectUser(index)" 
        :class="{ 'selected': selectedUser === index }" 
      >
        <div>{{ user.name }}</div>
        <div>{{ user.status }}</div>
      </div>
    </div>
    <div class="messages-container">
      <div class="messages">
        <div v-for="(message, index) in selectedUserMessages" :key="index" class="message">
          {{ message.text }}
        </div>
      </div>
      <div class="input-container">
        <input type="text" v-model="newMessage" @keyup.enter="sendMessage" style="padding-left: 20px" placeholder="write message...">
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatRoom',
  props: {
    darkMode: Boolean
  },
  data() {
    return {
      newMessage: '',
      selectedUser: null,
      users: []
    };
  },
  computed: {
    filteredUsers() {
      if (this.selectedUser === null) return this.users;
      return this.users.filter((user, index) => index !== this.selectedUser);
    },
    selectedUserMessages() {
      if (this.selectedUser !== null) {
        return this.users[this.selectedUser].messages;
      } else {
        return [];
      }
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        const message = { text: this.newMessage };
        const user = this.users[this.selectedUser];
        user.messages.push(message);
        this.saveMessageToStorage(user.name, message);
        this.newMessage = '';
      }
    },
    selectUser(index) {
      this.selectedUser = index;
    },
    saveMessageToStorage(userName, message) {
      const messages = JSON.parse(localStorage.getItem(userName)) || [];
      messages.push(message);
      localStorage.setItem(userName, JSON.stringify(messages));
    },
    handleStorageEvent(event) {
      const { key, newValue } = event;
      if (key && newValue) {
        const userName = this.users[this.selectedUser]?.name;
        if (userName && key === userName) {
          const newMessages = JSON.parse(newValue);
          this.users[this.selectedUser].messages = newMessages;
        }
      }
    }
  },
  mounted() {
    const storedUser = JSON.parse(localStorage.getItem('selectedUser'));
    if (storedUser) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const index = users.findIndex(user => user.name === storedUser.name);
      if (index !== -1) {
        this.selectedUser = index;
      } else {
        this.$router.push({ path: '/home' });
      }
      this.users = users;
    } else {
      this.$router.push({ path: '/home' });
    }
    window.addEventListener('storage', this.handleStorageEvent);
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.handleStorageEvent);
  },
  created() {
    const userName = this.users[this.selectedUser]?.name;
    if (userName) {
      const storedMessages = JSON.parse(localStorage.getItem(userName)) || [];
      this.users[this.selectedUser].messages.push(...storedMessages);
    }
  },
  watch: {
    selectedUser(newIndex) {
      const userName = this.users[newIndex]?.name;
      if (userName) {
        const storedMessages = JSON.parse(localStorage.getItem(userName)) || [];
        this.users[newIndex].messages = storedMessages;
      }
    }
  }
}
</script>

<style scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.users{
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.user{
  width: 80%;
  padding: 15px;
  border: 3px solid  #769de6;
  border-radius: 10px;
  background-color:  rgb(124, 122, 122);
  margin-left: 20px;
  margin-bottom: 20px;
  color: #fff;
}

.user:hover{
  width: 80%;
  padding: 15px;
  transition: 1s;
  border: 2px solid  #769de6;
  border-radius: 10px;
  background-color:#0056b3;
  margin-left: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
.chat-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(#2E9AFF, #faaabd);
}

.messages {
  height: 85%;
  margin-right: 40px;
}

.message {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 12px;
  background-color: #3e7df3;
  color: #fff;
  border-radius: 8px;
  justify-content: center;
}
.messages-container{
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#686b6e,rgb(153, 149, 149));
  width: 60%;
  align-items: flex-end;
  scroll-behavior: auto;
}
.input-container {
  display: flex;
  width:100%;
  height: 40px;
}

.input-container input {
  margin-right: 10px;
  width: 100%;
  border-radius: 7px;
  border: 2px solid #3e7df3;
  margin-left: 40px;
}

.input-container button {
  background-color: #3e7df3;
  color: #fff;
  border: 2px solid  #3e7df3;
  border-radius: 7px;
  padding: 8px 16px;
  margin-right: 40px;
  cursor: pointer;
}

.input-container button:hover {
  background-color: #fff;
  color: #3e7df3;
  border: 2px solid  #3e7df3;
  transition: 1.5s;
  border-radius: 7px;
  padding: 8px 16px;
  cursor: pointer;
}


.dark-mode {
  background-color: rgb(71, 67, 67);
}

.dark-mode .users {
  background-color: #242525;
}


.dark-mode .input-container input,
.dark-mode .input-container button {
  background-color: #555;
}

.selected {
  background-color: #0056b3; 
}

</style>
