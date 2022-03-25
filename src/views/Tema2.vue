<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2 
      h1 Características de la mercancía y objetos postales
    p.mb-5 Resulta de gran importancia dentro del proceso de empaque conocer el tipo de mercancía y su naturaleza.
      br
      br
      |Según su tipo:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.tarjeta-icon
          img(src='@/assets/curso/62.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-purple-claro.w-100
            .p-5
              h4 Mercancía general
              p La conforman productos individuales, puede ser suelta o unitarizada. Dentro de la carga suelta se encuentran los productos individuales, manipulados como unidades separadas tales como cajas, barriles, fardos, etc.; y en la carga unitarizada se encuentra la mercancía que está agrupada en unidades como paletas y contenedores. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.tarjeta-icon
          img(src='@/assets/curso/63.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-purple-claro.w-100
            .p-5
              h4 Mercancía granel
              p Para el caso de la carga a granel, como el aceite, minerales y cereales, se almacenan en tanques o silos y no requiere embalaje o unitarización. 
    p.mb-5 Por su naturaleza se dividen en carga:
    .row.mb-5
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/64.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-secundario
            p Perecedera (alimentos).
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/65.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-primario
            p Frágil (vidrio, obras de arte). 
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/66.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-acento-contenido
            p Peligrosa (municiones, combustibles, químicos, etc.).
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/67.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-acento-botones
            p De dimensiones y pesos especiales (plantas eléctricas). 
    p.mb-5 Para determinar el envase o empaque adecuado de cualquier producto, es importante cuestionarse sobre el tipo de producto para definir el nivel de protección necesaria, pues no todos requieren el mismo nivel de protección frente a eventualidades. 
      br
      br
      |A continuación, se presenta un ejemplo de diferentes tipos de productos y sus necesidades más importantes de protección:
    .row.justify-content-center.mb-5
      .col-lg-6
        LineaTiempoD.color-acento-contenido
          .text-small(numero="1" titulo="Frutas y hortalizas")
            p Golpes, magulladuras, temperaturas.
            figure.mb-5
              img(src='@/assets/curso/68.jpg', alt='Texto que describa la imagen')
          .text-small(numero="2" titulo="Enlatados")
            p Humedad, golpes.
            figure.mb-5
              img(src='@/assets/curso/69.jpg', alt='Texto que describa la imagen')
          .text-small(numero="3" titulo="Textiles")
            p Moho, polillas, polvo, decoloración. 
            figure.mb-5
              img(src='@/assets/curso/70.jpg', alt='Texto que describa la imagen')
          .text-small(numero="4" titulo="Productos de madera ")
            p Rayones, humedad, decoloración, combustión. 
            figure.mb-5
              img(src='@/assets/curso/71.jpg', alt='Texto que describa la imagen')
          .text-small(numero="5" titulo="Productos metálicos")
            p Humedad, rayado, golpes, rotura.
            figure.mb-5
              img(src='@/assets/curso/72.jpg', alt='Texto que describa la imagen')
          .text-small(numero="6" titulo="Papel")
            p Humedad, luz, combustión.
            figure.mb-5
              img(src='@/assets/curso/73.jpg', alt='Texto que describa la imagen')
          .text-small(numero="7" titulo="Paja o similares")
            p Humedad, compresión, combustión.
            figure.mb-5
              img(src='@/assets/curso/74.jpg', alt='Texto que describa la imagen')
          .text-small(numero="8" titulo="Joyería")
            p Pérdida, robo, rotura.
            figure.mb-5
              img(src='@/assets/curso/75.jpg', alt='Texto que describa la imagen')
    p.mb-5 También es importante tener en cuenta el nivel de protección de acuerdo con el estado físico y el tipo de producto teniendo en cuenta aspectos como la durabilidad y condiciones de conservación:
    h3.titulo-tercero Producto perecedero 
    p.mb-5 En esta clasificación hacen parte la mayoría de los productos alimenticios y aquellos que cuentan con fecha de vencimiento; para el manejo del inventario se debe dar salida primero a los más antiguos y para estos productos se requieren medios de preservación, como control de temperatura.
      br
      br
      |Según sus condiciones de conservación se pueden encontrar los siguientes tipos:
    .titulo-sexto.color-primario
      h5 Tabla 1
      span Clasificación de los productos perecederos según las condiciones de conservación
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr.bg-blue
            th.h4 Tipo
            th.h4 Descripción
            th.h4 Ejemplo
        tbody
          tr
            td.fw-bold Temperatura ambiente
            td Productos que se manejan bajo condiciones de temperatura sin ninguna alteración. 
            td Cosméticos, aseo personal, cereales, enlatados, galletas, snacks, aceites, granos.
          tr
            td.fw-bold Refrigerado
            td Productos que se deben conservar a una temperatura entre 1°C y 8° C.
            td Pescado, carne, pollo, leche, postres, frutas, verduras, flores, plantas.
          tr
            td.fw-bold Congelado
            td Productos que se deben almacenar en cámaras especiales con una temperatura menos a 18 °C.
            td Carne, pollo, pescado, pulpas, verduras, postres, productos listos para comer.
          tr
            td.fw-bold Fresco
            td Productos que requieren ubicarse en lugares frescos sin necesidad de ser congelados o refrigerados, en ocasiones se necesita conservar después de abierto en la nevera.
            td Leche, jugos, vino, chocolates, frutas y verduras.
    h3.titulo-tercero  Producto frágil 
    p.mb-5 Requiere de un manejo especial durante el transporte y las operaciones de embalaje, manipulación y traslado deben realizarse con cuidado, ya que sus características así lo exigen y esto se logra al utilizar una cantidad suficiente de material que le dé a la carga una amortiguación apropiada.
      br
      br
      |Los puntos críticos en el transporte y distribución física de la carga frágil son: 
    .tarjeta.contenedor-amarillo.p-5.mb-5(style=' background-color: #fff3d8 ')
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span a
          | El cargue y descargue.
        li 
          .lista-ol--cuadro__vineta
            span b
          | El movimiento en el vehículo de transporte.
        li 
          .lista-ol--cuadro__vineta
            span c
          | El almacenamiento y bodegaje.
    h3.titulo-tercero Productos peligrosos 
    p.mb-5 Son sustancias en estado sólido, líquido o gaseoso que, por sus características, pueden ocasionar daño al ser humano, al medio ambiente o a los bienes. Por ende, se les debe dar un tratamiento especial durante su almacenamiento y transporte. Para ello, hay que establecer cuáles son los materiales peligrosos que pueden poner en riesgo la vida humana o instalaciones, conocer las regulaciones y cumplirlas.






</template>

<script>
export default {
  name: 'Tema2',
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
.bg-purple-claro
  background-color: #dce0f9
.tarjeta-avatar.tarjeta-icon
  img
    left: 20%
.bg-blue
  background-color: $color-secundario
  th
    color: $white
.tabla-a
  thead
    border-top: 0
</style>
