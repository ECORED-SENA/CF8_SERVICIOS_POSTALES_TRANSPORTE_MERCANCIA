<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Unidad de carga para logística 
    .row.mb-5.g-0
      .col-lg-4
        img(src='@/assets/curso/114.png')
      .col-lg-8
        p Corresponde a la carga convertida en una sola unidad de transporte intermodal, también llamada unitarización de la carga a través de la agrupación de embalajes. La unidad de carga reduce la superficie de almacenamiento, facilita las operaciones de manipulación de mercancía y favorece las operaciones logísticas.
          br
          br
          | A través de la unitarización se agrupa la mercancía en unidades convencionales de manera que pueda ser manipulada durante las operaciones de cargue y descargue, almacenamiento y transporte en operaciones logísticas nacionales o internacionales.
        .cajon.color-acento-contenido.bg-rosa.p-4.mb-2
          p La unidad de carga se puede apreciar al poner un sistema de empaque o embalaje sobre <em>pallets</em>, asegurándola a través de accesorios como esquineros, zunchos, grapas, mallas o películas envolventes para que se pueda transportar como una solo unidad de carga de manera segura, reduciendo superficies de almacenamiento, facilitando la manipulación de la mercancía y favoreciendo las operaciones logísticas. 
        p Varias unidades de carga pueden agruparse en contenedores o remolques, convirtiéndose así en la unidad de un contenedor.
    p.mb-5 A continuación, se presenta una ilustración donde puede apreciar de manera clara el producto pasando desde su empaque primario hasta la carga paletizada, conformando de esta manera la unidad de carga:
    .row.justify-content-center.mb-5
      .col-lg-12: img(src='@/assets/curso/115.svg')
    p.mb-5 Los materiales que conforman la unidad de carga deben cumplir con los requisitos que se establecen en las normas ISO y la legislación medioambiental y fitosanitaria del país de origen y de destino final.
      br
      br
      |Las modalidades más comunes de unitarización son: 
    h3.titulo-tercero Paletización
    p.mb-5 Se trata de disponer la mercancía sobre un <em>pallet</em> para facilitar su almacenaje y transporte, los tipos de <em>pallet</em> son diversos, normalmente son de madera, pero también pueden ser de metal o plástico.
      br
      br
      | Para realizar esta actividad deben considerarse los siguientes aspectos:
    .contenedor-slyder.p-5.bg-morado-claro.position-relative.mb-5
      .img-float: img(src='@/assets/curso/float1.png', alt='Texto que describa la imagen')
      SlyderA(tipo='a')
        .row.justify-content-center.align-items-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure
                img(src='@/assets/curso/116.png', alt='Texto que describa la imagen')
          .col-md-5
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | La superficie del <em>pallet</em> debe estar ocupada totalmente para obtener un peso óptimo.  
              li
                i.fas.fa-angle-right
                | La unidad de carga debe estar conformada por cajas, bultos, sacos o bidones de las mismas dimensiones o muy similares.  
              li
                i.fas.fa-angle-right
                | La unidad de carga formada por cajas de cartón debe alinearse en forma vertical haciendo coincidir sus cuatro esquinas y evitar sobrepasar los bordes de la estiba para evitar que queden en voladizo, además no deben exceder la altura máxima determinada. 
        .row.justify-content-center.align-item-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure
                img(src='@/assets/curso/117.png', alt='Texto que describa la imagen')
          .col-md-5 
            p Las medidas estándar de un <em>pallet</em> cambian entre un país y otro, sin embargo, las medidas más utilizadas son: Estados Unidos: 1.219 mm de ancho por 1.016 mm de fondo (48” x 40”); Europa: 1.200 mm de ancho por 1.000 mm de fondo (1.2 m x 1 m). En Colombia el Instituto Colombiano de Normas Técnicas (Icontec), con el fin de estandarizar el uso de <em>pallets</em>, emitió la norma NTC 4680-2013, en la cual se evidencia la normalización existente sobre <em>pallets</em> y los requerimientos exigidos según el comercio internacional.
    h3.titulo-tercero Contenedorización
    p.mb-5 El transporte en contenedores garantiza la entrega rápida y segura de los envíos, disminuye costos y reduce de manera considerable el riesgo de daños o hurtos de la mercancía. Básicamente consiste en una caja de alta resistencia a la manipulación, diseñada para transportar mercancías.
      br
      br
      |Según su tipo, se presentan diferentes dimensiones y es muy importante conocer características como dimensiones y peso con el fin de preparar la carga y la manera de acomodación y llenado, las ventajas y los organismos de normalización son:
    .contenedor-slyder.dots-red.p-5.bg-rosa.position-relative.mb-5
      .img-float: img(src='@/assets/curso/float1.png', alt='Texto que describa la imagen')
      SlyderA(tipo='a')
        .row.justify-content-center.align-items-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure
                img(src='@/assets/curso/118.png', alt='Texto que describa la imagen')
          .col-md-5
            p Principales ventajas que tiene el uso del contenedor:
            .d-flex.align-items-center.mb-3
              img(src='@/assets/curso/120.svg' style='width: 47px').me-4
              p.mb-0 Protege la mercancía frente a daños o robos.
            .d-flex.align-items-center.mb-3
              img(src='@/assets/curso/121.svg' style='width: 47px').me-4
              p.mb-0 Facilita la entrega rápida de la mercancía.
            .d-flex.align-items-center.mb-3
              img(src='@/assets/curso/122.svg' style='width: 47px').me-4
              p.mb-0 Reduce las tarifas. 
        .row.justify-content-center.align-items-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure
                img(src='@/assets/curso/118.png', alt='Texto que describa la imagen')
          .col-md-5
            h4 Organizaciones a nivel mundial encargadas de la normalización de los contenedores:
            .d-flex.align-items-center.mb-3
              img(src='@/assets/curso/123.svg' style='width: 47px').me-4
              p.mb-0 <b>ISO:</b> regula los contenedores utilizados en el transporte marítimo y terrestre. 
            .d-flex.align-items-center.mb-3
              img(src='@/assets/curso/124.svg' style='width: 47px').me-4
              p.mb-0 <b>IATA:</b> regula los contenedores de transporte aéreo y que se adaptan a las medidas del avión que los transporta.
            





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
.bg-rosa
  background-color: #ffcec9 !important
.bg-morado-claro
  background-color: #dce0f9 !important
.dots-red
  .slyder-a__bullets__item
    background-color: transparent
    border: 3px solid #ff8578
  .slyder-a__bullets__item--active
    background-color: #ff8578
</style>
