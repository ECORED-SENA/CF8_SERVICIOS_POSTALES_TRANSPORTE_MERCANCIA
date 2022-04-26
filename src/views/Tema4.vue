<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Equipos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4: img(src='@/assets/curso/29.png' alt='AvatarTop')
      .col-lg-7: p Las máquinas para empaque y embalaje permiten envolver de manera eficiente la mercancía para facilitar la manipulación, almacenamiento y transporte. Así mismo, se logra evitar pérdidas o roturas que podrían generar sobrecostos en la producción.
        br
        br
        |Contar con maquinaria para empaque y embalaje permite acelerar la producción, optimizar espacio y tiempo y disminuir costos; la elección de cada una dependerá del tipo de producto que se manipule, entre las principales ventajas se encuentran por la utilización de maquinaria se encuentran:
    .d-flex.flex-wrap.justify-content-center.mb-5
      .tarjetas-icono.mx-1.mb-4
        .tarjeta.tarjeta-icono-hover.bg-verde-claro.p-4.mb-3.h-100(style='width: 228px; position: relative;')
          .d-flex.justify-content.position-absolute.w-100(style='top: -10%; left: 0;')
            img(src='@/assets/curso/89.svg' style='max-width: 120px').mb-4.m-auto
          br
          h4.text-center.mt-5.mb-0 Eficiencia y ahorro en tiempo
      .tarjetas-icono.mx-1.mb-4
        .tarjeta.tarjeta-icono-hover.bg-verde-claro.p-4.mb-3.h-100(style='width: 228px; position: relative;')
          .d-flex.justify-content.position-absolute.w-100(style='top: -10%; left: 0;')
            img(src='@/assets/curso/90.svg' style='max-width: 120px').mb-4.m-auto
          br
          h4.text-center.mt-5.mb-0 Seguridad para los empleados
      .tarjetas-icono.mx-1.mb-4
        .tarjeta.tarjeta-icono-hover.bg-verde-claro.p-4.mb-3.h-100(style='width: 228px; position: relative;')
          .d-flex.justify-content.position-absolute.w-100(style='top: -10%; left: 0;')
            img(src='@/assets/curso/91.svg' style='max-width: 120px').mb-4.m-auto
          br
          h4.text-center.mt-5.mb-0 Reducción en costos de materiales
      .tarjetas-icono.mx-1.mb-4
        .tarjeta.tarjeta-icono-hover.bg-verde-claro.p-4.mb-3.h-100(style='width: 228px; position: relative;')
          .d-flex.justify-content.position-absolute.w-100(style='top: -10%; left: 0;')
            img(src='@/assets/curso/92.svg' style='max-width: 120px').mb-4.m-auto
          br
          h4.text-center.mt-5.mb-0 Mejora en el control de inventario
      .tarjetas-icono.mx-1.mb-4
        .tarjeta.tarjeta-icono-hover.bg-verde-claro.p-4.mb-3.h-100(style='width: 228px; position: relative;')
          .d-flex.justify-content.position-absolute.w-100(style='top: -10%; left: 0;')
            img(src='@/assets/curso/93.svg' style='max-width: 120px').mb-4.m-auto
          br
          h4.text-center.mt-5.mb-0 Contar con una máquina para cada necesidad
    p.mb-5 Por otra parte, las principales máquinas para realizar la labor de empaque y embalaje son:
    SlyderE(indicadores="")
      .row
        .col-md-5.mb-4.mb-md-0
          h4 Flejadora
          p Sirve para acordonar la mercancía entre sí de manera horizontal, vertical o en pallet. Este flejado o acordonado se lleva a cabo con un fleje que rodea la carga para estabilizarla durante el transporte o manipulación permitiendo así una correcta recepción por el cliente.
            br
            |Esta es una de las formas más eficaces para asegurar una carga, ya que permite mayor seguridad de cierre.

            br
            br
            |Los materiales utilizados para el fleje pueden ser: plástico, poliéster, acero, entre otros.

            br
            br
            |Estas máquinas son normalmente utilizadas en empresas como alimentación, industria textil o cosmética que se encargan de fabricar, producir y transportar sus productos.
        .col-md-7
          figure.mb-5
            img(src='@/assets/curso/94.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h4 Retractiladora
          p Es la técnica de embalaje más utilizada y hacen referencia a máquinas que empaquetan o envuelven la mercancía con una película termoplástica que se retrae y adapta a la forma del producto.
            br
            br
            |El proceso para retractilar consta de dos fases principales, en la primera se sella para cerrar el plástico y la segunda consiste en adherir y fijar el plástico al producto.
            br
            br
            |Permite automatizar el proceso de embalaje y disminuir costos ya que estira la cantidad exacta de material necesario y no malgasta recursos en el proceso.
        .col-md-7
          figure.mb-5
            img(src='@/assets/curso/95.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h4 Envolvedora
          p Se usa para envolver un plástico alrededor de una serie de productos, permite ahorro de costos en material adicionalmente permite mayor productividad y salida de carga uniforme para acomodar en <em>pallets.</em>
            br
            br
            |Al cubrir con papel <em>film</em> toda la carga se evitan daños, riesgos de caída o rotura.
        .col-md-7
          figure.mb-5
            img(src='@/assets/curso/96.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h4 Precintadora
          ul.lista-ul--color
            li
              i.fas.fa-circle
              | Sirve para cerrar las cajas con cinta adhesiva.
            li
              i.fas.fa-circle
              p.mb-0 Normalmente se encuentran en empresas que diseñan productos manufacturados con gran volumen de ventas, los que deben ser embalados para después transportarlos en <em>pallets.</em>
            li
              i.fas.fa-circle
              | Aportan seguridad e imagen de marca.
            li
              i.fas.fa-circle
              | En el almacenaje de artículos de pequeño tamaño, normalmente se realiza el embalaje con cajas de cartón haciendo uso del precintado.
        .col-md-7
          figure
            img(src='@/assets/curso/97.jpg', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
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
.bg-verde-claro
  background-color: #b1e0d9 !important
</style>
