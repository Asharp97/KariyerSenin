<template>
  <navBar @openModal="this.isModalOpen = true" :user="user" />
  <router-view :user="user"></router-view>
  <footery />
  <Teleport to="#modal">
    <transition name="modal">
      <div class="modal-bg" v-if="this.isModalOpen" @click.self="this.isModalOpen = false">
        <div class="modal">
          <sign :user="user" v-if="this.isModalOpen && !this.user" @closeModal="this.isModalOpen = false"></sign>
          <div v-if="this.isModalOpen && this.user">You've been logged out</div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script >
import navBar from "./components/navBar.vue";
import footery from "./components/footer.vue";
import sign from "./components/sign.vue";
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();


export default {
  name: "App",
  components: {
    navBar,
    footery,
    sign,
  },
  data() {
    return {
      isModalOpen: false,
    }
  },
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
  display: flex;
  align-items: center;
  caret-color: $gray;
  border: $border;
  border-radius: $radius;
  height: 25px;

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


  }
}

.activate {
  color: $primary !important;
  // font-weight: 600;
  // border-bottom: 1px $primary solid !important;
}

.my {
  margin-block: 25px;
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
