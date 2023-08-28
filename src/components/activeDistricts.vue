<template>
  <h2>Aktif iş ilanı bulunan şehirler</h2>
  <div class="container cities">
    <div class="city-content">
      <div class="city istanbul">
        <div class="number">{{ this.getIstanbul() }}</div>
      </div>
      <h3>İstanbul</h3>
    </div>
    <div class="city-content">
      <div class="city ankara">
        <div class="number">
          <!-- {{ this.getAnkara() }} -->
          40
        </div>
      </div>
      <h3>Ankara</h3>
    </div>
    <div class="city-content">
      <div class="city izmir">
        <div class="number">
          <!-- {{ this.getIzmir() }} -->
          25
        </div>
      </div>
      <h3>İzmir</h3>
    </div>
    <div class="city-content">
      <div class="city antalya">
        <div class="number">
          <!-- {{ this.getAntalya() }} -->
          20
        </div>
      </div>
      <h3>Antalya</h3>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "activedistricts",
  data() {
    return {
      istanbul: '',
      ankara: '',
      izmir: '',
      antalya: '',
    }
  },
  methods: {
    getIstanbul() {
      axios.get(`ad/search/{search}?state=istanbul`)
        .then(response => { this.istanbul= response.data.length })
        .catch(error => { console.log(error); })
      return this.istanbul
    },
    getAnkara() {
      axios.get(`ad/search/{search}?state=ankara`)
        .then(response => { this.ankara= response.data.length })
        .catch(error => { console.log(error); })
      return this.ankara
    },
    getIzmir() {
      axios.get(`ad/search/{search}?state=izmir`)
        .then(response => { this.izmir= response.data.length })
        .catch(error => { console.log(error); })
      return this.izmir
    },
    getAntalya() {
      axios.get(`ad/search/{search}?state=antalya`)
        .then(response => { this.antalya= response.data.length })
        .catch(error => { console.log(error); })
      return this.antalya
    },
  },
}

</script>
<style scoped lang="scss">
h2 {
  margin-inline: auto;
  font-size: 38px;
}

.cities {
  display: flex;
  justify-content: space-between;

  .city-content {
    text-align: center;


    .city {
      border-radius: 50%;
      width: 280px;
      height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-position: center;
      background-size: cover;
    }

    h3 {
      margin-top: 20px;
    }

    .number {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: white;
      background-color: rgba(0, 0, 0, 0.596);
      width: 40px;
      height: 40px;
    }

    .istanbul {
      background-image: url(https://content.kariyersenin.com/istanbul.jpg);
    }

    .ankara {
      background-image: url(https://content.kariyersenin.com/ankara.jpg);
    }

    .izmir {
      background-image: url(https://content.kariyersenin.com/izmir.jpg);
    }
  }

  .antalya {
    background-image: url(https://content.kariyersenin.com/antalya.jpg);
  }

}
</style>