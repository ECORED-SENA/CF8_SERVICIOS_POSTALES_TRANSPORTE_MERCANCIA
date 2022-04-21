<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Materiales y accesorios
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4: img(src='@/assets/curso/76.png')
      .col-lg-7: p La selección de material con el que se elaboran los empaques y embalajes es un punto crítico a la hora de evaluar la protección y conservación de los productos, pues la correcta selección del empaque ayuda a que el cliente mantenga predilección por el producto y finalmente lograr su satisfacción.
        br
        br
        |Constantemente se evidencia la evolución en los empaques debido al desarrollo de nuevas tecnologías, por ejemplo, surgen nuevos materiales o sistemas de impresión. 
    p.mb-5 Algunos aspectos importantes al seleccionar un material de empaque o embalaje son:
    .contenedor-slyder.p-5.bg-amarillo-claro.position-relative.mb-5
      .img-float: img(src='@/assets/curso/float1.png', alt='Texto que describa la imagen')
      SlyderA(tipo='a')
        .row.justify-content-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure
                img(src='@/assets/curso/77.png', alt='Texto que describa la imagen')
          .col-md-5
            h4 Compatibilidad con el producto 
            p El material no debe modificar las características del producto ni hacer variar sus propiedades. Por ejemplo: los alimentos no deben tomar olor o sabor del material de empaque.
        .row.justify-content-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure
                img(src='@/assets/curso/78.png', alt='Texto que describa la imagen')
          .col-md-5
            h4 Resistencia mecánica
            p El material debe ser resistente a la compresión, desgarre, fricción o impacto. Ejemplo: las artesanías o artículos electrónicos requieren materiales resistentes a la compresión o impacto debido a su fragilidad.
        .row.justify-content-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure
                img(src='@/assets/curso/79.png', alt='Texto que describa la imagen')
          .col-md-5
            h4 Propiedades de protección
            p Dependiendo del producto se requiere impermeabilidad al agua, gases, humedad o rayos ultravioletas. Ejemplo: perfumes, medicamentos o alimentos que requieren materiales con características de impermeabilidad.
        .row.justify-content-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure
                img(src='@/assets/curso/80.png', alt='Texto que describa la imagen')
          .col-md-5
            h4 Propiedades de estabilidad
            p Es la aptitud del empaque para no modificarse debido al contacto con el producto o agentes externos. Ejemplo: el polipropileno se hace frágil cuando se somete a bajas temperaturas. 
        .row.justify-content-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure
                img(src='@/assets/curso/81.png', alt='Texto que describa la imagen')
          .col-md-5
            h4 Operatividad
            p Es la aptitud del material para ser operado dentro de una línea de empacado. Ejemplo: si un material no se puede deslizar bien, se puede atascar en la línea de empaque.
        .row.justify-content-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure
                img(src='@/assets/curso/82.png', alt='Texto que describa la imagen')
          .col-md-5
            h4 Conveniencia
            p Aspectos como el peso, ergonomía o durabilidad deben ser considerados al seleccionar el material. Ejemplo: los productos que no se consumen de inmediato y que requieren ser empacados más tiempo, requieren un material duradero. 	
        .row.justify-content-center
          .col-md-5
            .rounded-3.overflow-hidden
              figure
                img(src='@/assets/curso/83.png', alt='Texto que describa la imagen')
          .col-md-5
            h4 Aspectos legales
            p Legislación y normativa vigente debe tenerse muy presente. Ejemplo: el PVC no es permitido en algunos países, como Alemania.
    p.mb-5 A continuación, se presentan algunos materiales a considerar para un empaque o embalaje apropiado, mencionando sus ventajas y desventajas, con el fin de tener en cuenta los usos y bondades que ofrecen.
    .titulo-sexto.color-primario
      h5 Tabla 2 
      span Ventajas y desventajas de los materiales para el embalaje.
    .tabla-a.color-acento-botones.mb-5
      table
        caption Nota. Tomada de Mendoza (2018)
        thead
          tr.bg-blue
            th.h4 Material
            th.h4 Ejemplo de empaque y embalaje
            th.h4 Ventajas
            th.h4 Desventajas
        tbody
          tr
            td.fw-bold.text-center Metal
            td Contenedores, bidones, cajas metálicas.
            td Fácil estibado, reutilizables.
            td Alto costo, corrosión, pesado, voluminoso.
          tr
            td.fw-bold.text-center Madera
            td Cajas, canastas, estibas.
            td Fácil de manipular.
            td Alto costo, sensibilidad al sol y humedad, contaminable, sensible a plagas, inflamable.
          tr
            td.fw-bold.text-center Cartón
            td Cajas de cartón.
            td Económico, reciclable, fácil de manipular.
            td Frágil, sensible a la humedad y calor, poco sólido.
          tr
            td.fw-bold.text-center Plástico
            td Bolsas, cajas, contenedores.
            td Impermeabilidad, diversidad, reutilizable.
              br
              |Conservan el olor y el sabor.
              br
              |Resistente al rasgado y envasado.
            td Inflamable, cotoso, difícil eliminación.
          tr
            td.fw-bold.text-center Papel
            td Bolsas, papel para envolver, papel parafinado.
            td Bajo costo, fácil eliminación, reciclable.
            td Frágil, sensible a la humedad y el calor.
          tr
            td.fw-bold.text-center Vidrio
            td Botellas, frascos, botellones.
            td Visibilidad del contenido, fácil estibado, reciclable.
            td Frágil a golpes, pesado, voluminoso.
    p.mb-5 Adicionalmente los empaques, envases o embalajes se pueden clasificar de acuerdo con:
    h3.titulo-tercero La capacidad de resistencia
    .row.mb-5
      .col-lg-4.mb-3
        .tarjeta.rounded-0.color-alt3.h-100.p-4
          .icon-hover.d-flex.justify-content-center.mb-3.px-5
            img(src='@/assets/curso/84.svg', alt='Texto que describa la imagen' style='width: 248px !important')
          .text-center
            h4 Autoportante
            p El envase primario soporta por sí mismo el peso de otros productos sin que se deformen o dañen. <b>Por ejemplo, envases de vidrio o metal.</b>
      .col-lg-4.mb-3
        .tarjeta.rounded-0.color-alt3.h-100.p-4
          .icon-hover.d-flex.justify-content-center.mb-3.px-5
            img(src='@/assets/curso/85.svg', alt='Texto que describa la imagen' style='width: 248px !important')
          .text-center
            h4 Semiportante
            p El envase primario no es lo suficiente rígido para soportar por sí solo el esfuerzo de compresión que se genera durante su almacenamiento o transporte. <b>Por ejemplo, botellas de plástico, cajas de cereales.</b>
      .col-lg-4.mb-3
        .tarjeta.rounded-0.color-alt3.h-100.p-4
          .icon-hover.d-flex.justify-content-center.mb-3.px-5
            img(src='@/assets/curso/86.svg', alt='Texto que describa la imagen' style='width: 248px !important')
          .text-center
            h4 No portante
            p El envase primario no aporta ninguna resistencia al producto interno, <b>por ejemplo, galletas, frutas y verduras, bolsas de <em>snacks.</em></b>
    h3.titulo-tercero El uso 
    .row
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/87.svg' alt='AvatarTop')
            img(src='@/assets/curso/88.svg' alt='AvatarTop')
          .tarjeta.bg-purple-claro
            .p-4
              h4 Retornable
              p Corresponde a envases que cuentan con características de resistencia para ser llenados y utilizados varias veces y para los cuales se debe tener una logística de retorno, por ejemplo, los envases de vidrio de gaseosas o cervezas.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/87.svg' alt='AvatarTop')
            img(src='@/assets/curso/88.svg' alt='AvatarTop')
          .tarjeta.bg-purple-claro
            .p-4
              h4 No retornable
              p Son aquellos que, de acuerdo con su resistencia, solo pueden ser llenados y utilizados una vez, por ejemplo, latas de cerveza, atunes, bolsas de galletas, botellas plásticas, etc. 
    h3.titulo-tercero El tipo de material y la presentación
    .titulo-sexto.color-primario
      h5 Tabla 3
      span Clasificación según el tipo de material y la presentación.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr.bg-blue
                th.h4 Tipo
                th.h4 Material
                th.h4 Presentación
            tbody
              tr
                td.fw-bold Envase
                td Metal, papel, plástico, vidrio, madera.
                td Botellas, bolsas de papel, bolsas plásticas, barriles, bidones, baldes, latas, tapas, rollos.
              tr
                td.fw-bold Empaque
                td Cartulina, cartón corrugado, plástico.
                td Bolsas termo encogibles, plegadizas, <em>displays</em>.
              tr
                td.fw-bold Embalaje
                td Cartón corrugado, plástico, madera.
                td Cajas corrugadas, cajones, canastillas plásticas carretes, sacos.
              tr
                td.fw-bold Unidad de carga
                td Cartón corrugado, plástico, madera.
                td Estibas, esquineros, divisiones, <em>stretch</em>, zuncho.



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

<style lang="sass">
.bg-amarillo-claro
  background-color: #fff7e6
.bg-purple-claro
  background-color: #dce0f9
.tarjeta-avatar-b
  .tarjeta-avatar-b__img
    img:first-child
      display: block
    img:last-child
      display: none
  &:hover
    .tarjeta-avatar-b__img
      img:first-child
        display: none
      img:last-child
        display: block
.slyder-a__tipo-a .slyder-a__bullets
  bottom: -14px
</style>
