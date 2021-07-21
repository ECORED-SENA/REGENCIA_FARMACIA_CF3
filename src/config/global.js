export default {
  global: {
    componenteFormativo: 'Direccionamiento estratégico',
    descripcionCurso:
      'Este componente formativo describe la ruta que deben seguir las empresas del sector salud, para lograr sus objetivos misionales y estratégicos; al mismo tiempo que se realizan revisiones periódicas para ajustar los procesos misionales de acuerdo con los cambios del entorno y al plan de gestión de la entidad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
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
        titulo: 'Plataforma estratégica de la Institución',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Organigrama',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mapa de procesos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Fortalezas, Oportunidades, Debilidades y Amenazas (matriz FODA)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Reglamento interno',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Cultura y clima organizacionales',
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Mecanismos de estímulo al colaborador',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Ingeniería organizacional',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Portafolio de servicios',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Comunicación',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Manejo y solución de conflictos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Principios éticos y bioéticos en la prestación del servicio',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
        'Drovetta, S.M. (2015). Dirección de la Salud. Ediciones Macchi. ',
      link:
        'https://factorialhr.es/blog/que-es-organigrama-empresa-tipos-plantillas/',
    },
    {
      referencia:
        'Sy Corvo, Helmut. (2018). Reingeniería organizacional: proceso y ejemplos. Lifeder. ',
      link: 'https://www.lifeder.com/reingenieria-organizacional/.',
    },
    {
      referencia:
        'Millán, J. J. G., González, J., Penagos, C. O. P., & Parra, O. (2008). Caracterización de la cultura organizacional, clima organizacional, motivación, liderazgo y satisfacción de las pequeñas empresas del valle de sugamuxi y su incidencia en el espíritu empresarial. ',
      link:
        'https://login.bdigital.SENA.edu.co/login?url=https://www-proquest-com.bdigital.SENA.edu.co/scholarly-journals/caracterización-de-la-cultura-organizacional/docview/1435585378/se-2?accountid=31491',
    },
    {
      referencia:
        'Pardo Álvarez, J. (2012). Configuración Y Usos De Un Mapa De Procesos. AENOR - Asociación Española De Normalización Y Certificación',
    },
    {
      referencia:
        'Pereira Palomo, C. (2019). Control Interno En Las Empresas. ',
      link: 'https://www.aiteco.com/manual-de-funciones/',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública.  (2007). Sistemas de estímulos. ',
      link:
        'https://www.cvc.gov.co/sites/default/files/Sistema_Gestion_de_Calidad/Procesos%20y%20procedimientos%20Vigente/Normatividad_Gnl/Sistema%20de%20Estimulos.pdf',
    },
    {
      referencia:
        'Salazar Estrada, J., Guerrero Pupo, J., Machado Rodríguez, Y., y Cañedo Andalia, R. (2009). Climate and organizational culture: two essential components in the working productivity. ACIMED v.20 n.4. ',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1024-94352009001000004&lng=es&tlng=en',
    },
  ],
  glosario: [
    {
      termino: 'Empatía:',
      significado:
        'capacidad de tomar el lugar de la otra persona y comprender lo que está sintiendo y pensando, sin expresarlo directamente; la capacidad de comunicarse con los demás de manera respetuosa y sus circunstancias únicas. La capacidad de comprender, obtener sus experiencias, sentimientos y opiniones.',
    },
    {
      termino: 'Estrategia:',
      significado:
        'plan maestro para lograr una o más metas comunes en circunstancias inciertas.',
    },
    {
      termino: 'Gestión:',
      significado:
        'es la administración de recursos para ejecutar un proceso con responsabilidad individual o corporativa. Se refiere directamente a la coordinación de actividades y talento humano.',
    },
    {
      termino: 'Líder:',
      significado:
        'persona que gestiona un equipo o grupo de personas en particular, que influye, motiva y trabaja con entusiasmo para todos los miembros del equipo. Se concentra en sus metas y objetivos, diariamente.',
    },
    {
      termino: 'Misión:',
      significado: 'motivo o razón para la empresa.',
    },
    {
      termino: 'Objetivo:',
      significado:
        'resultados deseados que se esperan alcanzar con la ejecución de las actividades que integran un proyecto, empresa o entidad. Medibles o cuantificables. Realista. Limitados en el tiempo.',
    },
    {
      termino: 'Portafolio:',
      significado:
        'conjunto de documentos que pueden mostrar la totalidad, o diferentes aspectos de un individuo u organización, cuidadosamente seleccionado y organizado.',
    },
    {
      termino: 'Postura:',
      significado:
        'actitud o manera de pensar sobre alguien o algo. Posición del cuerpo ante una actividad determinada.',
    },
    {
      termino: 'Ruta:',
      significado:
        'camino, carretera o vía que permite transitar desde un lugar hacia otro. Dirección que se toma para el logro de un propósito.',
    },
    {
      termino: 'Táctica:',
      significado: 'método empleado con el fin de obtener un objetivo.',
    },
    {
      termino: 'Visión:',
      significado:
        'descripción de una expectativa ideal de lo que se espera en una empresa.',
    },
  ],
  complementario: [
    {
      texto:
        'Servicio al cliente	Grupo Proikos. (2015). Atención y Servicio al Cliente [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5xGoNUkHpZQ',
    },
    {
      texto:
        'Servicio al cliente	Julca, S. (2016). Protocolos de atención al cliente [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=egkOLUiEdx4',
    },
    {
      texto:
        'Servicio al cliente	González, J. (2013). Protocolo servicio al cliente [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ejD34cB36aQ',
    },
    {
      texto:
        'Comunicación 	Cultura 52. (2016) ¿Qué es Comunicación Asertiva? [video]. Youtube. https://www.youtube.com/watch?v=eF-UJWjGSX8',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eF-UJWjGSX8',
    },
    {
      texto:
        'Comunicación	Víctor Toscano TV. (2010). 7 claves para comunicarte mejor | comunicación efectiva y técnicas de oratoria para hablar bien [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6tGA8RDW-Z0',
    },
    {
      texto:
        'Servicio al cliente	Highley, C. (2018). La cortesía telefónica... El arte de escuchar [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BDamU19Cvaw',
    },
    {
      texto:
        'Servicio al cliente	Jaime, D. (2013). Tipos de clientes [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hixQG0y7nuI',
    },
    {
      texto:
        'Principios éticos y bioéticos en la prestación del servicio	PAHO TV. (2015). La calidad de atención en los servicios de salud [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UQ4wuzF5eNY',
    },
    {
      texto:
        'Principios éticos y bioéticos en la prestación del servicio	El Juego Interior. (2017) Proactivo vs Reactivo [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_DnY90zXLBk',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luz Adriana Cárdenas',
        cargo: 'Profesional Experta Temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },

      {
        nombre: 'Emilia Sarmiento Mora',
        cargo: 'Profesional Experta Temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },

      {
        nombre: 'Edwing Amir Moreno Moreno',
        cargo: 'Experto Temático',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },

      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },

      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Diseñadora Instruccional – Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },

      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
