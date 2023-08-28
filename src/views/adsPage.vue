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
        <div class="wing">
          <div class="couple">
            <div class="search">
              <input @keyup.enter="filter()" id="searchContent" type="text" class="primary-input w-full searchbar"
                v-model="search" placeholder="İlan ara...">
              <icon icon="fas fa-search " class="icon" />
            </div>
            <!-- <input list="states" @keyup.enter="filter()" class="primary-input" @change="getCities()" /> -->
            <select v-model="this.selectedState" class="primary-input" @change="getCities()">
              <option disabled selected hidden value="">Il</option>
              <option v-for="state in stateList" :key="state.id" :value="state">{{ state.name }}</option>
            </select>
          </div>

          <div class="couple">
            <!-- <input @keyup.enter="filter()" list="cities" v-model="this.city" placeholder="İlçe" class="primary-input" /> -->
            <Icon icon='svg-spinners:180-ring' />
            <select v-model="this.selectedCity" class="primary-input">
              <option disabled selected hidden value="">İlçe</option>
              <option v-if="this.selectedState" v-for="city in cityList" :key="city.id">{{ city.name }}</option>
              <option v-else disabled>önce il seçmelisin
              </option>
            </select>
            <select @keyup.enter="filter()" v-model="this.time" placeholder="Seçiniz" class="primary-input w-full ">
              <option value="" disabled selected hidden style="color:gray">Zamanı Seçiniz</option>
              <option>Tam Zamanlı</option>
              <option>Yarı Zamanlı</option>
              <option>Staj</option>

            </select>
          </div>
        </div>
        <div class="wing">
          <div class="couple">
            <button class="primary-btn secondry redbg" @click="clearFilter()">
              <icon icon="fa-solid fa-circle-xmark" />
            </button>
            <button class="primary-btn secondry" @click="filter()">İşimi bul</button>
          </div>
        </div>
      </div>
      <div class="adsContainer">

        <div class="ads">
          <div v-for="ad in ads " :key="ad.id">

            <router-link :to="`/ad/${ad.id}`">

              <div class="ad">
                <a href="" class="logo">
                  <img class="actualImg" v-if="ad.img" :src="ad.img" alt="Company Logo">
                  <img class="defaultImg" v-else alt='default KariyerSenin Logo'
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

import { mapGetters } from 'vuex'
import { Icon } from '@iconify/vue'

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
      cscBase: 'https://api.countrystatecity.in/v1/countries/',
      key: {
        headers: { 'X-CSCAPI-KEY': 'Zmt0UVBvWElEVnQzYUp4OXBjRk1HRkY0SFd5RTl2WFJWaGJkbElPeg==' }
      },
      stateList: [],
      selectedState: { id: 2170, name: 'İstanbul', iso2: '34' },
      cityList: [],
      selectedCity: '',
    };
  },
  methods: {
    getAds() {
      this.loading = true
      axios.get(`ads?page=` + this.page)
        .then(response => {
          this.pageCount = response.data.page_count
          this.ads = response.data
        })
        .catch(error => { console.log(error); })
      this.loading = false
    },
    filter() {
      this.loading = true

      axios.get(
        `ad/search/{search}?` +
        `${this.selectedState ? `&state=${this.selectedState.name}` : ""}` +
        `${this.selectedCity ? `&city=${this.selectedCity}` : ""}` +
        `${this.time ? `&time=${this.time}` : ""}` +
        `${this.search ? `&search=${this.search}` : ""}`
      )
        .then(response => { this.ads = response.data })
        .catch(error => { console.log(error); })
      this.loading = false
    },
    clearFilter() {
      this.salary_min = ''
      this.salary_max = ''
      this.selectedState = ''
      this.selectedCity = ''
      this.time = ''
      this.search = ''
      this.getAds()
    },
    greeting() {
      if (new Date().getHours() < 12)
        this.greeting = "Günaydın"
      if (new Date().getHours() >= 12)
        this.greeting = "İyi günler"
      if (new Date().getHours() >= 18)
        this.greeting = "İyi akşamlar"
    },
    getStates() {
      axios.get(`${this.cscBase}TR/states`, this.key)
        .then(response => { this.stateList = response.data })
        .catch(error => { console.log(error) })
    },
    getCities() {
      this.loading = true
      axios.get(`${this.cscBase}TR/states/${this.selectedState.iso2}/cities`, this.key)
        .then(response => { this.cityList = response.data })
        .catch(error => { console.log(error) })
      this.loading = false
    }

  },
  created() {
    this.greeting()
    this.getAds()
    this.getStates()
    this.getCities()
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

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