<template>
  <div>
    <!-- <div class="spinner">
      <icon icon="svg-spinners:180-ring" />
      <Icon icon="material-symbols:360" />
    </div> -->
    <div class="container">
      <div class="searchWrapper my">
        <div v-if="user">{{ this.greeting }} {{ user.name }}</div>
        <div style="margin-left: auto;"> {{ ads.length }} Sonuç Bulundu </div>
      </div>
      <div class="filter">
        <div class="couple">
          <div class="search">
            <input @keyup.enter="filter()" id="searchContent" type="text" class="primary-input w-full searchbar"
              v-model="search" placeholder="İlan ara...">
            <icon icon="fas fa-search " class="icon" />
          </div>
          <input @keyup.enter="filter()" list="states" v-model="this.state" placeholder="İl" class="primary-input"
            @change="selectState()" />
          <input @keyup.enter="filter()" list="cities" v-model="this.city" placeholder="İlçe" class="primary-input" />
          <!-- <datalist id="states">
            <option v-for="state in states">{{ state.name }}</option>
          </datalist> -->
          <!-- <datalist id="cities">
            <option v-for="city in cities">{{ city }}</option>
          </datalist> -->
          <select @keyup.enter="filter()" v-model="this.time" placeholder="Seçiniz" class="primary-input w-full ">
            <option value="" disabled selected style="color:gray">Zamanı Seçiniz</option>
            <option>Tam Zamanlı</option>
            <option>Yarı Zamanlı</option>
            <option>Staj</option>
          </select>
        </div>
        <div class="couple">
          <button class="primary-btn secondry redbg" @click="clearFilter()">
            <icon icon="fa-solid fa-circle-xmark" />
          </button>
          <button class="primary-btn secondry" @click="filter()">İşimi bul</button>
        </div>
      </div>
      <div class="adsContainer">

        <div class="ads">
          <div v-for="ad in ads " :key="ad.id">

            <router-link :to="`/ad/${ad.id}`">

              <div class="ad">
                <a href="" class="logo">
                  <img class="actualImg" v-if="ad.img" :src="ad.img" alt="">
                  <img class="defaultImg" v-else
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Eo_circle_blue_letter-k.svg">
                </a>
                <div class="adtext">
                  <p class="ad-company">{{ ad.company }}</p>
                  <h4>{{ ad.position }}</h4>
                  <div class="row">
                    <icon icon="fas fa-map-marker-alt" />
                    <p>{{ ad.state }}-{{ ad.city }}</p>
                  </div>

                  <div class="extras">

                    <div class="time extra">
                      {{ ad.time }}
                    </div>
                  </div>
                </div>
              </div>

            </router-link>

          </div>
        </div>
        <!-- <div class="pagination">
            <v-pagination v-model="this.page" :pages="this.pageCount" :range-size="1" active-color="#DCEDFF"
              @update:modelValue="getAds" />
          </div> -->
      </div>

      <!-- v-show="this.loading" -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import search from "../components/search.vue";

// import { Icon } from '@iconify/vue'

import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";


// import { State, City } from 'country-state-city';


import { mapGetters } from 'vuex'
export default {
  components: {
    search,
    VPagination
  },
  data() {
    return {
      loading: false,
      ads: [],
      //paginate
      page: 1,
      pageCount: null,
      //filters
      search: '',
      salary_min: '',
      salary_max: '',
      state: '',
      city: '',
      time: '',
      filterOpen: true,

      //cities states
    };
  },
  methods: {
    getAds() {
      this.loading = true;
      axios.get(`ads?page=` + this.page)
        .then(response => {
          this.pageCount = response.data.page_count
          this.ads = response.data
        })
        .catch(error => { console.log(error); })
      this.loading = false;
    },
    filter() {
      this.loading = true;
      axios.get(
        `ad/search/{search}?` +
        `${this.state ? `&state=${this.state}` : ""}` +
        `${this.city ? `&city=${this.city}` : ""}` +
        `${this.salary_min ? `&salary_min=${this.salary_min}` : ""}` +
        `${this.salary_max ? `&salary_max=${this.salary_max}` : ""}` +
        `${this.time ? `&time=${this.time}` : ""}` +
        `${this.search ? `&search=${this.search}` : ""}`
      )
        .then(response => { this.ads = response.data })
        .catch(error => { console.log(error); })
      this.loading = false;
    },
    clearFilter() {
      this.salary_min = '';
      this.salary_max = '';
      this.state = '';
      this.city = '';
      this.time = '';
      this.search = '';
      this.getAds();
    },
    greeting() {
      if (new Date().getHours() < 12)
        this.greeting = "Günaydın"
      if (new Date().getHours() >= 12)
        this.greeting = "İyi günler"
      if (new Date().getHours() >= 18)
        this.greeting = "İyi akşamlar"
    }
  },
  created() {
    this.greeting();
    this.getAds();
  },
  computed: {
    ...mapGetters(['user', 'admin']),
  },
}


</script>

<style scoped lang="scss">
@import '../assets/variables.scss';
@import "../assets/filter.scss";

.spinner {
  display: flex;
  // justify-content: center;
  // align-items: center;
  background-color: rgba(0, 0, 0, 0.139);
  height: 100vh;
  width: 100%;
  // position: fixed;
}

.adsContainer {
  display: flex;
  flex-direction: column;

  .ads {
    .ad {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 290px;
      height: 290px;
      text-align: center;

      .logo {}

      .adtext {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .row {
          font-size: 13px;
          display: flex;
          gap: 12px;
          color: $gray;
          margin-inline: auto;
        }

        h4 {
          font-size: 17px;
        }

        .ad-company {
          font-size: 20px;

        }

        .extras {
          position: absolute;
          top: 10px;
          left: 10px;
        }
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
  }
}

.search {
  position: relative;

  .icon {
    position: absolute;
    right: 5px;
    top: 7px;
    color: $gray;
    transition: 300ms;

    &:hover {
      color: black;
    }
  }

}

.searchWrapper {
  // height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.redbg {
  background-color: #C63737;
}
</style>