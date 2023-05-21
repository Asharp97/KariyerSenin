<template>
  <div class="admin container mt">

    <div class="data">
      <!-- {{ states }} -->
    </div>
    <div class="form">
      <form action="">

        <div class="section">
          <label for="position">Pozisyon</label>
          <input type="string" id="position">
        </div>

        <div class="section">
          <label for="state">Il</label>
          <select name="state" id="state" class="select" v-model="currentState" >
            <option v-for="state in states" :key="state.index">{{ state.isoCode }} - {{ state.name }}
            </option>
          </select>
        </div>

        <div class="section">
          <label for="city">Ilçe</label>
          <select name="city" id="city" class="select">
            <option v-for="city in cities" :key="city.index">{{ city.name }}</option>
          </select>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
import { Country, State, City } from 'country-state-city';

const stateTr = State.getStatesOfCountry('TR')
const cityTr = City.getCitiesOfState('TR', "34");
// console.table(City.getCitiesOfState('TR', this.currentState))





export default {
  name: "admin",
  components: {
    Country,
    State,
    City
  },
  data() {
    return {
      states: stateTr,
      cities: cityTr,
      currentState: null,
    }
  },
  methods: {
    setIsoCode(x) {
      cityTr = City.getCitiesOfState('TR', x);
      console.log(x)
    }
  }
}

</script>

<style scoped lang="scss">
@import "../assets/variables.scss";


.admin {
  display: flex;
  justify-content: space-between;

  .data {
    width: 65%;
    border: $border;
    border-radius: $radius;
  }

  .form {
    width: 30%;

    form {
      display: flex;
      flex-direction: column;
      width: 100%;

      .section {
        display: flex;
        justify-content: space-between;
      }

    }

  }
}
</style>