<template>
  <div class="layout1 container">
    <div class="textDiv">
      <h2>Beklediğin iş bir tık uzağında </h2>
      <p>Senin kariyerin senin seçimlerin</p>

      <div class="search">
        <div class="icon-search">
          <icon class="icon" icon="fas fa-search" />
          <input type="text" class="input position" placeholder="Pozisyon adı">
        </div>
        <div class="separator"> </div>
        <div class="icon-search">
          <icon class="icon" icon="fas fa-map-marker-alt" />
          <input type="text" class="input city" placeholder="Şehir ya da plaka kodu">
        </div>
        <button class="primary-btn">İş Bul</button>
      </div>
    </div>
    <div class="imgDiv">
      <img src="../assets/handshake.png" class="handshake">
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
}
</script>

<style scoped lang="scss">
@import '../assets/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');


.layout1 {
  display: flex;
  justify-content: space-between;

  .textDiv {

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 42px;
    width: 32%;

    h2 {
      font-size: 46px;
    }

    p {
      font-size: 20px;
    }


    .search {
      min-width: 220px;
      border: solid 1px #C9C9C9;
      border-radius: $radius;
      padding: 12px;
      display: flex;
      width: 750px;
      z-index: 10;
      justify-content: space-between;
      background-color: white;

      .icon-search {
        width: 40%;
        display: flex;
        align-items: center;

        .input {
          border: none;
          padding-left: 12px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          caret-color: $gray;

          &:focus {
            outline: none;

            &::placeholder {
              opacity: 0;
              margin-top: 8px;
            }
          }

          &::placeholder {
            transition: 150ms;
            font-size: 20px;
            padding-block: 12px;
          }
        }

        .icon {
          color: $gray;
          font-size: 25px;
          transform: translateY(-3px);
        }

      }

      .separator {
        font-size: 25px;
        border-right: 2px #a9a9a971 solid;
        height: 52px;
      }

    }
  }

  .imgDiv {
    .handshake {
      width: 100%;
    }
  }
}
</style>
