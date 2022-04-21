<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Consolidación y desconsolidación de mercancía
    .row.justify-content-center.mb-5
      .col-lg-9
        .bloque-texto-g.color-acento-contenido.position-relative.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/21.jpg')})`}"
          )
          img.d-none.d-lg-block(src='@/assets/curso/102.png', alt='Texto que describa la imagen' style='position: absolute ; bottom: 0 ; left: -3.2%; width: 360px')
          .bloque-texto-g__texto.px-5.py-4
            p.mb-0 Cada consolidación consiste en la agrupación de distintas cargas que comparten un mismo destino o ruta, para ello <b>es necesario conocer el envase y el embalaje de la mercancía para determinar la manera de disponer de ella dentro del contenedor para que llegue en buen estado a su destino.</b> La carga consolidada permite el aprovechamiento del espacio y la consecuente disminución de los costos de transporte.
    p.mb-5 A través de la consolidación se logra:
    .row.mb-5.justify-content-between
      .col-lg-2
        .tarjeta.p-1
          .d-flex.justify-content-center
            img(src='@/assets/curso/103.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-secundario
            p Asegurar el producto para facilitar su manejo y manipulación.
      .col-lg-2
        .tarjeta.p-1
          .d-flex.justify-content-center
            img(src='@/assets/curso/104.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-primario
            p Una mayor protección de los productos.
      .col-lg-2
        .tarjeta.p-1
          .d-flex.justify-content-center
            img(src='@/assets/curso/105.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-acento-contenido
            p Facilitar su almacenamiento.
      .col-lg-2
        .tarjeta.p-1
          .d-flex.justify-content-center
            img(src='@/assets/curso/106.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-acento-botones
            p Ahorrar espacio.
      .col-lg-2
        .tarjeta.p-1
          .d-flex.justify-content-center
            img(src='@/assets/curso/107.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-alt1
            p Facilitar las maniobras de carga y descarga. 
    p.mb-5 Es importante tener en cuenta:
    .contain.p-5.mt-5
      .row.mb-5.mt-5
        .col-lg-4.position-relative.d-none.d-lg-block
          img(src='@/assets/curso/109.svg' style='position: absolute; left: 0 ; top: -20%; width: 328px')
        .col-lg-8
          p.fw-normal Para realizar la consolidación, primero se debe agrupar la mercancía que será embalada para dividirla dependiendo de los destinos o rutas de transporte. El embalaje se realiza a través de retractilado y flejado, vistos anteriormente, para estabilizar la carga y brindarle protección, y a través del etiquetado se identifica la mercancía embalada.
          h4.titulo-cuarto Existen dos formas de consolidación de la mercancía:
          .row.mb-0.mb-lg-5
            .col-lg-6.mb-3
              .tarjeta.tarjeta-absolute.p-4
                h5 Agrupación por clientes: 
                p se trata de agrupar los pedidos de un solo cliente en un único envío, lo cual reduce los costos de transporte.
                img(src='@/assets/curso/110.svg' style='width: 180px ; left: 0 ; bottom: -15%') 
            .col-lg-6.mb-3
              .tarjeta.tarjeta-absolute.p-4
                h5 Agrupación por destinos:
                p se agrupa la mercancía de distintos clientes que se encuentran en única ruta de transporte y en el mismo medio para transportarlas.
                img(src='@/assets/curso/111.svg' style='width: 200px ; right: 0 ; bottom: -15%') 
      p.mb-5.mt-5 En el caso de la desconsolidación, se trata de desagrupar los embarques que tienen diferentes destinatarios, esta actividad debe ser realizada en instalaciones donde la descarga sea ágil y se pueda poner en los lugares adecuados. 
      h4.titulo-cuarto Existen dos formas principales de desconsolidación:
      .row.justify-content-center.mb-5.g-2
        .col-lg-5.mb-3
          .tarjeta.tarjeta-absolute2.d-flex.align-items-end.p-4
            img(src='@/assets/curso/112.svg' style='width: 200px ; left: -5% ; top: 5%').mb-3
            p <b>Desagrupación de embarques consolidados en un mismo documento de transporte:</b> las mercancías tienen diferentes destinatarios y requieren una posterior distribución.
        .col-lg-5.mb-3
          .tarjeta.tarjeta-absolute2.d-flex.align-items-end.p-4
            img(src='@/assets/curso/113.svg' style='width: 170px ; right: -5% ; top: 5%').mb-3
            p <b>Desagrupación de embarques consolidados en un mismo packing list:</b> se trata de aquellos que requieren ser clasificados en referencias para una posterior ubicación en el almacén en espera de definir su configuración de expedición. 
      p.mb-5 El procedimiento de desconsolidación se realiza, por lo general, en centros de distribución para luego enviar la mercancía a los destinatarios. Por ejemplo, cuando llega un contenedor a puerto, este debe ser vaciado atendiendo al protocolo logístico establecido para que la mercancía sea reordenada y realizar el posterior envío en los camiones encargados de la distribución.  

























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
.bloque-texto-g__img
  filter: blur(.2px)
.contain
  background-image: url(../assets/curso/bg-contain.svg)
  background-repeat: no-repeat
  background-position: end
  background-size: cover
.tarjeta-absolute
  background-color: #fee8b3
  position: relative
  min-height: 410px
  img
    position: absolute
    @media (max-width: $bp-max-lg)
      position: relative
      margin: 0 auto
.tarjeta-absolute2
  background-color: #fee8b3
  position: relative
  min-height: 324px
  @media (max-width: $bp-max-lg)
    display: block !important
    height: 100%  !important
  img
    position: absolute
    @media (max-width: $bp-max-lg)
      position: relative !important
      margin: 0 auto
      left: 0 !important
      top: 0  !important
</style>
