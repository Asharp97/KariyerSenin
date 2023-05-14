<template>
  <div class="admin container mt">

    <div class="data"></div>
    <div class="form">
      <form action="">

        <label for="position">Pozisyon</label>
        <input type="string" id="position">
        <label for="province">Il</label>
        <select name="dog-names" id="dog-names"></select>
        <label for="district">Il</label>
      </form>

    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
@import "../assets/variables.scss";


.admin {
  display: flex;
  justify-content: space-between;

  .data {
    width: 75%;
    border: $border;
    border-radius: $radius;
  }

  .form {
    form {

      display: flex;
      flex-direction: column;
      width: 20%;
    }

  }
}
</style>