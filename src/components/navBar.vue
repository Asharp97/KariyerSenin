<template>
  <div class="header">
    <div class="header-content container">

      <router-link to="/" class=" logo">
        <img src="../assets/logo.png">
      </router-link>

      <div class="nav">
        <router-link to="/">Ana Sayfa</router-link>
        <router-link to="/ads"> İlanlar</router-link>
        <router-link to="/prices"> Fiyatlandırma</router-link>
        <router-link to="/about"> Hakkımızda</router-link>
        <router-link to="/contact"> İletişim</router-link>
      </div>

      <a class="phone " href="">
        <icon icon="fa-solid fa-phone" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
}
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

    .phone {
      color: $primary;
      display: flex;
      align-items: center;
      padding-inline: 20px;
    }

  }
}
</style>
