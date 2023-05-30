<template>
  <div class="container">
    <div class="searchWrapper">
      <input type="text" class="input" v-model="search" placeholder="search anything">
    </div>
    <div class="ads">
      <div v-for="ad in  filteredAds " :key="ad.id">

        <router-link :to="`/ad/${ad.id}`">

          <div class="ad">
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
                  <p>{{ ad.state }}-{{ ad.city }}</p>
                </div>
              </div>
              <div class="extras">
                <div class="urgent extra" v-if="ad.urgent">
                  Acil
                </div>
                <div class="time extra">
                  {{ ad.time }}
                </div>
              </div>
            </div>
          </div>

        </router-link>

      </div>
    </div>
    <singleAd ads=""></singleAd>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      ads: "",
      search: '',
    };
  },
  methods: {
    getList() {
      axios.get('http://127.0.0.1:8000/api/ads')
        .then(
          response => {
            this.ads = response.data
          })
        .catch(error => { console.log(error); })
    },

  },
  created() {
    this.getList();
    console.log()
  },
  computed: {
    filteredAds() {
      return this.ads.filter(
        ad => ad.position.toLowerCase().includes(this.search.toLowerCase())
        // , ad => ad.position.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
}


</script>

<style scoped lang="scss">
@import '../assets/variables.scss';

.searchWrapper {
  width: 300px;
  height: 50px;
  margin-left: auto;
  margin-top: 40px;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}
</style>