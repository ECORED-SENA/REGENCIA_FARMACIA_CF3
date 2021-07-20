<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Manejo y solución de conflictos 
    p Las relaciones laborales pueden verse afectadas por muchos tipos diferentes de conflictos, incluidos problemas laborales y personales. Lo más importante es aprender a gestionar las relaciones laborales para lograr los objetivos establecidos sin afectar el entorno laboral. Las organizaciones juegan un papel activo en dar forma y reforzar su cultura. El líder decide qué se debe probar y qué medir. 
    p Para manejar el conflicto se requiere de un buen liderazgo, el cual se constituye como un conjunto de habilidades gerenciales o grupales que un individuo tiene para influir en el comportamiento o conducta de una persona, o dentro de un grupo de trabajo en particular. Este equipo trabaja con entusiasmo para lograr metas u objetivos comunes. 
    p Una de las mayores contribuciones en el campo de la gestión estratégica en los últimos años, ha sido enfatizar la importancia del equipo directivo en el desarrollo de la estrategia y la eficacia o desempeño de una empresa. Las decisiones dentro de este incluyen acciones en la selección de diferentes alternativas para resolver un problema o para lograr las metas establecidas.

    figure.mb-5.px-5
          img(src="@/assets/tema7/img-1.svg")

    p Dentro del liderazgo, es importante considerar el proceso de decisión, en el cual se busca solucionar un problema y/o lograr el objetivo organizacional, como lo muestra la siguiente figura 14.

    p.text-small.r-n Proceso de decisión
    .col-11.col-lg-auto.justify-content-md-center.px-5.mb-5
        figure.mb-5
          img(src="@/assets/tema7/img-2.svg")     

    p Con respecto al manejo y solución de conflictos, se direcciona la forma de manejar las inconformidades de los empleados o los usuarios, por medio de estrategias diseñadas desde la dirección general de la Institución para dar resolución a dichas diferencias, generando un ambiente agradable dentro del ámbito laboral o la prestación del servicio. 

    .row.justify-content-around.align-items-center.p-5.fond8.mb-5 
      .col-lg.justify-content-md-center.align-self-center
        p #[strong Evitar:]
        p Mala comunicación.
        p Desempeño inapropiado. 
        p Diferencia de intereses. 
        p Inflexible. 
        hr
        p #[strong En todo conflicto, se pueden rescatar varios aspectos positivos:]
        p Crecimiento de las partes.
        p Experiencia.
        p Identificar puntos débiles.
        p Oportunidad de mejorar la comunicación y las relaciones.
        p Fomentar la creatividad.
        p Definir los problemas haciéndolos conscientes.

      .col-12.col-lg-auto.justify-content-md-center.mb-4  
        figure.mb-5
          img(src="@/assets/tema7/img-3.svg")  

    p Podría establecerse que el conflicto, real o potencial, podrá presentarse bajo dos orígenes, tal como se observa a continuación en la figura 15.        
    p.text-small.r-n Origen tipos de conflictos
    .row.justify-content-around.flex-d.mb-5
      .col-5.fond2.esp.p-5
        .crd_03
          .crd_03__icon
            img(src="@/assets/tema7/img-4.svg", alt="alt").class          
          .crd_03__txt
            h3 Origen
        p.text-bold.text-center Externo al hombre               
        .ul.lista-ul--color
                li 
                  i.ii.fas.fa-atom
                  p Por diferentes conocimientos.

                li 
                  i.ii.fas.fa-atom
                  p Por tener diversas culturas. 

                li.mb-0 
                  i.mb-0.ii.fas.fa-atom
                  p.mb-0  Por los comportamientos organizacionales: 
                  li.mb-0 
                    i.mb-0
                    p Su cultura.

                li 
                  i.ii.fas.fa-atom
                  p Su distribución. 

                li 
                  i.ii.fas.fa-atom
                  p Su manejo de relaciones interpersonales. 
 
        
      .col-5.fond2-2.esp.p-5      
        .crd_03.mb-0
          .crd_03__icon
            img(src="@/assets/tema7/img-4-.svg", alt="alt").class          
          .crd_03__txt
            h3 Característica
        p.text-bold.text-center Interno al hombre    
        .ul.lista-ul--color
                li 
                  i.fas.fa-atom
                  p Por personalidades diferentes (dependientes, independientes, colaboradores, competitivos).

                li 
                  i.fas.fa-atom
                  p Por su escala de valores.

                li 
                  i.fas.fa-atom
                  p Por dispares percepciones de las situaciones. 

                li 
                  i.fas.fa-atom
                  p Por diferente capacidad de creatividad y/o imaginación.

                li 
                  i.fas.fa-atom
                  p Por la relevancia que le dan sentido de pertinencia. 

    .row.justify-content-around.p-5.fond8.mb-5 
      .col-lg.justify-content-md-center
        p La mejor manera de enfrentar los conflictos es:
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ll
              span 1
            |      Reconocimiento.
          li
            .lista-ol--cuadro__vineta.ll
              span 2
            |      Definir el problema.
          li
            .lista-ol--cuadro__vineta.ll
              span 3
            |      Reconocer la responsabilidad.
          li
            .lista-ol--cuadro__vineta.ll
              span 4
            |      Deseo real de superarlo.
          li
            .lista-ol--cuadro__vineta.ll
              span 5
            |      Tolerancia al punto de vista del otro.
          li
            .lista-ol--cuadro__vineta.ll
              span 6
            |      Diseñar alternativas de solución y estar abiertos a innovaciones.
          li
            .lista-ol--cuadro__vineta.ll
              span 7
            |      Elegir una solución en la que ganen todos. 
          li
            .lista-ol--cuadro__vineta.ll
              span 8
            |      Compromiso con la solución.
    
      .col-12.col-lg-auto.justify-content-md-center.mb-4  
        figure.mb-5
          img(src="@/assets/tema7/img-5.svg")  













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
