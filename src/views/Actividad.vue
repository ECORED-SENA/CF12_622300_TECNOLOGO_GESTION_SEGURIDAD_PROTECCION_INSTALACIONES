<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad        
      ActividadController(:cuestionario="cuestionario")

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Operaciones técnicas y respuesta a emergencias',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> isdentificar los conceptos clave relacionados con la gestión de la información, los protocolos operativos, la gestión de riesgos y la respuesta ante crisis y emergencias.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la información dentro de los sistemas de seguridad privada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Transformar datos operativos en conocimiento útil para tomar decisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Conservar documentos antiguos para cumplir únicamente requisitos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los procedimientos establecidos durante situaciones operativas de emergencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar la comunicación directa entre vigilantes, operadores y supervisores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de información se relaciona principalmente con decisiones inmediatas durante el servicio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Información administrativa utilizada para organizar documentos internos del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Información táctica utilizada para orientar respuestas inmediatas ante incidentes críticos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Información estratégica destinada a establecer políticas organizacionales de largo plazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Información histórica destinada a conservar antecedentes documentales de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes corresponde a un principio del sistema de información?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Rapidez para eliminar registros después de finalizar cada procedimiento operativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Confidencialidad para evitar cualquier intercambio de información entre distintas áreas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Trazabilidad para reconstruir cronológicamente las acciones relevantes mediante registros verificables.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Flexibilidad para modificar información registrada cuando cambien las condiciones operativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la finalidad principal del protocolo de información?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir comunicaciones informales cuando los canales institucionales estén disponibles normalmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar registros para reducir el volumen documental producido durante cada servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Delegar todas las decisiones operativas exclusivamente en el vigilante asignado al puesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Regular formalmente el flujo de información mediante responsabilidades y recursos autorizados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué son las consignas dentro de un servicio de vigilancia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Órdenes específicas que aplican el protocolo general a cada puesto o instalación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Informes generales que sustituyen los procedimientos establecidos para todas las instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registros históricos utilizados únicamente para evaluar las actividades administrativas del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mensajes informales utilizados para comunicar novedades sin seguir canales previamente autorizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué característica identifica a la minuta de vigilancia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Documento opcional destinado exclusivamente al registro de acontecimientos considerados extraordinarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Documento oficial y secuencial donde se registran cronológicamente actividades y novedades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Documento temporal utilizado solamente para registrar los movimientos del personal administrativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Documento reservado utilizado únicamente por supervisores para registrar evaluaciones disciplinarias internas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué criterio debe aplicarse al registrar información en la minuta de vigilancia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar apreciaciones personales para complementar los hechos observados durante cada recorrido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar solamente aquellos acontecimientos que hayan generado consecuencias materiales dentro del servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Describir hechos verificables evitando opiniones, interpretaciones o suposiciones personales del vigilante.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Modificar posteriormente los registros cuando aparezca una interpretación diferente sobre los acontecimientos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué debe verificar el vigilante en los equipos de comunicación antes de iniciar su turno?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente la apariencia externa y el número asignado al dispositivo disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solamente la disponibilidad de equipos alternativos pertenecientes a otros puestos cercanos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Exclusivamente la configuración de códigos utilizados para las comunicaciones administrativas internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Batería, calidad del audio, integridad física y disponibilidad del canal establecido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué finalidad tienen los códigos y el lenguaje de seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estandarizar la comunicación, fortalecer la coordinación y proteger la información transmitida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar los registros escritos mediante comunicaciones verbales durante todos los procedimientos operativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permitir que cada vigilante establezca códigos diferentes según las circunstancias particulares encontradas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la necesidad de confirmar los mensajes transmitidos mediante los medios institucionales disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué caracteriza principalmente a los medios abiertos de comunicación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permiten transmitir cualquier información porque poseen sistemas avanzados de protección contra terceros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Presentan mayor riesgo de interceptación y requieren proteger los detalles operativos transmitidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Garantizan automáticamente la confidencialidad de toda información comunicada durante cualquier situación operativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Funcionan exclusivamente mediante plataformas institucionales cerradas y sistemas corporativos completamente encriptados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué se entiende por amenaza en la gestión de riesgos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una debilidad interna que puede facilitar la ocurrencia de determinados acontecimientos adversos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La consecuencia final producida exclusivamente después de materializarse una situación de emergencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un agente, condición, evento o actor que posee capacidad para generar daño.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una medida preventiva implementada para disminuir las consecuencias derivadas de un evento adverso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué representa una vulnerabilidad dentro de la gestión de riesgos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una situación externa inevitable que siempre produce consecuencias graves para una organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una estimación estadística utilizada para determinar exclusivamente la frecuencia de eventos adversos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una actuación deliberada destinada necesariamente a generar daños sobre personas e instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una debilidad interna que puede ser aprovechada por una amenaza existente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cómo se origina el riesgo según los conceptos desarrollados en el documento?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Surge de la interacción entre una amenaza y una vulnerabilidad considerando probabilidad e impacto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Surge exclusivamente cuando una amenaza produce daños materiales comprobables sobre los activos protegidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aparece solamente cuando una vulnerabilidad permanece sin corregirse durante periodos prolongados de operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se genera cuando cualquier evento externo obliga automáticamente a suspender todas las actividades organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es el propósito fundamental de las alertas tempranas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar acontecimientos únicamente después de que los riesgos hayan producido consecuencias sobre la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Anticipar situaciones críticas para facilitar medidas preventivas y movilizar oportunamente los recursos necesarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir los protocolos institucionales mediante decisiones individuales adoptadas por el personal de vigilancia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar responsabilidades disciplinarias después de finalizar completamente la atención de una situación crítica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué caracteriza a un evento crítico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Corresponde exclusivamente a acontecimientos que ocasionan pérdidas económicas superiores a los recursos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se limita únicamente a eventos naturales capaces de producir daños graves sobre la infraestructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Altera significativamente la operación normal y requiere una respuesta inmediata, coordinada y organizada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Representa cualquier novedad rutinaria registrada durante la prestación cotidiana del servicio de seguridad privada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la finalidad de la gestión de alarmas en una central de monitoreo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar automáticamente las señales que inicialmente no presenten evidencia suficiente de una situación crítica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Atender exclusivamente las señales confirmadas previamente por autoridades externas responsables de cada emergencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar las alarmas únicamente después de finalizar las acciones desarrolladas por el personal operativo correspondiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recibir, verificar, priorizar, escalar y registrar señales para proporcionar una respuesta proporcional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué debe hacerse inicialmente ante un objeto sospechoso relacionado con una posible emergencia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener distancia, evitar manipularlo, restringir el acceso y comunicar inmediatamente la situación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Trasladarlo hacia una zona despejada para facilitar posteriormente la inspección de las autoridades especializadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Examinar cuidadosamente sus componentes externos para establecer personalmente si representa realmente una amenaza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permitir temporalmente el acceso al área mientras se recopila información adicional sobre el objeto identificado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la finalidad principal de las brigadas de emergencias?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir completamente a las autoridades y organismos especializados durante cualquier emergencia de gran magnitud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Apoyar las acciones de prevención, preparación y respuesta inicial ante situaciones de emergencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Asumir exclusivamente las actividades administrativas necesarias después de finalizar todos los procedimientos de respuesta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Realizar únicamente inspecciones preventivas sin participar directamente en las acciones iniciales de una emergencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de las siguientes corresponde a una fase de la gestión organizada de una crisis?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificación documental destinada exclusivamente a conservar registros históricos después de una situación crítica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Supervisión administrativa orientada únicamente a determinar responsabilidades individuales dentro de la organización afectada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Recuperación orientada a restablecer operaciones y analizar la respuesta aplicada durante el evento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminación de procedimientos utilizados anteriormente para impedir su aplicación durante acontecimientos críticos posteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué actividades corresponden a la fase posterior de un plan de emergencia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Activación de alarmas, evacuación, refugio y aplicación inmediata de medidas iniciales establecidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Inspecciones preventivas, capacitación del personal y revisión anticipada de los recursos institucionales disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificación inicial de amenazas, asignación preventiva de responsabilidades y preparación de rutas establecidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluación de afectaciones, reingreso seguro, restablecimiento de servicios y revisión de procedimientos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
