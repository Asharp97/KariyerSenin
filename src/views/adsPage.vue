<template>
  <div class="container">
    <search v-if="false" @searchemit="searchfn($event)" :search="this.search"></search>
    <div class="searchWrapper my">
      <div v-if="user">Merhaba {{ user.name }}</div>
      <div v-if="!user">Hi nice to meet you</div>
      <div class="search">
        <icon class="icon" icon="fa-solid fa-circle-xmark" @click="clearSearch"></icon>
        <input id="searchContent" type="text" class="primary-input" v-model="search" v-on:keyup.enter="searchfn"
          placeholder="Search anything">
      </div>
    </div>
    <div class="content">
      <!-- <div class="filter"> .</div> -->
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
    </div>
    <singleAd ads=""></singleAd>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
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
      axios.get('ads')
        .then(
          response => {
            this.ads = response.data
          })
        .catch(error => { console.log(error); })
    },
    clearSearch() {
      this.search = ''
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

  .primary-input {}
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