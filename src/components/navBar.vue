<template>
  <div class="header">
    <div class="header-content container">
      <router-link to="/" class="logo">
        <img src="../assets/logo.png" alt="kariyerSenin Logo" />
      </router-link>

      <div class="nav">
        <router-link to="/">Ana Sayfa</router-link>
        <router-link to="/ads"> İlanlar</router-link>
        <router-link to="/prices"> Fiyatlandırma</router-link>
        <router-link to="/about"> Hakkımızda</router-link>
        <router-link to="/contact"> İletişim</router-link>
      </div>

      <div class="right">
        <div class="sign in" v-if="!user && !admin">
          <button class="primary-btn" @click="this.$emit('openModal')">Giriş</button>
        </div>
        <div class="sign out" v-if="user || admin">
          <!-- <icon class="icon prim" icon="fa-solid fa-user" contextmenu="userMenu"></icon> -->
          <div class="primary-btn" @click="signOut()">Çikiş</div>
        </div>
        <div class="burgerMenu" @click="this.sideMenu = !this.sideMenu">
          <icon :class="!this.sideMenu ? 'on' : 'off'" icon="fa-solid fa-bars" class="icon" />
          <icon style="font-size: 20px;" :class="this.sideMenu ? 'on' : 'off'" icon="fa-solid fa-xmark" class="icon" />
        </div>
      </div>
    </div>

    <div class="sideWrapper" :class="this.sideMenu ? '' : 'closeSideWrapper'" @click.self="this.sideMenu = false">
      <div :class="this.sideMenu ? 'openSideMenu' : 'closeSideMenu'" class="sideMenu">
        <div class="nav" @click="this.sideMenu = false">
          <router-link to="/">
            <div class="navLink">

              Ana Sayfa
            </div>
          </router-link>
          <router-link to="/ads"> İlanlar</router-link>
          <router-link to="/prices"> Fiyatlandırma</router-link>
          <router-link to="/about"> Hakkımızda</router-link>
          <router-link to="/contact"> İletişim</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import sign from './sign.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: "navBar",
  components: {
    sign
  },
  emits: ['openModal'],
  data() {
    return {
      isOpen: false,
      sideMenu: false,
    }
  },
  methods: {
    signOut() {
      if (this.user)
        this.$store.dispatch('user', null)
      if (this.admin)
        this.$store.dispatch('admin', null)
      this.$store.dispatch('token', null)
      console.log('sign out?')
    }
  },
  computed: {
    ...mapGetters(['user', 'admin', 'token'])
  },


};
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
@import "../assets/media.scss";

.header {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  border-bottom: $border;
  z-index: 100;
  transition: 300ms;

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

      .burgerMenu {
        display: none;

        .icon {
          transition: 300ms;
          position: absolute;
        }

        .on {
          opacity: 1;
          transform: rotate(180deg);
        }

        .off {
          opacity: 0;
          transform: rotate(0deg);
        }
      }

      .phone {
        color: $primary;
        display: flex;
        align-items: center;
        padding-inline: 30px;
      }

      .sign {
        display: flex;
        align-items: center;
      }

      .out {
        position: relative;

        .userMenu {
          position: absolute;
          top: 0;

        }
      }
    }
  }

  .sideWrapper {
    display: none;

    .navLink {
      width: 131px;
    }
  }
}
</style>
