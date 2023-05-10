<template>
  <search />
  <div class="gap">
    <homeAds />
    <startNow />
    <activeDistricts />
  </div>
</template>

<script>
import search from '../components/search.vue';
import homeAds from '../components/homeAds.vue';
import startNow from '../components/startNow.vue';
import activeDistricts from '../components/activeDistricts.vue';

export default {
  name: 'home',
  components: {
    search,
    homeAds,
    startNow,
    activeDistricts,
  },

}

</script>
<style scoped lang="scss">
@import "../assets/variables.scss";


</style>