<template>
  <div>
    <table class="table">
      <tr class="header">
        <th>#</th>
        <th>sirket</th>
        <th>pozition</th>
        <th>il</th>
        <th>ilce</th>
        <th>acil</th>
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
        <td>{{ ad.urgent ? 'acil' : 'degil' }}</td>
        <td>{{ ad.time }}</td>
        <td>{{ ad.salary }}</td>
        <td>{{ ad.telefon }}</td>
        <td>
          <button @click="removeAd(ad.id)">
            <icon icon="fa-solid fa-trash" />
          </button>
        </td>
        <td>
          <button @click="editAd(ad.id)">
            <icon icon="fa-solid fa-pen" />
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
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
    }
  },
  editAd(x) {
    axios.put('ad/' + x, { ad: this.ad })
      .then(response => {
        if (response.status == 200) {
          this.$emit('listchanged')
          console.log('successfully deleted');
        }
      })
      .catch(error => { console.log(error); })
  }
}

</script >
<style scoped lang='scss'>
@import "../assets/variables.scss";

.input {
  border: none;
  outline: none;
  border: $border;
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