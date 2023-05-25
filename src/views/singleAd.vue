<template>
  <div class="container">

    <h2>
      id: {{ ad.id }}
      company : {{ ad.company }}
      id: {{ ad.id }}
      id: {{ ad.id }}
    </h2>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      id: '',
      ad: ''
    }
  },
  created() {
    console.log(this.$route.params)
    this.id = this.$route.params;
    axios.get(`http://127.0.0.1:8000/api/ad/${this.id}`)
      .then(response => {
        this.ad = response.data;
      })
  }
}


</script>