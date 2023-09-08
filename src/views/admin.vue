<template>
  <div class="admin container" v-if="store.admin">
    <div class="form">
      <addadFrom v-on:listchanged="getAds()" />
    </div>

    <div class="data">
      <listView :ads="ads" v-on:listchanged="getAds()" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import addadFrom from "../components/addadForm.vue";
import listView from "../components/listView.vue";
import { useStore } from '../store'

export default {
  components: {
    addadFrom,
    listView,
  },
  data() {
    return {
      ads: [],

    };
  },
  methods: {
    getAds() {
      axios
        .get("ads")
        .then((response) => {
          this.ads = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
  created() {
    this.getAds();
  },
  setup() {
    const store = useStore()
    return { store }
  },
};
</script>

<style scoped lang="scss">
.admin {
  display: flex;
  justify-content: center;

  .form {
    width: 20%;
  }

  .data {
    width: 70%;
  }
}
</style>
