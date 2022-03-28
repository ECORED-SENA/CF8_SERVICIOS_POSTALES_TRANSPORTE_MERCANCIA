<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Especificaciones de calidad de las mercancías y objetos postales
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4: img(src='@/assets/curso/98.png' alt='AvatarTop')
      .col-lg-7: p Cada vez las exigencias de calidad de los productos empacados o embalados son mayores, pues estos constituyen un elemento fundamental para que los artículos lleguen en las condiciones correctas al cliente final, adicionalmente es importante garantizar los envases y embalajes requeridos a tiempo y dentro de presupuesto. Si la empresa logística cuenta con un Sistema de Gestión de Calidad, es necesario responder a la política establecida para tener en cuenta las frecuencias de control y niveles de aceptabilidad del envase o embalaje considerado.
        br
        br
        |La elección adecuada del material del empaque o embalaje debe estar de acuerdo con las exigencias del mercado nacional o internacional según sea el caso, con el fin de brindar protección, conservar y mantener la vida útil de los productos.
    p.mb-5 La implementación de especificaciones de calidad de envase y embalaje permite que la empresa cuente con las siguientes ventajas:
    .tarjeta.contenedor-amarillo.p-5.mb-5(style=' background-color: #fff3d8 ')
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span a
          | Simplificar la gestión de reclamos.
        li 
          .lista-ol--cuadro__vineta
            span b
          | Garantizar la capacidad del envase o embalaje para ser incorporado de manera eficaz al proceso.
        li 
          .lista-ol--cuadro__vineta
            span c
          | Cumplir con los requisitos de funcionalidad, seguridad y sostenibilidad.
        li 
          .lista-ol--cuadro__vineta
            span d
          | Obtener certificados necesarios para la comercialización.
    p.mb-5 Para tener un control adecuado sobre los productos se deben tener en cuenta las siguientes actividades:
    .cotenedor-tarjetas.mb-5
      .tarjeta-slide-down.tarjeta.color-primario.p-4.mb-3
        .contenedor-imagen
          img(src='@/assets/curso/99.svg', alt='Texto que describa la imagen').mb-4
        h3.text-center.mb-5 Inspección preliminar de los productos a empacar
        .d-flex.justify-content-center
          p Para determinar desviaciones o imperfecciones que impidan que el producto llegue al cliente de la manera correcta.
      .tarjeta-slide-down.tarjeta.bg-purple.p-4.mb-3
        .contenedor-imagen
          img(src='@/assets/curso/99.svg', alt='Texto que describa la imagen').mb-4
        h3.text-center.mb-5 Inspección durante el empaque
        .d-flex.justify-content-center
          p Con el fin de garantizar un proceso efectivo y que cumpla con los requisitos exigidos.  
      .tarjeta-slide-down.tarjeta.color-acento-contenido.p-4
        .contenedor-imagen
          img(src='@/assets/curso/99.svg', alt='Texto que describa la imagen').mb-4
        h3.text-center.mb-5 Inspección final
        .d-flex.justify-content-center
          p.text-center Donde se asegura que el producto ha sido empacado de la manera adecuada. Adicionalmente, se comprueba que cuente con el código de barras y se alista la carga para el embalaje. 
    p.mb-5 Los productos elaborados bajo normas industriales aplicadas que deben cumplir con estándares de calidad poseen un código universal de productos (UPC, Universal Product Code) que también es conocido como código de barras, el cual se traduce en una serie de dígitos que presenta información sobre el productor y el producto, facilitando el control de inventarios y costos.
    .row.mb-5
      .col-lg-6: img(src='@/assets/curso/100.png')
      .col-lg-6
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta color-acento-botones")
          div(titulo="Código")
            p.subrayado Son caracteres numéricos o alfanuméricos asignados a una unidad.
              span 8414237000153
          div(titulo="Símbolo")
            p.subrayado Representación de caracteres numéricos o alfabéticos en forma de 
              span código de barras


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

.subrayado
  span
    background-color: #dbdef1
    padding: 0.3rem
    font-weight: bold
    color: $color-sistema-texto !important
</style>
