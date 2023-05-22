<template>
  <div class="container">
    <div class="ads">
      <div class="ad" v-for="ad in ads" :key="ad.id">
        <a href="" class="logo">
          <img :src="ad.img" alt="">
        </a>
        <div class="adtext">
          <h4>{{ ad.position }}</h4>
          <div class="details">
            <div class="detail">
              <icon icon="fa-solid fa-suitcase" />
              <p>{{ ad.company }}</p>
            </div>
            <div class="detail">
              <icon icon="fa-solid fa-money-bill" />
              <p>{{ ad.salary }}{{ ad.salary ? '' : 'Belirtilmedi' }}</p>
            </div>


            <!-- <div class="detail">
              <icon icon="fa-solid fa-clock" />
              <p>{{ }}</p>
            </div> -->
            <div class="detail">
              <icon icon="fas fa-map-marker-alt" />

              <p>{{ ad.state }}-{{ ad.city }}</p>
            </div>


          </div>
          <div class="extras">
            <div class="urgent extra" v-if="ad.urgent">
              Acil
            </div>
            <div class="time extra">
              {{ ad.time }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ads',
  props: ['ads']

}


</script>

<style scoped lang="scss">
@import '../assets/variables.scss';

h2 {
  text-align: center;
  margin-bottom: 30px;
}
</style>