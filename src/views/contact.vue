<template>
  <div class="gap">
    <h1>
      Bize Ulaşın
    </h1>
    <div class="contact container ">
      <div class="cont-box">
        <a href="">
          <icon class="icon" icon="fas fa-phone"></icon>
          <h5>Telefon Numaramız</h5>
          <div class="separator"></div>
          <div class="info">0850 850 50 50</div>
        </a>
      </div>
      <div class="cont-box">
        <a href="">
          <icon class="icon" icon="fa fa-envelope"></icon>
          <h5>E posta</h5>
          <div class="separator"></div>
          <div class="info">destek@kariyersenin.com</div>
        </a>
      </div>
      <div class="cont-box">
        <a href="">
          <icon class="icon" icon="fas fa-map-marker-alt"></icon>
          <h5>Lokasyon</h5>
          <div class="separator"></div>
          <div class="info">İstanbul/Ümraniye</div>
        </a>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.491645461869!2d29.12256047570446!3d40.99261112038986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8aaaa9d16cb%3A0x9a3b23045c14af26!2sAta%20Copy%20Center!5e0!3m2!1sen!2str!4v1683698205945!5m2!1sen!2str"
      height="300" style="border:0;" allowfullscreen="true" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

iframe {
  width: 100%;
}

h1 {
  text-align: center;

}

.contact {
  display: flex;
  justify-content: space-evenly;
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

    a {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

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
      margin-inline: auto;
      margin-block: 6px;
    }

    .info {
      font-weight: 400;
      font-size: 18px;
    }

  }
}
</style>