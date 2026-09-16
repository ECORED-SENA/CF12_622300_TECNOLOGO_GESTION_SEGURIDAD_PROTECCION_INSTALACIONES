<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Manejo de crisis y emergencias
      p(data-aos="fade-left") El manejo de crisis y emergencias comprende la preparación y la respuesta frente a situaciones que pueden superar las condiciones habituales de operación, demandar decisiones oportunas y requerir la coordinación de recursos internos y externos.
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img1.png', alt='', style="width: 800px;")
        .col-12.col-lg-6.order-2.order-lg-2(data-aos="fade-left")
          p.mb-0.bg-color-3.p-3 A diferencia de los procesos rutinarios de vigilancia o administración, las crisis y emergencias pueden generar afectaciones significativas sobre las personas, los activos, la infraestructura y la continuidad de las operaciones. Por esta razón, las organizaciones requieren estructuras previamente definidas que permitan asignar responsabilidades, coordinar recursos y orientar la actuación frente a acontecimientos críticos.
          p.mb-0 Para este propósito pueden emplearse marcos metodológicos como los planteados por <b>ASIS, FEMA, NFPA y el Sistema de Comando de Incidentes (ICS)</b>, los cuales establecen principios, responsabilidades y estructuras para organizar la respuesta ante eventos críticos.
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Fundamentos para el manejo de crisis y emergencias
      p(data-aos="fade-left") Los fundamentos para el manejo de crisis y emergencias permiten reconocer las características de los eventos críticos, comprender el enfoque metodológico aplicable y diferenciar las situaciones que pueden evolucionar hasta convertirse en una crisis.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto y tipos de eventos
      //- Título nivel 3 - Imagen
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-9.order-2.order-lg-1
          .row.g-0.align-items-stretch.bg-color-6.mb-4
            .col-12.col-md-5.px-0
              img(src="@/assets/curso/temas/t3/img2.png", style="width:100%; height:100%; object-fit:cover;")
            .col-12.col-md-7.p-4.d-flex.align-items-center
              p.mb-0 Los <b>eventos críticos</b> son situaciones que alteran significativamente la operación normal de una organización y exigen la movilización inmediata y coordinada de recursos humanos, tecnológicos y procedimentales para prevenir o reducir daños a las personas, la infraestructura o los procesos esenciales.
          p Su carácter crítico no depende exclusivamente de la magnitud del daño ocurrido, sino de su capacidad para interrumpir la normalidad operacional y requerir la activación de procedimientos extraordinarios, incluso cuando el incidente aún no se encuentre plenamente confirmado.
          p Desde esta perspectiva, situaciones aparentemente menores pueden adquirir carácter crítico cuando poseen potencial destructivo o demandan una actuación inmediata. La presencia de un objeto sospechoso, una llamada anónima relacionada con un artefacto explosivo o un olor que sugiera una fuga de gas requieren una respuesta estructurada que contemple comunicación controlada, aislamiento preventivo, verificación y, cuando corresponda, coordinación con autoridades especializadas. Los eventos críticos pueden clasificarse de acuerdo con su origen y las condiciones que los generan:
        .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t3/img3.png", data-aos="zoom-in", style="width: 100%; max-width: 500px;").mx-auto
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img4.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Eventos naturales")
                p.mb-4 Incluyen terremotos, inundaciones, tormentas eléctricas o deslizamientos, cuyas causas climáticas o geológicas pueden ocasionar interrupciones severas en la operación. Aunque no pueden evitarse, sus impactos pueden mitigarse mediante rutas de evacuación actualizadas, simulacros y planes destinados a proteger la infraestructura y los registros esenciales.
              .row(titulo="Eventos tecnológicos o accidentales")
                p.mb-4 Surgen de fallas técnicas, eléctricas o mecánicas y pueden manifestarse mediante incendios por cortocircuitos, explosiones por acumulación de gases, colapsos estructurales o fallas repentinas de equipos críticos. Requieren mantenimiento preventivo, sistemas de detección y personal capacitado para identificar oportunamente condiciones anómalas.
              .row(titulo="Eventos deliberados o provocados")
                p.mb-4 Comprenden acciones intencionales como sabotaje, amenazas con artefactos explosivos, incidentes químicos, biológicos, radiológicos o nucleares, terrorismo, intrusiones planificadas y violencia en el lugar de trabajo. Su gestión requiere protocolos estrictos de comunicación, aislamiento, control de la escena y coordinación con unidades especializadas.
              .row(titulo="Eventos sociales")
                p.mb-4 Abarcan protestas, aglomeraciones, disturbios o bloqueos que pueden afectar la movilidad y la seguridad de las instalaciones. Estas situaciones pueden exigir ajustes en los controles de acceso, fortalecimiento de las rondas preventivas y comunicación permanente con las autoridades correspondientes.
      //- Fin Accordion 1
      p(data-aos="fade-left") Esta clasificación facilita la identificación inicial del evento y contribuye a determinar las medidas de preparación y respuesta requeridas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Enfoque metodológico «Todos los peligros»
      //- Título nivel 3 - Imagen
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img5.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El análisis y la atención de eventos se integran en el enfoque metodológico denominado all hazards approach o «Todos los peligros», que reúne principios comunes aplicables a diferentes tipos de emergencias. Este enfoque contempla:
            br
            br
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Mando definido. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Asignación de roles. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Comunicaciones verificables. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Procedimientos escalables según la gravedad. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Rutas de evacuación. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Articulación con autoridades cuando la situación lo requiera. 
      p(data-aos="fade-left") Su propósito es mantener la coherencia operativa frente a eventos de distinta naturaleza, de manera que la organización disponga de una estructura común de actuación y pueda adaptar los procedimientos a las características particulares de cada emergencia.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto, tipos, causas y efectos de las crisis
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img6.png', alt='', style="width: 800px;")
        .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-left")
          p.mb-0.bg-color-2.p-4 Una crisis es un evento de alto impacto que supera la capacidad operativa regular de la organización y exige decisiones oportunas bajo presión para proteger la integridad de las personas, los bienes, la operación y la reputación institucional.
          p.mb-0 La crisis representa un punto de quiebre en el cual los procedimientos rutinarios pueden resultar insuficientes y se requiere activar mecanismos extraordinarios de mando, coordinación y control. Por esta razón, situaciones como incendios en áreas críticas, amenazas con artefactos explosivos, fugas químicas, fallas estructurales o episodios de violencia interna demandan la aplicación de protocolos específicos, incluso cuando inicialmente no exista confirmación plena del evento. Las crisis pueden clasificarse según su origen y las condiciones que afectan la organización:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta08_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Crisis tecnológicas
                p Se presentan cuando fallan sistemas críticos, como el suministro eléctrico, el circuito cerrado de televisión (CCTV), los servidores o la maquinaria esencial. Estas fallas pueden interrumpir procesos estratégicos y afectar la continuidad del servicio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Crisis operacionales
                p Corresponden a acontecimientos súbitos derivados de accidentes operativos mayores, como incendios en cuartos eléctricos, colisiones vehiculares internas o fugas de gas. Pueden comprometer la integridad del personal y generar interrupciones significativas en las actividades esenciales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Crisis humanas
                p Se originan en comportamientos, reacciones o condiciones humanas, como pánico colectivo, violencia laboral o presencia de individuos armados. Su gestión requiere considerar factores psicológicos, conductuales y cambios rápidos en las condiciones del entorno.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Crisis deliberadas
                p Comprenden actos intencionales como terrorismo, sabotaje, amenazas con explosivos, ataques químicos o intrusiones altamente planificadas. Requieren coordinación con unidades especializadas, protocolos estrictos de comunicación y medidas de aislamiento operativo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Crisis naturales
                p Incluyen terremotos, inundaciones, deslizamientos o tormentas severas. Su gestión requiere preparación institucional, redundancia operativa, procedimientos definidos y simulacros periódicos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Crisis estructurales o de colapso
                p Se relacionan con fallas físicas en edificaciones o infraestructuras, como grietas, vibraciones anormales, inclinaciones o desprendimientos. Estas condiciones pueden evolucionar hacia colapsos parciales o totales y requieren una actuación inmediata.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Crisis químicas, biológicas, radiológicas y nucleares (QBRN)
                p Corresponden a situaciones de alto riesgo por su alcance y complejidad de detección. Requieren intervención especializada, delimitación de zonas, control estricto de accesos y procedimientos específicos de descontaminación.
      //- Fin Slideshow
      .row.justify-content-center.align-items-start.mb-4
        .col-12.col-md-4.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img(src='@/assets/curso/temas/t3/img7.png', alt='', style="width: 270px; height: auto;")
        .col-12.col-md-8.col-lg-9(data-aos="fade-left")
          .row.align-items-stretch.mb-4
            .col-12.col-lg-6.mb-4.mb-lg-0.d-flex.flex-column.justify-content-between
              .bg-color-6.p-4.mb-3
                p.mb-0 La clasificación permite reconocer las características particulares de cada crisis y orientar la selección de los procedimientos y recursos requeridos.
              p.mb-0 Las crisis pueden originarse por #[b fallas humanas, deficiencias tecnológicas, acciones deliberadas o eventos naturales.] Aunque los factores desencadenantes son diversos, su gestión debe considerar principalmente la magnitud de sus efectos y la capacidad de la organización para responder ante ellos.
            .col-12.col-lg-6
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/t3/img8.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
          p.mb-0 Por tanto, el origen constituye un elemento importante para determinar las acciones específicas, pero la valoración de la crisis también depende de sus consecuencias sobre las personas, la infraestructura y la continuidad de la operación.
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img9.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 La aplicación de estos criterios permite que cada anotación aporte información precisa, verificable y útil para la continuidad del servicio. La minuta debe incluir los hechos operativos relevantes ocurridos durante el turno. Entre ellos se encuentran:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Pérdidas humanas o lesiones. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Daños en la infraestructura y los activos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Interrupción de procesos esenciales. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Pérdidas económicas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Afectación de la continuidad operativa. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Deterioro reputacional. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Afectaciones psicológicas en las personas involucradas. 
      p(data-aos="fade-left") Incluso un evento posteriormente no confirmado, como una amenaza de artefacto explosivo, puede generar evacuaciones, interrupciones operativas y pérdidas económicas. Por ello, la evaluación de las consecuencias debe considerar tanto los efectos inmediatos como aquellos que pueden mantenerse después de finalizado el incidente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Objetivos y fases de la gestión de crisis
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img10.png', alt='', style="width: 800px;")
        .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-left")
          p.mb-0.bg-color-2.p-3 La gestión de crisis comprende la capacidad institucional para anticipar, responder y recuperarse de acontecimientos que alteran la estabilidad operativa y pueden superar los mecanismos rutinarios de control. No se limita a una actuación reactiva, sino que articula previamente protocolos, responsabilidades y recursos para disminuir la incertidumbre y reducir las consecuencias humanas, materiales, operativas y reputacionales. Sus principales objetivos son:
          p.mb-0 Estos objetivos orientan la toma de decisiones durante las diferentes fases de gestión de una crisis. La gestión de una crisis se desarrolla mediante una secuencia que permite atender el evento desde su identificación hasta la recuperación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta09_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Activación
                p Inicia cuando se identifica un acontecimiento que supera los parámetros normales de operación, como una amenaza telefónica o una falla crítica. Se informa a la cadena de mando y se activan los responsables o equipos definidos para atender la situación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta09_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Evaluación
                p Permite determinar las características y credibilidad del evento mediante la revisión de cámaras, sensores, antecedentes, reportes y demás fuentes disponibles. Su finalidad es proporcionar información suficiente para orientar las decisiones posteriores.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta09_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Decisión
                p Comprende la selección de las medidas necesarias de acuerdo con las condiciones identificadas, como evacuación, aislamiento, acordonamiento o solicitud de apoyo externo. Las decisiones deben fundamentarse en criterios previamente establecidos y evitar actuaciones improvisadas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta09_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Respuesta
                p Consiste en ejecutar las acciones definidas, como evacuar, activar brigadas, interrumpir determinados servicios o coordinar la intervención de las autoridades y organismos competentes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta09_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Recuperación
                p Busca restablecer las condiciones de operación y analizar la respuesta aplicada. Incluye la elaboración de informes, la identificación de fallas y la actualización de los procedimientos y planes correspondientes.
      //- Fin Slideshow
      p(data-aos="fade-left") Estas fases permiten mantener una secuencia organizada de actuación y facilitan la coordinación de los diferentes responsables durante la emergencia.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Plan de administración de crisis
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img11.png', alt='', style="width: 800px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.mb-0.bg-color-6.p-4.rounded-4 El <b>plan de administración de crisis</b>, relacionado con los Planes de Operaciones de Emergencia (EOP), organiza las responsabilidades, los recursos y los procedimientos necesarios para atender situaciones críticas. El plan puede contemplar responsables como el jefe de crisis, el coordinador de evacuación, el vocero y el operador de comunicaciones. Asimismo, integra recursos como puntos de encuentro, planos, equipos especializados y sistemas alternos de comunicación.
          p.mb-0 También puede incorporar sedes alternas de mando y procedimientos específicos según la naturaleza de las amenazas, como incendios, explosivos, eventos QBRN, colapsos estructurales o disturbios. Su actualización periódica y la realización de simulacros permiten evaluar la capacidad de respuesta de la organización y ajustar los procedimientos cuando sea necesario.
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Gestión de alarmas y central de monitoreo
      p(data-aos="fade-left") La <b>gestión de alarmas en la central de monitoreo</b> articula los procedimientos mediante los cuales una señal es recibida, interpretada, verificada, priorizada, escalada y registrada. Su finalidad es garantizar una respuesta proporcional al nivel de riesgo y mantener la trazabilidad de las decisiones y actuaciones realizadas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Gestión de señales de alarma durante una crisis
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Durante una crisis, la gestión de señales de alarma se desarrolla mediante un proceso de <b>recepción, verificación, priorización, escalamiento y registro:</b>
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta10_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Recepción
                            p El operador identifica el tipo de señal recibida y su ubicación específica, consulta la información disponible y determina el procedimiento inicial correspondiente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta10_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Verificación
                            p Permite determinar si la señal corresponde a un evento que requiere intervención, mediante la revisión de antecedentes, contactos y procedimientos de confirmación establecidos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta10_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Priorización
                            p Clasifica la señal según su nivel de atención para organizar la secuencia y oportunidad de las acciones requeridas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta10_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Escalamiento
                            p Comprende la comunicación con los responsables definidos, como usuarios, supervisores, personal de respuesta o autoridades, de acuerdo con las características y evolución del evento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta10_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registro
                            p Documenta las horas, señales recibidas, comunicaciones, decisiones adoptadas y resultados obtenidos, garantizando la trazabilidad del procedimiento para posteriores procesos de evaluación o auditoría.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t3/img12.png', style="width: 350px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img13.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-0 <b>Ejemplo:</b>
                  br
                  br
                  | Ante una señal de apertura irregular recibida durante la madrugada, el operador debe consultar la información correspondiente y aplicar el procedimiento de verificación establecido. Cuando la verificación no sea satisfactoria, procede el escalamiento de acuerdo con el protocolo definido.
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-3.h-100.d-flex.align-items-center.rounded-3
            p.mb-0 Las amenazas verbales requieren un tratamiento especialmente riguroso. La información debe registrarse de manera literal, incluyendo las características relevantes de la comunicación, y notificarse al responsable correspondiente sin divulgar datos innecesarios.
        .col-12.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex.align-items-center
            img(src="@/assets/curso/temas/t3/img14.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-6.col-lg-3(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 La formación continua, los ejercicios y los simulacros complementan estos procedimientos y permiten fortalecer la capacidad del personal para responder de manera coordinada ante situaciones críticas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Protocolos de seguridad para la recepción y atención de alarmas
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img15.png', alt='', style="width: 800px;")
        .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-left")
          p.mb-0.bg-color-2.p-3 Los <b>protocolos de seguridad para la recepción y atención de alarmas</b> constituyen el punto de partida de la respuesta operativa, ya que permiten transformar una señal electrónica, humana o integrada en una actuación proporcional y técnicamente fundamentada.
          p.mb-0 Esta fase debe desarrollarse mediante procedimientos verificables que garanticen precisión, trazabilidad y protección de las personas, sin depender exclusivamente del criterio intuitivo del operador. Toda señal recibida debe procesarse mediante una secuencia que contemple la <b>identificación del evento, verificación, clasificación del riesgo, decisión operativa, escalamiento y registro documental.</b> Esta estructura permite mantener criterios uniformes en la central de monitoreo. Los principales componentes del protocolo se desarrollan de la siguiente manera: 
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img16.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Recepción e identificación de la señal")
                p.mb-4 La recepción inicia con la identificación inmediata del evento en el software de monitoreo. El operador debe establecer datos como el código de la señal, la zona, el cliente y la hora de recepción. Posteriormente, contrasta esta información con la ficha del usuario, en la cual se encuentran las claves, zonas y contactos autorizados. Este registro inicial orienta las actuaciones posteriores, pero no sustituye la verificación requerida por el protocolo. 
                p <b>Ejemplo:</b> si a las 03:20 horas se recibe una señal de intrusión en la zona 04 de un establecimiento comercial, el operador debe consultar si existen aperturas programadas, mantenimientos o antecedentes de fallas en dicha zona antes de determinar el escalamiento.
              .row(titulo="Verificación de la alarma")
                p.mb-4 Permite determinar si la señal corresponde a un evento autorizado, una falla técnica, una falsa alarma o una situación que requiere intervención. Puede realizarse mediante contacto telefónico, radio, sistemas de circuito cerrado de televisión (CCTV) u otros medios establecidos por la organización. Cuando el procedimiento contemple una clave de seguridad o <b>santo y seña</b>, el operador debe solicitarla al contacto autorizado y comprobar su correspondencia con la información registrada.
              .row(titulo="Decisión frente a la verificación")
                p.mb-4 Si la validación resulta satisfactoria y se confirma una actividad autorizada o una prueba técnica, el evento se documenta conforme al procedimiento establecido. Si no existe respuesta, la información es inconsistente o la clave suministrada es incorrecta, debe aplicarse el escalamiento correspondiente. 
                p <b>Ejemplo:</b> si una persona responde la llamada de verificación, pero suministra una clave incorrecta, el evento debe tratarse conforme al protocolo previsto para una posible situación de coacción.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Eventos de atención prioritaria")
                p.mb-4 En señales relacionadas con <b>pánico, coacción o intrusión confirmada</b>, la prioridad operativa puede exigir la activación inmediata de recursos, sin prolongar innecesariamente las fases de verificación cuando ello pueda incrementar el riesgo para las personas.
              .row(titulo="Registro y trazabilidad")
                p.mb-4 Toda actuación relacionada con una señal de alarma debe quedar documentada. El <i>software</i> de monitoreo, la bitácora o los registros institucionales deben contener información suficiente para reconstruir posteriormente la secuencia de decisiones y acciones realizadas.
              .row(titulo="Continuidad tecnológica")
                p.mb-4 La infraestructura tecnológica forma parte del protocolo de atención, debido a que una falla en los sistemas puede comprometer la recepción y gestión de alarmas. La central debe disponer de los mecanismos de continuidad establecidos por la organización, como servidores alternos, sistemas de alimentación ininterrumpida (UPS), planta eléctrica o receptoras redundantes.
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img17.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") La recepción, verificación, decisión y documentación deben desarrollarse de manera articulada para mantener la continuidad del servicio y garantizar una respuesta proporcional.
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Atención de amenazas verbales
      //- Título nivel 4 
      p(data-aos="fade-left") Las <b>amenazas verbales</b>, como llamadas relacionadas con artefactos explosivos o extorsión, requieren un procedimiento específico de registro y comunicación. La información recibida debe consignarse literalmente y conservar aquellos elementos que puedan resultar relevantes para su posterior análisis.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Durante la recepción se deben registrar los siguientes aspectos:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Contenido literal de la amenaza. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Hora de inicio y finalización de la comunicación. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Características de la voz. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Tonos, pausas y particularidades de la comunicación. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Sonidos o elementos identificables en el entorno de la llamada. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Información adicional proporcionada por la persona que realiza la amenaza. 
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img18.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") Cuando el procedimiento institucional lo contemple, la comunicación debe mantenerse activa durante el tiempo necesario y la información debe notificarse inmediatamente al coordinador correspondiente o al <b>Equipo de Evaluación Técnica (TET)</b>. Asimismo, debe evitarse la divulgación de datos a personas que no intervengan directamente en la gestión del incidente.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img19.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Información mínima del registro</b>
            br
            br
            | Como mínimo, deben documentarse los siguientes datos:
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Hora de recepción de la señal. 
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Tipo y ubicación del evento. 
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Verificaciones realizadas. 
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Comunicaciones efectuadas. 
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Responsables contactados. 
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Decisiones adoptadas. 
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Recursos movilizados. 
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Resultado o cierre del evento.
      p(data-aos="fade-left") El registro garantiza la <b>continuidad entre turnos, la trazabilidad operativa y el respaldo de las actuaciones</b> ante procesos de supervisión, auditoría o investigación.
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Responsabilidades durante la atención de alarmas
      //- Título nivel 4 
      p(data-aos="fade-left") La distribución de funciones evita que las decisiones críticas se concentren en un único actor y permite mantener una estructura jerárquica de respuesta:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 2.
                  span Responsabilidades durante la atención de alarmas
                figure.mb-0.text-center
                  img.mx-auto(src='@/assets/curso/temas/t3/img20.png', alt='', style="width: 600px;")
            //- Inicio Accordion 1
            .bg--img_03.mt-5
              .row.justify-content-center
                .col-lg-3.mb-5.mb-lg-0
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t3/img21.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="a)	Operador")
                      p.mb-4 Recibe y procesa la señal, consulta la información del usuario, realiza las verificaciones establecidas, registra las actuaciones y ejecuta el escalamiento de acuerdo con el protocolo.
                    .row(titulo="b)	Supervisor")
                      p.mb-4 Realiza las verificaciones operativas correspondientes, coordina la respuesta en campo y mantiene comunicación con la central de monitoreo.
                    .row(titulo="c)	Coordinador")
                      p.mb-4 Organiza el escalamiento, determina la intervención de otros responsables y articula la participación de equipos especializados cuando la naturaleza del evento lo requiere.
                    .row(titulo="d)	Equipo de Evaluación Técnica (TET)")
                      p.mb-4 Interviene cuando el protocolo establece la necesidad de una evaluación especializada, particularmente frente a amenazas que requieren análisis técnico específico.
            //- Fin Accordion 1
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-left")
          p.mb-0.bg-color-6.p-4.rounded-3 Esta distribución permite articular las decisiones y mantener control sobre la evolución del evento. Además de la disponibilidad tecnológica, deben mantenerse controles de acceso a la infraestructura y a la información sensible relacionada con planos, claves, usuarios y configuraciones del sistema.
          p.mb-0 La eficacia del protocolo depende también de la capacitación continua. Los operadores deben realizar ejercicios relacionados con verificación, falsas alarmas, amenazas verbales, escalamiento y diligenciamiento de registros, con el propósito de mantener criterios uniformes de actuación.
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img22.png', alt='', style="width: 800px;")
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Niveles de alarma y procedimiento de atención
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La clasificación de las alarmas permite determinar la <b>prioridad, el tiempo de respuesta y los recursos requeridos</b>. Aunque las señales pueden pertenecer a categorías como intrusión, pánico, emergencia o falla técnica, su nivel operativo depende de las condiciones particulares del evento y del riesgo asociado. Los niveles se organizan de la siguiente manera:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta11_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Nivel I: alarma crítica — prioridad alta
                p Corresponde a situaciones como pánico, coacción, intrusión confirmada u otros eventos que representan un peligro inmediato para la vida o la integridad física. La respuesta debe priorizar el escalamiento y la activación de los recursos establecidos, como supervisión, personal de respuesta o autoridades competentes. 
                p <b>Ejemplo:</b> la activación de un botón de pánico en una portería requiere atención inmediata conforme al protocolo aplicable.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Nivel II: posible evento real — prioridad media-alta
                p Comprende señales cuya naturaleza requiere confirmación, como aperturas fuera del horario autorizado, activaciones aisladas de una zona o registros de video insuficientes para establecer inicialmente la situación. Se aplican procedimientos de verificación antes de determinar el escalamiento definitivo. 
                p <b>Ejemplo:</b> si se recibe una señal de apertura en una bodega fuera del horario habitual, el operador debe aplicar los mecanismos de comprobación establecidos antes de cerrar o escalar el evento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Nivel III: alarma técnica o de mantenimiento — prioridad media-baja
                p Incluye señales relacionadas con baja batería, pérdida de comunicación, pruebas programadas o exclusiones temporales de zonas. Su tratamiento se orienta principalmente al registro, comunicación al responsable y coordinación del mantenimiento requerido, salvo que aparezcan elementos adicionales de riesgo. 
                p <b>Ejemplo:</b> ante una señal de batería baja, el operador registra la novedad y gestiona la notificación para la revisión técnica correspondiente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Nivel IV: evento administrativo o informativo — prioridad baja
                p Comprende pruebas del sistema, mantenimientos programados, aperturas o cierres autorizados y otros acontecimientos que requieren principalmente registro para efectos de trazabilidad. El evento se escala únicamente cuando el contexto indique una condición adicional de riesgo.
      //- Fin Slideshow
      p.mb-3(data-aos="fade-left") La clasificación facilita la asignación proporcional de recursos y evita tanto respuestas insuficientes como movilizaciones innecesarias.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img23.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La atención debe seguir una secuencia que articule el registro automático del sistema con el análisis efectuado por el operador:
            br
            br
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span <b>Detección y registro:</b> el sistema registra la señal con su código, zona, hora y demás datos disponibles. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span <b>Lectura contextual:</b> el operador consulta la ficha del cliente y los antecedentes relevantes asociados con la señal. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span <b>Verificación:</b> cuando corresponda al nivel y tipo de evento, se aplican los mecanismos establecidos, como llamada, clave de seguridad, contacto radial o revisión de sistemas técnicos. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span <b>Decisión y escalamiento:</b> de acuerdo con el resultado, se determina el cierre del evento, la comunicación con supervisión, el envío de personal de respuesta o la notificación a la autoridad competente. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span <b>Registro del resultado:</b> se documentan las comunicaciones, decisiones, responsables, tiempos y resultado final del procedimiento. 
      p(data-aos="fade-left") Esta secuencia garantiza que cada nivel de alarma reciba una atención proporcional, verificable y documentada.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Gestión de falsas alarmas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las <b>falsas alarmas</b> pueden generar movilización innecesaria de recursos, aumentar la carga operativa de la central y disminuir la sensibilidad del personal frente a futuras señales. Por esta razón, su gestión debe orientarse tanto a la atención inmediata como a la identificación y corrección de las causas que originan recurrencias.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Entre las principales medidas se encuentran:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Aplicar mecanismos de verificación previa cuando el tipo de señal y el nivel de riesgo lo permitan. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Registrar las falsas alarmas para identificar recurrencias. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Analizar posibles causas técnicas, humanas o procedimentales. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Informar al responsable cuando se requiera mantenimiento o ajuste del sistema. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Aplicar procedimientos escalonados frente a eventos repetitivos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Mantener la trazabilidad de las acciones adoptadas hasta corregir la causa identificada. 
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img24.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") La adecuada gestión de falsas alarmas permite optimizar los recursos de respuesta y conservar la confiabilidad del sistema de monitoreo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Escalamiento y matriz de notificación
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El <b>escalamiento y la matriz de notificación</b> permiten organizar la comunicación y la asignación de responsabilidades durante la atención de un evento. La central debe contar con una secuencia previamente definida que determine quién recibe la información, quién coordina la respuesta y en qué momento deben involucrarse equipos especializados o autoridades externas. La secuencia general de escalamiento se estructura de la siguiente manera:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 3.
                  span Secuencia general de escalamiento y notificación
                figure.mb-0.text-center
                  img.mx-auto(src='@/assets/curso/temas/t3/img25.png', alt='', style="width: 600px;")
            p(data-aos="fade-left") La aplicación de esta secuencia depende de las características y del nivel de riesgo del evento. La matriz debe contemplar responsables principales y alternos, mecanismos de contacto, claves de acceso y criterios para solicitar apoyo externo ante situaciones como intrusión confirmada, incendio o amenaza relacionada con un artefacto. Las responsabilidades asociadas con cada nivel de escalamiento se organizan así:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Operador
                            p Recibe la señal, consulta la información disponible, realiza las verificaciones correspondientes, registra las actuaciones y comunica el evento al nivel siguiente cuando se cumplen los criterios de escalamiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Supervisor
                            p Evalúa la información recibida, coordina las acciones operativas en campo y determina la necesidad de continuar el escalamiento conforme al protocolo establecido.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Coordinador de zona
                            p Articula los recursos disponibles y coordina las decisiones que requieren intervención de niveles superiores o equipos especializados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Equipo técnico especializado
                            p Interviene cuando la naturaleza del evento requiere conocimientos, procedimientos o recursos técnicos específicos para su evaluación y atención.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Autoridad competente
                            p Participa cuando las características del evento requieren intervención externa, de acuerdo con las competencias institucionales y los protocolos establecidos.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t3/img26.png', style="width: 350px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") Esta estructura permite mantener una comunicación ordenada y evita duplicidades o decisiones aisladas durante la atención de situaciones críticas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Documentación, trazabilidad e indicadores operativos
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
        .col-lg-6.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img27.png', alt='', style="object-fit: cover;")
        .col-lg-6.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 La <b>documentación y trazabilidad</b> constituyen elementos esenciales para conservar evidencia de las actuaciones realizadas durante la atención de un evento. Cada procedimiento debe dejar un registro que permita reconstruir cronológicamente las decisiones, comunicaciones y acciones ejecutadas. El registro debe incluir, como mínimo:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Código del evento. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Hora de recepción y atención. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Comunicaciones realizadas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Responsables involucrados. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Acciones ejecutadas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Decisiones adoptadas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Evidencia asociada, como grabaciones o clips. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Resultado y cierre del evento. 
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-left")
          p.mb-0.bg-color-6.p-3.rounded-3 La trazabilidad facilita las auditorías, las revisiones posteriores y la identificación de oportunidades de mejora en los protocolos y planes de gestión de crisis.
          p.mb-0 Como complemento del registro, los <b>indicadores operativos (KPI)</b> permiten evaluar el desempeño de la central de monitoreo e identificar aspectos que requieren fortalecimiento. Su análisis periódico facilita la adopción de medidas correctivas y el ajuste de protocolos y procesos de capacitación.
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img28.png', alt='', style="width: 800px;")
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img29.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Entre los principales indicadores se encuentran:
            br
            br            
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Porcentaje de verificaciones exitosas. 
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Índice de falsas alarmas por cliente. 
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Cumplimiento del registro documental. 
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Precisión en el escalamiento. 
              li.d-flex.mb-2.mt-3
                i.fas.fa-check-circle.me-3
                span Número de eventos sin evidencia suficiente, con meta de cero.
      p(data-aos="fade-left") El seguimiento conjunto de la documentación, la trazabilidad y los indicadores permite evaluar la calidad de la operación y fortalecer progresivamente los procedimientos de respuesta.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Capacitación y simulacros
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 La <b>capacitación y los simulacros</b> permiten preparar al personal para responder de manera organizada ante situaciones que exigen decisiones rápidas y coordinación entre diferentes responsables. Los ejercicios deben contemplar escenarios relacionados con:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Llamadas de amenaza. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Intrusiones apoyadas mediante sistemas de video. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Fallas múltiples. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Procesos de verificación. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Escalamiento de eventos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Coordinación entre operadores, supervisores, equipos técnicos especializados y autoridades. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Registro y documentación de las actuaciones. 
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img30.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") La práctica periódica fortalece las competencias de comunicación, la toma de decisiones y la calidad de los registros operativos.
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img31.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Ejemplo:</b>
            br
            br
            | a las 03:12 horas se recibe una señal de apertura en la zona 02, correspondiente a una posible intrusión. El operador intenta establecer contacto con el guardia, pero no obtiene respuesta. Posteriormente, revisa el CCTV e identifica movimiento, por lo que escala el evento al supervisor, coordina el apoyo correspondiente y notifica al cliente. La intervención posterior queda registrada con sus tiempos, comunicaciones y evidencias asociadas.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Identificación y clasificación de señales de alarma
      p(data-aos="fade-left") La <b>correcta identificación y clasificación de señales de alarma</b> permite determinar la naturaleza del evento, establecer su prioridad y seleccionar el procedimiento de atención correspondiente. Este proceso resulta especialmente importante cuando la información inicial es incompleta o ambigua y requiere una valoración estructurada antes de adoptar decisiones.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimiento para la identificación de eventos críticos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La <b>identificación de un evento crítico</b> constituye una fase determinante del proceso de respuesta, especialmente frente a amenazas relacionadas con explosivos, llamadas anónimas u objetos sospechosos. Estas situaciones pueden originarse a partir de información incompleta o ambigua, por lo que requieren una actuación estructurada que permita reconocer la anomalía, verificar el contexto, establecer prioridades, notificar a los responsables y documentar las actuaciones. El procedimiento se desarrolla mediante cinco etapas:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta13_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Identificación
                p Inicia cuando una comunicación, conducta, señal u objeto indica una posible condición de riesgo, aun cuando todavía no exista validación técnica. La prioridad consiste en reconocer la anomalía y aplicar las medidas establecidas sin intervenir directamente sobre elementos potencialmente peligrosos.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta13_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Verificación
                p Consiste en recopilar información contextual sin manipular físicamente un objeto sospechoso. Puede incluir la consulta de antecedentes, revisión de información disponible y comunicación con el personal del área afectada. La intervención directa corresponde únicamente al personal especializado cuando así se requiera.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta13_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Priorización
                p Determina la urgencia de la respuesta considerando factores como ubicación, ocupación del área, posibles consecuencias y condiciones del entorno. Esta valoración permite establecer el nivel de atención requerido.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Notificación
                p Garantiza que la información circule mediante la cadena de comunicación definida. Según la naturaleza y gravedad del evento, puede involucrar supervisión, equipos especializados, responsables del plan de crisis y autoridades competentes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta13_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registro
                p Documenta desde la primera comunicación hasta la resolución del evento, incluyendo horas, responsables, decisiones, comunicaciones y evidencias disponibles. Este registro garantiza la trazabilidad y facilita posteriores procesos de evaluación.                                
      //- Fin Slideshow
      p(data-aos="fade-left") Estas etapas deben aplicarse de manera articulada para mantener la proporcionalidad y trazabilidad de la respuesta.
      .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
        .col-lg-7.bg-color-6.d-flex.flex-column.justify-content-center.p-4
          p.mb-3.fw-bold Ejemplo: 
          p Ante una llamada que informa sobre un posible paquete explosivo en la recepción, el operador debe registrar la información suministrada, las características relevantes de la comunicación y los datos contextuales disponibles. La actuación posterior debe continuar mediante la cadena de notificación y los protocolos institucionales correspondientes.          
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img32.png', alt='', style="object-fit: cover;")
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img33.png', alt='', style="width: 800px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.mb-0.bg-color-2.p-3 Si un vigilante identifica una mochila sin propietario en un área crítica, la verificación no implica abrirla ni manipularla. El procedimiento consiste en recopilar información contextual, determinar si existen antecedentes o comportamientos inusuales relacionados y comunicar la situación a los responsables establecidos. La intervención directa corresponde al personal especializado.
          p.mb-0 En conjunto, estos procedimientos permiten que una señal, desde una falla técnica hasta una amenaza relacionada con un posible artefacto explosivo, sea atendida de manera proporcional, verificable y documentada.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de señales de alarma
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-3.h-100.d-flex.align-items-center
            p.mb-0 En una <b>central de monitoreo</b>, las señales emitidas por el sistema proporcionan información sobre el estado funcional y operativo de un sitio protegido. Su correcta identificación permite anticipar incidentes, reconocer fallas, identificar posibles amenazas y activar los procedimientos correspondientes.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex.align-items-center
            img(src="@/assets/curso/temas/t3/img34.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-6.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 No todas las señales representan una emergencia. Algunas tienen carácter informativo, técnico o corresponden a actividades rutinarias del usuario. Por esta razón, deben clasificarse adecuadamente antes de determinar las acciones requeridas. Los principales tipos de señales pueden organizarse de la siguiente manera:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img35.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Aperturas y cierres")
                p.mb-4 Corresponden a registros automáticos relacionados con el inicio o la finalización de la jornada operativa. Permiten confirmar si el ingreso o cierre ocurrió dentro del horario establecido e identificar situaciones atípicas, como aperturas anticipadas, cierres tardíos o ausencia de la señal esperada. 
                p <b>Ejemplo:</b> si un establecimiento tiene programada su apertura a las 07:00 horas y el sistema registra una apertura a las 05:12 horas, el operador debe aplicar el procedimiento establecido para determinar si corresponde a una actividad autorizada o a una situación que requiere escalamiento.
              .row(titulo="Señales de verificación")
                p.mb-4 Se generan durante pruebas técnicas realizadas por el usuario o por personal especializado para comprobar el funcionamiento de sensores, paneles y canales de comunicación. Deben identificarse claramente para evitar que una prueba programada sea interpretada como una alarma real. 
                p <b>Ejemplo:</b> durante un mantenimiento mensual, un técnico activa diferentes zonas para comprobar el funcionamiento del sistema. El operador identifica la codificación correspondiente, registra el procedimiento y clasifica correctamente las señales generadas.
              .row(titulo="Exclusión o <i>bypass</i>")
                p.mb-4 Corresponde a la desactivación temporal de una zona protegida por razones operativas, como reparaciones, trabajos internos o actividades que requieren circulación en espacios normalmente monitoreados. La exclusión no elimina la zona del sistema, sino que suspende temporalmente su capacidad de generar determinadas alarmas. 
                p <b>Ejemplo:</b> durante una fumigación interna se excluyen dos zonas volumétricas durante cuatro horas. El operador registra la exclusión y mantiene el seguimiento de las demás áreas protegidas.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Fallos técnicos")
                p.mb-4 Corresponden a señales que informan sobre condiciones capaces de comprometer la operatividad y continuidad del sistema de seguridad. Entre las más relevantes se encuentran las fallas de batería, la pérdida de comunicación, la interrupción del suministro eléctrico y los eventos asociados con posibles sabotajes. 
                p <b>Ejemplo:</b> si durante la madrugada se presenta simultáneamente una señal de posible sabotaje y una pérdida de comunicación, el operador debe aplicar el procedimiento de escalamiento establecido y coordinar las acciones correspondientes con el supervisor.
              .row(titulo="Señales con imágenes")
                p.mb-4 Algunos sistemas generan señales acompañadas de imágenes o clips capturados automáticamente cuando un sensor detecta movimiento o una posible intrusión. Este tipo de señal proporciona información adicional para confirmar el evento, reducir falsas alarmas y establecer su prioridad operativa. 
                p <b>Ejemplo:</b> si una alarma perimetral genera imágenes en las que se identifica una persona desplazándose dentro del área protegida, el operador puede clasificar el evento conforme a los criterios definidos para una posible intrusión y activar el procedimiento correspondiente.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img36.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") La correcta administración de estas señales permite conservar el contexto operativo del sistema, identificar condiciones que requieren una respuesta adicional y mantener la trazabilidad de las actuaciones.
      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Comunicación y atención telefónica de incidentes
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img37.png', alt='', style="width: 800px;")
        .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-left")
          p.mb-0.bg-color-4.p-4.rounded-4 La <b>atención telefónica en un centro de seguridad</b> constituye un componente esencial de la gestión operativa, debido a que las llamadas pueden comunicar desde acontecimientos de baja complejidad hasta situaciones de alto impacto, como intrusiones, emergencias médicas o amenazas deliberadas.
          p.mb-0 La llamada puede constituir el primer contacto operativo con el incidente. Por esta razón, el operador debe procesar la información con <b>precisión, neutralidad y disciplina comunicativa</b>, procurando que los datos obtenidos contribuyan a la verificación, priorización y activación del procedimiento correspondiente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios e información requerida durante la atención telefónica
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
        .col-lg-6.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img38.png', alt='', style="object-fit: cover;")
        .col-lg-6.bg-color-6.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Durante la atención telefónica, el operador debe mantener estabilidad emocional, claridad comunicativa y disciplina procedimental. Ante interlocutores agresivos, alterados o desorientados, debe conservar la calma, facilitar la continuidad de la comunicación y evitar confrontaciones que puedan ocasionar la finalización anticipada de la llamada.
          p Entre los principios fundamentales se encuentran:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Mantener una comunicación clara y profesional. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Permitir que el interlocutor suministre la información necesaria. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Evitar interrupciones innecesarias. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Registrar de manera precisa los datos relevantes. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Identificar cambios en el tono, pausas y sonidos de fondo cuando sean pertinentes. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Evitar juicios, confrontaciones o interpretaciones personales. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Mantener la confidencialidad de la información obtenida. 
      p(data-aos="fade-left") La aplicación de estos principios favorece la calidad del registro y proporciona información útil para las decisiones posteriores.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img39.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0.fw-bold Ejemplo
          br
          br
          p durante una llamada en la que un usuario reporta ruidos en la parte posterior de un inmueble, el operador permite que la persona explique la situación e identifica un sonido metálico de fondo. Este elemento se registra como parte de la información disponible para la posterior evaluación del evento.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img40.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 El protocolo debe permitir recopilar los datos necesarios para determinar la <b>naturaleza, ubicación, urgencia y nivel de riesgo</b> del acontecimiento. La información debe obtenerse siguiendo el desarrollo de la conversación y evitando presionar innecesariamente al interlocutor. Entre los datos relevantes se encuentran:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Hora aproximada del acontecimiento. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Ubicación precisa o aproximada. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Descripción de la situación reportada. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Personas o elementos involucrados. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Motivación expresada por el interlocutor, cuando corresponda. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Características del objeto, dispositivo o fenómeno reportado. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Información contextual que permita valorar la credibilidad o gravedad del evento. 
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img41.png', alt='', style="width: 420px;")
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-2.p-4.rounded-4(data-aos="fade-left")
          p.mb-3 <b>Ejemplo:</b>
          p.mb-0 ante una llamada relacionada con un posible objeto sospechoso en un parqueadero, el operador recopila los datos proporcionados por el interlocutor y registra las características descritas, sin orientar a la persona a acercarse o manipular el elemento.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo posterior y protocolo operativo en la central de monitoreo
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Una vez finalizada la comunicación, el operador debe <b>notificar, registrar y escalar</b> la información conforme al procedimiento establecido. La rapidez de estas actuaciones resulta relevante para conservar la precisión de los datos y facilitar una respuesta oportuna.
      .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
        .col-lg-6.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img42.png', alt='', style="object-fit: cover;")
        .col-lg-6.bg-color-4.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 El manejo posterior comprende:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Notificar al responsable:</b> comunicar inmediatamente la información al supervisor o al nivel establecido. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Completar el registro:</b> consignar los datos obtenidos, las horas y las características relevantes de la llamada. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Aplicar el escalamiento:</b> activar los responsables y recursos correspondientes según la naturaleza del evento. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Mantener disponibilidad:</b> permanecer disponible para complementar información o reconstruir cronológicamente la comunicación. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Proteger la información:</b> evitar divulgar el contenido entre personas que no intervengan en el procedimiento.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img43.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Estas acciones permiten mantener la trazabilidad y reducir el riesgo de pérdida o distorsión de información. La atención telefónica relacionada con alarmas o reportes de incidentes debe integrarse con los demás procedimientos de la central de monitoreo. El proceso articula la identificación, recepción de información, valoración del riesgo, escalamiento y registro:
            br
            br
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span <b>Identificación:</b> el operador atiende la comunicación de manera profesional e identifica la información inicial disponible. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span <b>Caracterización del evento:</b> determina si la situación corresponde a una posible intrusión, incendio, emergencia médica, violencia, amenaza o falla técnica. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span <b>Verificación:</b> recopila los datos necesarios para establecer las características y condiciones del acontecimiento.  
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span <b>Clasificación:</b> determina la prioridad de atención conforme a los criterios establecidos. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span <b>Escalamiento:</b> comunica la situación al supervisor y activa los recursos internos o externos que correspondan. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span <b>Registro:</b> documenta las comunicaciones, decisiones, tiempos y actuaciones realizadas. 
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img44.png', alt='', style="width: 460px;")
        .col-12.col-lg-7.order-2.order-lg-2.bg-color-3.p-4.rounded-4(data-aos="fade-left")
          p.mb-3 <b>Ejemplo:</b>
          p.mb-0 un usuario comunica que escuchó la ruptura de un vidrio. El operador recopila la información disponible, confirma las condiciones de seguridad del interlocutor, clasifica el evento conforme al protocolo y activa los recursos definidos para su atención.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia estratégica del protocolo
      //- Título nivel 3 - Imagen
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-9.order-2.order-lg-1
          .row.g-0.align-items-stretch.bg-color-6.mb-4
            .col-12.col-md-5.px-0
              img(src="@/assets/curso/temas/t3/img45.png", style="width:100%; height:100%; object-fit:cover;")
            .col-12.col-md-7.p-4.d-flex.align-items-center
              p.mb-0 El <b>protocolo de atención telefónica</b> fortalece la capacidad institucional para gestionar información durante los primeros momentos de un incidente. La calidad de la comunicación inicial puede incidir directamente en la verificación, clasificación y posterior respuesta.
          p Las amenazas recibidas telefónicamente deben gestionarse mediante los procedimientos establecidos hasta que la situación sea evaluada y se determine su naturaleza. Un registro incompleto, una comunicación inadecuada o la pérdida de información relevante puede afectar la valoración posterior del evento.
          p Por ello, el protocolo permite mantener criterios uniformes, mejorar la calidad de los registros y fortalecer la coordinación durante la gestión de incidentes.
        .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t3/img46.png", data-aos="zoom-in", style="width: 250px;").mx-auto
      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Tipos y clasificación de situaciones de emergencia
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-md-12.col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-2.h-100.d-flex.align-items-center.rounded-4
            p.mb-0 Las <b>situaciones de emergencia</b> comprenden acontecimientos imprevistos capaces de afectar gravemente a las personas, la infraestructura o las operaciones. Pueden tener origen natural, accidental o deliberado, y su identificación permite activar procedimientos diferenciados de control, aislamiento, evacuación y respuesta.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex.align-items-center
            img(src="@/assets/curso/temas/t3/img47.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-6.col-lg-3(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 En las primeras etapas puede existir información limitada o imprecisa. Por esta razón, el personal debe aplicar los protocolos establecidos y evitar actuaciones que incrementen la exposición al peligro.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Emergencias por explosivos e IED
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las <b>emergencias relacionadas con explosivos y dispositivos explosivos improvisados (IED)</b> constituyen escenarios de alta complejidad debido a su capacidad destructiva, imprevisibilidad y posibles consecuencias sobre las personas y la infraestructura.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img48.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Ante una amenaza relacionada con explosivos o la identificación de un objeto sospechoso, el personal de seguridad debe evitar cualquier manipulación y aplicar los procedimientos institucionales correspondientes. Entre los posibles indicios se encuentran objetos fuera de contexto, paquetes abandonados, olores inusuales, cables expuestos, sonidos anómalos o comportamientos atípicos en el entorno. Las actuaciones iniciales deben orientarse a:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Mantener distancia del elemento sospechoso. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Evitar su manipulación. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Restringir el acceso al área. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Comunicar inmediatamente la situación. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Aplicar los procedimientos de evacuación o aislamiento establecidos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Facilitar la intervención de las autoridades o unidades especializadas. 
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img49.png', alt='', style="width: 460px;")
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-6.p-4.rounded-4(data-aos="fade-left")
          p.mb-3 <b>Ejemplo:</b>
          p.mb-0 durante una ronda, un colaborador identifica una mochila abandonada en un área que normalmente permanece despejada. El personal evita acercarse o manipularla, restringe el acceso y comunica la situación para activar el procedimiento correspondiente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Incendios y explosiones
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img50.png', alt='', style="width: 800px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.bg-color-4.p-4.rounded-3 Las <b>emergencias por incendios o explosiones</b> requieren procedimientos oportunos de detección, activación de alarmas, evacuación y coordinación con los organismos competentes. Entre las señales iniciales pueden encontrarse humo, chispas, ruidos eléctricos, sobrecalentamiento de equipos u olores inusuales. La identificación temprana de estas condiciones facilita la activación de las medidas establecidas antes de que el evento aumente su magnitud.
          p.mb-0 El personal debe aplicar las rutas de evacuación, mantener despejados los accesos y coordinar la intervención de los organismos de emergencia. El uso de equipos para el control inicial del fuego debe realizarse únicamente cuando las condiciones y los procedimientos institucionales lo permitan.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img51.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0.fw-bold Ejemplo
          br
          br
          p en un área de almacenamiento se identifica olor a plástico quemado y presencia de humo proveniente de un tablero eléctrico. El personal activa el procedimiento de emergencia, facilita la evacuación del área y solicita el apoyo correspondiente, evitando manipular el tablero.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Emergencias QBRN
      //- Título nivel 3 - Imagen
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-9.order-2.order-lg-1
          .row.align-items-stretch.mb-4
            .col-12.col-md-5.px-0
              img(src="@/assets/curso/temas/t3/img52.png", style="width:100%; height:100%; object-fit:cover;")
            .col-12.col-md-7.d-flex.flex-column.justify-content-center
              p.mb-3.bg-color-6.p-4 Las #[b emergencias químicas, biológicas, radiológicas y nucleares (QBRN)] requieren procedimientos especializados debido a las características de los agentes involucrados y a la dificultad que puede existir para identificarlos inicialmente.
              p.mb-0 Estas situaciones pueden presentarse en instalaciones industriales, laboratorios, infraestructuras críticas o espacios relacionados con el almacenamiento o transporte de sustancias peligrosas. Entre las señales que pueden requerir atención se encuentran derrames, vapores, olores inusuales, afectaciones físicas simultáneas en varias personas o presencia de sustancias desconocidas.
        .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t3/img53.png", data-aos="zoom-in", style="width: 250px;")
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img54.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las actuaciones iniciales deben priorizar:
            br
            br
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Evitar el contacto directo. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Restringir el acceso al área. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Mantener una distancia segura. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Comunicar inmediatamente la situación. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Aplicar los procedimientos institucionales establecidos. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Coordinar la intervención de personal especializado
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img55.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3.fw-bold Ejemplo:
          p un vigilante identifica un contenedor derramado que genera vapores y produce irritación en las personas cercanas. Sin aproximarse al elemento, restringe el acceso y comunica la situación para activar la respuesta especializada.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Emergencias por colapsos estructurales
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los <b>colapsos estructurales</b> pueden originarse por deterioro de materiales, fallas en la infraestructura, sobrecargas, vibraciones externas o acontecimientos sísmicos. La identificación temprana de condiciones anómalas permite adoptar medidas preventivas antes de que se produzca una afectación mayor.
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img56.png', alt='', style="width: 800px;")
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-4.p-4.rounded-3(data-aos="fade-left")
          p Entre las señales que pueden indicar una posible falla estructural se encuentran:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Grietas progresivas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Deformaciones visibles. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Crujidos o sonidos inusuales. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Inclinación de muros. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Hundimiento de pisos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Desprendimiento de elementos estructurales. 
      p(data-aos="fade-left") Ante estas condiciones, debe restringirse el acceso, aplicar las rutas de evacuación establecidas y solicitar la evaluación de personal especializado.
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-lg-7.order-2.order-lg-2.bg-color-6.p-4.rounded-4(data-aos="fade-left")
          p.mb-3 <b>Ejemplo:</b>
          p.mb-0 en un edificio administrativo se reportan ruidos inusuales y un hundimiento progresivo del piso. El responsable activa el procedimiento correspondiente, restringe el ingreso al área y solicita una evaluación técnica especializada.
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img57.png', alt='', style="width: 460px;")
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación general de emergencias
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Además de su tipología específica, las emergencias pueden agruparse según su origen. Esta clasificación facilita la identificación de los procedimientos de prevención, preparación y respuesta aplicables en cada caso:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Emergencias naturales")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta14_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Emergencias naturales
                  p Comprenden fenómenos como inundaciones, tormentas eléctricas, deslizamientos y sismos. Pueden afectar la infraestructura, interrumpir servicios esenciales y comprometer la seguridad de las personas, por lo que requieren la aplicación de procedimientos de evacuación y evaluación de las condiciones del entorno.
            .py-3.py-md-4(titulo="Emergencias accidentales")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta14_2.png')
                .col-md-6
                  h4 Emergencias accidentales
                  p Se originan por fallas humanas, errores operativos o deterioros técnicos. Incluyen incendios no provocados, fallas de maquinaria, colapsos por desgaste o fugas accidentales de sustancias. Su atención requiere identificar el origen, aislar el área afectada y coordinar la intervención técnica correspondiente.
            .py-3.py-md-4(titulo="Emergencias provocadas")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta14_3.png')
                .col-md-6
                  h4 Emergencias provocadas
                  p Corresponden a acciones deliberadas, como sabotajes, colocación de explosivos, intrusiones violentas o ataques planificados. Estas situaciones requieren procedimientos específicos de seguridad, escalamiento y coordinación inmediata con las autoridades competentes.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Esta clasificación permite diferenciar el origen de la emergencia y orientar una respuesta proporcional a sus características y posibles consecuencias.
      Separador
      //- Inicio Tema3.6
      .row
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Organización técnica y coordinación para la atención de emergencias
      p(data-aos="fade-left") La atención de emergencias requiere una estructura técnica que articule <b>protocolos, acciones preventivas, políticas institucionales, autoridades, brigadas y mecanismos de coordinación.</b> Estos componentes permiten organizar la respuesta, delimitar responsabilidades y mantener criterios comunes de actuación antes, durante y después de una situación crítica.
            //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Protocolo técnico
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El <b>protocolo técnico</b> constituye un instrumento formal que organiza y estandariza las acciones necesarias para responder de manera segura y coherente ante una emergencia. Su estructura debe articularse con la identificación de peligros, la evaluación de riesgos y las medidas institucionales establecidas para proteger a las personas y mantener la continuidad operativa. El protocolo debe integrar los principales componentes requeridos para organizar la respuesta:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta15_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Definiciones operativas
                            p Establecen los conceptos y criterios utilizados durante la atención de emergencias, de manera que el personal aplique un lenguaje común y procedimientos uniformes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta15_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Responsabilidades
                            p Determinan las funciones de los diferentes actores antes, durante y después de una emergencia, con el propósito de evitar duplicidades o vacíos en la actuación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta15_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Rutas de evacuación
                            p Definen los recorridos establecidos para facilitar el desplazamiento seguro de las personas desde las áreas afectadas hacia los puntos determinados por la organización.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta15_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Mecanismos de alarma y comunicación
                            p Comprenden los sistemas utilizados para advertir sobre una emergencia, transmitir información y coordinar las actuaciones entre los responsables internos y externos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta15_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Puntos de encuentro
                            p Corresponden a los lugares establecidos para concentrar de manera organizada a las personas evacuadas y facilitar su control durante una emergencia.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta15_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Equipos y recursos disponibles
                            p Incluyen los elementos técnicos, humanos y logísticos destinados a apoyar la respuesta de acuerdo con las características y riesgos de la instalación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta15_7.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Enlaces con entidades externas
                            p Establecen los mecanismos de articulación con bomberos, Policía Nacional, servicios médicos y demás autoridades u organismos que puedan intervenir.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t3/img58.png', style="width: 350px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
      p(data-aos="fade-left") Estos componentes deben mantenerse articulados con los programas preventivos y con los procesos de capacitación y actualización del personal.
      //- Título nivel 4 
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        h3.titulo-nivel4 Simulacros y validación del protocolo
      //- Título nivel 4 
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.h-100.d-flex.align-items-center
            p.mb-0 Los <b>simulacros</b> permiten comprobar la aplicación del protocolo, fortalecer la capacidad de reacción e identificar oportunidades de mejora en la coordinación. Deben desarrollarse de manera periódica y planificada, acompañados de registros que faciliten la evaluación posterior y el ajuste de las medidas de prevención y respuesta.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex.align-items-center
            img(src="@/assets/curso/temas/t3/img59.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-6.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 En el contexto de la seguridad privada, estos ejercicios también permiten fortalecer competencias relacionadas con el comando de incidentes, la comunicación durante situaciones críticas y la coordinación entre los diferentes responsables. Para profundizar en este tema, se recomienda consultar el anexo <b>Guía de funcionamiento de sala de crisis nacional.</b>
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Acciones preventivas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las <b>acciones preventivas</b> buscan reducir la probabilidad de ocurrencia de una emergencia o minimizar sus consecuencias en caso de materializarse. Deben integrarse con las actividades institucionales de gestión del riesgo y mantenerse de manera permanente.
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img60.png', alt='', style="width: 800px;")
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-4.p-4.rounded-3(data-aos="fade-left")
          p Entre las principales acciones se encuentran:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Inspecciones periódicas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Mantenimiento preventivo de equipos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Capacitación continua. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Análisis de tendencias. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Evaluación de las condiciones del entorno. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Actualización de procedimientos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Revisión de los recursos disponibles para emergencias.               
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-lg-8.order-2.order-lg-2.bg-color-6.p-4.rounded-4(data-aos="fade-left")
          p.mb-3 <b>Ejemplo:</b>
          p.mb-0 la revisión periódica de los equipos contra incendios permite identificar deterioros o fallas antes de que estos sean requeridos durante una emergencia.
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img61.png', alt='', style="width: 460px;")
      p(data-aos="fade-left") Las acciones preventivas fortalecen la capacidad institucional para anticipar riesgos y responder de manera organizada ante situaciones críticas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Políticas de la organización en el manejo de emergencias
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las <b>políticas organizacionales para el manejo de emergencias</b> corresponden a las directrices institucionales mediante las cuales la alta dirección establece los criterios, prioridades y compromisos que orientan la prevención, preparación y atención de situaciones críticas. Estas políticas deben integrarse con el sistema de gestión de la organización y mantenerse actualizadas frente a cambios normativos, tecnológicos y operativos.
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img62.png', alt='', style="width: 800px;")
        .col-12.col-lg-6.order-2.order-lg-1.bg-color-2.p-2.rounded-3(data-aos="fade-left")
          p Las políticas deben establecer lineamientos relacionados con:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Designación de responsables y líderes. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Asignación de recursos económicos, humanos y técnicos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Formación y capacitación del personal. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Implementación de acciones de prevención y mitigación. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Desarrollo y actualización de planes y protocolos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Coordinación con organismos de emergencia. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Evaluación periódica de los procedimientos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Promoción de comportamientos seguros. 
      p(data-aos="fade-left") Estas directrices no se limitan a declaraciones generales, sino que deben traducirse en compromisos operativos que puedan ser aplicados y evaluados.
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-lg-8.order-2.order-lg-2.bg-color-3.p-4.rounded-4(data-aos="fade-left")
          p.mb-3 <b>Ejemplo:</b>
          p.mb-0 la designación formal de un líder de emergencias con funciones y autoridad definidas facilita la coordinación de una evacuación y la adopción de decisiones durante un incidente.
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img63.png', alt='', style="width: 460px;")
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Competencia y coordinación con las autoridades
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La atención de emergencias en el sector de la seguridad privada requiere la participación coordinada de <b>autoridades y organismos con competencias diferenciadas</b>. La organización de seguridad privada desarrolla las actuaciones iniciales que le corresponden, pero debe reconocer los límites de su intervención y facilitar la participación de las entidades competentes cuando la naturaleza del evento lo requiera. Las principales competencias se distribuyen de la siguiente manera:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta16_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bomberos
                p Atienden incidentes relacionados con incendios, materiales inflamables y diferentes modalidades de rescate especializado. Su intervención puede incluir control de incendios, rescate en alturas o espacios confinados y evaluación de condiciones derivadas de eventos asociados con fuego.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta16_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Policía Nacional
                p Interviene en situaciones relacionadas con el orden público, actos violentos, amenazas delictivas y acontecimientos que requieren aseguramiento del área. También articula la participación de unidades especializadas cuando corresponde.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta16_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Fiscalía o entes investigativos
                p Asumen las funciones investigativas cuando el evento presenta características delictivas. Su intervención comprende actividades relacionadas con investigación penal, recolección de elementos materiales probatorios, cadena de custodia y procedimientos técnico-científicos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta16_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Servicios médicos y Cruz Roja
                p Desarrollan actividades de atención prehospitalaria, clasificación de lesionados, estabilización, transporte y apoyo requerido durante situaciones con personas afectadas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta16_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Defensa Civil y organismos comunitarios
                p Apoyan procesos relacionados con evacuación, organización de zonas seguras, asistencia logística y atención de emergencias que requieren movilización o coordinación de grupos de personas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta16_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Unidades especializadas: antiexplosivos, QBRN y rescate técnico
                p Intervienen en situaciones que requieren conocimientos y recursos especializados, como posibles dispositivos explosivos, materiales químicos, biológicos, radiológicos o nucleares y operaciones de rescate técnico. Estas funciones no deben ser asumidas por el personal de seguridad privada.
      //- Fin Slideshow
      p(data-aos="fade-left") La delimitación de competencias evita intervenciones inadecuadas y permite que cada entidad actúe conforme a sus responsabilidades.
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-lg-8.order-2.order-lg-2.bg-color-6.p-4.rounded-4(data-aos="fade-left")
          p.mb-3 <b>Ejemplo:</b>
          p.mb-0 ante un objeto sospechoso en una zona perimetral, el personal de seguridad debe restringir el acceso, aplicar el protocolo institucional y facilitar la intervención de la unidad especializada, sin manipular el elemento.
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img64.png', alt='', style="width: 460px;")
      p(data-aos="fade-left") La <b>relación con las autoridades</b> debe establecerse previamente y no únicamente cuando ocurre un incidente, debido a que el conocimiento de las instalaciones, los accesos y los mecanismos de comunicación facilita una intervención organizada.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 La coordinación operacional debe incluir:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Identificación del <b>punto de encuentro externo (PEE).</b>
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Disponibilidad de llaves, planos y croquis para facilitar el acceso. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Procedimientos para el ingreso y salida de unidades oficiales. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Simulacros conjuntos cuando correspondan. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Revisión periódica de rutas de evacuación. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Designación de un enlace institucional como responsable de la comunicación. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Registro y trazabilidad de las interacciones desarrolladas durante el evento. 
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img65.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") La coordinación debe sustentarse en información precisa y en una clara delimitación de las responsabilidades de cada actor. De esta manera, se reducen duplicidades y se facilita que las decisiones especializadas sean asumidas por las autoridades competentes.
      Separador
      //- Inicio Tema3.7
      .row
        #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.7 Brigadas de emergencias
      p(data-aos="fade-left") A continuación, se presenta un video sobre las brigadas de emergencias, sus principales funciones y su importancia en la respuesta organizada ante situaciones de riesgo.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img66.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0.fw-bold Ejemplo
          br
          br
          p ante una situación que requiera atención inicial de una persona lesionada, la brigada de primeros auxilios aplica los procedimientos correspondientes dentro del alcance de su capacitación y solicita el apoyo especializado requerido. En una situación relacionada con presencia de humo, los brigadistas aplican las acciones establecidas y coordinan con el responsable del plan la necesidad de evacuación.
      p(data-aos="fade-left") De esta manera, las brigadas fortalecen la capacidad de respuesta interna y facilitan la coordinación con los organismos competentes cuando el evento supera los recursos disponibles en la organización.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Atención de emergencias
      p(data-aos="fade-left") La <b>atención de emergencias</b> debe considerar de manera articulada dos dimensiones esenciales: la protección de las personas y la seguridad de las instalaciones. Esta integración permite desarrollar una respuesta equilibrada, orientada a proteger la vida, controlar las consecuencias del evento y preservar, cuando las condiciones lo permitan, los activos y la continuidad operativa.
      //- Título nivel 3 - Imagen
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tarjetas
            .row.justify-content-center.mb-3(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-white.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta17_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Protección de las personas
                    p.mb-2 Constituye la prioridad de la atención. Comprende la asistencia inicial a personas lesionadas, la activación de rutas de evacuación, la coordinación con servicios médicos y la aplicación de primeros auxilios por personal capacitado. También contempla medidas destinadas a proteger la integridad física y psicológica de las personas involucradas.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-white.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta17_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Protección de las instalaciones
                    p.mb-2 Se orienta a controlar el incidente y reducir posibles afectaciones estructurales, tecnológicas u operativas. Puede incluir aislamiento de áreas críticas, activación de sistemas de emergencia, cierre de suministros, contención de riesgos y protección de activos esenciales.
            //- Fin Tarjetas
            p(data-aos="fade-left") Ambas dimensiones deben desarrollarse de manera coordinada. Por ejemplo, si una explosión genera personas lesionadas y daños en un cuarto técnico, los responsables deben activar la atención correspondiente a los afectados, restringir el acceso al área y coordinar la intervención de los organismos externos competentes.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimientos y metodologías para la operación de las brigadas
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img67.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La operación de las <b>brigadas de emergencias</b> requiere procedimientos estructurados, previamente entrenados y coherentes con los riesgos identificados por la organización. Estos procedimientos deben ser claros, secuenciales y verificables para reducir la improvisación durante situaciones críticas. La metodología de operación puede apoyarse en los siguientes recursos:
            br
            br
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Guías rápidas de actuación. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Listas de verificación. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Rutas previamente definidas. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Protocolos de comunicación interna. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Asignación de responsabilidades. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Registros para garantizar la trazabilidad. 
              li.d-flex.mb-2
                i.fas.fa-check-circle.me-3
                span Procedimientos de coordinación con organismos externos. 
      .row.justify-content-center.align-items-start.mb-4
        .col-12.col-md-8.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          .row.align-items-stretch.mb-4
            .col-12.col-lg-6.mb-4.mb-lg-0
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/t3/img68.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
            .col-12.col-lg-6
              .bg-color-6.p-4.h-100.d-flex.align-items-center
                p.mb-0 El <b> Sistema de Comando de Incidentes (ICS)</b> constituye un marco para organizar la respuesta mediante funciones y jerarquías definidas. Su estructura permite distribuir responsabilidades relacionadas con comando, operaciones, logística y comunicaciones, facilitando la coordinación institucional y la articulación con organismos externos.
          p.mb-3 El entrenamiento continuo complementa esta metodología, ya que permite mantener actualizadas las competencias de los brigadistas, incorporar cambios derivados de nuevos riesgos y aplicar las oportunidades de mejora identificadas durante ejercicios y simulacros.          
          p.mb-0 De esta manera, la operación de las brigadas se configura como un proceso de mejoramiento permanente en el que convergen capacitación, práctica, retroalimentación y actualización técnica.
        .col-12.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0
            img.mx-auto(src='@/assets/curso/temas/t3/img69.png', alt='', style="width: 100%; height: auto;")
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-12        
          .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-7.p-4.rounded-4           
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/icono.svg', style="width: 80px")          
            .flex-grow-1.text-center.text-lg-start
              h4.mb-2 Protocolos de emergencia, gestión de señales de alarma y plan de emergencia
              p.mb-0 Se invita a leer el documento “Protocolos de emergencia, gestión de señales de alarma y plan de emergencia”, donde se aborda la actuación institucional frente a incidentes y emergencias, incluyendo los procedimientos de atención y reporte, la identificación y clasificación de señales de alarma, los simulacros, las acciones preventivas y la estructura del plan de emergencia.
            .mt-3.mt-lg-0.ps-lg-4            
              a.btn.btn-custom-download.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Anexo_01_Protocolos_Plan_Emergencia.pdf')" target="_blank")
                span.fw-bold.me-2 Descargar
                i.fas.fa-file-download

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

<style lang="sass"></style>
<style lang="sass"></style>
