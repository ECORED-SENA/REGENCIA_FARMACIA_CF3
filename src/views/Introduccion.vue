<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.p-5  
      .col-lg.justify-content-md-center.align-self-center     
        p Orientar asertivamente los clientes internos y externos de acuerdo con sus necesidades y expectativas, es un tema importante para el regente de farmacia. Es entonces aquí que surge el interrogante: ¿Cómo se logra esto?
        p Mediante el reconocimiento y la comprensión de la misión, la visión y los objetivos institucionales; todo esto se ajusta con el fin de brindar información clara y concreta sobre el portafolio de servicios de las instituciones prestadoras de servicios de salud, específicamente las relacionadas con el sector farmacéutico.
 
        .row.justify-content-around.align-items-center.mb-3
          .cajon.color-secundario.p-4.mb-4.fond1.px-4
            p Para cumplir con este objetivo se estudiará, en el componente formativo, qué es la plataforma estratégica de la Institución, su organigrama, mapa de procesos, la matriz DOFA, el reglamento, clima organizacional, portafolio de servicios y, no se puede dejar de lado un tema importante, el servicio al cliente y, por supuesto, los principios éticos y bioéticos en la prestación del servicio.
          h4.text-center ¡Muchos éxitos en este proceso de aprendizaje!
      .col-12.col-lg-auto.justify-content-md-center.mb-4
        figure.mb-5
          img(src="@/assets/tema1/img-intro.svg")  
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-5 La necesidad de mitigar la pandemia por COVID-19 ha obligado a la comunidad científica internacional, a desarrollar una serie de investigaciones y desarrollos tendientes a presentar una vacuna para hacerle frente a esta enfermedad que aumenta día a día su morbi mortalidad en Colombia. Es así, como en diciembre de 2020, la comunidad científica presenta los resultados de varios desarrollos de vacunas, que ofrecen eficacia y seguridad, respaldados por estudios clínicos rigurosos.

    figure.mb-5
      img(src="@/assets/curso/banner-intro.jpg", alt="Texto que describa la imagen")
      figcaption Imagen 1. Vacunación

    p.mb-0 La llegada de nuevas vacunas al país supone un reto para el talento humano en salud responsable de la vacunación y desarrollar habilidades para ofrecer una orientación oportuna y segura a las personas objeto de la vacuna.
      br
      br
      | En ese orden de ideas, este componente formativo guía al aprendiz hacia la identificación de los aspectos normativos, técnicos y operativos de la vacunación contra COVID19 en Colombia y de las generalidades de la infección por SARS-2 COVID 19.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
