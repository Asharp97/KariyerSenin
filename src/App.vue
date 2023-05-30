<template>
  <navBar @openModal="this.isModalOpen = true" />
  <router-view></router-view>
  <footery />
  <Teleport to="#modal">
    <transition name="modal">
      <div class="modal-bg" v-if="this.isModalOpen" @click.self="this.isModalOpen = false">
        <div class="modal">
          <sign v-if="this.isModalOpen"></sign>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script >
import navBar from "./components/navBar.vue";
import footery from "./components/footer.vue";
import sign from "./components/sign.vue";
import JwPagination from 'jw-vue-pagination'

export default {
  name: "App",
  components: {
    navBar,
    footery,
    sign,
  },
  data() {
    return {
      isModalOpen: false
    }
  }
};
</script>

<style lang="scss">
@import "./assets/variables.scss";
@import "./assets/transitions.scss";
@import "./assets/media.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

input {
  border: none;
  padding-left: 12px;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  caret-color: $gray;
  border: $border;
  border-radius: $radius;

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
      margin-top: 8px;
    }
  }
}

.modal-bg {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 500;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background: white;
    width: 900px;
    height: 300px;
    border-radius: $radius;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: $shadow;
    position: relative;

    .signUp-bg {
      border-top-left-radius: $radius ;
      border-bottom-left-radius: $radius;
    }
    .signIn-bg {
      border-top-right-radius: $radius ;
      border-bottom-right-radius: $radius;
    }

    .bg {
      height: 100%;
      display: flex;
      align-content: center;
      justify-content: center;
      width: 34%;
      transition: 300ms ease;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      justify-content: center;
      transition: 300ms;

      .input {
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 30px;
      }

      .form {
        display: flex;
        flex-direction: column;
        gap: 5px
      }


    }

    .active {
      width: 66% !important;
      background-color: rgba(0, 85, 176, 0.293);

    }
  }
}

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
  font-family: $font;

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
  cursor: pointer;
  border-radius: $radius;
  // border-top-right-radius: $radius;
  // border-bottom-right-radius: $radius;

  &:hover {
    background-color: $primary-hover;
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
    transition: 300ms;

    &:hover {
      box-shadow: $shadow;
    }

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
          background-color: #158bce;
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
