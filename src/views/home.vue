<template>
  <search />
  <div class="gap">
    <h2>Son eklenen ilanlar</h2>
    <ads />
    <startNow />
    <activeDistricts />
  </div>
</template>

<script>
import search from '../components/search.vue';
import ads from '../components/ads.vue';
import startNow from '../components/startNow.vue';
import activeDistricts from '../components/activeDistricts.vue';

export default {
  name: 'home',
  components: {
    search,
    ads,
    startNow,
    activeDistricts,
  },

}

</script>
<style scoped lang="scss">
@import "../assets/variables.scss";

h2 {
  text-align: center;
}
</style>