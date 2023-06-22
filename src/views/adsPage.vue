<template>
  <div class="container">
    <div class="searchWrapper">
      <div class="greeting">
        <!-- <icon icon="fa-solid fa-filter" title="Filtre Goster" @click="showfilter = !showfilter"
            :class="showfilter ? 'filterActive' : ''"></icon> -->
        <h4 v-if="user">Merhaba {{ user.name }}</h4>
        <h4 v-else>Merhaba, Memnun oldum</h4>
      </div>
      <div class="search">
        <icon class="icon" icon="fa-solid fa-circle-xmark" @click="clearSearch"></icon>
        <input id="searchContent" type="text" class="primary-input" v-model="search" v-on:keyup.enter="searchfn"
          placeholder="Search anything">
      </div>
    </div>
    <!-- <div class="content"> -->
    <!-- <div class="filter" v-show="showfilter">
        <div class="filter-content">
          <form action="" id="filter" class="inputs">
            <div class="input">
              <label for="state">Il</label>
              <select name="state" id="state" class="select" v-model="selected.state" @change="selectState()">
                <option v-for="state in  states " :key="state.isoCode" :value=state> {{ state.isoCode }} - {{ state.name
                }}
                </option>
              </select>
            </div>
            <div class="input">
              <label>Ilçe</label>
              <select v-model="selected.city">
                <option v-for=" city  in  cities " :key="city.id">{{ city.name }}</option>
              </select>
            </div>
            <div class="input">
              <label>Zaman</label>
              <select v-model="selected.time">
                <option value="full">Tam Zamani</option>
                <option value="half">Yari Zamani</option>
                <option value="remote">Uzaktan</option>
                <option value="staj">Staj</option>
              </select>
            </div>
            <div class="input side">
              <label>acil</label>
              <input type="checkbox" v-model="selected.urgent">
            </div>
          </form>
          <div class="buttons">

            <div class="primary-btn" @click="applyFilter">
              apply
            </div>
            <div class="primary-btn" @click="resetFilter">
              reset
            </div>
          </div>
        </div>
      </div> -->

    <div class="ads">
      <div v-for="ad in ads " :key="ad.id">

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
                  <p>{{ ad.salary }}{{ ad.salary ? '' : ' Belirtilmedi' }}</p>
                </div>
                <!-- <div class="detail">
                  <icon icon="fa-solid fa-clock" />
                </div> -->
                <div class="detail">
                  <icon icon="fas fa-map-marker-alt" />
                  <p>{{ ad.state }}-{{ ad.city }}</p>
                </div>
              </div>
              <div class="extras">
                <div class="urgent extra" v-if="ad.urgent" @click="urgentFilter">
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
    </div>
    <singleAd ads=""></singleAd>
  </div>
</template>

<script>
import axios from 'axios'
import search from "../components/search.vue";
import spinner from "../components/spinner.vue";

import { mapGetters } from 'vuex'
import search from '../components/search.vue';

// import { State, City } from 'country-state-city';
export default {
  components: {
    search,
    spinner
  },
  data() {
    return {
      ads: "",
      search: "",
    };
  },
  methods: {
    searchfn() {
      axios.get(`ad/search/${this.search}`)
        .then(
          response => {
            this.ads = response.data
          })
        .catch(error => { console.log(error); })
    },
    getList() {
      this.loading = true;
      axios.get('ads')
        .then(
          response => {
            this.ads = response.data
          })
        .catch(error => { console.log(error); })
      this.loading = false;
    },
    clearSearch() {
      this.search = ''
      this.getList();
    }

  },
  created() {
    this.getList();
    this.searchfn();
  },
  computed: {
    ...mapGetters(['user', 'admin']),
  },

}
</script>

<style scoped lang="scss">
@import '../assets/variables.scss';
@import "../assets/ads.scss";


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

.primary-btn {
  padding-inline: 8px !important;
  padding-block: 4px !important;
  font-size: 15px !important;
}

.searchWrapper {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
}

.content {
  display: flex;
  justify-content: space-between;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.filterActive {
  color: $primary
}
</style>