<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Organigrama
    p El organigrama institucional permite a la organización tener una estructura establecida con todas las áreas que componen la entidad, teniendo en cuenta los requerimientos de: recursos humanos, niveles de centralización y descentralización, grados de decisión, autoridad otorgada y complejidad de las unidades. Para tener claridad frente a los aspectos generales del organigrama, se deben contemplar los siguientes aspectos:
    p.text-small.r-n Organigrama
    .col-11.col-lg-auto.justify-content-md-center.p-5
        figure.mb-5
          img(src="@/assets/tema2/img-1.svg")         

    p.text-bold Según el tipo de información, los organigramas se clasifican en:
    .row.fond3.p-5.mb-5
      SlyderC.mb-5(:datos="datosSlyder")
    p Los organigramas pueden tener diversas representaciones gráficas, lo que ayuda en la comprensión de los elementos que los componen. Acorde con esto, se pueden identificar por representación visual, los siguientes organigramas: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Organigrama vertical")
        figure
          img(src='@/assets/tema2/img-9.svg')
          

      div(titulo="Organigrama horizontal")
        figure
          img(src='@/assets/tema2/img-10.svg')
 

      div(titulo="Organigrama circular")
        figure
          img(src='@/assets/tema2/img-11.svg')

          
            

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        texto:
          '<strong>Analíticos:</strong> muestran datos detallados y específicos de la organización. ',
        imagen: require('@/assets/tema2/img-2-.svg'),
      },
      {
        texto:
          '<strong>Informativos:</strong> solo muestran la información más relevante.',
        imagen: require('@/assets/tema2/img-3-.svg'),
      },
      {
        texto:
          '<strong>Formales:</strong> representan la parte formal de una empresa y requieren de aprobación previa.',
        imagen: require('@/assets/tema2/img-4.svg'),
      },
      {
        texto:
          '<strong>Informales:</strong> no han sido aprobados por la empresa; sin embargo, cada integrante conoce sus funciones.',
        imagen: require('@/assets/tema2/img-5.svg'),
      },
      {
        texto:
          '<strong>Jerárquico:</strong> depende del poder o control dentro de la empresa (de mayor a menor), siguiendo un diseño piramidal. ',
        imagen: require('@/assets/tema2/img-6.svg'),
      },
      {
        texto:
          '<strong>Matricial:</strong> empresas con más de un director, o más de un responsable por proyecto, o más de un superior por departamento o trabajador.',
        imagen: require('@/assets/tema2/img-7.svg'),
      },
      {
        texto:
          '<strong>Plano:</strong> organigrama sin cargos de mandos intermedios, dos roles: directivos y empleados.',
        imagen: require('@/assets/tema2/img-8-.svg'),
      },
    ],
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
