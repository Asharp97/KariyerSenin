<template>
  <div class="signUp-bg bg" @click="activated = true" :class="activated ? 'active' : ''">
    <div class="signUp section">
      <div class="text" v-show="!activated">Are you new here?</div>
      <Transition name="form">
        <form action="" class="form">

          <div class="input">
            <input type="text" id="name" placeholder="name" v-model="newuser.name" />
          </div>
          <div class="input">
            <input type="text" id="emailLogin" placeholder="email" v-model="newuser.email" />
          </div>
          <div class="input">
            <input :type="hidePassword ? 'password' : 'text'" id="password1" placeholder="paswswrod"
              v-model="newuser.password" />

            <icon :icon="['fas', 'eye']" @click="toggleShow(0)" v-show="!hidePassword" />
            <icon :icon="['fas', 'eye-slash']" @click="toggleShow(0)" v-show="hidePassword" />
          </div>
          <div class="input">
            <input :type="hidePassword1 ? 'password' : 'text'" id="password2" placeholder="password again"
              v-model="newuser.password_confirmation" />
            <icon :icon="['fas', 'eye']" @click="toggleShow(1)" v-show="!hidePassword1" />
            <icon :icon="['fas', 'eye-slash']" @click="toggleShow(1)" v-show="hidePassword1" />
          </div>
        </form>
      </Transition>
      <button class="primary-btn" @click="signUp()">Sign up</button>
    </div>
  </div>
  <div class="signIn-bg bg" @click="activated = false" :class="activated ? '' : 'active'">
    <div class="signIn section">
      <div class="text" v-show="activated">Already a member?</div>
      <Transition name="form">
        <form action="" class="form">

          <div class="input">
            <input type="text" id="emailSignup" placeholder="email" v-model="user.email" />
          </div>
          <div class="input">
            <input :type="hidePassword2 ? 'password' : 'text'" id="password3" placeholder="paswswrod"
              v-model="user.password" />
            <icon :icon="['fas', 'eye']" @click="toggleShow(2)" v-show="!hidePassword2" />
            <icon :icon="['fas', 'eye-slash']" @click="toggleShow(2)" v-show="hidePassword2" />

          </div>

        </form>
      </Transition>
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
      hidePassword: true,
      hidePassword1: true,
      hidePassword2: true,
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
          console.log(response);
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
          console.log(response);
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
        this.hidePassword = !this.hidePassword;
      }
      if (x == 1) {
        this.hidePassword1 = !this.hidePassword1;
      }
      if (x == 2) {
        this.hidePassword2 = !this.hidePassword2;
      }
    }
  },
};


</script>
<style scoped lang="scss">
@import "../assets/transitions.scss"
</style>