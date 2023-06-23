<template>
  <navBar @openModal="this.isModalOpen = true" />
  <router-view @showModal="this.isModalOpen = true"></router-view>
  <footery />
  <Teleport to="#modal">
    <transition name="modal">
      <div class="modal-bg" v-if="this.isModalOpen" @click.self="this.isModalOpen = false">
        <div class="modal">
          <sign v-if="this.isModalOpen" @closeModal="this.isModalOpen = false"></sign>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script >
import axios from "axios";

import navBar from "./components/navBar.vue";
import footery from "./components/footer.vue";
import sign from "./components/sign.vue";

// import { mapGetters } from 'vuex'

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
      logout: false
    }
  },
  // async created() {
  //   const response = await axios.get('user');
  //   if (response.data.user.type == 'user')
  //     this.$store.dispatch('user', response.data);
  //   if (response.data.user.type == 'admin')
  //     this.$store.dispatch('admin', response.data);
  // },
  // computed: {
  //   ...mapGetters(['user', 'admin'])
  // },
};
</script>

<style lang="scss">
@import "./assets/variables.scss";
@import "./assets/transitions.scss";
@import "./assets/media.scss";
@import "./assets/ads.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

.primary-input {
  border: none;
  padding-left: 12px;
  display: flex;
  align-items: center;
  caret-color: $gray;
  border: $border;
  border-radius: $radius;
  height: 30px;

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

    .bg {
      height: 100%;
      display: flex;
      align-content: center;
      justify-content: center;
      width: 34%;
      transition: 300ms ease;
    }

    .section {
      .input {
        position: relative;
        display: flex;
        justify-content: space-between;
        gap: 12px;
      }

      .form {
        display: flex;
        flex-direction: column;
        height: 0px;
        visibility: hidden;
      }

      .text {
        visibility: visible;
        height: inherit;
      }
    }


  }
}

.activate {
  color: $primary !important;
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

.pointer {
  cursor: pointer;
}

.primary-btn {
  padding-block: 10px;
  padding-inline: 20px;
  width: fit-content;
  background-color: $primary;
  color: white;
  border: none;
  font-size: 18px;
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

.prim {
  color: $primary;
}
</style>
