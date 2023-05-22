<template>
  <search />
  <div class="gap">
    <h2>Son eklenen ilanlar</h2>
    <ads :ads="ads" />
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
      ads: ""
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
    getList() {
      axios.get('http://127.0.0.1:8000/api/ads').then(
        response => {
          this.ads = response.data
        })
        .catch(error => { console.log(error); })
    }
  },
  created() {
    this.getList();

  },
}

</script>
<style scoped lang="scss">
@import "../assets/variables.scss";

h2 {
  text-align: center;
}
</style>