<template>
  <form ref="form" class="inputs" id="frm">
    <div class="input" :class="!ad.company ? 'req' : ''">
      <input type="text" v-model="ad.company" placeholder="sirket isimi">
    </div>
    <div class="input req">
      <input type="text" v-model="ad.position" placeholder="pozisioyon">
    </div>
    <div class="input" :class="!ad.state.isoCode ? 'req' : ''">
      <label for="state">Il</label>
      <select name="state" id="state" class="select" v-model="ad.state" @change="selectState()">
        <option v-for="state in  states " :key="state.isoCode" :value=state> {{ state.name }} </option>
      </select>
    </div>
    <div class="input" :class="!ad.city ? 'req' : ''">

      <label for="city">Ilçe</label>
      <select name="city" id="city" class="select" v-model="ad.city">
        <option v-for=" city  in  cities " :key="city.id">{{ city.name }}</option>
      </select>

    </div>
    <div class="input " :class="!ad.time ? 'req' : ''">
      <label for="">Zaman</label>
      <select v-model="ad.time">
        <option selected>Tam zamanlı</option>
        <option>Yari zamanlı</option>
        <option>Uzaktan</option>
        <option>Staj</option>
      </select>
    </div>
    <div class=" input">
      <input type="text" v-model="ad.salary" placeholder="Maaş">
    </div>
    <div class="input " :class="!ad.time ? 'req' : ''">
      <input type="text" v-model="ad.telefon" placeholder="telefon">
    </div>
    <div class="input">
      <input type="text" v-model="ad.img" placeholder="gorsel link">
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
import axios from 'axios';
import { State, City } from 'country-state-city';

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
      states: State.getStatesOfCountry('TR'), 
      cities: "",
      showModal: false
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
    async selectState() {
      console.log(this.ad.state)
      try {
        if (this.ad.state) {
          this.cities = City.getCitiesOfState('TR', this.ad.state.isoCode);
          this.ad.state = this.ad.state.name;
        }
      } catch (error) {
        console.log(error);
      }
    },
  }
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