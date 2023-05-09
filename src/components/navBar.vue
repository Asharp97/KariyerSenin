<template>
  <div class="header">
    <div class="header-content container">

      <a href="" class=" logo">
        <img src="../assets/logo.png">
      </a>

      <div class="nav">
        <a href="">Ana Sayfa</a>
        <a href=""> İlanlar</a>
        <a href=""> Fiyatlandırma</a>
        <a href=""> Hakkımızda</a>
        <a href=""> İletişim</a>
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
    padding: 10px;

    a {
      text-decoration: none;
      color: inherit;
    }

    .nav {
      display: flex;
      align-items: center;

      a {
        font-size: 20px;

        padding-inline: 12px
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
