<template >
  <navBar />
  <main>
    <search />
    <homeAds />
    <startNow />
    <activeDistricts />
    <footery />
  </main>
</template>

<script>
import navBar from './components/navBar.vue';
import search from './components/search.vue';
import homeAds from './components/homeAds.vue';
import startNow from './components/startNow.vue';
import activeDistricts from './components/activeDistricts.vue';
import footery from './components/footer.vue';

export default {
  name: 'App',
  components: {
    navBar,
    search,
    homeAds,
    startNow,
    activeDistricts,
    footery,
  },

}
</script>

<style lang="scss">
@import "./assets/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

main {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

* {
  padding: 0;
  margin: 0;
}

a{
  color: inherit;
  text-decoration: none;
}

.container {
  width: $containerWidth;
  margin-inline: auto;
}

#app {
  font-family: 'Inter', sans-serif;
}

.primary-btn {
  padding-block: 10px;
  padding-inline: 20px;
  width: fit-content;
  background-color: $primary;
  color: white;
  border: none;
  font-size: 24px;
  transition: 300ms;

  border-radius: $radius;
  // border-top-right-radius: $radius;
  // border-bottom-right-radius: $radius;

  &:hover {
    background-color: $primary-hover ;
  }

  &:active {
    opacity: 0.8;
  }

}
</style>
