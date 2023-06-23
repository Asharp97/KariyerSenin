<template>
  <div>
    <table class="table">
      <tr class="header">
        <th>#</th>
        <th>sirket</th>
        <th>pozition</th>
        <th>il</th>
        <th>ilce</th>
        <th>zaman</th>
        <th>maas</th>
        <th>telefon</th>
      </tr>
      <tr class="data" v-for="(ad, index) in ads" :key="index">
        <td>{{ ad.id }} </td>
        <td>{{ ad.company }}</td>
        <td>{{ ad.position }}</td>
        <td>{{ ad.state }}</td>
        <td>{{ ad.city }}</td>
        <td>{{ ad.time }}</td>
        <td>{{ ad.salary }}</td>
        <td>{{ ad.telefon }}</td>
        <td>
          <button @click="removeAd(ad.id)">
            <icon icon="fa-solid fa-trash" />
          </button>
        </td>
        <td>
          <button @click="openModal(ad)">
            <icon icon="fa-solid fa-pen" />
          </button>
        </td>
      </tr>
    </table>
    <Teleport to="#modal">
      <transition name="modal">
        <div class="modal-bg" v-if="this.isModalOpen" @click.self="this.isModalOpen = false">
          <div class="modal">
            <div v-if="this.isModalOpen">
              <form ref="form" id="frm">
                <div class="inputs">

                  <div class="input">
                    <input type="text" v-model="ad.company" placeholder="sirket isimi">
                  </div>
                  <div class="input">
                    <input type="text" v-model="ad.position" placeholder="pozisioyon">
                  </div>
                  <div class="input">
                    <label for="state">Il</label>
                    <select name="state" id="state" class="select" v-model="ad.state" @change="selectState()">
                      <option v-for="state in  states " :key="state.isoCode" :value=state> {{ state.name }} </option>
                    </select>
                  </div>
                  <div class="input">
                    <label for="city">Ilçe</label>
                    <select name="city" id="city" class="select" v-model="ad.city">
                      <option v-for=" city  in  cities " :key="city.id">{{ city.name }}</option>
                    </select>

                  </div>
                  <div class="input">

                    <label for="">Zaman</label>
                    <select v-model="ad.time">
                      <option>Tam</option>
                      <option>Yari</option>
                      <option>Uzaktan</option>
                      <option>Staj</option>
                    </select>
                  </div>
                </div>
                <div class="inputs">

                  <div class="input">
                    <input type="text" v-model="ad.salary" placeholder="Maaş">
                  </div>
                  <div class="input">
                    <input type="text" v-model="ad.telefon" placeholder="telefon">
                  </div>
                  <div class="input">
                    <input type="text" v-model="ad.img" placeholder="gorsel link">
                  </div>
                  <div class="input">
                    <textarea type="text" v-model="ad.description" rows="4" placeholder="aciklama"></textarea>
                  </div>
             
                </div>
              </form>
              <div class="submit">
                <button @click="editAd(ad.id)">submit</button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script>
import axios from 'axios';
import { State, City } from 'country-state-city';
export default {
  data() {
    return {
      isModalOpen: false,
      ad: {},
      states: State.getStatesOfCountry('TR'),
      cities: "",
    }
  },
  name: 'listView',
  props: ['ads'],
  emits: ['listchanged'],
  methods: {
    removeAd(x) {
      axios.delete('ad/' + x)
        .then(response => {
          if (response.status == 200) {
            this.$emit('listchanged')
            console.log('successfully deleted');
          }
        })
        .catch(error => { console.log(error); })
    },
    openModal(x) {
      this.isModalOpen = true;
      this.ad = x;
    },
    editAd(x) {
      axios.put('ad/' + x, this.ad)
        .then(response => {
          if (response.status == 200) {
            this.$emit('listchanged')
            this.isModalOpen = false;
            console.log('successfully edited');
          }
        })
        .catch(error => { console.log(error); })
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
  },
}

</script >
<style scoped lang='scss'>
@import "../assets/variables.scss";

.submit {
  display: flex;
  justify-content: center;
}

form {
  display: flex;
  gap: 20px;

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
}

.table {
  border: 1px solid #00000081;
  width: 100%;
  text-align: center;
}

.fa-trash {
  color: red;
}

.fa-pen {
  color: blue;
}

button {
  padding: 12px;
}
</style>