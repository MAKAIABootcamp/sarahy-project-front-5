import sliderBodas from '../../assets/image/boda.jpg'
import sliderCumpleaños from '../../assets/image/cumpleaños.jpg'
import sliderEmpresariales from '../../assets/image/empresariales1.jpg'
import sliderGrados from '../../assets/image/grados.jpg'
import sliderBufet from '../../assets/image/bufet.jpg'
import sliderAniversarios from '../../assets/image/bufet.jpg'


export const typEvent = {
    Bodas: {
      title: 'LA BODA DE TUS SUEÑOS',
      description:
      "Expertos en hacer tu boda perfecta en todos los detalles, desde la elección del lugar hasta la decoración y el menú, para que sea inolvidable.",
      imagenes: [sliderBodas, sliderAniversarios, sliderCumpleaños, sliderBufet, sliderGrados]
    },
    Quinces: {
      title: 'LA FIESTA DE CUMPLEAÑOS PERFECTA',
      description:
        'Celebra tu cumpleaños de una manera inolvidable. Ofrecemos decoraciones temáticas, entretenimiento y deliciosos pasteles para hacer que tu día especial sea aún más especial.',
      imagenes: [sliderCumpleaños, sliderBodas, sliderCumpleaños, sliderEmpresariales, sliderBufet ]
    },
    Cumpleaños: {
      title: 'CELEBRA TU ANIVERSARIO CON NOSOTROS',
      description:
        'Hacemos que tus momentos de aniversario sean memorables. Ofrecemos servicios de decoración y catering para que puedas celebrar el amor y la unión.',
      imagenes: [sliderAniversarios, sliderCumpleaños, sliderBodas, sliderEmpresariales, sliderBufet]
    },
    Empresariales: {
      title: 'EVENTOS EMPRESARIALES DE ÉXITO',
      description:
        'Organizamos eventos empresariales exitosos. Proporcionamos servicios de planificación y logística para garantizar que su evento corporativo sea un éxito.',
      imagenes: [sliderEmpresariales, sliderAniversarios, sliderCumpleaños, sliderBodas, sliderBufet]
    },
    Educativos: {
      title: 'EVENTOS EDUCATIVOS INNOVADORES',
      description:
        'Impulsamos la educación a través de eventos innovadores. Ofrecemos soluciones tecnológicas para eventos educativos y conferencias.',
      imagenes: [sliderBufet, sliderEmpresariales, sliderAniversarios, sliderAniversarios, sliderBufet]
    },
  };