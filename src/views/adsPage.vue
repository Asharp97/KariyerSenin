<template>
  <div>
    <div class="container">
      <div class="searchWrapper my">
        <div v-if="store.user">{{ this.greeting }}
          {{ store.user.name.charAt(0).toUpperCase() + store.user.name.slice(1) }}</div>
        <div style="margin-left: auto;"> {{ adTotal }} Sonuç Bulundu </div>
      </div>
      <div class="filter">
        <div class="wing">
          <div class="couple">
            <div class="search">
              <input @keyup.enter="filter()" id="searchContent" type="text" class="primary-input w-full searchbar"
                v-model="search" placeholder="İlan ara...">
              <icon icon="fas fa-search " class="icon" />
            </div>
            <select v-model="this.selectedState" class="primary-input" @change="getCities()">
              <option v-if="this.store.state" selected :value="this.store.state">{{ this.store.state }}</option>
              <option v-else disabled hidden value="">Il</option>
              <option v-for="state in stateList" :key="state.id" :value="state">{{ state.name }}</option>
            </select>
          </div>
          <div class="couple">
            <select v-model="this.selectedCity" class="primary-input">
              <option disabled selected hidden value="">İlçe</option>
              <option v-if="this.selectedState" v-for="city in cityList" :key="city.id">{{ city.name }}</option>
              <option v-else disabled>önce il seçmelisin</option>
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
      <!-- PAGINATION HERE //////////////////////////////////////////////////// -->
      <div class="pagination">
        <button :class="this.page == 1 ? 'disabled' : ''" @click="firstPage" class="primary-btn">
          <icon icon="fa-solid fa-angles-left " class="icon" />
        </button>
        <button :class="this.page == 1 ? 'disabled' : ''" class="primary-btn" @click="prevPage">
          <icon icon="fa-solid fa-chevron-left " class="icon" />
        </button>
        <input @keyup.enter="paginateProof" type="number" class="primary-input" v-model="this.page">
        <button :class="this.page == Math.ceil(this.adTotal / this.adPerPage) ? 'disabled' : ''" class="primary-btn"
          @click="nextPage">
          <icon icon="fa-solid fa-chevron-right " class="icon" />
        </button>
        <button :class="this.page == Math.ceil(this.adTotal / this.adPerPage) ? 'disabled' : ''" @click="lastPage"
          class="primary-btn">
          <icon icon="fa-solid fa-angles-right " class="icon" />
        </button>
      </div>
      <div class="adsContainer">
        <div class="ads">

          <!-- <div>
            <h2>Üzgünüz, aradığınız kriterlere uygun bir sonuç bulamadık
              <icon icon="fa-solid fa-heart-crack" class="red" />
            </h2>
          </div> -->

          <!-- <Suspense>
            <template #default> -->
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
          <!-- </template>
            <template #fallback>loading...</template>
          </Suspense> -->

        </div>
      </div>

      <div class="pagination">
        <button :class="this.page == 1 ? 'disabled' : ''" @click="firstPage" class="primary-btn">
          <icon icon="fa-solid fa-angles-left " class="icon" />
        </button>
        <button :class="this.page == 1 ? 'disabled' : ''" class="primary-btn" @click="prevPage">
          <icon icon="fa-solid fa-chevron-left " class="icon" />
        </button>
        <input @keyup.enter="paginateProof" type="number" class="primary-input" v-model="this.page">
        <button :class="this.page == Math.ceil(this.adTotal / this.adPerPage) ? 'disabled' : ''" class="primary-btn"
          @click="nextPage">
          <icon icon="fa-solid fa-chevron-right " class="icon" />
        </button>
        <button :class="this.page == Math.ceil(this.adTotal / this.adPerPage) ? 'disabled' : ''" @click="lastPage"
          class="primary-btn">
          <icon icon="fa-solid fa-angles-right " class="icon" />
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

import { useStore } from '../store'
// import { Icon } from '@iconify/vue'

