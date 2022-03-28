<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Almacenamiento y bodegaje de los objetos postales y mercancías
    p.mb-5 La función de almacenaje es una parte fundamental del sistema de distribución, a través de esta se realiza el manejo temporal de la mercancía manteniéndolos en un espacio determinado para evitar su deterioro y reducir espacio y así conseguir los principales objetivos del almacén:
    .row.mb-5
      .col-lg-6
        .tarjeta.d-flex.align-items-center.p-5
          .bg-violeta.rounded-0(style='width: 10px; height: 100%').me-3.py-5
          img(src='@/assets/curso/118.svg', alt='Texto que describa la imagen' style='width: 120px').me-4
          p.mb-0 Minimización del costo total de la operación.
      .col-lg-6
        .tarjeta.d-flex.align-items-center.p-5
          .tarjeta.color-acento-contenido.rounded-0(style='width: 10px; height: 100%').me-3.py-5
          img(src='@/assets/curso/119.svg', alt='Texto que describa la imagen' style='width: 120px').me-4
          p.mb-0 Provisión de los niveles de servicio deseados.
    p.mb-5 Para dar cumplimiento a estos objetivos, es necesario considerar tres elementos principales: recursos humanos, espacio y equipos, el costo depende del nivel de productividad de cada uno de los elementos y de cómo interactúan; el nivel de servicio está determinado por la eficiencia y eficacia de los procesos y procedimientos para recibir, almacenar y expedir productos.
    .contenedor-amarillo-claro.p-5.mt-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5
          .contenedor-imagen
            img(src='@/assets/curso/125.svg', alt='Texto que describa la imagen' style='width: 100%')
            .px-4
              p.h1.fw-normal ¿Cuál es la diferencia entre almacenamiento y bodegaje?
        .col-lg-7.p-4
          p El papel del almacén depende de la naturaleza de la operación. Por ejemplo, en algunos casos se convierte en un lugar de paso donde se desconsolidará la carga para preparar los pedidos de los clientes y en este caso la manipulación se convierte en una actividad de gran importancia.
            br
            br
            |En otros casos cumplen la función de almacenar bienes y materiales durante largos periodos.
            br
            br
            |En cuanto al <b>bodegaje</b>, este cumple la función de albergar la mercancía, sin embargo, no ejerce ningún proceso dentro de la empresa, se utiliza para guardar todo tipo de mercancía, pero no se relaciona con los pasos de aprovisionamiento.  
    p.mb-5 Tanto el almacenamiento y bodegaje deben resguardar los productos de posibles daños y garantizar las condiciones de seguridad de los productos, por eso es importante conocer algunos riesgos que se pueden presentar en el almacenamiento bodegaje y de los cuales se deben proteger a los productos:
    .titulo-sexto.color-primario
      h5 Tabla 4 
      span Riesgos que se pueden presentar en el almacenamiento bodegaje
    .row.justify-content-center.mb-5
      .col-lg-9
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr.table-blue
                th.h3 Riesgo
                th.h3 Descripción
            tbody
              tr
                td.fw-bold Mecánicos
                td 
                  ul.lista-ul--color
                    li
                      i.fas.fa-chevron-circle-right
                      |Efectos debido a la compresión (apilamiento defectuoso o irregular).
                    li
                      i.fas.fa-chevron-circle-right
                      |Golpes por caídas durante la manipulación o distribución.
                    li
                      i.fas.fa-chevron-circle-right
                      |Golpes por fuerzas axiales (debido a productos acomodados forzadamente).
                    li
                      i.fas.fa-chevron-circle-right
                      |Ataque al empaque por plagas.
                    li
                      i.fas.fa-chevron-circle-right
                      |Deterioros.
                    li
                      i.fas.fa-chevron-circle-right
                      |Carga mal estibada.
                    li
                      i.fas.fa-chevron-circle-right
                      |Vibración de acuerdo con el modo de transporte.
              tr
                td.fw-bold Físicos/Orgánicos
                td 
                  ul.lista-ul--color
                    li
                      i.fas.fa-chevron-circle-right
                      |Humedad excesiva.
                    li
                      i.fas.fa-chevron-circle-right
                      |Pigmentación o decoloración.
                    li
                      i.fas.fa-chevron-circle-right
                      |Abolladuras.
                    li
                      i.fas.fa-chevron-circle-right
                      |Ralladuras o cortes.
              tr
                td.fw-bold Térmicos
                td 
                  ul.lista-ul--color
                    li
                      i.fas.fa-chevron-circle-right
                      |Al exponerse a temperaturas muy elevadas o bajas debido al ambiente o mal funcionamiento de equipos.
              tr
                td.fw-bold Químicos
                td 
                  ul.lista-ul--color
                    li
                      i.fas.fa-chevron-circle-right
                      |Oxidación.
                    li
                      i.fas.fa-chevron-circle-right
                      |Reacción de los mismos materiales o productos.
              tr
                td.fw-bold Biológicos
                td 
                  ul.lista-ul--color
                    li
                      i.fas.fa-chevron-circle-right
                      |Hongos.
                    li
                      i.fas.fa-chevron-circle-right
                      |Bacterias.
                    li
                      i.fas.fa-chevron-circle-right
                      |Moho.
                    li
                      i.fas.fa-chevron-circle-right
                      |Roedores.
                    li
                      i.fas.fa-chevron-circle-right
                      |Insectos.
              tr
                td.fw-bold Otros
                td 
                  ul.lista-ul--color
                    li
                      i.fas.fa-chevron-circle-right
                      |Lluvia.
                    li
                      i.fas.fa-chevron-circle-right
                      |Fugas.
                    li
                      i.fas.fa-chevron-circle-right
                      | Robo o saqueo.



</template>

<script>
export default {
  name: 'Tema5',
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

<style lang="sass">
.bg-violeta
  background-color: #7380df !important
.contenedor-amarillo-claro
  background-color: #fff7e6
  position: relative
  .contenedor-imagen
    position: absolute
    left: 5%
    top: -7%
    width: 397px !important
  @media (max-width: $bp-max-lg)
    display: flex
    justify-content: center
    align-items: center
    .contenedor-imagen
      position: relative
      left: auto !important
      top: auto !important
      margin: 0 auto
      width: 100%
.table-blue
  background-color: $color-secundario
  th
    color: $white
</style>
