<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        .col-12.ps-3(style="border-left: 10px solid #39A900;") 
          h3.mb-1 Tecnólogo en Gestión de Seguridad y Protección de las Instalaciones
          p.mb-0 
            | Síntesis:
            | operaciones técnicas y respuesta a emergencias
      p.mt-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre la redacción de informes y la planeación de matrices de riesgo en seguridad que organiza los contenidos en siete áreas temáticas: área técnica, comunicación, infraestructura, riesgos, incidentes, matriz de riesgos y mitigación. Cada categoría agrupa conceptos relacionados con competencias técnicas, elaboración de informes, análisis de infraestructura, identificación de riesgos, gestión de incidentes, evaluación y priorización del riesgo, e implementación de medidas de control, planes de mitigación, rutas de atención y seguimiento para la mejora continua. ")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
