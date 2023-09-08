<template>
  <div class="my">

    <h1 class="my">Tüm Paketler</h1>
    <p>Sizin için en uygun fiyat paketini seçin, hemen aradığınız çalışan adayı ile tanışın!</p>
    <div class="packages container">
      <div class="package" v-for="pack in packages" :key="pack.id">
        <h3>{{ pack.name }}</h3>
        <div class="price">
          <h2>{{ pack.price }} ₺ </h2>
          <h4>/ <span> {{ pack.oldPrice }} ₺</span></h4>
        </div>
        <ul>
          <li v-for="adv in pack.advantages">{{ adv.advantage }}</li>
        </ul>
        <div class="primary-btn" @click="purchase()">Hemen Satın Al</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useStore } from '../store'
import setAuthHeader from '../setToken'

export default {
  data() {
    return {
      packages: [
        {
          id: 1,
          name: "Standart",
          price: '349 ',
          oldPrice: '479',
          advantages:
            [
              {
                advantage: "1 Adet ilan yayınlama hakkı",
              },
              {
                advantage: "10 gün ilan yayın süresi",
              },
              {
                advantage: "1 kez ilan güncelleme desteği",
              },
              {
                advantage: "Kelime sınırı yok",
              },
            ],

        },
        {
          id: 1,
          name: "Gold",
          price: '649 ',
          oldPrice: '799',
          advantages:
            [
              {
                advantage: "1 adet ilan yayınlama hakkı",
              },
              {
                advantage: "30 gün ilan yayın süresi",
              },
              {
                advantage: "2 kez güncelleme desteği",
              },
              {
                advantage: "Kelime sınırı yok",
              },
            ],

        },
        {
          id: 1,
          name: "Vip",
          price: '549 ',
          oldPrice: '699',
          advantages:
            [
              {
                advantage: "1 adet ilan yayınlama hakkı",
              },
              {
                advantage: "15 gün ilan yayın süresi",
              },
              {
                advantage: "Sınırsız güncelleme desteği",
              },
              {
                advantage: "Ana sayfada yayınlama hakkı",
              },
              {
                advantage: "Şirket logosu ile yayınlama ",
              },
              {
                advantage: "Kelime sınırı yok ",
              },
            ],

        },
        {
          id: 1,
          name: "Premium",
          price: '799 ',
          oldPrice: '999',
          advantages:
            [
              {
                advantage: "2 adet ilan yayınlama hakkı",
              },
              {
                advantage: "15 gün ilan yayın süresi",
              },
              {
                advantage: "Sınırsız güncelleme desteği",
              },
              {
                advantage: "Ana sayfada yayınlama hakkı",
              },
              {
                advantage: "Şirket logosu ile yayınlama ",
              },
              {
                advantage: "Kelime sınırı yok ",
              },
            ],


        },
      ]
    }
  },
  methods: {
    purchase() {
      if (this.user) {
        console.log('payment api')
      }
      else {
        this.$emit('showModal')
      }
    },
    getUser() {
      axios
        .get('user')
        .then(response => {
          if (response.data.type == 'user')
            this.store.user = response.data
          if (response.data.type == 'admin')
            this.store.admin = response.data
        })
        .catch(error => { console.log("user yaba " + error) })
    }
  },
  emits: ['showModal'],
  created() {
    if (this.store.token) {
      setAuthHeader(this.store.token)
      this.getUser()
    }
  },
  setup() {
    const store = useStore()
    return { store }
  },
}

</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

h1,
p {
  text-align: center;
}

.packages {
  display: flex;
  justify-content: space-evenly;


  .package {
    display: flex;
    flex-direction: column;
    border: $border;
    border-radius: $radius;
    padding: 25px;
    gap: 2rem;
    margin-block: 2rem;

    h3 {
      color: $primary;
    }

    .price {
      display: flex;
      align-items: end;

      h4 {
        span {
          text-decoration: line-through;
        }
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;

      li {
        line-height: 26px;

        &::before {
          content: "\2022";
          color: #021474;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
      }
    }

    .primary-btn {
      font-size: 20px;
      height: 44px;
      padding-block: 0;
      margin-inline: auto;
      display: flex;
      align-items: center;
    }
  }
}
</style>