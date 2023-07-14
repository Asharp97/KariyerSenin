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
        <div class="sign in" v-if="!user && !admin">
          <button class="primary-btn" @click="this.$emit('openModal')">Giriş</button>
        </div>
        <div class="sign out" v-if="user || admin">
          <!-- <icon class="icon prim" icon="fa-solid fa-user" contextmenu="userMenu"></icon> -->
          <div class="primary-btn" @click="signOut()">Çikiş</div>
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
    }
  },
  methods: {
    signOut() {
      if (this.user)
        this.$store.dispatch('user', null)
      if (this.admin)
        this.$store.dispatch('admin', null)
      console.log('sign out?')
    }
  },
  computed: {
    ...mapGetters(['user', 'admin'])
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
}
</style>
