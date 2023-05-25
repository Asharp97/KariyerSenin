<template>
  <div class="popup" v-show="open">
    <div class="innerpopup">
      <div class="close" @click="$emit('close')">xx</div>
      <form action="" class="form">
        <div class="input">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="name" v-model="user.name" />
        </div>
        <div class="input">
          <label for="email">E-mail</label>
          <input type="text" id="email" placeholder="email" v-model="user.email" />
        </div>
        <div class="input">
          <label for="paswswrod">Password</label>
          <input type="text" id="paswswrod" placeholder="paswswrod" v-model="user.password" />
        </div>
        <div class="input">
          <label for="repassword">Passowrd</label>
          <input type="text" id="repassword" placeholder="repassword" v-model="user.password" />
        </div>
      </form>
      <button class="primary-btn" @click="signUp()">Sign in</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'sign',
  props: {
    open: false,
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    }
  },
  methods: {
    openPopup() {
      this.popup = true;
      console.log(popup + "popup");
    },
    closePopup() {
      this.popup = false;
      console.log(popup + "popup");
    },
    signUp() {
      axios
        .post("http://127.0.0.1:8000/api/register", { user: this.user })
        .then((response) => {
          if (response.status == 201) {
            return false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};


</script>