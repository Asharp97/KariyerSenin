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
          <button class="primary-btn" @click="this.$emit('openModal')">Sign-in</button>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import { ref } from 'vue'
import sign from './sign.vue'
export default {
  name: "navBar",
  components: {
    sign
  },
  data() {
    return {
      isOpen: false,
    }
  }

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
