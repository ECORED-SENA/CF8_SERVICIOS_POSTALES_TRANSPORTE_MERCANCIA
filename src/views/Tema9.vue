<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Gestión documental y registro de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4: img(src='@/assets/curso/126.png')
      .col-lg-7 
        p La validación de los documentos que hacen parte de un embarque resulta de gran importancia, ya que de estos depende mantener la legalidad de la comercialización de la mercancía, llegar a un adecuado registro y mantener control sobre los inventarios.
          br
          br
          |En ocasiones se pueden presentar situaciones de validación documental que se deben tener en cuenta, como la falta de documentación a través de la cual se valide la mercancía, como la factura de venta, registro de nacionalización o permiso especial de transporte para materiales restringidos si es el caso.
    p.mb-5 A través del <em>packing list</em> se puede tener un respaldo de la mercancía que se ha cargado en un contenedor, es decir, se le garantiza al exportador que durante el transporte se tiene un documento que identifica la carga, esta debe contener:
    .row.mb-5
      .col-lg-6
        .tarjeta.d-flex.align-items-center.p-5
          .bg-violeta.rounded-0(style='width: 10px; height: 100%').me-3.py-5
          img(src='@/assets/curso/127.svg', alt='Texto que describa la imagen' style='width: 120px').me-4
          p.mb-0.fw-bold Cantidad exacta de los productos que se encuentran embalados.
      .col-lg-6
        .tarjeta.d-flex.align-items-center.p-5
          .tarjeta.color-acento-contenido.rounded-0(style='width: 10px; height: 100%').me-3.py-5
          img(src='@/assets/curso/128.svg', alt='Texto que describa la imagen' style='width: 120px').me-4
          p.mb-0.fw-bold Números, marcas o símbolos que identifican la mercancía.
    p.mb-5 Para ello, es importante empacar toda la mercancía que sea del mismo tipo, anexar la factura y descripción de productos, incluyendo peso y volumen exacto.
      br
      br
      |Normalmente la expedición de la mercancía va a acompañada de una serie de documentos, pero los más importantes cuando el transporte lo efectúa un tercero son:
    .bg-violeta-claro.p-5 
      SlyderA(tipo='a')
        .row.justify-content-center.align-items-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure.img-rounded
                img(src='@/assets/curso/129.jpg', alt='Texto que describa la imagen')
          .col-md-5
            h4 Nota de entrega
            p Documento que acompaña a la mercancía en el proceso de expedición, tiene como función principal ser justificante de la entrega.
        .row.justify-content-center.align-items-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure.img-rounded
                img(src='@/assets/curso/130.jpg', alt='Texto que describa la imagen')
          .col-md-5
            h4 Hoja de ruta
            p La expedición se organiza por rutas de reparto que deben ser asignadas a los transportadores, en esta se indican los diferentes destinos a atender junto con la orden de entrega. Para cada entrega se deben especificar los bultos y observaciones que existen.
        .row.justify-content-center.align-items-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure.img-rounded
                img(src='@/assets/curso/131.jpg', alt='Texto que describa la imagen')
          .col-md-5
            h4 Carta de porte
            p Es el documento que prueba la existencia de contrato de transporte, sirve de soporte de recibo de la mercancía del cargador frente al transportista.
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
.bg-violeta-claro
  background-color: #dce0f9
  .slyder-a__btn--sigt
    background-image: url(../assets/curso/slyder-btn.svg)
    background-color: transparent
    background-size: 40px
  .slyder-a__btn--atrs
    background-image: url(../assets/curso/slyder-btn.svg)
    background-color: transparent
    background-size: 40px
.img-rounded
  img
    border-radius: 20px !important
</style>
