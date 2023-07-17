<template>
  <div class="container">
    <search v-if="false" @searchemit="searchfn($event)" :search="this.search"></search>
    <div class="searchWrapper my">
      <div v-if="user">Merhaba {{ user.name }}</div>

      <icon :icon="['fas', 'filter']" @click="filterOpen = !filterOpen" :class="filterOpen ? 'open' : ''"
        class="filterIcon pointer" />
      <div class="search">
        <icon class="icon pointer" icon="fa-solid fa-circle-xmark" @click="clearSearch"></icon>
        <input @keyup.enter="searchfn()" id="searchContent" type="text" class="primary-input" v-model="search"
          placeholder="Search anything">
      </div>
    </div>
    <div class="content">
      <div class="filter" v-show="filterOpen">
        <div class="couple">
          <input @keyup.enter="filter()" v-model="this.salary_min" placeholder="min salary" class="primary-input" />
          <input @keyup.enter="filter()" v-model="this.salary_max" placeholder="max salary" class="primary-input" />
        </div>
        <div class="couple">
          <input @keyup.enter="filter()" v-model="this.state" placeholder="il" class="primary-input" />
          <input @keyup.enter="filter()" v-model="this.city" placeholder="ilce" class="primary-input" />
        </div>
        <input @keyup.enter="filter()" v-model="this.time" placeholder="zamani" class="primary-input " />
        <div class="couple">
          <button class="primary-btn secondry" @click="filter()">submit</button>
          <button class="primary-btn secondry" @click="clearFilter()">clear</button>
        </div>
      </div>
      <div class="ads">
        <div v-for="ad in ads " :key="ad.id">

          <router-link :to="`/ad/${ad.id}`">

            <div class="ad">
              <a href="" class="logo">
                <img v-if="ad.img" :src="ad.img" alt="">
                <img v-else
                  src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg">
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
                    <p>{{ ad.created_at }}</p>
                  </div> -->
                  <div class="detail">
                    <icon icon="fas fa-map-marker-alt" />
                    <p>{{ ad.state }}-{{ ad.city }}</p>
                  </div>
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
      <div class="spinner">
        <spinner v-show="this.loading" />
      </div>
    </div>
    <TailwindPagination :data="this.ads" @pagination-change-page="getlist()" />
  </div>
</template>

<script>
import axios from 'axios'
import search from "../components/search.vue";
import spinner from "../components/spinner.vue";
import { TailwindPagination } from 'laravel-vue-pagination';



import { mapGetters } from 'vuex'
export default {
  components: {
    search,
    spinner
  },
  data() {
    return {
      ads: [],
      search: "",
      loading: false,
      salary_min: '',
      salary_max: '',
      state: '',
      city: '',
      time: '',
      cities: "",
      filterOpen: true,
    };
  },
  methods: {
    searchfn() {
      if (this.search == "")
        this.getList();
      else {
        this.loading = true;
        axios.get(`ad/search/${this.search}`)
          .then(response => {
            this.ads = response.data
          })
          .catch(error => { console.log(error); })
        this.loading = false;
      }
    },
    getList(page = 1) {
      this.loading = true;
      axios.get(`ads?page=${page}`)
        .then(response => {
          this.ads = response.data
        })
        .catch(error => { console.log(error); })
      this.loading = false;
    },
    clearSearch() {
      this.search = ''
      this.getList();
    },
    filter() {
      this.loading = true;
      axios.get(
        `ad/search/{search}?` +
        `${this.state ? `state=${this.state}` : ""}` +
        `${this.city ? `city=${this.city}` : ""}` +
        `${this.salary_min ? `salary_min=${this.salary_min}` : ""}` +
        `${this.salary_max ? `salary_max=${this.salary_max}` : ""}` +
        `${this.time ? `time=${this.time}` : ""}` +
        `${this.search ? `search=${this.search}` : ""}`
      )
        .then(
          response => {
            this.ads = response.data
          })
        .catch(error => { console.log(error); })
      this.loading = false;
    },
    clearFilter() {
      this.salary_min = '';
      this.salary_max = '';
      this.state = '';
      this.city = '';
      this.time = '';
      this.getList();

    }



  },
  created() {
    this.getList();
  },
  computed: {
    ...mapGetters(['user', 'admin']),
  },
}


</script>

<style scoped lang="scss">
@import '../assets/variables.scss';
@import "../assets/ads.scss";
@import "../assets/filter.scss";

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 100;
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
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  display: flex;
  justify-content: space-between;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}
</style>