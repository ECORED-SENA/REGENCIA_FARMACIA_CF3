<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Mapa de procesos
    p Un #[strong proceso] se define como el conjunto de actividades que se unen a una serie de recursos para producir una transformación de los elementos de entrada, en elementos de salida o resultados, como se puede observar en la siguiente figura 11:


    p.text-small.r-n Mapa de procesos
    .col-11.col-lg-auto.justify-content-md-center.p-5
        figure.mb-5
          img(src="@/assets/tema3/img-1.svg")     

    p Acorde con las características, los mapas de procesos se pueden clasificar de la siguiente manera:           
    .row.fond3.mb-5
      .row.p-5 
        SlyderB(:datos="datosSlyder")

    p.mx-5.mb-5 El mapa de procesos genera una utilidad o beneficio dentro de la organización que lo implemente; dentro de los beneficios más relevantes se encuentran:
    figure.mb-5
          img(src="@/assets/tema3/img-5.svg")          
    p Es importante tener presente lo siguiente:

    .crd_01.mb-4
      .crd_01__icon
        img(src="@/assets/tema3/img-6.svg", alt="alt").class          
      .crd_01__txt
        p Dentro de la estructuración del mapa de procesos, se deben incluir los aspectos del ciclo PHVA (Planear, Hacer, Verificar y Actuar), el cual se estudiará en el tema siguiente. El proceso debe constituir siempre la unidad básica de acción dentro de la empresa, es decir, es el eje de toda la gestión y acciones en pro de la mejora continua y el alcance de los objetivos estratégicos. 
    
    .crd_01
      .crd_01__icon
        img(src="@/assets/tema3/img-7.svg", alt="alt").class          
      .crd_01__txt
        p El #[strong flujograma] se utiliza para representar de manera individual un proceso; en cambio, el mapa de procesos es una representación integral de todos los procesos. 





        
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Mapa de proceso convencional ',
        texto:
          'Comprende los procesos estratégicos, procesos operativos y procesos auxiliares. Dentro de la distribución del mapa, los procesos estratégicos se ubican en la parte superior, los operativos en la parte media y los procesos auxiliares o de apoyo se ubican en la parte inferior. ',
        imagen: require('@/assets/tema3/img-2.svg'),
      },
      {
        titulo: 'Mapa de proceso formal',
        texto:
          'Este tipo de mapa surge al utilizar la clasificación de los procesos sugerida por las Normas ISO (procesos para las actividades de dirección, procesos para realizar los productos, procesos de provisión de recursos, procesos de medición, análisis y mejora).',
        imagen: require('@/assets/tema3/img-3.svg'),
      },
      {
        titulo: 'Mapa de proceso lineal',
        texto:
          'Para este tipo de mapas se utilizan las bases teóricas del diagrama de flujo para la representación global de los procesos de la organización. Despliega los procesos operativos como un diagrama de flujo.',
        imagen: require('@/assets/tema3/img-3.svg'),
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
