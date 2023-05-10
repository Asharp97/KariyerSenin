<template>
  <div class="container gap">

    <h1>Hakkımızda</h1>
    <div class="section">

      <h4>Biz Kimiz?</h4>
      <p>Lorem ipsum dolor sit amet consectetur. Mauris dictum nascetur sagittis egestas quis. Enim sem rutrum enim quis
        praesent. Lorem tempor id scelerisque a lacus. Quis gravida metus sit fermentum. Faucibus fringilla enim varius
        viverra amet tellus. Morbi nunc facilisi sit ut sed arcu dolor est fames. Hendrerit pretium nec et risus enim
        aliquam faucibus ullamcorper vel. Ultrices cursus gravida nisl ipsum lectus. Justo dui tempus elit malesuada magna
        dui. Purus ultrices mi quam nisi sit duis varius vitae nisl. Morbi platea ut suspendisse suspendisse non
        tristique.
        Nunc lobortis imperdiet diam nunc. Lectus viverra faucibus tellus habitant tempus amet hendrerit. Viverra amet
        cras
        volutpat leo imperdiet.</p>
    </div>

    <div class="section">

      <h4>Neler Yapıyoruz & Hizmetlerimiz Nelerdir?</h4>

      <div class="boxes">

        <div class="box">
          <h5>Vizyonumuz
          </h5>
          <p>
            sit sit aliquam eu ut elit donec. Eu vitae donec elit cras malesuada cras sed lorem ipsum. Nulla enim
            dignissim
            morbi egestas habitant proin. Velit est velit nunc odio vel erat porttitor lorem commodo.</p>
        </div>
        <div class="box">
          <h5>Vizyonumuz
          </h5>
          <p>
            sit sit aliquam eu ut elit donec. Eu vitae donec elit cras malesuada cras sed lorem ipsum. Nulla enim
            dignissim
            morbi egestas habitant proin. Velit est velit nunc odio vel erat porttitor lorem commodo.</p>
        </div>
        <div class="box">
          <h5>Vizyonumuz
          </h5>
          <p>
            sit sit aliquam eu ut elit donec. Eu vitae donec elit cras malesuada cras sed lorem ipsum. Nulla enim
            dignissim
            morbi egestas habitant proin. Velit est velit nunc odio vel erat porttitor lorem commodo.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
@import "../assets/variables.scss";


h1 {
  text-align: center;
}

h4 {
  font-weight: 500;
  font-size: 30px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .boxes {
    display: flex;
    justify-content: space-between;

    .box {
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      h5 {
        color: $primary;
      }
    }
  }
}</style>