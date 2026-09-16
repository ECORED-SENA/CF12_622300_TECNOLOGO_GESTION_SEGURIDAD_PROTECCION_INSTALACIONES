export default {
  global: {
    Name: 'Operaciones técnicas y respuesta a emergencias',
    Description:
      'La seguridad privada integra gestión de información, comunicación operativa, análisis de riesgos y preparación ante crisis y emergencias. Estos procesos permiten identificar amenazas y vulnerabilidades, registrar actuaciones, valorar impactos, gestionar alarmas y coordinar respuestas. Mediante protocolos, brigadas, planes de emergencia, capacitación y trazabilidad, se fortalece la protección de personas, bienes, infraestructura y continuidad operativa institucional frente a eventos críticos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Área técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Gestión de la información y sistemas de información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Protocolos, consignas y registros operativos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Minuta de vigilancia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Comunicación operacional y medios de comunicación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Códigos y lenguaje de seguridad',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación y análisis de riesgos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Valoración del riesgo y sus impactos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manejo de crisis y emergencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fundamentos para el manejo de crisis y emergencias',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Gestión de alarmas y central de monitoreo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Identificación y clasificación de señales de alarma',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Comunicación y atención telefónica de incidentes',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Tipos y clasificación de situaciones de emergencia',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo:
              'Organización técnica y coordinación para la atención de emergencias',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Brigadas de emergencias',
            hash: 't_3_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Alarma',
      significado:
        'Señal generada por un sistema, dispositivo o persona que advierte sobre una condición anormal, preventiva, técnica o crítica que requiere identificación y atención conforme al protocolo establecido.',
    },
    {
      termino: 'Alerta temprana',
      significado:
        'Información o señal que permite anticipar una situación que podría evolucionar hasta convertirse en un incidente crítico y facilita la adopción oportuna de medidas preventivas.',
    },
    {
      termino: 'Amenaza',
      significado:
        'Agente, condición, evento o actor con capacidad de generar daño sobre las personas, los bienes, la infraestructura o la continuidad de las operaciones.',
    },
    {
      termino: 'Brigada de emergencias',
      significado:
        'Grupo organizado y capacitado para apoyar las acciones de prevención, preparación y respuesta inicial frente a situaciones que puedan comprometer a las personas, los bienes o la operación.',
    },
    {
      termino: 'Central de monitoreo',
      significado:
        'Unidad encargada de recibir, procesar, verificar, clasificar, escalar y registrar señales e información relacionadas con la seguridad de los sitios protegidos.',
    },
    {
      termino: 'Crisis',
      significado:
        'Evento de alto impacto que supera la capacidad operativa regular de una organización y requiere mecanismos extraordinarios de mando, coordinación y control.',
    },
    {
      termino: 'Escalamiento',
      significado:
        'Proceso mediante el cual un evento se comunica progresivamente a los responsables definidos según su naturaleza, prioridad, nivel de riesgo y necesidad de intervención.',
    },
    {
      termino: 'Evento crítico',
      significado:
        'Situación capaz de alterar significativamente la operación normal y que requiere una respuesta coordinada para prevenir o reducir daños sobre las personas, la infraestructura o los procesos esenciales.',
    },
    {
      termino: 'Impacto',
      significado:
        'Consecuencia directa o indirecta que puede generar un evento sobre las personas, los activos, la infraestructura, la información, la reputación o la continuidad operativa.',
    },
    {
      termino: 'Minuta de vigilancia',
      significado:
        'Documento institucional, secuencial y obligatorio en el que se registran cronológicamente las actividades, novedades y hechos relevantes ocurridos durante el servicio.',
    },
    {
      termino: 'Plan de emergencia',
      significado:
        'Instrumento que organiza responsabilidades, procedimientos, recursos y mecanismos de coordinación destinados a preparar y orientar la respuesta institucional ante situaciones críticas.',
    },
    {
      termino: 'Probabilidad de ocurrencia',
      significado:
        'Estimación de la posibilidad de que un evento adverso se presente en un entorno determinado, considerando antecedentes, condiciones existentes, datos disponibles y criterio profesional.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Conjunto estructurado de disposiciones que establece responsabilidades, canales, criterios y procedimientos para desarrollar una actuación de manera organizada y uniforme.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Condición resultante de la interacción entre una amenaza y una vulnerabilidad, considerando la probabilidad de ocurrencia y las posibles consecuencias del evento.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de reconstruir cronológicamente un evento mediante registros que permitan identificar comunicaciones, decisiones, responsables y acciones ejecutadas.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Debilidad física, tecnológica, humana o procedimental que puede facilitar la materialización de una amenaza y aumentar el nivel de riesgo.',
    },
  ],
  referencias: [
    {
      referencia:
        'ASIS. (2005). Estándares y lineamientos para la gestión del riesgo en seguridad.',
      link: '',
    },
    {
      referencia:
        'ASIS. (2011a). Manual de gestión de crisis: Lineamientos para la preparación, respuesta y continuidad operativa ante emergencias y crisis.',
      link: '',
    },
    {
      referencia:
        'ASIS. (2011b). Manual de operadores de seguridad: Directrices operativas para centrales de monitoreo, verificación y respuesta.',
      link: '',
    },
    {
      referencia: 'ASIS. (2012). Manual de gestión en seguridad ASIS.',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2011a). Manual POA investigación: Protección de activos: Lineamientos para informes e investigación operativa.',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2011b). Manual seguridad de la información: Procedimientos para manejo, clasificación y protección de datos en operaciones de seguridad.',
      link: '',
    },
    {
      referencia:
        'Aven, T. (2009). Risk analysis and management: Basic concepts and principles. Reliability: Theory & Applications.',
      link: 'https://www.gnedenko.net/Journal/2009/012009/RATA_1_2009-08.pdf',
    },
    {
      referencia:
        'Bermúdez. (2012). Manual de procedimiento para el personal de vigilantes de seguridad privada.',
      link: '',
    },
    {
      referencia:
        'Corporación Autónoma Regional del Valle del Cauca. (s. f.). Manual de funcionamiento operativo de la brigada de emergencia.',
      link: '',
    },
    {
      referencia:
        'Cox, L. A., Jr. (2008). What’s wrong with risk matrices? Risk Analysis, 28(2), 497–512.',
      link: 'https://doi.org/10.1111/j.1539-6924.2008.01030.x',
    },
    {
      referencia:
        'Delgado J & Asociados (DEAS). (s. f.). Manual de la central de monitoreo.',
      link: '',
    },
    {
      referencia:
        'Kaplan, S., & Garrick, B. J. (1981). On the quantitative definition of risk. Risk Analysis, 1(1), 11–27.',
      link: 'https://www.nrc.gov/docs/ML1216/ML12167A133.pdf',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015). Decreto 1072 de 2015: Decreto Único Reglamentario del Sector Trabajo.',
      link: 'https://www.mintrabajo.gov.co/documents/20147/0/DUR+1072+Sector+Trabajo+Actualizado+a+Diciembre+20+de+2021.pdf',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019). Resolución 0312 de 2019: Estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Gobierno de Colombia.',
      link: 'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (2014). Una guía de 5 pasos para empleadores, trabajadores y sus representantes sobre la realización de evaluaciones de riesgos en el lugar de trabajo.',
      link: 'https://www.ilo.org/es/media/443301/download',
    },
    {
      referencia:
        'Universidad CES. (2025). Guía del sistema de gestión integral del riesgo: Metodología y proceso de administración de riesgos.',
      link: 'https://www.ces.edu.co/content/uploads/2025/08/GU-DE-002-Guia-metodologica-para-el-sistema-de-gestion-integral-del-riesgo-V02.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
