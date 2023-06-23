<template>
  <div class="container">
    <h2>Son eklenen ilanlar</h2>
    <div class="ads">
      <div v-for="ad in 6" :key="ad">
        <router-link :to="`/ad/${ads[ad].id}`">
          <div class="ad">
            <a href="" class="logo">
              <img :src="ads[ad].img" alt="">
            </a>
            <div class="adtext">
              <h4>{{ ads[ad].position }}</h4>
              <div class="details">
                <div class="detail">
                  <icon icon="fa-solid fa-suitcase" />
                  <p>{{ ads[ad].company }}</p>
                </div>
                <!-- <div class="detail">
              <icon icon="fa-solid fa-clock" />
              <p>{{ }}</p>
            </div> -->
                <div class="detail">
                  <icon icon="fas fa-map-marker-alt" />
                  <p>{{ ads[ad].state }}-{{ ads[ad].city }}</p>
                </div>
              </div>
              <div class="extras">
                <div class="time extra">
                  {{ ads[ad].time }}
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <router-link to="/ads/" class="seeMore">
      <span>
        Daha Kesfet...
      </span>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'ads',
  props: ['ads'],
}


</script>

<style scoped lang="scss">
@import '../assets/variables.scss';

.seeMore {
  color: white;
  display: flex;
  justify-content: end;

  span {
    transition: 300ms;
    padding: 5px;
    border-radius: 5px;
    background-color: $primary;

    &:hover {
      color: $primary;
      background-color: rgb(231, 231, 231);
    }
  }

}

h2 {
  text-align: center;
  margin-bottom: 30px;
}
</style>