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
        <th>tipi</th>
        <th>maas</th>
        <th>telefon</th>
        <th>aciklama</th>
      </tr>
      <tr v-for="(ad, index) in ads" :key="index" class="data">
        <td>{{ ad.id }} </td>
        <td>{{ ad.company }} </td>
        <td>{{ ad.position }}</td>
        <td>{{ ad.state }}</td>
        <td>{{ ad.city }}</td>
        <td>{{ ad.urgent == 0 ? 'acil degil' : 'acil' }}</td>
        <td>{{ ad.time }}</td>
        <td>{{ ad.salary }}</td>
        <td>{{ ad.telefon }}</td>
        <td>{{ ad.description }}</td>
        <td>
          <button @click="removeAd(ad.id)">
            <icon icon="fa-solid fa-trash" />
          </button>
        </td>
        <td>
          <button @click="editAd()">
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
  methods: {
    removeAd(x) {
      if (deleteConfirmed) {

        axios.delete('http://127.0.0.1:8000/api/ad/' + x)
          .then(response => {
            if (response.status == 200) {
              this.$emit('listchanged')
              console.log('successfully deleted');
            }
          })
          .catch(error => { console.log(error); })
      }
    },
    editAd() {
      axios.put('http://127.0.0.1:8000/api/ad/' + this.ad.id, {
        ad: this.ad
      })
        .then(response => {
          console.log('successfully deleted');
        })
        .catch(error => { console.log(error); })
    }
  }
}

</script >
<style scoped lang='scss'>
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