<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Gestión de riesgos
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img1.png', alt='', style="width: 800px;")
        .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-left")
          p.mb-0.bg-color-2.p-3 La <b>gestión de riesgos en seguridad</b> es un proceso integral, continuo y sistemático orientado a anticipar, evaluar y controlar las amenazas que pueden afectar a las personas, los bienes, la infraestructura y la continuidad de las operaciones. Su aplicación adquiere especial relevancia en entornos dinámicos expuestos a amenazas físicas, tecnológicas, naturales y sociales.
          p.mb-0 En consecuencia, la gestión del riesgo debe integrarse tanto en la planificación estratégica como en la operación diaria y la preparación para emergencias. Esto permite anticipar escenarios adversos, establecer prioridades y adoptar medidas orientadas a reducir sus posibles consecuencias. 
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Identificación y análisis de riesgos
      p(data-aos="fade-left") La identificación y el análisis de riesgos parten de la comprensión de los conceptos de <b>amenaza, vulnerabilidad y riesgo,</b> y se complementan mediante herramientas que permiten reconocer las condiciones del entorno, establecer prioridades y anticipar situaciones que puedan afectar la seguridad.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comparación entre riesgo, amenaza y vulnerabilidad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La diferenciación entre <b>amenaza, vulnerabilidad y riesgo</b> constituye un fundamento para la planeación de la seguridad física y la operación de los sistemas de monitoreo. Aunque estos conceptos pueden utilizarse indistintamente en el lenguaje cotidiano, en el ámbito de la seguridad poseen significados diferentes que inciden en la planificación, la priorización de recursos y la aplicación de protocolos. Para establecer sus diferencias y comprender su relación, se presentan los tres conceptos:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Amenaza")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Amenaza
                  p Corresponde al agente, condición, evento o actor con capacidad de generar daño. Puede ser intencional, como hurto, intrusión, sabotaje, terrorismo o agresión; o no intencional, como incendios, fallas eléctricas o desastres naturales. 
                  p <b>Ejemplo:</b> la presencia recurrente de personas sospechosas alrededor de una instalación constituye una amenaza que requiere atención preventiva.
            .py-3.py-md-4(titulo="Vulnerabilidad")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_2.png')
                .col-md-6
                  h4 Vulnerabilidad
                  p Corresponde a una debilidad interna que puede ser aprovechada por una amenaza y puede tener origen físico, tecnológico, procedimental o humano. Entre sus manifestaciones se encuentran la iluminación deficiente, las cámaras sin mantenimiento, las cerraduras inadecuadas, los procedimientos desactualizados o la falta de capacitación. 
                  p <b>Ejemplo:</b> un sensor desconfigurado o una cámara con un punto ciego constituye una vulnerabilidad que puede corregirse mediante medidas internas.
            .py-3.py-md-4(titulo="Riesgo")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_3.png')
                .col-md-6
                  h4 Riesgo
                  p Surge de la interacción entre la amenaza y la vulnerabilidad y considera la probabilidad de ocurrencia de un evento adverso y el impacto que este puede generar sobre los activos protegidos. 
                  p <b>Ejemplo:</b> si una zona presenta alta incidencia de hurtos y una instalación tiene deficiencias en sus sistemas de protección perimetral, el riesgo de intrusión aumenta.
      //- Cierres Pestanas horizontales
      p.mb-4(data-aos="fade-left") La relación entre estos conceptos puede expresarse de manera general como <b>amenaza + vulnerabilidad → riesgo.</b> Sin embargo, el nivel de riesgo depende de las condiciones particulares del entorno, las vulnerabilidades existentes y las medidas de protección implementadas.
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-8.order-2.order-lg-1
          .row.g-0.align-items-stretch.bg-color-6.mb-4
            .col-12.col-md-5.px-0
              img(src="@/assets/curso/temas/t2/img2.png", style="width:100%; height:100%; object-fit:cover;")
            .col-12.col-md-7.p-4.d-flex.align-items-center
              p.mb-0 En términos operativos, la <b>amenaza</b> orienta aquello que requiere seguimiento; la <b>vulnerabilidad</b> permite identificar los aspectos que deben fortalecerse; y el <b>riesgo</b> contribuye a determinar la prioridad de las acciones. Por ejemplo, ante un incremento de hurtos en motocicleta en las vías cercanas y deficiencias en el cerramiento perimetral, pueden priorizarse medidas como el fortalecimiento de las rondas, la revisión de los sistemas de alarma y el refuerzo de la vigilancia externa.
          p Esta relación también permite comprender que una amenaza puede permanecer presente mientras el riesgo disminuye como resultado de la reducción de vulnerabilidades. Por ejemplo, si en un parqueadero existen antecedentes de hurtos en la zona y, además, las cámaras presentan fallas de enfoque nocturno y la iluminación es insuficiente, el riesgo aumenta. Si se corrigen las deficiencias de iluminación y funcionamiento de las cámaras, la amenaza puede persistir, pero las condiciones de vulnerabilidad se reducen.
          p.mb-0 Comprender estas diferencias permite orientar la gestión de la seguridad con criterios técnicos, priorizar recursos y fortalecer las medidas preventivas destinadas a proteger personas, instalaciones y activos organizacionales.
        .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t2/img3.png", data-aos="zoom-in", style="width: 100%; max-width: 380px;").mx-auto
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Mapa de riesgos y peligros
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El <b>mapa de riesgos y peligros</b> en el sitio y entorno de trabajo constituye una herramienta del <b>Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)</b> que permite identificar, valorar y representar los factores de riesgo presentes en los diferentes espacios de la organización. El <b>Decreto 1072 de 2015</b> establece la identificación sistemática de peligros y la evaluación de riesgos como parte del SG-SST, con el propósito de orientar la planificación preventiva y la adopción de controles acordes con las condiciones del trabajo.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Identificación de peligros
                p Consiste en reconocer las fuentes, condiciones o actividades con potencial de generar daño físico, mental o material. La identificación debe considerar factores biomecánicos, físicos, químicos, biológicos, psicosociales, de seguridad, públicos y ambientales. Para ello, pueden emplearse recorridos, revisión documental, análisis de incidentes y diálogo con los trabajadores. 
                p <b>Ejemplo:</b> en una empresa de vigilancia pueden identificarse iluminación deficiente, cables expuestos o manipulación inadecuada de equipos de comunicación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Valoración del riesgo
                p Implica analizar la probabilidad de materialización del peligro y la severidad de sus consecuencias. Puede apoyarse en matrices cualitativas o semicuantitativas para clasificar los riesgos y establecer prioridades de intervención.
                p <b>Ejemplo:</b> una exposición prolongada al sol puede presentar una probabilidad alta y una severidad media, lo que exige establecer medidas preventivas acordes con el nivel de riesgo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Representación del riesgo
                p La información obtenida se organiza gráficamente mediante colores y símbolos que facilitan la identificación de las zonas y condiciones de riesgo. Esta representación puede emplearse en procesos de inducción, inspecciones y actividades relacionadas con la gestión preventiva. 
                p <b>Ejemplo:</b> una bodega puede identificar zonas con riesgo de caída de objetos o áreas destinadas al tránsito de montacargas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Actualización y mejora
                p El mapa debe integrarse a los procesos de mejora continua del SG-SST, de manera que permita incorporar cambios en las condiciones de trabajo, nuevos peligros y resultados derivados de incidentes o de la evaluación de los controles.
                p <b>Ejemplo:</b> si ocurre un incidente en un área inicialmente clasificada con riesgo medio, puede revisarse su valoración y ajustarse el nivel y los controles correspondientes.
      //- Fin Slideshow
      p(data-aos="fade-left") La actualización del mapa permite conservar su utilidad como herramienta preventiva y favorecer la participación de los trabajadores en la gestión de los riesgos.
      p(data-aos="fade-left") A continuación, se presenta un video sobre la <b>identificación de peligros</b>, que permitirá comprender su importancia para reconocer riesgos, establecer medidas de control y contribuir a la seguridad y salud en el entorno laboral.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Panorama de riesgos en seguridad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El <b>panorama de riesgos en seguridad</b> constituye un instrumento analítico que integra las amenazas presentes en el entorno, las vulnerabilidades internas y los niveles de riesgo que pueden afectar a las personas, los activos y los procesos organizacionales. Su propósito es anticipar eventos adversos y orientar decisiones estratégicas y operativas para priorizar los recursos de seguridad. Para su construcción se consideran diferentes componentes que permiten realizar un análisis estructurado:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img4.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Amenazas externas")
                p.mb-4 Comprenden factores criminales, sociales, naturales o tecnológicos externos a la organización que pueden afectar su seguridad. Su análisis considera frecuencia, tendencias y posibles consecuencias. 
                p <b>Ejemplo:</b> un incremento de hurtos a motociclistas en el sector puede requerir ajustes en la supervisión de accesos y zonas externas.
              .row(titulo="Vulnerabilidades internas")
                p.mb-4 Corresponden a debilidades físicas, tecnológicas, humanas o procedimentales que pueden facilitar la materialización de una amenaza. Entre ellas se encuentran cámaras mal orientadas, deficiencias de mantenimiento, fallas en los controles de acceso o desconocimiento de consignas. 
                p <b>Ejemplo:</b> una cámara ubicada a contraluz puede dificultar la identificación de una persona durante un incidente.
              .row(titulo="Nivel de riesgo")
                p.mb-4 Se determina mediante la combinación de la probabilidad y el impacto, lo que permite clasificar y priorizar los riesgos. Esta valoración facilita la asignación de recursos y la definición de controles de acuerdo con el nivel identificado. 
                p <b>Ejemplo:</b> un cerramiento deteriorado en un sector con alta incidencia de intrusiones puede requerir intervención prioritaria.
              .row(titulo="Activos críticos")
                p.mb-4 Corresponden a aquellos elementos cuya afectación podría comprometer la continuidad operativa o la estabilidad institucional. Pueden incluir salas de servidores, archivos sensibles o zonas de cargue y descargue. 
                p <b>Ejemplo:</b> una sala de servidores con accesos no controlados puede requerir medidas adicionales de protección.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Información de los sistemas de monitoreo")
                p.mb-4 Los registros de eventos, bitácoras y tiempos de respuesta permiten identificar patrones, fallas recurrentes y comportamientos inusuales que complementan las inspecciones físicas. 
                p <b>Ejemplo:</b> señales nocturnas repetidas sin una explicación técnica requieren análisis para determinar su causa y adoptar las acciones correspondientes.
              .row(titulo="Riesgos emergentes")
                p.mb-4 Se relacionan con cambios tecnológicos, transformaciones sociales o nuevas modalidades que pueden afectar la seguridad. Su incorporación permite mantener actualizado el panorama frente a modificaciones del entorno. 
                p <b>Ejemplo:</b> el empleo de drones para reconocimiento perimetral o de inhibidores de señal puede incorporarse al análisis cuando resulte pertinente para la organización.
              .row(titulo="Participación del personal operativo")
                p.mb-4 Los vigilantes y supervisores aportan información obtenida durante su interacción permanente con el entorno. Sus reportes sobre anomalías, comportamientos irregulares o cambios en las condiciones del servicio complementan los análisis técnicos. 
                p <b>Ejemplo:</b> reportes recurrentes sobre personas que permanecen en el entorno durante horarios atípicos pueden constituir información relevante para actualizar el panorama.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img5.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") La integración de estos componentes permite que el panorama de riesgos permanezca actualizado y sirva como fundamento para priorizar medidas preventivas, fortalecer controles y orientar los recursos disponibles.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alertas tempranas
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img6.png', alt='', style="width: 700px;")
        .col-12.col-lg-6.order-2.order-lg-2(data-aos="fade-left")
          p.bg-color-6.p-2 Las <b>alertas tempranas</b> constituyen un componente estratégico de la gestión de la seguridad física y la atención de emergencias, ya que permiten anticipar situaciones que podrían evolucionar hasta convertirse en incidentes críticos. Su propósito es facilitar la adopción de medidas preventivas, la movilización de recursos y la coordinación operativa antes de que el riesgo se materialice o aumente su impacto.
          p.mb-0 Una alerta temprana puede originarse en mecanismos tecnológicos, humanos, administrativos o externos capaces de detectar cambios, señales o patrones inusuales. Para que resulte útil, debe ser <b>oportuna, verificable y susceptible de generar una actuación definida.</b> Los principales tipos de alertas tempranas son:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Alertas técnicas")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta03_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Alertas técnicas
                  p Son generadas por dispositivos o sistemas automáticos que detectan condiciones anormales relacionadas con intrusión, incendio, coacción o fallas técnicas. También pueden derivarse del análisis de patrones registrados por sistemas electrónicos. 
                  p <b>Ejemplo:</b> varios intentos de apertura no autorizada registrados por un lector biométrico pueden constituir una alerta técnica.
            .py-3.py-md-4(titulo="Alertas humanas")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta03_2.png')
                .col-md-6
                  h4 Alertas humanas
                  p Proceden de reportes efectuados por vigilantes, usuarios o ciudadanos ante comportamientos o condiciones inusuales. Deben verificarse para evitar decisiones sustentadas únicamente en apreciaciones subjetivas. 
                  p <b>Ejemplo:</b> el reporte sobre personas que permanecen de manera recurrente en el entorno durante horarios atípicos puede generar una acción preventiva.
            .py-3.py-md-4(titulo="Alertas administrativas")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta03_3.png')
                .col-md-6
                  h4 Alertas administrativas
                  p Surgen de comunicaciones internas relacionadas con condiciones que pueden afectar la operación, como mantenimientos críticos, fallas recurrentes o cambios relevantes en la infraestructura. Permiten anticipar medidas de control antes de que la condición produzca una afectación mayor.
            .py-3.py-md-4(titulo="Alertas externas")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta03_4.png')
                .col-md-6
                  h4 Alertas externas
                  p Se originan en autoridades, organismos de socorro u otros sistemas especializados que advierten sobre acontecimientos capaces de afectar a la organización, como condiciones meteorológicas adversas o alteraciones del entorno.
      //- Cierres Pestanas horizontales
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Además de su origen, la eficacia de una alerta depende de tres condiciones fundamentales:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Oportunidad:</b> debe comunicarse con suficiente anticipación para permitir la adopción de medidas preventivas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Verificabilidad:</b> debe sustentarse en información susceptible de confirmación, reduciendo falsas alarmas y actuaciones innecesarias. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Capacidad de activar una respuesta:</b> debe estar asociada con un procedimiento que establezca las acciones correspondientes según el tipo y nivel de alerta. 
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img7.png', alt='', style="object-fit: cover;")
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img8.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Ejemplo</b>
            br
            br
            | la detección de olor a quemado en un cuarto eléctrico constituye una alerta temprana que debe comunicarse y gestionarse oportunamente para reducir la posibilidad de un incidente mayor.
      p(data-aos="fade-left") Todas las alertas deben incorporarse a un sistema estructurado de gestión de incidentes que permita <b>clasificarlas, escalarlas, documentarlas y atenderlas </b>mediante rutas de actuación previamente definidas. La coordinación entre vigilantes, operadores de monitoreo, supervisores y responsables de seguridad permite convertir las señales iniciales en decisiones preventivas orientadas a reducir vulnerabilidades y evitar la materialización de riesgos.
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Valoración del riesgo y sus impactos
      p(data-aos="fade-left") Una vez identificados los riesgos, es necesario determinar las consecuencias que podrían generar y estimar la posibilidad de que se materialicen. Para ello, se emplean métodos de asociación y delimitación de impactos, junto con criterios de probabilidad de ocurrencia. Estos elementos permiten establecer prioridades y orientar las medidas de intervención.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Métodos de asociación de impactos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los <b>métodos de asociación de impactos</b> permiten relacionar las amenazas identificadas con los efectos potenciales que pueden generar sobre las personas, los activos y la continuidad operativa. Desde el enfoque del análisis del riesgo, toda evaluación debe responder a tres interrogantes esenciales: <b>qué puede ocurrir, con qué probabilidad y cuáles serían las consecuencias.</b>
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-2.p-4.h-100.d-flex.align-items-center.rounded-4
            p.mb-0 La asociación de impactos se concentra especialmente en las consecuencias y permite vincular amenazas y vulnerabilidades con posibles afectaciones materiales, funcionales, económicas o reputacionales. De esta manera, contribuye a construir una comprensión integral del daño potencial y a orientar la toma de decisiones.
        .col-12.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex.align-items-center
            img(src="@/assets/curso/temas/t2/img9.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-6.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 En el ámbito de la seguridad, estos métodos convierten las amenazas identificadas en <b>escenarios de consecuencias</b> que pueden analizarse y compararse. Para ello, articulan factores como accesos vulnerables, fallas tecnológicas, comportamientos humanos, condiciones del entorno físico y registros históricos con sus posibles efectos sobre activos críticos o procesos operativos. Entre los principales métodos se encuentran:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta04_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Matriz de correlación amenaza-impacto
                p Relaciona cada amenaza con sus posibles consecuencias y asigna niveles de severidad. Permite diferenciar impactos directos, como el daño físico de un equipo, e indirectos, como la pérdida de confianza del cliente o la afectación reputacional. También facilita la identificación de consecuencias acumulativas o secundarias.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Análisis de escenarios
                p Consiste en construir escenarios de eventos posibles mediante la integración de datos operativos, tendencias delictivas, características de la instalación y registros de incidentes. Permite analizar la interacción entre diferentes factores de riesgo y determinar cómo podrían incrementar las consecuencias finales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Modelos probabilísticos
                p Permiten estimar las consecuencias considerando la probabilidad asociada con determinados escenarios. Su aplicación contribuye a estructurar el análisis y comparar diferentes situaciones de riesgo mediante criterios previamente establecidos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Métodos multicriterio
                p Asignan pesos a variables como gravedad, reversibilidad, alcance o costo económico para valorar el daño potencial. Estos métodos disminuyen la dependencia exclusiva del juicio profesional y fortalecen la objetividad del análisis, especialmente cuando las decisiones deben justificarse ante auditorías o entidades reguladoras.
      //- Fin Slideshow
      p(data-aos="fade-left") La aplicación de estos métodos permite asociar cada amenaza con sus posibles consecuencias y establecer prioridades de intervención según la naturaleza y severidad de los impactos identificados.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Delimitación de impactos
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img10.png', alt='', style="width: 800px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-2.p-4.rounded-4 La delimitación de impactos constituye una fase del análisis de riesgos mediante la cual se establecen los límites, la naturaleza y el alcance de las consecuencias que un evento puede generar sobre los activos organizacionales. Este proceso exige definir qué se considera daño y cuáles serán los criterios utilizados para evaluarlo, evitando interpretaciones ambiguas y fortaleciendo la coherencia metodológica del análisis.
          p.mb-0 La delimitación se relaciona directamente con la identificación de activos críticos, entendidos como aquellos cuya afectación puede comprometer funciones esenciales, la seguridad del personal o la estabilidad administrativa. Para ello, se establecen criterios que permitan determinar si las consecuencias afectan la integridad humana, la operación, la infraestructura, la información o la reputación institucional. Los principales criterios para delimitar los impactos son:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-1
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta05_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Severidad
                            p Permite clasificar los impactos de acuerdo con la magnitud de sus consecuencias. Categorías como leve, moderado, severo o crítico facilitan la priorización de recursos y el establecimiento de niveles aceptables de riesgo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta05_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Alcance espacial
                            p Determina el espacio físico que puede resultar afectado por el evento. El impacto puede limitarse a una zona específica o extenderse a diferentes áreas e instalaciones interconectadas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta05_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Alcance temporal
                            p Establece el periodo durante el cual pueden manifestarse las consecuencias. Algunos efectos son inmediatos, mientras que otros pueden desarrollarse a corto, mediano o largo plazo, como sucede con determinadas afectaciones reputacionales o filtraciones de información.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta05_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Impactos directos
                            p Corresponden a las consecuencias inmediatas derivadas del evento, como daños sobre un activo o lesiones al personal. Su identificación permite establecer las afectaciones iniciales que requieren atención prioritaria.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta05_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Impactos indirectos
                            p Comprenden consecuencias secundarias derivadas del evento inicial, como interrupciones de la operación, pérdidas económicas o afectaciones en la prestación del servicio. Su incorporación evita subestimar el alcance total de un incidente.
                    .col-lg-4.order-lg-2.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t2/img11.png', style="width: 350px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") La delimitación permite establecer parámetros uniformes para evaluar las consecuencias y contribuye a que la valoración del riesgo mantenga coherencia con los objetivos de protección y continuidad operativa de la organización.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Probabilidad de ocurrencia
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La probabilidad de ocurrencia constituye uno de los elementos estructurales del análisis de riesgos y permite estimar la posibilidad de que un evento adverso se presente en un entorno determinado. Esta estimación se integra con el impacto y el perfil del evento para establecer el nivel de riesgo.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img12.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-3 La probabilidad debe entenderse como una aproximación sustentada en datos, experiencia profesional y análisis del contexto, y no necesariamente como un valor matemático exacto. Su propósito es orientar la toma de decisiones preventivas y priorizar medidas proporcionales al nivel de exposición identificado. Entre los factores que pueden influir en la probabilidad se encuentran:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2.mt-3
              i.fas.fa-check-circle.me-3
              span Las facilidades de acceso no autorizado. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span La influencia de fenómenos naturales. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Las condiciones ambientales internas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span El comportamiento laboral. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span El valor del activo. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span La calidad y disponibilidad de los datos históricos. 
      p(data-aos="fade-left") La interacción de estas variables puede aumentar o disminuir la frecuencia esperada de un incidente. Cuando la información histórica es limitada, aumenta la incertidumbre de la estimación, por lo que resulta necesario revisar periódicamente la valoración. Para estimar la probabilidad pueden utilizarse dos fuentes complementarias:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tarjetas
            .row.justify-content-center.mb-3(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-white.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t2/tarjeta06_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Datos históricos
                    p.mb-2 Proporcionan información cuantitativa derivada de acontecimientos registrados previamente. Su análisis permite identificar frecuencias, recurrencias y patrones que sirven como referencia para estimar la posibilidad de nuevos eventos. 
                    p <b>Ejemplo:</b> una instalación que ha registrado múltiples intrusiones durante un periodo determinado puede presentar una probabilidad elevada de recurrencia.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-white.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t2/tarjeta06_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Juicio profesional
                    p.mb-2 Se utiliza especialmente cuando los registros disponibles son insuficientes. Debe sustentarse en las condiciones del entorno, los patrones identificados, la experiencia acumulada y otros elementos verificables que permitan fundamentar técnicamente la estimación.
            //- Fin Tarjetas
            p(data-aos="fade-left") Para estandarizar el análisis, la probabilidad puede organizarse mediante una escala de ocurrencia:
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
                          img(src='@/assets/curso/temas/t2/tarjeta07_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Virtualmente cierto
                            p Corresponde a un evento cuya ocurrencia se considera altamente esperada de acuerdo con las condiciones y antecedentes analizados. Su valoración demanda especial atención y la aplicación de controles acordes con el nivel de exposición.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta07_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Altamente probable
                            p Indica una posibilidad elevada de ocurrencia, sustentada en antecedentes, condiciones existentes o patrones que favorecen la materialización del evento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta07_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Moderadamente probable
                            p Corresponde a eventos cuya ocurrencia resulta posible, pero para los cuales las condiciones disponibles no permiten establecer una probabilidad elevada.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta07_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Improbable
                            p Se refiere a eventos cuya posibilidad de ocurrencia es reducida de acuerdo con los antecedentes y las condiciones analizadas. Esto no elimina la necesidad de seguimiento cuando sus consecuencias potenciales sean relevantes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta07_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Desconocida
                            p Se utiliza cuando la información disponible resulta insuficiente para establecer una estimación sustentada. Esta clasificación evidencia la necesidad de recopilar datos adicionales y mantener actualizado el análisis.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t2/img13.png', style="width: 350px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") Esta escala facilita la elaboración de matrices operativas y permite aplicar criterios uniformes en la valoración.
            p(data-aos="fade-right") La probabilidad debe analizarse conjuntamente con el <b>impacto</b> y las características de la amenaza. Además, su valoración es dinámica, debido a que puede modificarse por transformaciones sociales, cambios en las modalidades delictivas, variaciones ambientales o ajustes en la operación. Por ello, requiere revisiones periódicas dentro del ciclo de mejora continua para mantener correspondencia con las condiciones reales del entorno.

</template>

<script>
export default {
  name: 'Tema2',
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
