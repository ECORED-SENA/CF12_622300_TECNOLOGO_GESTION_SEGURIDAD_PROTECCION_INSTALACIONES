<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-left") El <b>área técnica de la vigilancia y la seguridad privada</b> integra los conocimientos, procedimientos y herramientas necesarios para gestionar la información, documentar las actuaciones y mantener una comunicación operativa clara y confiable. En este contexto, el manejo adecuado de los sistemas de información, los protocolos, las consignas, la minuta de vigilancia, los medios de comunicación y el lenguaje técnico contribuye a garantizar la <b>trazabilidad, continuidad e integridad de la operación.</b> Estos elementos permiten que vigilantes, operadores y supervisores actúen de manera organizada y cuenten con información suficiente para sustentar sus decisiones y actuaciones. 
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/intro/img1.png', alt='', style="width: 100%; max-width: 500px;")
        .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-left")
          p.mb-2.bg-color-2.p-4 La operación de seguridad también requiere una adecuada <b>gestión de riesgos</b>, basada en la identificación de amenazas y vulnerabilidades, la valoración de la probabilidad de ocurrencia y el análisis de los posibles impactos sobre las personas, los activos, la infraestructura y los procesos. Herramientas como los mapas y panoramas de riesgos, las alertas tempranas y los métodos de asociación y delimitación de impactos permiten establecer prioridades y orientar las medidas preventivas de acuerdo con las condiciones particulares de cada entorno. De esta manera, la gestión del riesgo se incorpora como un proceso permanente que favorece la anticipación y fortalece la capacidad preventiva de la organización.
          p.mb-0 Finalmente, el <b>manejo de crisis y emergencias</b> articula la preparación institucional con los procedimientos necesarios para responder ante eventos que pueden superar las condiciones habituales de operación. La gestión de alarmas, la atención desde las centrales de monitoreo, los protocolos de comunicación y reporte, la coordinación con autoridades, las brigadas de emergencias y el plan de emergencia permiten estructurar una respuesta organizada frente a diferentes situaciones críticas. La integración de estos componentes, acompañada de capacitación, simulacros y actualización permanente de los procedimientos, fortalece la capacidad institucional para <b>proteger la vida, reducir las consecuencias de los eventos y favorecer la continuidad de las operaciones.</b> 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
