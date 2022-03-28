export default {
  global: {
    componenteFormativo: 'Empaque de mercancía y objetos postales.',
    descripcionCurso:
      'El objetivo principal de empacar un producto es protegerlo, contenerlo e identificarlo con el fin de preservarlo en cualquier fase de la cadena de distribución física y así evitar cualquier riesgo de deterioro al momento de la entrega o hasta que llegue a su destino final sin que se alteren sus propiedades.',
    imagenBannerPrincipal: require('@/assets/curso/box.gif'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Las 4 E de la logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Empaque',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Envase',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Embalaje',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Etiqueta',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Características de la mercancía y objetos postales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        titulo: 'Materiales y accesorios',
        desarrolloContenidos: true,
        numero: '3',
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        titulo: 'Equipos',
        desarrolloContenidos: true,
        numero: '4',
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        titulo:
          'Especificaciones de calidad de las mercancías y objetos postales',
        desarrolloContenidos: true,
        numero: '5',
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        titulo: 'Consolidación y desconsolidación de mercancía',
        desarrolloContenidos: true,
        numero: '6',
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        titulo: 'Unidad de carga logística',
        desarrolloContenidos: true,
        numero: '7',
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        titulo:
          'Almacenamiento y bodegaje de los objetos postales y mercancías',
        desarrolloContenidos: true,
        numero: '8',
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        titulo: 'Gestión documental y registro de datos        ',
        desarrolloContenidos: true,
        numero: '9',
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        titulo: 'Símbolos de manejo de carga',
        desarrolloContenidos: true,
        numero: '10',
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Sintesis',
      //   nombreRuta: 'sintesis',
      // },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2019). Etiqueta, envase, empaque y embalaje.',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/11225/100000611.pdf',
    },
    {
      referencia:
        'Campo, V., A., Hervás, E., A., y Revilla, R., M. (2013). Técnicas de almacén. Mc Graw Hill.',
      link: '',
    },
    {
      referencia:
        'Envapack. (s.f.). Revista online del envase, empaque y embalaje.',
      link: '',
    },
    {
      referencia:
        'Mendoza, R., J. (2018). Empaques, envases y embalajes: el producto y su recipiente. Editorial Pontificia Universidad Javeriana.',
      link: '',
    },
    {
      referencia:
        'Navarro, J., P., y García, M. (2007). Guía práctica de diseño de envases y embalajes para la distribución de productos. ',
      link:
        'https://www.itene.com/rs/810/d112d6ad-54ec-438b-9358-4483f9e98868/f8b/filename/guia-diseno-envases-embalajes.pdf',
    },
    {
      referencia:
        'Procolombia. (2016). Manual de empaque y embalaje para exportación. ',
      link:
        'https://procolombia.co/sites/default/files/manual_de_empaque_y_embalaje_para_exportacion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'utilización óptima de un espacio asignado poner colocar una determinada cantidad de elementos o referencias.',
    },
    {
      termino: 'Apilar',
      significado:
        'variación de almacenamiento de cajas para aprovechar al máximo el espacio vertical. Las cajas o <em>pallets</em> son apilados una sobre otras, obedeciendo a una distribución equitativa de cargas. Esta técnica reduce la necesidad de divisiones en las estanterías, formando un gran y único estante.',
    },
    {
      termino: 'Código de barras',
      significado:
        'elemento de codificación y lectura, numérico o alfanumérico, compuesto por señales de distinto grosor, espaciadas según normas específicas. ',
    },
    {
      termino: 'Contenedor',
      significado:
        'caja reutilizable, de varios tamaños normalizados, para transportar la carga en cantidades, por vía terrestre, acuática o aérea, generalmente sin necesidad de traspasar producto en cada cambio de medio de transporte.',
    },
    {
      termino: 'Desconsolidación',
      significado:
        'proceso de desagrupar cargas parciales con destino a su distribución a los respectivos consignatarios. ',
    },
    {
      termino: 'Logística ',
      significado:
        'proceso de planificar, ejecutar y controlar de una manera efectiva y eficiente el flujo de materias primas, inventario en curso y producto terminado, así como la información relativa a estos, desde el punto de origen hasta el punto de consumo.',
    },
    {
      termino: '<em>Pallet</em>',
      significado:
        'también se le conoce como paleta, es una plataforma horizontal que se utiliza para apilar, manipular y transportar mercancía.',
    },
    {
      termino: 'Unidad de carga',
      significado:
        'presentación de las mercaderías objeto de transporte, de manera que puedan ser manipuladas por medios mecánicos.',
    },
  ],
  complementario: [
    {
      texto:
        'Procolombia. (2016). Manual de empaque y embalaje para exportación. ',
      tipo: 'Manual',
      descarga: '/downloads/doc1.pdf',
    },
    {
      texto:
        'Navarro, J., P., y García, M. (2007). Guía práctica de diseño de envases y embalajes para la distribución de productos.',
      tipo: 'Guía',
      descarga: '/downloads/doc2.pdf',
    },
    {
      texto:
        'Envapack. (s .f.). Revista Online del envase, empaque y embalaje.',
      tipo: 'Revista ',
      link: 'https://www.envapack.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Paula Daniela Diaz ',
        cargo: 'Experta temática',
        centro: 'Distrito capital - CENIGRAF',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología Regional distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de gestión industrial - Distrito capital. ',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
