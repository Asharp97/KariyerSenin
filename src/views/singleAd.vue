<template>
  <div class="container">

    <div class="img">
      <img :src="ad.img" alt="">

    </div>

    <h2>
      id: {{ ad.id }}
      company : {{ ad.company }}
    </h2>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      ad: {
        id: "",
        company: "",
        position: "",
        state: "",
        city: "",
        urgent: false,
        time: "",
        salary: "",
        telefon: "",
        img: "",
        description: ""
      },
    }
  },
  created() {
    this.id = this.$route.params.id;
    axios.get(`http://127.0.0.1:8000/api/ad/${this.id}.json`)
      .then(response => {
        this.ad = response.data;
      })
  }
}


</script>
<style scoped lang="scss">
.img{
  width: 250px;
  height: 250px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>