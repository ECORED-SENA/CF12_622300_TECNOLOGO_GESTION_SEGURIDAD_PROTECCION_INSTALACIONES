<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Área técnica
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-md-12.col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.h-100.d-flex.align-items-center
            p.mb-0 El área técnica comprende los fundamentos de la información, los sistemas de registro, las comunicaciones y la documentación operativa indispensable para garantizar la trazabilidad del servicio de vigilancia. En este eje se estudian la <b>gestión de la información</b>, sus tipos y metodologías, el manejo de la minuta de vigilancia, los protocolos y las consignas, así como los medios de comunicación y el lenguaje técnico especializado utilizado en la operación.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex.align-items-center
            img(src="@/assets/curso/temas/t1/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-6.col-lg-3(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 Asimismo, se incluyen glosarios, códigos y sistemas de comunicación aplicados tanto en tecnologías abiertas como cerradas. Su propósito es garantizar que el vigilante y el operador desarrollen competencias técnicas que permitan mantener la <b> integridad y confiabilidad de la información operativa.</b>
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Gestión de la información y sistemas de información
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img2.png', alt='', style="width: 100%; max-width: 500px;")
        .col-12.col-lg-7.order-2.order-lg-2.p-4(data-aos="fade-left")
          p.mb-0 La <b>información</b> constituye un activo esencial para el funcionamiento de los sistemas de seguridad privada, al entenderse como un recurso dinámico que transforma registros, señales técnicas y datos operativos en conocimiento útil para la toma de decisiones. Su valor radica en la capacidad de orientar acciones preventivas, facilitar la respuesta ante incidentes y permitir la reconstrucción precisa de los hechos para fines de auditoría o análisis posterior.
          p.mb-0 Como recurso complementario para profundizar en este concepto, se incluye el material audiovisual correspondiente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 La información como insumo operativo
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La información comprende todos los elementos que el sistema de seguridad produce, recibe, procesa o distribuye, e integra datos históricos, información en tiempo real, contenidos procedimentales y fuentes externas provenientes de autoridades o redes de apoyo. Esta estructura permite que los registros de rondas, las señales de alarma, las consignas y los informes se articulen en un flujo coherente orientado a la prevención y a la continuidad operativa.
      p(data-aos="fade-left") En este contexto, la información adquiere valor cuando se aplica oportunamente para evitar errores, respaldar la supervisión y asegurar la <b>trazabilidad institucional.</b>
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos operativos de información
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") En la seguridad privada se emplean distintos tipos de información de acuerdo con su finalidad, nivel de aplicación y grado de sensibilidad:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Información táctica
                p Se vincula con las decisiones inmediatas dentro del servicio e incluye señales de alarma, imágenes en tiempo real, reportes directos y variaciones del entorno. Su utilidad radica en orientar respuestas en segundos, especialmente durante incidentes críticos que exigen verificación rápida y acciones proporcionales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Información estratégica
                p Integra patrones históricos, análisis de riesgo y tendencias operativas utilizadas para planificar y ajustar el sistema de seguridad. Su propósito es orientar el diseño de políticas, la asignación de recursos y la definición de vulnerabilidades mediante decisiones de mediano y largo plazo que inciden en la eficacia organizacional.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Información administrativa
                p Se compone de inventarios, reportes periódicos, auditorías, registros de mantenimiento y documentos contractuales. Aunque no determina respuestas inmediatas, constituye la base para la organización interna, el cumplimiento normativo y la consistencia procedimental del sistema.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Información sensible o confidencial
                p Incluye datos personales, claves de acceso, rutas críticas, informes investigativos y configuraciones técnicas cuya exposición representa riesgos operativos y jurídicos. Su gestión exige criterios de clasificación y restricción de circulación que garanticen su integridad y confidencialidad.
      //- Fin Slideshow
      p(data-aos="fade-left") La adecuada clasificación permite determinar la finalidad operativa de la información y establecer criterios para su tratamiento y protección.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sistemas de información
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los <b>sistemas de información</b> permiten organizar, procesar, registrar y gestionar los datos necesarios para la operación de seguridad. Su estructura facilita la coordinación entre áreas, la continuidad del servicio, la supervisión de las actividades y la conservación de registros para posteriores procesos de análisis o auditoría. Los principales sistemas relacionados con la operación de seguridad privada son:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img3.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Sistemas de comando de incidentes")
                p.mb-4 Permiten coordinar la información entre áreas internas y actores externos durante emergencias complejas. Su estructura jerárquica facilita la asignación de roles, evita contradicciones y estandariza el flujo de información necesario para mantener el control en situaciones de crisis.
              .row(titulo="Sistemas de monitoreo y registro")
                p.mb-4 Integran plataformas que reciben señales, registran eventos, clasifican alarmas y permiten el análisis de imágenes o tendencias. Estas herramientas articulan la tecnología con la operación humana y favorecen la continuidad, la verificación y la evaluación del desempeño del personal y de los dispositivos.
              .row(titulo="Repositorios documentales")
                p.mb-4 Incluyen minutas, bases de datos, informes y archivos históricos que centralizan la información relevante para auditorías, supervisión y análisis. Su función es proporcionar un punto único de referencia que evite duplicidades y asegure la consistencia histórica del sistema.
              .row(titulo="Sistemas interoperables con entidades externas")
                p.mb-4 Permiten el intercambio rápido de datos, el acceso a información crítica y la continuidad operativa ante fallas internas en entornos que requieren coordinación con autoridades. Esta interoperabilidad reduce los tiempos de respuesta y fortalece la articulación institucional.
      //- Fin Accordion 1
      p(data-aos="fade-left") En conjunto, estos sistemas permiten convertir los datos generados durante la prestación del servicio en información organizada y útil para la <b>prevención, respuesta, supervisión y trazabilidad de las operaciones de seguridad privada.</b>
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios del sistema de información
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El sistema de información se fundamenta en principios que garantizan la calidad, confiabilidad y utilidad de los datos gestionados durante la prestación del servicio:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Veracidad")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta02_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Veracidad
                  p La información debe ser precisa, verificable y respaldada por evidencia objetiva. La integridad del servicio depende de que los datos transmitidos o registrados correspondan fielmente con la realidad operacional.
            .py-3.py-md-4(titulo="Oportunidad")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta02_2.png')
                .col-md-6
                  h4 Oportunidad
                  p La información debe estar disponible en el momento requerido, especialmente durante incidentes que demandan decisiones rápidas. Una comunicación tardía puede comprometer vidas, bienes o el cumplimiento de obligaciones contractuales.
            .py-3.py-md-4(titulo="Trazabilidad")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta02_3.png')
                .col-md-6
                  h4 Trazabilidad
                  p Toda acción relevante debe quedar documentada mediante registros que permitan reconstruir cronológicamente los acontecimientos. Este principio respalda investigaciones, auditorías internas y la defensa técnica del personal frente a reclamaciones.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La aplicación conjunta de estos principios permite conservar el valor operativo de la información y utilizarla como soporte para la toma de decisiones, la supervisión y el control institucional.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Metodologías de los procesos de información
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los procesos de información constituyen una estructura metódica orientada a transformar datos aislados en conocimiento operativo que respalde la toma de decisiones. Este ciclo comprende las etapas de <b>captura, verificación, registro, difusión, almacenamiento y retroalimentación</b>, cuya articulación garantiza la trazabilidad, reduce errores humanos y facilita que la información llegue al responsable competente en el momento adecuado. Las etapas se desarrollan de la siguiente manera:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img4.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Captura")
                p.mb-4 Constituye el primer contacto entre la información y el sistema de seguridad. El oficial debe registrar aquello que percibe, recibe o detecta de manera literal y sin interpretaciones. La información puede provenir de señales técnicas, comunicaciones por radio o teléfono, percepción directa del entorno o datos entregados por usuarios. La rigurosidad es fundamental, pues incluso detalles menores pueden resultar decisivos para análisis posteriores.
              .row(titulo="Verificación")
                p.mb-4 Busca confirmar la autenticidad, coherencia y relevancia operativa de la información capturada. Implica contrastar señales técnicas con los hechos identificados, evaluar la confiabilidad de la fuente y reconocer posibles fallas humanas o técnicas. Permite clasificar rápidamente el evento y activar el protocolo inicial correspondiente.
              .row(titulo="Registro")
                p.mb-4 Formaliza el evento y asegura la memoria operativa de la organización. Permite reconstruir hechos, respaldar auditorías, establecer responsabilidades y alimentar bases de datos. En incidentes sensibles, como amenazas telefónicas, deben registrarse textualmente el contenido, el tono, los sonidos de fondo y la hora exacta.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Difusión")
                p.mb-4 Consiste en transmitir la información a las personas responsables de actuar, de acuerdo con la cadena de mando. Su propósito es evitar la fragmentación de los datos y garantizar que la información sensible llegue únicamente al personal autorizado.
              .row(titulo="Almacenamiento")
                p.mb-4 La información debe conservarse bajo parámetros de confidencialidad, integridad y disponibilidad. Esto comprende la protección de datos sensibles, la prevención de alteraciones o pérdidas y el control de acceso. En sistemas como el circuito cerrado de televisión (CCTV), la sincronización temporal y la calidad de los registros son determinantes para preservar el valor probatorio de la evidencia.
              .row(titulo="Retroalimentación")
                p.mb-4 Cierra el ciclo y convierte la información almacenada en un insumo para la mejora institucional. Permite identificar fallas, ajustar protocolos, actualizar matrices de riesgo y evaluar el desempeño del personal. También puede articularse con metodologías de mejora continua, como el ciclo PDCA.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img5.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") El cumplimiento secuencial de estas etapas favorece una gestión organizada de la información y fortalece su utilidad para la prevención, la respuesta operativa y la mejora continua del servicio.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Metodologías específicas para situaciones críticas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Determinadas situaciones críticas requieren metodologías específicas para preservar la calidad de los registros, facilitar la respuesta y mantener la trazabilidad:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tarjetas
            .row.justify-content-center(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-white.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/tarjeta03_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Recepción de amenazas telefónicas
                    p.mb-0 Requiere una metodología rigurosa orientada a maximizar la recolección de datos sin comprometer la seguridad del oficial. Se recomienda mantener la llamada activa el mayor tiempo posible, registrar textualmente cada expresión, identificar características vocales y sonoras, y anotar las horas de inicio y finalización. Posteriormente, el reporte debe remitirse a los equipos especializados mediante los formatos establecidos.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-white.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/tarjeta03_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Procesos de información derivados de CCTV y sensores
                    p.mb-0 Requieren registros claros, auditables y asociados con tiempos debidamente sincronizados. Comprenden verificaciones periódicas, formatos unificados para incidentes técnicos, almacenamiento seguro, acceso restringido y procedimientos de respaldo que garanticen la conservación de los datos ante fallas del sistema principal.
            //- Fin Tarjetas
      p(data-aos="fade-left") Estas metodologías adaptan el proceso general de información a situaciones que requieren mayores niveles de precisión, control y preservación de evidencias.
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Protocolos, consignas y registros operativos
      p(data-aos="fade-left") Los protocolos, las consignas y los registros operativos conforman un conjunto de herramientas destinadas a organizar el flujo de información, establecer responsabilidades y documentar las actuaciones desarrolladas durante el servicio. Su aplicación contribuye a mantener la continuidad operativa y la trazabilidad institucional.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Protocolo y consignas para el proceso de información
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-2.p-4.h-100.d-flex.align-items-center.rounded-3
            p.mb-0 El <b>protocolo de información</b> regula formalmente el flujo de datos dentro del sistema de seguridad. Determina qué debe comunicarse, quién debe hacerlo, en qué momento y mediante cuáles recursos autorizados. Su finalidad es garantizar que la información crítica circule con claridad, precisión y trazabilidad, evitando distorsiones, omisiones o retrasos que puedan afectar la respuesta institucional.
        .col-12.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex.align-items-center
            img(src="@/assets/curso/temas/t1/img6.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-6.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 Los protocolos ordenan y estandarizan la gestión de la información dentro del servicio, facilitando su <b>circulación desde el nivel operativo hasta las instancias de supervisión y gerencia.</b> Procuran que los mensajes se transmitan mediante canales oficiales, sean verificados antes de su difusión y queden registrados para garantizar la trazabilidad y facilitar posteriores procesos de auditoría. Este orden resulta especialmente relevante durante incidentes críticos, en los cuales una comunicación contradictoria o transmitida por canales no autorizados puede afectar la capacidad de respuesta.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Ejemplo:</b>
            br
            br
            | Si un oficial detecta humo en una bodega, debe informar inmediatamente al supervisor mediante el canal autorizado y evitar medios informales que puedan retrasar la activación del plan de emergencia.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura y garantías del protocolo de información
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El protocolo establece responsabilidades, canales autorizados, niveles de información y requisitos de registro:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Definición de responsables")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta04_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Definición de responsables
                  p El oficial capta y reporta los datos iniciales; el supervisor valida y coordina la respuesta; la central de monitoreo consolida y registra el evento; y el jefe de seguridad toma decisiones estratégicas. Esta distribución evita vacíos operativos y duplicidad de mensajes. 
                  p <b>Ejemplo:</b> ante una intrusión detectada por un sensor perimetral, cada responsable interviene de acuerdo con su función y nivel de competencia.
            .py-3.py-md-4(titulo="Canales autorizados")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta04_2.png')
                .col-md-6
                  h4 Canales autorizados
                  p La comunicación debe realizarse mediante canales institucionales, como radio corporativa, teléfono interno, software de monitoreo o minutas oficiales. Se restringen medios informales que puedan comprometer la trazabilidad. 
                  p <b>Ejemplo:</b> una amenaza telefónica debe reportarse por el canal oficial y registrarse en el formato establecido.
            .py-3.py-md-4(titulo="Niveles de información")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta04_3.png')
                .col-md-6
                  h4 Niveles de información
                  p El protocolo diferencia entre información inmediata, informativa y archivada para priorizar los eventos y evitar la saturación de los canales. 
                  p <b>Ejemplo:</b> un incendio corresponde a información inmediata; un daño menor en un candado, a información informativa; y un inventario de llaves, a información archivada.
            .py-3.py-md-4(titulo="Registros obligatorios")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta04_4.png')
                .col-md-6
                  h4 Registros obligatorios
                  p Todo evento comunicado debe quedar documentado mediante los formatos autorizados. La ausencia de registro impide reconstruir los acontecimientos y dificulta la evaluación de responsabilidades. 
                  p <b>Ejemplo:</b> la presencia recurrente de un vehículo sospechoso debe registrarse con hora, características, placas, cuando sea posible, y acciones realizadas.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Además de esta estructura, el protocolo debe garantizar condiciones que favorezcan la calidad y confiabilidad de las comunicaciones:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta05_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Claridad del mensaje
                p La información debe ser concreta, objetiva y libre de interpretaciones personales. Se privilegia el lenguaje estandarizado o codificado para reducir ambigüedades.
                p <b>Ejemplo:</b> en lugar de expresar <i>«creo que alguien está entrando», debe informarse: «Se detecta movimiento en zona 3, cámara 12 confirma figura humana, 02:14 horas».</i>
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Verificación de la información
                p El oficial debe confirmar la información antes de transmitirla para reducir reportes derivados de interpretaciones incompletas y evitar la activación innecesaria de protocolos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Flujos jerárquicos definidos
                p La comunicación debe seguir la cadena de mando establecida, salvo cuando existan procedimientos excepcionales previamente definidos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Documentación obligatoria
                p Cada transmisión relevante debe quedar registrada para garantizar trazabilidad, facilitar auditorías y permitir la reconstrucción de los acontecimientos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta05_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Coordinación entre unidades
                p La articulación entre operadores, supervisores, centrales de monitoreo y unidades especializadas permite mantener coherencia en la información y fortalecer la respuesta ante incidentes o emergencias.
      //- Fin Slideshow
      p(data-aos="fade-left") La estructura y las garantías del protocolo se complementan para mantener un flujo de información organizado, verificable y acorde con las responsabilidades establecidas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Consignas e importancia estratégica
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las <b>consignas</b> son órdenes específicas mediante las cuales el protocolo general se aplica a las condiciones particulares de un puesto o instalación. Deben ser claras, breves, verificables y actualizadas, además de estar firmadas por el oficial y el supervisor. Pueden incluir rutas de patrullaje, puntos de control, procedimientos ante alarmas y pautas de comunicación operativa.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img8.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Ejemplo:</b>
            br
            br
            | Una consigna puede establecer que el oficial debe verificar el cuarto eléctrico cada dos horas, reportar inmediatamente cualquier olor a quemado y registrar cada ronda con la hora y la firma correspondientes.
      p(data-aos="fade-left") La verificación periódica por parte del supervisor garantiza que las consignas no se conviertan en documentos meramente formales, sino que permanezcan como herramientas operativas ajustadas a las condiciones reales del servicio.
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img9.png', alt='', style="width: 100%; max-width: 500px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.bg-color-4.p-2 El <b>protocolo de información</b> constituye el marco que organiza la comunicación, mientras que las <b>consignas</b> concretan sus disposiciones en acciones aplicables a cada puesto o instalación. Ambos elementos favorecen la uniformidad en la respuesta, reducen errores, fortalecen la disciplina operativa, garantizan la continuidad del servicio y proporcionan respaldo ante incidentes.
          p.mb-0 En situaciones críticas, la articulación entre protocolo y consignas contribuye a fortalecer la eficiencia del sistema y la capacidad de reacción de los actores involucrados.
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Minuta de vigilancia
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 La <b>minuta de vigilancia</b> es un documento institucional de carácter oficial, secuencial y obligatorio mediante el cual el vigilante registra cronológicamente las actividades, novedades y hechos relevantes ocurridos durante el turno. Su importancia radica en que garantiza la <b>continuidad, trazabilidad y transparencia del servicio</b>, y respalda tanto al personal como a la organización durante auditorías, investigaciones y reconstrucciones posteriores.
          p.mb-0 Este registro debe cumplir criterios de completitud, claridad e integridad para conservar su validez y constituirse en evidencia confiable ante procesos administrativos o disciplinarios.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img10.png', alt='', style="object-fit: cover;")
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Finalidad y características de la minuta
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La minuta cumple funciones esenciales relacionadas con el registro de acontecimientos, la continuidad del servicio, el respaldo de las actuaciones y la supervisión operativa:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img11.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Registro de acontecimientos")
                p.mb-4 Permite documentar con precisión entradas, salidas, incidentes, comunicaciones, fallas técnicas y cambios relevantes en el entorno. De esta manera, se construye una línea de tiempo verificable que facilita la reconstrucción posterior de los hechos.
              .row(titulo="Continuidad operativa")
                p.mb-4 Facilita que el vigilante que recibe el puesto conozca las novedades y acontecimientos ocurridos durante el turno anterior, evitando vacíos de información que puedan afectar la continuidad del servicio.
              .row(titulo="Respaldo de las actuaciones")
                p.mb-4 Permite dejar constancia de la diligencia del personal, el cumplimiento de protocolos y las acciones realizadas frente a irregularidades. Por esta razón, puede constituirse en un elemento probatorio ante requerimientos institucionales.
              .row(titulo="Supervisión del servicio")
                p.mb-4 Sirve como insumo para evaluar el desempeño, la calidad de los registros y la recurrencia de determinadas novedades o riesgos, y contribuye a identificar oportunidades de mejora en los procedimientos.
      //- Fin Accordion 1
      p(data-aos="fade-left") En conjunto, estas funciones convierten la minuta en un instrumento fundamental para conservar la memoria operativa del servicio. Para preservar su integridad documental, la minuta debe cumplir las siguientes características:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta06_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Consecutiva y numerada
                p Debe mantener una secuencia y un orden cronológico que permitan identificar la continuidad de los registros y reduzcan la posibilidad de alteraciones o manipulaciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Exclusiva del servicio
                p Su contenido debe corresponder únicamente a actividades, acontecimientos y novedades relacionados con la prestación del servicio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Auténtica
                p El registro manuscrito del vigilante permite establecer responsabilidad directa sobre la información consignada y contribuye a garantizar la autenticidad del documento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sin tachones ni enmendaduras
                p Los errores deben corregirse mediante una línea fina que permita conservar legible el contenido original, evitando modificaciones que comprometan la integridad documental.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Disponible para control
                p Debe permanecer disponible para procesos de supervisión, auditoría y verificación de calidad, debido a su función como registro institucional de la operación.
      p(data-aos="fade-left") Estas características permiten conservar la <b>integridad, autenticidad y confiabilidad</b> de la minuta como documento operativo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registro de la información y hechos relevantes
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-2(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img(src='@/assets/curso/temas/t1/img12.png', alt='')
        .col-lg-7.bg-color-4.d-flex.flex-column.justify-content-center.p-4
          p.mb-2 El registro en la minuta debe cumplir criterios que permitan reconstruir los acontecimientos y garantizar la utilidad operativa del documento. Para ello, se deben considerar los siguientes aspectos:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Objetividad:</b> describir hechos verificables y evitar opiniones, interpretaciones o suposiciones personales. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Cronología:</b> registrar cada acontecimiento de acuerdo con la hora y la secuencia en que ocurrió. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Claridad y precisión:</b> emplear lenguaje profesional y evitar expresiones coloquiales o abreviaturas no estandarizadas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Información completa:</b> incluir la hora, la descripción del hecho, las personas involucradas, las acciones realizadas, las notificaciones efectuadas y las novedades relevantes. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span <b>Firma:</b> incorporar la firma del vigilante como mecanismo de validación y autenticación del registro.
      //- Fin Slideshow
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img13.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Ejemplo:</b>
            br
            br
            | la anotación <i>«puerta del depósito sin seguro»</i> corresponde a un hecho concreto y verificable. En cambio, <i>«parece que intentaron entrar»</i> incorpora una interpretación que no ha sido confirmada y, por tanto, no cumple el criterio de objetividad requerido.
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img14.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 La aplicación de estos criterios permite que cada anotación aporte información precisa, verificable y útil para la continuidad del servicio. La minuta debe incluir los hechos operativos relevantes ocurridos durante el turno. Entre ellos se encuentran:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Movimientos de personal y visitantes. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Entrega y recibo de turno. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Novedades relacionadas con equipos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Fallas estructurales. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Cambios relevantes en el entorno físico. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Activaciones de alarmas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Visitas de supervisión. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Comunicaciones operativas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Condiciones climáticas significativas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Irregularidades que representen riesgo para la instalación. 
      p(data-aos="fade-left") El registro de estos acontecimientos responde al principio de <b>trazabilidad operativa,</b> necesario para reconstruir los hechos, evaluar responsabilidades y mantener la transparencia en la prestación del servicio.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre la minuta y la supervisión
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img15.png', alt='', style="width: 600px;")
        .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-left")
          p.bg-color-6.p-2.rounded-3 La <b>supervisión</b> utiliza la minuta como un insumo para verificar el cumplimiento de los procedimientos, evaluar el desempeño del personal e identificar patrones asociados con fallas recurrentes o riesgos emergentes.
          p Para realizar esta labor, el supervisor contrasta la información registrada con rondas físicas, registros de sistemas como el <b>circuito cerrado de televisión (CCTV)</b> y las alarmas, reportes técnicos e información suministrada por el personal o los usuarios. Las inconsistencias entre estos elementos y la minuta pueden constituir alertas que den lugar a ajustes en la operación o a los procesos correspondientes.
          p.mb-0 Esta relación convierte la minuta en un instrumento de control que no solo documenta lo ocurrido, sino que también permite verificar la correspondencia entre las actuaciones registradas y las condiciones reales del servicio.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Modelo doctrinal de minuta
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El siguiente modelo presenta la estructura formal y funcional requerida para registrar las principales actividades y novedades del servicio:
      .row.justify-content-center.mb-5
        .col-md-auto.col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 1.
            span Ejemplo de minuta 
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img16.png', alt='', style="width: 1300px;")
      p(data-aos="fade-left") Este modelo organiza cronológicamente la información y reúne en un único registro los datos necesarios para documentar los acontecimientos, las actuaciones realizadas y las comunicaciones efectuadas durante el turno.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia jurídica y operativa
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img17.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La <b>minuta de vigilancia</b> puede ser requerida por la empresa de seguridad, los clientes, los responsables de auditorías, la <b>Superintendencia de Vigilancia y Seguridad Privada</b> o las autoridades policiales y judiciales. Su importancia radica en que permite establecer la secuencia de los acontecimientos, identificar posibles responsabilidades, verificar las acciones realizadas y comprobar el cumplimiento de los protocolos establecidos.
      p(data-aos="fade-left") Por esta razón, la calidad del registro resulta fundamental. Una minuta elaborada de manera inadecuada puede afectar el respaldo institucional y del vigilante, especialmente cuando presenta inconsistencias que comprometen la veracidad o integridad de la información consignada.
      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Comunicación operacional y medios de comunicación
      .row.mb-3.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img18.png', alt='', style="width: 600px;")
        .col-12.col-lg-6.order-2.order-lg-2.bg-color-4.p-3(data-aos="fade-left")
          p.mb-0 La <b>comunicación</b> constituye un componente esencial de la seguridad privada, ya que permite coordinar la operación, garantizar la continuidad del servicio y transmitir información entre los diferentes niveles del sistema. Su oportunidad y confiabilidad adquieren especial importancia durante las emergencias, debido a que la toma de decisiones depende, en buena medida, de la rapidez y precisión del reporte inicial.
      p(data-aos="fade-left") A continuación, se presenta un video sobre las <b>técnicas de comunicación,</b> que permitirá reconocer su importancia para transmitir información de manera clara y efectiva en el entorno organizacional.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Función, verificación y mantenimiento de los medios de comunicación
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los equipos de comunicación facilitan el enlace directo entre el vigilante y la supervisión para reportar novedades, activar refuerzos, realizar verificaciones y recibir orientaciones en tiempo real. Esta conexión contribuye a garantizar una respuesta oportuna ante acontecimientos imprevistos o situaciones de riesgo.
      .row.mb-3.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img19.png', alt='', style="width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-1.p-4(data-aos="fade-left")
          p.bg-color-3.p-4 Asimismo, estos medios favorecen la continuidad operativa al permitir que el vigilante reporte su estado y confirme las condiciones del puesto y las consignas correspondientes. En situaciones de emergencia, la rapidez con la que se comunican alarmas, accesos no autorizados o anomalías puede incidir directamente en la eficacia de las acciones iniciales de respuesta.
          p.mb-0 Antes de iniciar el turno, el vigilante debe comprobar el estado funcional de los equipos de comunicación. Esta revisión preventiva permite reducir la posibilidad de fallas durante la operación y garantizar la disponibilidad de los medios necesarios para transmitir información crítica.
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img20.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 La verificación debe considerar, entre otros, los siguientes aspectos:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Estado y nivel de carga de la batería. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Calidad del audio. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Integridad física del equipo. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Funcionamiento de líneas o sistemas internos. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Disponibilidad del canal establecido para la operación. 
      p(data-aos="fade-left") El incumplimiento de esta revisión puede afectar la cadena de comunicación y retrasar la atención de incidentes, comprometiendo tanto la seguridad del puesto como la coordinación con la central de monitoreo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Disciplina y técnicas de comunicación operacional
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") A continuación, se presenta un pódcast sobre la disciplina comunicativa y las principales técnicas de comunicación operacional, orientadas a garantizar mensajes claros, precisos y efectivos durante el servicio.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-5(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#000") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Disciplina y técnicas de comunicación operacional
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")                      
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t1/img21.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tiempo de respuesta y confidencialidad de las comunicaciones
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La rapidez con la que el vigilante responde a los llamados de supervisión o reporta novedades constituye un indicador relevante del desempeño operativo. Los periodos prolongados sin comunicación pueden relacionarse con indisposición del vigilante, abandono del puesto, fallas técnicas o situaciones de emergencia que impidan establecer contacto. Por esta razón, los centros de control pueden establecer intervalos máximos de comunicación. Cuando estos se incumplen, se activa el protocolo correspondiente para verificar el estado del vigilante y las condiciones del puesto.
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img22.png', alt='', style="width: 600px;")
        .col-12.col-lg-6.order-2.order-lg-2(data-aos="fade-left")
          p.mb-0 La información transmitida mediante radio, teléfono o citófono puede contener datos sensibles. Por ello, deben protegerse los datos relacionados con usuarios, claves, rutas, vulnerabilidades y protocolos específicos, especialmente cuando se utilizan canales abiertos.
          p.mb-0.bg-color-6.p-4 El manejo inadecuado de estos medios puede ocasionar filtraciones que comprometan la seguridad del servicio. En consecuencia, la comunicación debe realizarse mediante los canales autorizados, utilizando lenguaje prudente y manteniendo la reserva de la información operativa.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Integración con sistemas de monitoreo
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.h-100.d-flex.align-items-center
            p.mb-0 Los medios de comunicación forman parte de un sistema integrado que puede incluir<b> radios, citófonos, líneas directas, aplicaciones de reporte y <i>software</i> de gestión de incidentes.</b> La <b>central de monitoreo</b> utiliza estos canales para confirmar señales, coordinar respuestas, activar protocolos y remitir información a entidades externas cuando corresponda.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex.align-items-center
            img(src="@/assets/curso/temas/t1/img23.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-6.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 La integración entre los medios de comunicación, los sistemas tecnológicos y el personal en campo permite validar señales, realizar verificaciones y coordinar procedimientos de emergencia. De esta manera, la comunicación funciona como elemento articulador entre la infraestructura tecnológica y la actuación operativa del personal de seguridad.
      Separador
      //- Inicio Tema1.5
      .row
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Códigos y lenguaje de seguridad
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img24.png', alt='', style="width: 800px;")
        .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-left")
          p.mb-0.bg-color-2.p-3 Los <b>códigos y el lenguaje de seguridad</b> permiten estandarizar la comunicación en los servicios de vigilancia, fortalecer la coordinación operativa y proteger la información transmitida. Para ello, el personal debe emplear un lenguaje técnico uniforme, preciso y compatible con los diferentes medios disponibles, como radios portátiles, Avantel, telefonía fija o móvil, plataformas de intranet, sistemas de radio troncalizada y circuitos cerrados de video. Esta estandarización reduce ambigüedades y errores, y contribuye a preservar la integridad de los mensajes.
          p.mb-0 El <b>glosario operativo</b> constituye una herramienta para unificar el significado de términos utilizados durante el servicio, como novedad, verificación, apoyo, transmisión, reacción o área crítica. Esta uniformidad conceptual facilita la comunicación en tiempo real y evita interpretaciones subjetivas.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img25.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Ejemplo:</b>
            br
            br
            | cuando un vigilante reporta una «verificación en área crítica», el supervisor identifica que la actuación corresponde a un punto previamente establecido como vulnerable, sin necesidad de explicaciones adicionales.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Lenguaje según el medio de comunicación
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El nivel de detalle y la forma de transmitir la información deben ajustarse a las condiciones de seguridad del medio utilizado. En este sentido, se distinguen los medios abiertos y los medios cerrados o encriptados:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tarjetas
            .row.justify-content-center(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-white.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/img26.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Medios abiertos
                    p.mb-2 Comprenden medios como radios no encriptados, Avantel o telefonía convencional, en los cuales existe mayor riesgo de interceptación por terceros. Por esta razón, se emplea lenguaje codificado que protege los detalles operativos sin impedir la comprensión entre el personal autorizado. 
                    p <b>Ejemplo:</b> en lugar de transmitir información detallada sobre una situación sospechosa, puede utilizarse un código previamente establecido por la organización.

              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-white.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/img27.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Medios cerrados o encriptados
                    p.mb-2 Incluyen sistemas como radios troncalizados, intranet corporativa, líneas privadas y <i>software</i> de control de operaciones. Estos canales permiten transmitir información técnica con mayor nivel de detalle debido a los mecanismos destinados a proteger la integridad de la comunicación. 
                    p <b>Ejemplo:</b> <i>«Central, puesto este: falla de iluminación en pasillo 5, solicito verificación técnica».</i>
            //- Fin Tarjetas
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Claridad, oportunidad y lenguaje técnico
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img28.png', alt='', style="width: 250px;")
        .col-12.col-lg-9.order-2.order-lg-1(data-aos="fade-left")
          p.bg-color-4.p-4 La comunicación efectiva depende de la <b>claridad, precisión y oportunidad</b> del mensaje. El personal debe mantener activos los canales establecidos, confirmar la recepción de las comunicaciones y solicitar apoyo oportunamente cuando la situación lo requiera.
          p La ausencia o el retraso injustificado de una comunicación puede constituir una señal de alerta, debido a que puede relacionarse con una falla técnica, pérdida de control del puesto o una emergencia en curso.
          p.mb-0 En los servicios que utilizan sistemas electrónicos, alarmas o videovigilancia, el lenguaje técnico debe integrarse con los registros de eventos, reportes y bitácoras de la central de monitoreo. Las señales recibidas, como intrusiones, aperturas, cierres, fallas técnicas o alarmas silenciosas, deben documentarse de manera precisa y cronológica. La bitácora constituye un registro histórico de la operación y permite reconstruir las actuaciones y decisiones adoptadas.
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img29.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4
          p.mb-3.fw-bold Ejemplo
          p <i>«22:13 – Señal de apertura. Usuario no responde. Se informa a supervisión. Se envía móvil para verificación».</i>
      p(data-aos="fade-left") La información consignada debe ser objetiva y estar libre de interpretaciones subjetivas. Debido a que estos registros pueden contener datos sobre usuarios, horarios, vulnerabilidades técnicas, fallas recurrentes y rutas operacionales, su manejo requiere estrictos criterios de <b>confidencialidad.</b>
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de señales y trazabilidad
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-6.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 El operador debe clasificar cada señal recibida según su naturaleza para aplicar el procedimiento correspondiente. Entre las categorías señaladas se encuentran:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Señales de alarma. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Señales de verificación. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Fallas técnicas. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3
              span Aperturas y cierres. 
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img30.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") Cada señal debe quedar asociada con las acciones efectuadas para garantizar su trazabilidad.
      .row.justify-content-center.align-items-stretch.mb-2(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img31.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4
          p.mb-3.fw-bold Ejemplo:
          p ante una verificación telefónica sin respuesta, puede registrarse: <i>«Llamado sin contacto. Supervisión informada. Procede verificación móvil».</i>
      p(data-aos="fade-left") En conjunto, el dominio del glosario, el uso de códigos establecidos, la aplicación del lenguaje técnico y el registro preciso de las actuaciones fortalecen la <b>coordinación, trazabilidad e integridad operacional</b> del servicio.




</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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