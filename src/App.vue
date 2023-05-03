<template class="kariyer">
  <navBar />
  <search />
  <homeAds />
</template>

<script>
import navBar from './components/navBar.vue';
import search from './components/search.vue';
import homeAds from './components/homeAds.vue';

export default {
  name: 'App',
  components: {
    navBar,
    search,
    homeAds,

  },
 


}
</script>

<style lang="scss">
@import "./assets/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');


* {
  padding: 0;
  margin: 0;
}

.container {
  width: $containerWidth;
  margin-inline: auto;
}

#app {
  font-family: 'Inter', sans-serif;
}
</style>
