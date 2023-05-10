<template >
  <navBar />
  <router-view></router-view>
  <footery />
</template>

<script>
import navBar from './components/navBar.vue';
import footery from './components/footer.vue';

export default {
  name: 'App',
  components: {
    navBar,
    footery
  },

}
</script>

<style lang="scss">
@import "./assets/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.activate {
  color: $primary !important;
  // font-weight: 600;
  // border-bottom: 1px $primary solid !important;
}

.gap {
  display: flex;
  flex-direction: column;
  gap: $comperendGap;
  margin-block: $comperendGap;
}

* {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: $containerWidth;
  margin-inline: auto;
}

#app {
  font-family: $font;
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
