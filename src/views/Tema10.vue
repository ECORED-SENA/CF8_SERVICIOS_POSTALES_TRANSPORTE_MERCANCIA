<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Símbolos de manejo de carga
    p.mb-5 Una adecuada señalización de la carga permite que se la mercancía se pueda identificar en cualquiera de sus etapas logísticas y de esta manera identificar la forma cómo se debe proceder adecuadamente con la misma.
      br
      br
      |Existen tres tipos de marcas para el manejo de mercancías, a saber:
    .row.justify-content-center.mb-5
      .col-lg-9.acordion-activ
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-rosa")
          .row(titulo="Marcas estándar o de expedición").ps-5.align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/132.svg', alt='Texto que describa la imagen') 
            .col-md-8.mb-4.mb-md-0
              p Contiene información sobre el importador, destino, dirección, número de referencia, cantidad de unidades, etc.
          .row(titulo="Marcas informativas").ps-5.align-items-
            .col-md-2
              figure
                img(src='@/assets/curso/133.svg', alt='Texto que describa la imagen') 
            .col-md-8.mb-4.mb-md-0
              p Corresponde a la información adicional, como país de origen, puertos de salida y entrada, peso, dimensiones, entre otros. 
          .row(titulo="Marcas de manejo").ps-5.align-items-
            .col-md-2
              figure
                img(src='@/assets/curso/134.svg', alt='Texto que describa la imagen') 
            .col-md-8.mb-4.mb-md-0
              p Es la información sobre el manejo y forma de manipular o transportar la carga, haciendo uso de símbolos pictóricos aceptados internacionalmente.  
    p.mb-5 A continuación, se muestra una imagen que evidencia los símbolos de manejo de carga:
    .row.justify-content-center.mb-5
      .col-lg-11: img(src='@/assets/curso/135.png', alt='Texto que describa la imagen')
    p.mb-5 Según la norma ISO 780, hay símbolos que se utilizan para dar instrucciones sobre el manejo de la carga, a través de estos se informan posiciones, formas de llenado, apertura, condiciones de almacenamiento o conservación; y son los siguientes:
    SlyderF.mb-5.tarjetas-full(columnas="col-lg-6 col-xl-3")
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/136.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Proteger del calor
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/137.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Hacia arriba
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/138.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Frágil
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/139.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center No usar ganchos
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/140.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Límite de temperatura 
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/141.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center No colocar mordazas aquí
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/142.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Proteger de fuentes radiactivas
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/143.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Proteger de la humedad
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/144.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Centro de gravedad 
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/145.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center No rodar
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/146.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center No usar horquetas
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/147.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center No usar carros elevadores
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/148.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Colocar mordazas aquí 
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/149.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Límite de apilamiento en kilogramos
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/150.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center No apilar
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/151.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Límite de embalajes a apilar 
        
      .tarjeta.rounded-0.bg-purple-claros.p-3.py-5
        .contenedor
          img(src='@/assets/curso/152.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Eslingar aquí
    p.mb-5 Además, también es importante tener presentes los símbolos para señalar la mercancía peligrosa, los cuales ofrecen información sobre sus características o peligros.
      br
      br
      |En Colombia, la norma NTC 4702-2 regula los aspectos relacionados con el transporte y los embalajes de la mercancía peligrosa, los símbolos que se utilizan son:
    SlyderF.mb-5.tarjetas-full(columnas="col-lg-6 col-xl-3")
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/153.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Explosivos
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/154.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Gas inflamable
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/155.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Gas comprimido
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/156.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Sustancias que despiden gases inflamables al contacto con agua
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/158.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Sustancias oxidantes
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/159.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Peróxidos orgánicos 
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/160.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Gas tóxico
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/161.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Sustancia
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/162.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Sólido flamable
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/163.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Líquido inflamable 
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/164.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Corrosivo
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/165.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Tóxico
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/166.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Cantidad limitada
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/167.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Otros
      .tarjeta.rounded-0.color-primario.p-3.py-5
        .contenedor
          img(src='@/assets/curso/168.jpg' alt='AvatarTop' style='widht:100px').mb-3
          h4.text-center Contaminantes marinos
    
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
.acordion-activ
  .acordion__activo
    background-color: #ffcec9 !important
  .bg-rosa
    background-color: #ffe7e4
.bg-purple-claros
  background-color: #bac1f3
.tarjetas-full
  .horizontal-scroll
    align-items: normal !important
  .contenedor
    height: 100%

  .tarjeta
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    img
      padding: 10px
.fa-chevron-left:before
  content: url(../assets/curso/chevron-left.svg)
.fa-chevron-right:before
  content: url(../assets/curso/chevron-right.svg)
</style>
