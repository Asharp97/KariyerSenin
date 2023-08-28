<template>
  <div class="container">
    <h2>Son eklenen ilanlar</h2>
    <div class="ads">
      <div v-for="ad in 6" :key="ad" class="adLoop">
        <router-link class="adWrapper" :to="`/ad/${ads[ad].id}`">
          <div class="ad">
            <a href="" class="logo">
              <img v-if=ads[ad].img :src="ads[ad].img" alt="Company Logo">
              <img class="defaultImg" v-else
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Eo_circle_blue_letter-k.svg"
                alt='default KariyerSenin Logo'>
            </a>
            <div class="adtext">
              <h3>{{ ads[ad].position }}</h3>
              <div class="details">
                <div class="detail">
                  <icon icon="fa-solid fa-suitcase" />
                  <h4>{{ ads[ad].company }}</h4>
                </div>
                <!-- <div class="detail">
              <icon icon="fa-solid fa-clock" />
              <h4>{{ }}</h4>
            </div> -->
                <div class="detail">
                  <icon icon="fas fa-map-marker-alt" />
                  <h4>{{ ads[ad].state }}-{{ ads[ad].city }}</h4>
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
@import '../assets/ads.scss';


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
  font-size: 38px;

}
</style>