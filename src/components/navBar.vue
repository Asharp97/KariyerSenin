<template>
  <div class="header">
    <div class="header-content container">
      <router-link to="/" class="logo">
        <img src="../assets/logo.png" />
      </router-link>

      <div class="nav">
        <router-link to="/">Ana Sayfa</router-link>
        <router-link to="/ads"> İlanlar</router-link>
        <router-link to="/prices"> Fiyatlandırma</router-link>
        <router-link to="/about"> Hakkımızda</router-link>
        <router-link to="/contact"> İletişim</router-link>
      </div>

      <div class="right">
        <a class="phone" href="">
          <icon icon="fa-solid fa-phone" />
        </a>
        <a class="sign-in">
          <!-- href="javascript:void(0)" -->
          <!-- <icon icon="" /> -->
          <button class="primary-btn" @click="openPopup()">Sign-in</button>
        </a>
        <div class="popup" v-if="popup">
          <div class="innerpopup">
            <div class="close" @click="closePopup()">xx</div>
            <form action="" class="form">
              <div class="input">
                <label for="name">name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  v-model="user.name"
                />
              </div>
              <div class="input">
                <label for="email">email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="email"
                  v-model="user.email"
                />
              </div>
              <div class="input">
                <label for="paswswrod">paswswrod</label>
                <input
                  type="text"
                  id="paswswrod"
                  placeholder="paswswrod"
                  v-model="user.password"
                />
              </div>
              <div class="input">
                <label for="repassword">repassword</label>
                <input
                  type="text"
                  id="repassword"
                  placeholder="repassword"
                  v-model="user.password"
                />
              </div>
            </form>
            <button class="primary-btn" @click="signUp()">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "navBar",
  data() {
    return {
      popup: false,
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
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

<style scoped lang="scss">
@import "../assets/variables.scss";

.header {
  border-bottom: $border;

  .header-content {
    display: flex;
    justify-content: space-between;
    padding-block: 10px;

    a {
      text-decoration: none;
      color: inherit;
    }

    .nav {
      display: flex;
      align-items: center;

      // gap: 24px;
      a {
        font-size: 20px;
        border-bottom: 1px transparent solid;
        padding-block: 20px;
        padding-inline: 12px;
        transition: 300ms;
        &:hover {
          // border-bottom: 1px black solid;
          opacity: 0.7;
          // color: $primary-hover;
        }
      }
    }

    .right {
      display: flex;
      .phone {
        color: $primary;
        display: flex;
        align-items: center;
        padding-inline: 30px;
      }
      .sign-in {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
