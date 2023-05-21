<template> 
  <form ref="form" class="inputs">
    <div class="input">

      <label class="company">isim</label>
      <input type="text" v-model="ad.company">
    </div>
    <div class="input">

      <label for="">pozisiyon</label>
      <input type="text" v-model="ad.position">
    </div>
    <div class="input">

      <label for="">il</label>
      <input type="text" v-model="ad.state">
    </div>
    <div class="input">

      <label for="">ilce</label>
      <input type="text" v-model="ad.city">
    </div>
    <div class="input">

      <label for="">tipi</label>
      <select v-model="ad.time">
        <option value="full">tam</option>
        <option value="half">yari</option>
        <option value="staj">staj</option>
      </select>
    </div>
    <div class="input">

      <label for="">maas</label>
      <input type="text" v-model="ad.salary">
    </div>
    <div class="input">

      <label for="">telefon</label>
      <input type="text" v-model="ad.telefon">
    </div>
    <div class="input">

      <label for="">gorsel</label>
      <input type="text" v-model="ad.img">
    </div>
    <div class="input">

      <label for="">acikalama</label>
      <input type="text" v-model="ad.description">
    </div>
    <div class="input side">

      <label for="urgent">acil</label>
      <input type="checkbox" v-model="ad.urgent">
    </div>

    <button @click="addad()">paylas</button>

  </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      ad: {
        company: "",
        position: "",
        state: "",
        city: "",
        urgent: 0,
        time: "",
        salary: "",
        telefon: "",
        img: "",
        description: ""
      }
    }
  },
  methods: {
    addad() {
      if (this.ad.company == '') {
        return;
      }
      axios.post('http://127.0.0.1:8000/api/ad/store', { ad: this.ad })
        .then(response => {
          if (response.status == 201) {
            this.$refs.form.reset();
          }
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>

<style lang="scss">
.inputs {

  gap: 12px;

  .input {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
}

.side {
  flex-direction: row !important;
}
</style>