<template>
  <div class="admin container">

    <div class="form">
      <addadFrom />
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
export default
  {
    props: ['adss'],
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
        axios.get('http://127.0.0.1:8000/api/ads').then(
          response => {
            this.ads = response.data
          })
          .catch(error => { console.log(error); })
      }
    },
    created() {
      this.getList();
    }
  };
</script>

<style lang="scss">
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