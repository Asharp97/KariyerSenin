<template>
  <div class="singlead">

    <div class="container">

      <div class="ad my">
        <a href="" class="logo">
          <img class="actualImg" v-if="ad.img" :src="ad.img" alt="">
          <img class="defaultImg" v-else
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Eo_circle_blue_letter-k.svg">
        </a>
        <div class="adtext">
          <div class="title">
            <h2>{{ ad.position }}</h2>
            <div class="extras">

              <div class="time extra">
                {{ ad.time }}
              </div>
            </div>
          </div>
          <div class="details">
            <div class="detail">
              <icon icon="fa-solid fa-suitcase" />
              <p>{{ ad.company }}</p>
            </div>
            <div class="detail">
              <icon icon="fa-solid fa-money-bill" />
              <p>{{ ad.salary }}{{ ad.salary ? '' : 'Belirtilmedi' }}</p>
            </div>
            <!-- <div class="detail">
              <icon icon="fa-solid fa-clock" />
              <p>{{ ad.created_at }}</p>
            </div> -->
            <div class="detail">
              <icon icon="fas fa-map-marker-alt" />
              <p>{{ ad.state }}-{{ ad.city }}</p>
            </div>

          </div>
          <div class="calls">
            <a :href="`tel:+90${ad.telefon}`">
              <div class="call phone primary-btn">
                Hemen Ara
              </div>
            </a>
            <a target=”_blank” :href="`https://wa.me/${ad.telefon}`">

              <div class="call whats">
                <icon icon="fab fa-whatsapp" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="adDetails container my">
    <h2>İlan Detayları</h2>
    <p>{{ ad.description }}</p>
    <a :href="`tel:+90${ad.telefon}`">
      <div class="contact">
        <icon class="icon" icon="fas fa-phone"></icon>
        <p>{{ ad.telefon }}</p>
      </div>
    </a>
    <div class="socialMedia">
      <icon class="icon" icon="fab fa-facebook-f" />
      <icon class="icon" icon="fab fa-twitter" />
      <icon class="icon" icon="fab fa-instagram" />
      <icon class="icon" icon="fab fa-linkedin" />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      ad: {},
    }
  },
  created() {
    this.id = this.$route.params.id;
    axios.get(`ad/${this.id}.json`)
      .then(response => {
        this.ad = response.data;
      })
  }
}


</script>
<style scoped lang="scss">
@import "../assets/variables.scss";

.singlead {
  width: 100%;
  border-bottom: $border;

  .ad {
    display: flex;
    gap: 20px;

    .logo {
      width: 350px;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
      }
    }

    .adtext {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 27px;

      .title {
        display: flex;
        gap: 12px;
      }

      .details {
        color: $gray;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        // align-items: center;
        padding-block: 12px;

        .detail {
          display: flex;
          gap: 6px;
        }
      }

      .calls {
        display: flex;
        gap: 12px;

        .phone {
          font-size: 20px !important;
          font-weight: 500;


        }

        .whats {
          height: 100%;
          align-items: center;
          display: flex;
          justify-content: center;
          border-radius: 4px;
          border: $border;
          font-size: 30px;
          padding-inline: 15px;
        }
      }

      .extras {
        display: flex;
        gap: 12px;

        .time {
          background-color: #158bce;
          color: white;
        }

        .extra {
          padding-inline: 10px;
          padding-block: 5px;
          border-radius: $radius;
        }
      }
    }
  }
}

.adDetails {
  gap: 12px;
  display: flex;
  flex-direction: column;

  .socialMedia {
    gap: 12px;
    display: flex;

    .icon {
      // border: 1px solid $gray;
      font-size: 40px;

    }
  }
}

.contact {
  display: flex;
  gap: 12px;

  .icon {
    color: $primary;
  }
}
</style>