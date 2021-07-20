<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Fortalezas, Oportunidades, Debilidades y Amenazas (matriz FODA)

    p La matriz FODA o DOFA (Fortalezas, Oportunidades, Debilidades y Amenazas), es una importante herramienta de diagnóstico, que contribuye con la formulación de estrategias para intervenir la empresa. Las siglas provienen del acrónimo en inglés SWOT (Strenghts, Weaknesses, Opportunities, Threats).
    p Algunas de sus características son reconocibles en la figura 12:
    
    p.text-small.r-n Características FODA
    .col-11.col-lg-auto.justify-content-md-center.p-5
        figure.mb-5
          img(src="@/assets/tema4/img-1.svg")     



        
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
