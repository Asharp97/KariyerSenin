<template>
  <div class="singlead">

    <div class="container">

      <div class="ad my">
        <a href="" class="logo">
          <img :src="ad.img" alt="">
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
              <p>{{ }}</p>
            </div> -->
            <div class="detail">
              <icon icon="fas fa-map-marker-alt" />
              <p>{{ ad.state }}-{{ ad.city }}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="adDetails container my">
    <h2>İlan Detayları</h2>
    <p>{{ ad.description }}</p>
    <div class="contact">
      <icon class="icon" icon="fas fa-phone"></icon>
      <p>{{ ad.telefon }}</p>
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
      justify-content: space-evenly;

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
}

.contact {
  display: flex;
  gap: 12px;

  .icon {
    color: $primary;
  }
}
</style>