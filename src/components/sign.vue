<template>
  <div class="signUp-bg bg" @click="activated = true" :class="activated ? 'active' : ''">


    <div class="signUp section">
      <div class="text">Daha önce kayıt olmadınız mı?</div>
      <form id="register" @submit.prevent="signUp" action="" class="form">
        <div class="input">
          <input class="primary-input" type="text" placeholder="İsim" v-model="newuser.name" @keyup.enter="signUp()" />
        </div>
        <div class="input ">
          <input class="primary-input" type="text" placeholder='Email' v-model="newuser.email" @keyup.enter="signUp()" />
        </div>
        <div class="error" v-if="this.emailError">
          {{ emailError }}
        </div>
        <div class="input">
          <input class="primary-input" :type="hidePassword ? 'password' : 'text'" id="password1" placeholder="Parola"
            v-model="newuser.password" @keyup.enter="signUp()" />
          <icon class="icon" :icon="['fas', 'eye']" @click="toggleShow(0)" v-if="!hidePassword" />
          <icon class="icon" :icon="['fas', 'eye-slash']" @click="toggleShow(0)" v-if="hidePassword" />
        </div>
        <div class="error" v-if="this.passwordError">
          {{ passwordError }}
        </div>
      </form>
      <button class="primary-btn" @click="signUp()">Kayıt Ol</button>
    </div>

  </div>

  <div class="signIn-bg bg" @click="activated = false" :class="activated ? '' : 'active'">
    <div class="signIn section">
      <div class="text">Zaten bir hesabınız var mı?</div>
      <form id="login" @submit.prevent="signIn" class="form">
        <div class="input">
          <input class="primary-input" type="text" id="emailSignup" placeholder="Email" v-model="userLogin.email"
            @keyup.enter="signIn()" />
        </div>
        <div class="error" v-if="this.emailError">
          {{ emailError }}
        </div>
        <div class="input">
          <input class="primary-input" :type="hidePassword2 ? 'password' : 'text'" id="password3" placeholder="Parola"
            v-model="userLogin.password" @keyup.enter="signIn()" />
          <icon class="icon" :icon="['fas', 'eye']" @click="toggleShow(2)" v-if="!hidePassword2" />
          <icon class="icon" :icon="['fas', 'eye-slash']" @click="toggleShow(2)" v-if="hidePassword2" />
        </div>
        <div class="error" v-if="this.passwordError">
          {{ passwordError }}
        </div>
      </form>
      <button class="primary-btn" @click="signIn()">Giriş Yap</button>

    </div>
    <Teleport to="#modal">
      <transition name="modal">
        <div class="modal-bg" v-if="this.showModal" @click.self="this.showModal = false">
          <div class="modal" style="flex-direction: column;">
            <h2>Success</h2>
            <p>Successfully registered</p>
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
      userError: false,
      emailError: "",
      passwordError: "",
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
    signUp() {
      //email
      if (!this.newuser.email)
        this.emailError = 'Email gereklidir';
      else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.newuser.email))
        this.emailError = 'Geçersiz e-posta';
      else
        this.emailError = ''

      //password
      if (!this.newuser.password)
        this.passwordError = 'Şifre gereklidir';
      else if (this.newuser.password.length < 8)
        this.passwordError = 'Şifre 8 karakterden uzun olmalıdır';
      else
        this.passwordError = ''

      //axios
      axios.post("register", this.newuser)
        .then(response => {
          if (response.status = 201) {
            axios.post("login", this.newuser)
              .then(res => {
                if (res.status = 201) {
                  this.$store.dispatch('user', response.data.user)
                  this.$router.push('/ads')
                  this.$emit('closeModal')
                }
              }).catch(e => console.log("login ERROR!" + e))
          }
        }).catch(error => this.userError = true)

    },
    signIn() {
      //email
      if (!this.userLogin.email)
        this.emailError = 'Email gereklidir';
      else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.userLogin.email))
        this.emailError = 'Geçersiz e-posta';
      else
        this.emailError = ''
      //password
      if (!this.userLogin.password)
        this.passwordError = 'Şifre gereklidir'
      else if (this.userLogin.password.length < 8)
        this.passwordError = 'Şifre 8 karakterden uzun olmalıdır'
      else if (this.userLogin.password && this.userLogin.email && this.userError)
        this.passwordError = 'Şifre veya e-posta yanlış';
      else
        this.passwordError = ''
      //axios
      axios.post("login", this.userLogin)
        .then(response => {
          if (response.status == 201) {
            if (response.data.user.type == 'user') {
              this.$store.dispatch('user', response.data.user)
              this.$router.push('/ads')
            }
            else if (response.data.user.type == 'admin') {
              this.$store.dispatch('admin', response.data.user)
              this.$router.push('/admin')
            }
            this.$emit('closeModal')
          }
        }).catch(error => this.userError = true)
    },
    toggleShow(x) {
      if (x == 0)
        this.hidePassword = !this.hidePassword;
      if (x == 1)
        this.hidePassword1 = !this.hidePassword1;
      if (x == 2)
        this.hidePassword2 = !this.hidePassword2;
    },
  },
  computed: {
    ...mapGetters(['user', 'admin']),
  },


}


</script>
<style scoped lang="scss">
@import "../assets/variables.scss";


.error {
  color: rgb(84, 84, 84);
}

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
    visibility: hidden;
    gap: 30px;
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
    transition: 300ms;
    height: inherit !important;
    visibility: visible !important;
    gap: 12px;
  }

  .text {
    opacity: 0;
    transition: 300ms;
  }
}
</style>