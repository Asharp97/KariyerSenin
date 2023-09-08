<template>
  <search />
  <div class="gap">
    <ads :ads="ads" v-if="ads.length > 6" />
    <startNow />
    <activeDistricts />
  </div>
</template>

<script>
import axios from 'axios';

import search from '../components/search.vue';
import ads from '../components/ads.vue';
import startNow from '../components/startNow.vue';
import activeDistricts from '../components/activeDistricts.vue';



export default {
  data() {
    return {
      ads: "",
    };
  },
  name: 'home',
  components: {
    search,
    ads,
    startNow,
    activeDistricts,
  },

  methods: {
    getAds() {
      axios.get('ads').then(
        response => {
          this.ads = response.data.data
        })
        .catch(error => { console.log(error); })
    }
  },
  created() {
    this.getAds();
  },


}

</script>
<style scoped lang="scss">
@import "../assets/variables.scss";

h2 {
  text-align: center;
}
</style>