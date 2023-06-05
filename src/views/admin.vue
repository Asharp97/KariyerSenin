<template>
  <div class="admin container" v-if="admin">

    <div class="form">
      <addadFrom v-on:listchanged="getList()" />
    </div>

    <div class="data">
      <listView :ads="ads" v-on:listchanged="getList()" />
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import addadFrom from "../components/addadForm.vue"
import listView from "../components/listView.vue"
import { mapGetters } from 'vuex'

export default
  {
    components: {
      addadFrom,
      listView,
    },
    data() {
      return {
        ads: []
      }
    },
    methods: {
      getList() {
        axios.get('ads').then(
          response => {
            this.ads = response.data
            console.log(this.ads)
            console.log("list refreshed")
          })
          .catch(error => { console.log(error); })
      },
    },
    created() {
      this.getList();
    },
    computed: {
      ...mapGetters(['user', 'admin'])
    },
  }
  ;
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
    color: inherit;
  }
}

.container {
  width: 1400px;
  margin-inline: auto;
}

.admin {
  display: flex;

  .form {
    width: 20%;
  }

  .data {
    width: 70%
  }

}
</style>