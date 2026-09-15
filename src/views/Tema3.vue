<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Manejo de crisis y emergencias
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Fundamentos para el manejo de crisis y emergencias
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX
      //- Fin Slideshow


      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 XXXXXXXXXXXXXXXXXXXXXXXXXXXX
      //- Título nivel 3 - Imagen
 
       //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX
      //- Fin Slideshow

      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
      //- Fin Accordion 1








      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img3.png", alt="").img400.m-auto
      //- Fin Accordion 2



      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Gestión de alarmas y central de monitoreo
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX
      //- Fin Slideshow


      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
      //- Fin Accordion 1      
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Identificación y clasificación de señales de alarma
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

      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX
      //- Fin Slideshow

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
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
              .row(titulo="XXXXXXXXXXXXXXXX")
                p.mb-4 XXXXXXXXXXXXXXXX
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img3.png", alt="").img400.m-auto
      //- Fin Accordion 2
      

      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Comunicación y atención telefónica de incidentes

      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Tipos y clasificación de situaciones de emergencia
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
      
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="XXXXXXXXXXXXXXXXX")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta02_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 xxxxxxxxxx
                  p xxxxxxxxxxxxxxxxxxxxxxxxxx
            .py-3.py-md-4(titulo="XXXXXXXXXXXXXXXXX")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta02_2.png')
                .col-md-6
                  h4 xxxxxxxxxx
                  p xxxxxxxxxxxxxxxxxxxxxxxxxx
            .py-3.py-md-4(titulo="XXXXXXXXXXXXXXXXX")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta02_3.png')
                .col-md-6
                  h4 xxxxxxxxxx
                  p xxxxxxxxxxxxxxxxxxxxxxxxxx
      //- Cierres Pestanas horizontales
      Separador
      //- Inicio Tema3.6
      .row
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Organización técnica y coordinación para la atención de emergencias
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

      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 XXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXX
      //- Fin Slideshow
            
      Separador
      //- Inicio Tema3.7
      .row
        #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.7 Brigadas de emergencias



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
