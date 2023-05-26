<template>
  <div class="signUp-bg bg" @click="activated = true" :class="activated ? 'active' : ''">

    <div class="signUp section">

      <form action="" class="form">
        <div class="input">
          <input type="text" id="name" placeholder="name" v-model="newuser.name" />
          {{ newuser.name }}
        </div>
        <div class="input">
          <input type="text" id="emailLogin" placeholder="email" v-model="newuser.email" />
          {{ newuser.email }}
        </div>
        <div class="input">
          <input :type="showPassword ? 'password' : 'text'" id="password1" placeholder="paswswrod"
            v-model="newuser.password" />

          <icon :icon="['fas', 'eye']" @click="toggleShow(0)" v-if="showPassword" />
          <icon :icon="['fas', 'eye-slash']" @click="toggleShow(0)" v-if="showPassword == false" />
        </div>
        <div class="input">
          <input :type="showPassword1 ? 'password' : 'text'" id="password2" placeholder="password again"
            v-model="newuser.password_confirmation" />
          <icon :icon="['fas', 'eye']" @click="toggleShow(1)" v-if="showPassword1" />
          <icon :icon="['fas', 'eye-slash']" @click="toggleShow(1)" v-if="showPassword1 == false" />
        </div>
      </form>
      <div class="text">are you new here?</div>
      <button class="primary-btn" @click="signUp()">Sign up</button>
    </div>
  </div>
  <div class="bg" @click="activated = false" :class="activated ? '' : 'active'">
    
    <div class="signIn section">
      
      <form action="" class="form">

        <div class="input">
          <input type="text" id="emailSignup" placeholder="email" v-model="user.email" />
        </div>
        <div class="input">
          <input :type="showPassword2 ? 'password' : 'text'" id="password3" placeholder="paswswrod"
            v-model="user.password" />
          <icon :icon="['fas', 'eye']" @click="toggleShow(2)" v-if="showPassword2" />
          <icon :icon="['fas', 'eye-slash']" @click="toggleShow(2)" v-if="showPassword2 == false" />

        </div>

      </form>
      <div class="text">already a member?</div>
      <button class="primary-btn" @click="signIn()">Sign in</button>
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
      newuser: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      user: {
        email: "",
        password: "",
      },
      showPassword: false,
      showPassword1: false,
      showPassword2: false,
      activated: false
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
      axios.post("http://127.0.0.1:8000/api/register", { user: this.newuser })
        .then((response) => {
          console.log(response)
          if (response.status == 201) {
            console.log("success signed up")
            return false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signIn() {
      axios.post("http://127.0.0.1:8000/api/login", { user: this.user })
        .then((response) => {
          console.log(response)
          if (response.status == 201) {
            console.log("success signed in")
            return false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toggleShow(x) {
      if (x == 0) {
        this.showPassword = !this.showPassword;
      }
      if (x == 1) {
        this.showPassword1 = !this.showPassword1;
      }
      if (x == 2) {
        this.showPassword2 = !this.showPassword2;
      }
    }
  },
};


</script>
<style scoped lang="scss"></style>