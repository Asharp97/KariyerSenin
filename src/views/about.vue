<template>
  <div class="container gap">

    <h1>Hakkımızda</h1>
    <div class="section">

      <h4>Biz Kimiz?</h4>
      <p>Biz, iş ilanları yayınlayan bir websitesi olarak faaliyet gösteriyoruz.
        Amacımız, iş arayanlar ile işverenleri bir araya getirerek iş bulma sürecini kolaylaştırmaktır.
        Müşteri memnuniyetini ön planda tutan bir yaklaşımla hareket ediyoruz ve kullanıcılarımıza kullanıcı dostu
        bir deneyim sunmayı hedefliyoruz.</p>
    </div>

    <div class="section">

      <h4>Neler Yapıyoruz & Hizmetlerimiz Nelerdir?</h4>

      <div class="boxes">

        <div class="box">
          <h5>İş İlanları Yayınlama:
          </h5>
          <p>
            İşverenlerin iş ilanlarını yayınlamalarını sağlıyoruz. İşverenler, firmaları hakkında detaylı bilgi vererek
            ihtiyaç duydukları pozisyonlar için iş ilanı oluşturabiliyorlar.</p>
        </div>
        <div class="box">
          <h5>İş Arama:
          </h5>
          <p>
            İş arayanlara, kariyer hedeflerine uygun iş fırsatlarını bulmaları için geniş bir iş ilanı veritabanı
            sunuyoruz. İş arayanlar, kriterlerine uygun ilanları arayabilir ve başvurularını kolaylıkla yapabilirler.</p>
        </div>
        <div class="box">
          <h5>Kariyer Danışmanlığı:
          </h5>
          <p>
            Kariyer planlama, özgeçmiş hazırlama ve mülakat teknikleri gibi konularda iş arayanlara destek sağlayan
            kariyer danışmanlığı hizmetleri sunuyoruz. Uzman danışmanlarımız, iş arayanlara kariyer yolculuklarında
            rehberlik ediyor.</p>
        </div>
      </div>
      <div class="section">

        <h4>Vizyonumuz</h4>
        <p>Vizyonumuz, iş arayanlar ve işverenler arasında güvenilir bir köprü oluşturarak istihdam sürecini
          iyileştirmektir. Yenilikçi teknolojileri ve kullanıcı odaklı çözümleri kullanarak iş ilanı yayınlama ve iş bulma
          süreçlerini daha etkili ve verimli hale getirmeyi hedefliyoruz. Aynı zamanda, iş arayanlara kariyerlerini
          geliştirebilecekleri kaynaklar sunarak onları destekliyoruz.
          <br>
          Bu vizyon doğrultusunda, sürekli olarak platformumuzu güncellemek, kullanıcı geri bildirimlerini dikkate almak
          ve iş arayanların ve işverenlerin ihtiyaçlarına uygun çözümler sunmak için çalışıyoruz.
        </p>
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