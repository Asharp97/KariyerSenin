<template>
  <h2>Aktif iş ilanı bulunan şehirler</h2>
  <div class="container cities">
    <div class="city-content">
      <div class="city istanbul">
        <div class="number">31</div>
      </div>
      <h3>Istanbul</h3>
    </div>
    <div class="city-content">
      <div class="city ankara">
        <div class="number">31</div>
      </div>
      <h3>Ankara</h3>
    </div>
    <div class="city-content">
      <div class="city izmir">
        <div class="number">31</div>
      </div>
      <h3>Izmir</h3>
    </div>
    <div class="city-content">
      <div class="city antalya">
        <div class="number">31</div>
      </div>
      <h3>Antalya</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "activedistricts",

}
</script>
<style scoped lang="scss">
h2 {
  margin-inline: auto;
}

.cities {
  display: flex;
  justify-content: space-between;

  .city-content {
    text-align: center;


    .city {
      border-radius: 50%;
      width: 280px;
      height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-position: center;
      background-size: cover;
    }

    h3 {
      margin-top: 20px;
    }

    .number {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: white;
      background-color: rgba(0, 0, 0, 0.596);
      width: 40px;
      height: 40px;
    }

    .istanbul {
      background-image: url(https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg);
    }

    .ankara {
      background-image: url(https://images.pexels.com/photos/14642058/pexels-photo-14642058.jpeg);
    }

    .izmir {
      background-image: url(https://images.pexels.com/photos/14267576/pexels-photo-14267576.jpeg);
    }
  }

  .antalya {
    background-image: url(https://images.pexels.com/photos/13220446/pexels-photo-13220446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  }

}
</style>