<template>
  <form ref="form" class="inputs" id="frm">
    <div class="input" :class="!ad.company ? 'req' : ''">
      <input @keyup.enter="addad()" type="text" v-model="ad.company" placeholder="sirket isimi">
    </div>
    <div class="input" :class="!ad.position ? 'req' : ''">
      <input @keyup.enter=" addad()" type="text" v-model="ad.position" placeholder="pozisioyon">
    </div>
    <div class="input" :class="!ad.state ? 'req' : ''">

      <select v-model="ad.state" @change="getCities()">
        <option disabled selected hidden value="">Il</option>
        <option v-for="  state   in   stateList  " :key="state.id" :value="state">{{ state.name }}</option>
      </select>
    </div>
    <div class="input" :class="!ad.city ? 'req' : ''">
      <select v-model="ad.city">
        <option disabled selected hidden value="">İlçe</option>
        <option v-if="ad.state" v-for="  city   in   cityList  " :key="city.id">{{ city.name }}</option>
        <option v-else disabled>önce il seçmelisin </option>
      </select>
      <!-- <input @keyup.enter="addad()" type="text" v-model="ad.city" placeholder="Ilce"> -->

    </div>
    <div class="input " :class="!ad.time ? 'req' : ''">
      <select v-model="ad.time">
        <option value="" disabled selected hidden>Zaman</option>
        <option>Tam zamanlı</option>
        <option>Yari zamanlı</option>
        <option>Staj</option>
      </select>
    </div>
    <div class=" input">
      <input @keyup.enter="addad()" type="text" v-model="ad.salary" placeholder="Maaş">
    </div>
    <div class="input" :class="!ad.telefon ? 'req' : ''">
      <input @keyup.enter="addad()" type="text" v-model="ad.telefon" placeholder="telefon" maxlength="10">
    </div>
    <div class="input">
      <input @keyup.enter="addad()" type="text" v-model="ad.img" placeholder="gorsel link">
    </div>
    <div class="input side">
      <textarea type="text" v-model="ad.description" rows="7" placeholder="aciklama"></textarea>
      <!-- <QuillEditor theme="snow" v-model:content="ad.description.ops" placeholder="aciklama" /> -->
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
export default {
  data() {
    return {
      ad: {
        company: "",
        position: "",
        state: { id: 2170, name: 'İstanbul', iso2: '34' },
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
      // state: ,
      stateList: [
        // {
        //   id: '', text: ''
        // }
      ],
      cityList: [
    
      ],
    }
  },
  emits: ['listchanged'],
  methods: {
    addad() {
      if (this.company = '') {
        return;
      }
      this.ad.state = this.ad.state.name
      axios
        .post('ad/store', {
          ad: this.ad
        })
        .then(response => {
          if (response.status == 201) {
            this.$emit('listchanged')
            document.getElementById("frm").reset();
            this.showModal = true
          }
        })
        .catch(error => {
          console.log(error);
        })
    },
    getStates() {
      axios
        .get(`${this.cscBase}TR/states`, this.key)
        .then(response => {
          this.stateList = response.data
        })
        .catch(error => { console.log(error) })
    },
    getCities() {
      axios
        .get(`${this.cscBase}TR/states/${this.ad.state.iso2}/cities`, this.key)
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

.ql-blank {
  padding: 33px 103px !important;
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

    * {
      width: 100%;
    }
  }

  .side {
    flex-direction: column !important;
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