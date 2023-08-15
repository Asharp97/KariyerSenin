<template>
  <form ref="form" class="inputs" id="frm">
    <div class="input" :class="!ad.company ? 'req' : ''">
      <input @keyup.enter="addad()" type="text" v-model="ad.company" placeholder="sirket isimi">
    </div>
    <div class="input req">
      <input @keyup.enter="addad()" type="text" v-model="ad.position" placeholder="pozisioyon">
    </div>
    <div class="input" :class="!ad.state.isoCode ? 'req' : ''">
      <!-- <label for="state">Il</label> -->
      <!-- <select name="state" id="state" class="select" v-model="ad.state" @change="selectState()">
        <option v-for="state in  states " :key="state.isoCode" :value=state> {{ state.name }} </option>
      </select> -->
      <!-- <input @keyup.enter="addad()" type="text" v-model="ad.state" placeholder="Il"> -->
      <select v-model="this.selectedState" @change="getCities()">
        <option disabled selected hidden value="">Il</option>
        <option v-for="state in stateList" :key="state.id" :value="state">{{ state.name }}</option>
      </select>
    </div>
    <div class="input" :class="!ad.city ? 'req' : ''">
      <select v-model="this.selectedCity">
        <option disabled selected hidden value="">İlçe</option>
        <option v-if="this.selectedState" v-for="city in cityList" :key="city.id">{{ city.name }}</option>
        <option v-else disabled>önce il seçmelisin
        </option>
      </select>
      <!-- <input @keyup.enter="addad()" type="text" v-model="ad.city" placeholder="Ilce"> -->

    </div>
    <div class="input " :class="!ad.time ? 'req' : ''">
      <select v-model="ad.time">
        <option value="" disabled selected>Zaman</option>
        <option>Tam zamanlı</option>
        <option>Yari zamanlı</option>
        <option>Staj</option>
      </select>
    </div>
    <div class=" input">
      <input @keyup.enter="addad()" type="text" v-model="ad.salary" placeholder="Maaş">
    </div>
    <div class="input " :class="!ad.time ? 'req' : ''">
      <input @keyup.enter="addad()" type="text" v-model="ad.telefon" placeholder="telefon">
    </div>
    <div class="input">
      <input @keyup.enter="addad()" type="text" v-model="ad.img" placeholder="gorsel link">
    </div>
    <div class="input">
      <textarea type="text" v-model="ad.description" rows="4" placeholder="aciklama"></textarea>
    </div>
  </form>
  <button @click="addad()">paylas</button>
  <Teleport to="#modal">
    <transition name="modal">
      <div class="modal-bg" v-if="this.showModal" @click.self="this.showModal = false">
        <div class="modal">
          <h2>success </h2>
          <p>successfully posted</p>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
import axios from 'axios'
// import { State, City } from 'country-state-city';

export default {
  data() {
    return {
      ad: {
        company: "",
        position: "",
        state: {
          name: ''
        },
        city: "",
        time: "",
        salary: "",
        telefon: "",
        img: "",
        description: ""
      },
      showModal: false,
      cscBase: 'https://api.countrystatecity.in/v1/countries/',
      key: {
        headers: { 'X-CSCAPI-KEY': 'Zmt0UVBvWElEVnQzYUp4OXBjRk1HRkY0SFd5RTl2WFJWaGJkbElPeg==' }
      },
      stateList: [],
      selectedState: { id: 2170, name: 'İstanbul', iso2: '34' },
      cityList: [],
      selectedCity: '',
    }
  },
  emits: ['listchanged'],
  methods: {
    addad() {
      if (this.company = '') {
        return;
      }
      axios
        .post('ad/store', { ad: this.ad })
        .then(response => {
          if (response.status == 201) {
            this.$emit('listchanged')
            document.getElementById("frm").reset();
            console.log("added")
            this.showModal = true
          }
        })
        .catch(error => {
          console.log(error);
        })
    },
    getStates() {
      axios.get(`${this.cscBase}TR/states`, this.key)
        .then(response => { this.stateList = response.data })
        .catch(error => { console.log(error) })
    },
    getCities() {
      console.log(this.selectedState)
      axios.get(`${this.cscBase}TR/states/${this.selectedState.iso2}/cities`, this.key)
        .then(response => { this.cityList = response.data })
        .catch(error => { console.log(error) })
    }
  },
  created() {
    this.getStates()
    this.getCities()
  },
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
@import "../assets/transitions.scss";

.req {
  &::after {
    content: '*';
    color: rgb(255, 92, 92);
  }
}

.inputs {
  gap: 12px;
  display: flex;
  gap: 12px;
  flex-direction: column;

  .input {
    display: flex;
    width: 200px;
    justify-content: space-between;

    input {
      width: 100%;
    }
  }
}

.modal {
  flex-direction: column;
}

.side {
  flex-direction: row !important;
  align-items: center;
}
</style>