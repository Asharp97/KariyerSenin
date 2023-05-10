<template>
  <div class="gap">
    <h1>
      Bize Ulaşın
    </h1>
    <div class="contact container ">
      <div class="cont-box">
        <icon class="icon" icon="fas fa-phone"></icon>
        <h5>Telefon Numaramız</h5>
        <div class="separator"></div>
        <div class="info">0850 850 50 50</div>
      </div>
      <div class="cont-box">
        <icon class="icon" icon="fa fa-envelope"></icon>
        <h5>E posta</h5>
        <div class="separator"></div>
        <div class="info">destek@kariyersenin.com</div>
      </div>
      <div class="cont-box">
        <icon class="icon" icon="fas fa-map-marker-alt"></icon>
        <h5>Lokasyon</h5>
        <div class="separator"></div>
        <div class="info">İstanbul/Ümraniye</div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

h1 {
  text-align: center;

}

.contact {
  display: flex;
  justify-content: space-between;
  text-align: center;

  .cont-box {
    background-color: $primary;
    border-radius: $radius;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 330px;
    height: 277px;
    justify-content: center;
    gap: 12px;
    transition: 300ms;

    &:hover {
      background-color: $primary-hover ;
    }

    &:active {
      opacity: 0.8;
    }

    .icon {
      font-size: 50px;
    }

    h5 {
      font-size: 20px;
      font-weight: 600;
    }

    .separator {
      font-size: 25px;
      border-bottom: 1px #ffffff71 solid;
      width: 100px;
    }

    .info {
      font-weight: 400;
      font-size: 18px;
    }

  }
}
</style>