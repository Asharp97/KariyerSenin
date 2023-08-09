<template>
  <div class="bg-image">
    <div class="text container">
      <h2>Eleman mı arıyorsun? Hemen ilan ver! </h2>
      <p>İlanlarınızı bizimle paylaşın, istediğiniz nitelikte sizlere eleman bulalım.</p>
      <button class="primary-btn" @click="start">Hemen Başla</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'startNow',
  methods:{
    start(){
      this.$router.push('/prices')
    }
  }
}

</script>

<style scoped lang="scss">
@import '../assets/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

h2{
  font-size: 38px;
}
p{
  font-size: 23px;
}
.bg-image {
  background-image: url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg);
  background-color: #000000a0;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  


  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 460px;
    color: white;
    text-align: center;
  }

}
</style>