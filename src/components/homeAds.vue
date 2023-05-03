<template>
  <div class="container">

    <h3>Son eklenen reklamlar</h3>

    <div class="ads">
      <div class="ad" v-for="ad in ads" :key="ad.id">
        <img :src="ad.img" alt="">
        <div class="adtext">
          <h4>{{ ad.position }}</h4>
          <div class="details">
            <div class="detail">
              <icon icon="fa-solid fa-suitcase" />
              <p>{{ ad.company }}</p>
            </div>
            <div class="detail">
              <icon icon="fa-solid fa-money-bill" />
              <p>{{ ad.salary }}{{ ad.salary ? '' : 'Belirtilmedi' }}</p>
            </div>
            <div class="detail">
              <icon icon="fa-solid fa-clock" />
              <p>{{ }}</p>
            </div>
            <div class="detail">
              <icon icon="fa-solid fa-location" />
              <p>{{ ad.province }}-{{ ad.district }}</p>
            </div>

            <div class="urgent extra" v-if="ad.urgent">
              Acil
            </div>

            <div class="time extra">
              {{ ad.type }}
            </div>

          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      ads: [
        {
          id: '1',
          position: 'Ataşehir Mağaza Yönetici Asistanı',
          company: 'boyner',
          province: 'istanbul',
          district: 'atasehir',
          type: 'tam zamanli',
          img: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Boyner_Logo.jpg',
          urgent: true,
          salary: '7000 TL',
          tel: '5418862279',

        },
        {
          id: '2',
          position: 'Ataşehir Mağaza Yönetici Asistanı',
          company: 'boyner',
          province: 'istanbul',
          district: 'atasehir',
          type: 'tam zamanli',
          img: 'https://ais.badische-zeitung.de/piece/0b/03/0e/b3/184749747-h-720.jpg',
          urgent: false,
          salary: '',
          tel: '5418862279',

        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/variables.scss';

h3 {
  text-align: center;
  margin-block: 55px;
}

.ads {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .ad {
    display: flex;
    gap: 20px;
    border: 1px solid $gray;
    width: 46%;
    padding-block: 15px;
    border-radius: $radius;

    img {
      width: 209px;
    }

    .adtext {

      h4 {
        margin-inline: auto;
      }

      .details {
        color: $gray;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;

        .detail {
          display: flex;
          gap: 6px;

        }

        .time {
          background-color: #158BCE;
          color: white;
        }

        .urgent {
          background-color: #021474;
          color: white;
        }

        .extra {
          padding: 10px;
          border-radius: $radius;
        }
      }
    }

  }
}
</style>
