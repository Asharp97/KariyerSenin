<template>
  <div class="container">
    <div class="ads">
      <div class="ad" v-for="ad in ads" :key="ad.id">
        <a href="" class="logo">
          <img :src="ad.img" alt="">
        </a>
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

            
            <!-- <div class="detail">
              <icon icon="fa-solid fa-clock" />
              <p>{{ }}</p>
            </div> -->
            <div class="detail">
              <icon icon="fas fa-map-marker-alt" />

              <p>{{ ad.province }}-{{ ad.district }}</p>
            </div>


          </div>
          <div class="extras">
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
  name: 'ads',
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
          img: 'https://t4.ftcdn.net/jpg/03/59/29/07/360_F_359290749_bv1EgfiihMkEluMhEJIFZoA48y30Tgsu.jpg',
          urgent: true,
          salary: '7000 TL',
          tel: '5418862279',
        },
        {
          id: '2',
          position: 'Tavsan Asistanı',
          company: 'Tavsan Inc',
          province: 'istanbul',
          district: 'Tavsantepe',
          type: 'tam zamanli',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-25q_2CxnLHzmJULus5FmWh0-uugQ4fnk8w&usqp=CAU',
          urgent: false,
          salary: '',
          tel: '5418862279',
        },
        {
          id: '3',
          position: 'Ataşehir Mağaza Yönetici Asistanı',
          company: 'boyner',
          province: 'istanbul',
          district: 'atasehir',
          type: 'tam zamanli',
          img: 'https://play-lh.googleusercontent.com/i_8y7fBNjFds0fYb5VDVybgzBI9TC4-54lbd2Mh2kTnm0eTqnVMj_ws2vbP5SAnXw7o',
          urgent: false,
          salary: '',
          tel: '5418862279',
        },
        {
          id: '4',
          position: 'Ataşehir Mağaza Yönetici Asistanı',
          company: 'boyner',
          province: 'istanbul',
          district: 'atasehir',
          type: 'tam zamanli',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png',
          urgent: true,
          salary: '7000 TL',
          tel: '5418862279',
        },
      ]
    }
  },

}
</script>

<style scoped lang="scss">
@import '../assets/variables.scss';

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.ads {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;

  .ad {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    border: 1px solid $gray;
    width: 620px;
    padding-block: 15px;
    border-radius: $radius;
    padding: 20px;

    .logo {
      width: 20%;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        object-fit: scale-down;
      }
    }

    .adtext {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;



      .details {
        color: $gray;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;

        .detail {
          display: flex;
          gap: 6px;
        }

      }

      .extras {
        display: flex;
        gap: 12px;

        .time {
          background-color: #158BCE;
          color: white;
        }

        .urgent {
          background-color: #021474;
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
</style>