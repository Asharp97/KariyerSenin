<template>
  <div class="signUp-bg bg" @click="activated = true" :class="activated ? 'active' : ''">


    <div class="signUp section">
      <div class="text">are you new here?</div>
      <form id="register" @submit.prevent="signUp" action="" class="form">
        <div class="input">
          <input class="primary-input" type="text" placeholder="name" v-model="newuser.name" />
        </div>
        <div class="input">
          <input class="primary-input" type="text" placeholder="email" v-model="newuser.email" />
        </div>
        <div class="input">
          <input class="primary-input" :type="hidePassword ? 'password' : 'text'" id="password1" placeholder="paswswrod"
            v-model="newuser.password" />
          <icon class="icon" :icon="['fas', 'eye']" @click="toggleShow(0)" v-if="!hidePassword" />
          <icon class="icon" :icon="['fas', 'eye-slash']" @click="toggleShow(0)" v-if="hidePassword" />
        </div>
        <!-- <div class="input">
          <input class="primary-input" :type="hidePassword1 ? 'password' : 'text'" id="password2" placeholder="password again"
            v-model="newuser.password_confirmation" name="password_confirmation" required/>
          <icon class="icon" :icon="['fas', 'eye']" @click="toggleShow(1)" v-if="!hidePassword1" />
          <icon class="icon" :icon="['fas', 'eye-slash']" @click="toggleShow(1)" v-if="hidePassword1" />
        </div> -->
      </form>
      <button class="primary-btn" @click="signUp()">Sign up</button>
    </div>

  </div>

  <div class="signIn-bg bg" @click="activated = false" :class="activated ? '' : 'active'">
    <div class="signIn section">
      <div class="text">already a member?</div>
      <form id="login" @submit.prevent="signIn" class="form">
        <div class="input">
          <input class="primary-input" type="text" id="emailSignup" placeholder="email" v-model="userLogin.email" />
        </div>
        <div class="input">
          <input class="primary-input" :type="hidePassword2 ? 'password' : 'text'" id="password3" placeholder="paswswrod"
            v-model="userLogin.password" />
          <icon class="icon" :icon="['fas', 'eye']" @click="toggleShow(2)" v-if="!hidePassword2" />
          <icon class="icon" :icon="['fas', 'eye-slash']" @click="toggleShow(2)" v-if="hidePassword2" />
        </div>
      </form>
      <button class="primary-btn" @click="signIn">Sign in</button>

    </div>
    <Teleport to="#modal">
      <transition name="modal">
        <div class="modal-bg" v-if="this.showModal" @click.self="this.showModal = false">
          <div class="modal" style="flex-direction: column;">
            <h2>Success </h2>
            <p>Successfully registerd</p>
          </div>
        </div>
      </transition>
    </Teleport>

  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'sign',
  props: {
    open: false,
  },
  emits: ['closeModal'],
  data() {
    return {
      newuser: {
        name: "",
        email: "",
        password: "",
      },
      userLogin: {
        email: "",
        password: "",
      },
      hidePassword: true,
      hidePassword1: true,
      hidePassword2: true,
      activated: false,
      showModal: false,

    }
  },
  methods: {
    async signUp() {
      const response = await axios.post("register", this.newuser);
      if (response.status = 201) {
        const res = await axios.post("login", this.newuser);
        console.log("success signed up")
        if (res.status = 201) {
          this.$store.dispatch('user', response.data.user)
          this.$router.push('/prices')
        }
        else {
          console.log("login ERROR!" + error)
        }
      }
      else {
        console.log("register ERROR!" + error)
      }
    },
    async signIn() {
      const response = await axios.post("login", this.userLogin);
      if (response.status == 201) {
        console.log("success signed in")
        // localStorage.setItem("token", response.data.token)
        this.$store.dispatch('user', response.data.user)
        // console.log(response.data.user)
        this.$emit('closeModal')
        this.$router.push('/ads')
      }
      else {
        console.log('error?')
      }
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
    },
  },
  computed: {
    ...mapGetters(['user'])
  },


}


</script>
<style scoped lang="scss">
@import "../assets/variables.scss";

.icon {
  color: rgb(81, 81, 81);
}

.signUp-bg {
  border-top-left-radius: $radius ;
  border-bottom-left-radius: $radius;
}

.signIn-bg {
  border-top-right-radius: $radius ;
  border-bottom-right-radius: $radius;
}

.bg {
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 34%;
  transition: 300ms ease;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  transition: 300ms;

  .input {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    height: 30px;
    align-items: center;

    input {
      height: 100%;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    visibility: hidden;
    height: 0px;
  }

  .text {
    visibility: visible;
    height: inherit;
  }
}

.active {
  width: 66% !important;
  background-color: $secondry;

  .form {
    height: inherit !important;
    visibility: visible !important;
  }

  .text {
    opacity: 0;
    transition: 300ms;
  }
}
</style>