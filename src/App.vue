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
@import "./assets/media.scss";
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.activate {
  color: $primary !important;
  // font-weight: 600;
  // border-bottom: 1px $primary solid !important;
}

.mt {
  margin-top: 25px;
  margin-bottom: 25px;
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

.ads {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  padding: 40px;

  .ad {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    border: 1px solid $gray;
    width: 500px;
    height: 125px;
    padding-block: 15px;
    border-radius: $radius;
    padding: 20px;

    .logo {
      width: 150px;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
      }
    }

    .adtext {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;



      .details {
        color: $gray;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        // align-items: center;
        padding-block: 12px;

        .detail {
          display: flex;
          gap: 6px;
        }

      }

      .extras {
        display: flex;
        gap: 12px;

        .time {
          background-color: #158BCE;
          color: white;
        }

        .urgent {
          background-color: #021474;
          color: white;
        }

        .extra {
          padding-inline: 10px;
          padding-block: 5px;
          border-radius: $radius;
        }
      }
    }
  }
}
</style>
