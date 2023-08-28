<template>
  <div class="footer-bg">
    <div class="footer container">

      <div class="lists">
        <div class="list">
          <h4>İş arayanlar için</h4>
          <a href="">Aktif iş ilanları</a>
          <a href="">İş ilanı olan şehirler</a>
        </div>
        <div class="list">
          <h4>İş verenler için</h4>
          <a href="">İlanımı nasıl yayınlarım</a>
          <a href="">Fiyatlandırma</a>
        </div>
        <div class="list">
          <h4>Hakkımızda</h4>
          <a href="">SSS</a>
          <a href="">Hizmetler</a>
          <a href="">Üyelik Sözleşmesi</a>
          <a href="">İletişim</a>
        </div>
      </div>

      <img src="../assets/logo.png" alt="KariyerSenin Logo">

      <p>© 2023 kariyersenin.com- Tüm hakları saklıdır. </p>

      <div class="socials">
        <icon icon="fab fa-facebook-f" />
        <icon icon="fab fa-twitter" />
        <icon icon="fab fa-instagram" />
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "footery",

}
</script>
<style scoped lang="scss">
@import '../assets/variables.scss';

.footer-bg {

  border-top:$border;

  .footer {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;


    .lists {
      display: flex;
      justify-content: space-evenly;
      width: 100%;

      .list {
        h4 {
          font-size: 20px;
        }

        display: flex;
        flex-direction: column;
        gap: 12px;

        a {
          color: $gray;
          font-size: 18px;
        }
      }


    }

    .socials {
      display: flex;
      gap: 25px;

      // width: 200px;
    }
  }

}
</style>