export default {
  data() {
    return {
      loading: false,
      ads: [],
      //paginate
      page: 1,
      adPerPage: 30,
      //filters
      search: '',
      state: '',
      city: '',
      time: '',
      cscBase: 'https://api.countrystatecity.in/v1/countries/',
      key: {
        headers: { 'X-CSCAPI-KEY': 'Zmt0UVBvWElEVnQzYUp4OXBjRk1HRkY0SFd5RTl2WFJWaGJkbElPeg==' }
      },
      stateList: [],
      selectedState: "",
      // { id: 2170, name: 'İstanbul', iso2: '34' },
      cityList: [],
      selectedCity: '',
      adTotal: '',
      lastPagin: '',

    };
  },
  methods: {
    getAds() {
      axios.get(`ads?page=` + this.page)
        .then(response => {
          this.ads = response.data.data
          this.lastPagin = response.data.last_page
          this.adTotal = response.data.total
        })
        .catch(error => { console.log(error) })
    },
    filter() {
      axios.get(
        'ad?' +
        `${this.selectedState ? `&state=${this.selectedState.name}` : ""}` +
        `${this.selectedCity ? `&city=${this.selectedCity}` : ""}` +
        `${this.time ? `&time=${this.time}` : ""}` +
        `${this.search ? `&search=${this.search}` : ""}` + `&page=${this.page}`
      )
        .then(response => {
          this.ads = response.data.data
          this.lastPagin = response.data.last_page
          this.adTotal = response.data.total
        })
        .catch(error => { console.log(error); })
    },
    clearFilter() {
      this.selectedState = ''
      this.selectedCity = ''
      this.time = ''
      this.search = ''
      this.store.state = ''
      this.store.position = ''
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

      axios.get(`${this.cscBase}TR/states/${this.selectedState.iso2}/cities`, this.key)
        .then(response => { this.cityList = response.data })
        .catch(error => { console.log(error) })
    },
    nextPage() {
      if (this.page < this.lastPagin)
        this.page++

      this.filter()
    },
    prevPage() {
      if (this.page > 1)
        this.page--
      this.filter()
    },
    firstPage() {
      this.page = 1
      this.filter()
    },
    lastPage() {
      this.page = this.lastPagin
      this.filter()
    },
    paginateProof() {
      if (this.page < 1)
        this.page = 1
      if (this.page > this.lastPagin)
        this.page = this.lastPagin
      this.filter()
    },
    plakaConvert() {
      if (!isNaN(this.store.state)) {
        if (this.store.state.length == 1)
          this.store.state = "0".concat(this.store.state)

        axios
          .get(`${this.cscBase}TR/states/${this.store.state}`, this.key)
          .then(response => {
            this.store.state = response.data.name
            this.selectedState = response.data

            this.search = this.store.position
            this.filter()
            // this.getCities()
          })
          .catch(error => console.log(error));

      }
      else {
        this.selectedState = this.store.state
        this.search = this.store.position
        this.filter()
        // this.getCities()
      }

    },
    filterByHome() {
      axios
        .get(
          `ad?` +
          `${this.store.state ? `&state=${this.store.state}` : ""}` +
          `${this.store.position ? `&position=${this.store.position}` : ""}` +
          `&page=${this.page}`
        )
        .then(response => {
          this.ads = response.data.data
          this.adTotal = response.data.total
          this.lastPagin = response.data.last_page

          this.search = this.store.position
          this.selectedState = this.store.state
        })
        .catch(error => { console.log(error); })
    }
  },
  created() {
    this.greeting()
    this.getStates()
    if (this.store.state || this.store.position)
      this.plakaConvert()
    else
      this.getAds()
    if (this.selectedState)
      this.getCities()
  },
  setup() {
    const store = useStore()
    return { store }
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

}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;

  .icon {
    padding-block: 1px;
  }

  button {
    padding: 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  input {
    width: 50px;
    height: 36px;
    text-align: center;
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

.red {
  color: $primary;
}
</style>