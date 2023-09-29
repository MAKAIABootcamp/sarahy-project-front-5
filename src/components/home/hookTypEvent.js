import sliderBodas from '../../assets/image/boda.jpg'
import sliderCumpleaños from '../../assets/image/cumpleaños.jpg'
import sliderEmpresariales from '../../assets/image/empresariales1.jpg'
import sliderGrados from '../../assets/image/grados.jpg'
import sliderBufet from '../../assets/image/bufet.jpg'
import sliderAniversarios from '../../assets/image/bufet.jpg'


export const typEvent = {
    Bodas: {
      title: 'La boda de tus sueños',
      description:
      "Expertos en hacer tu boda perfecta en todos los detalles para que sea inolvidable.",
      imagenes: [sliderBodas, sliderAniversarios, sliderCumpleaños, sliderBufet, sliderGrados]
    },
    Quinces: {
      title: 'Tus quince años inolvidables',
      description:
        'Celebra tus quince años con temáticas excepcionales y entretenimiento inolvidable.',
      imagenes: [sliderBodas, sliderAniversarios, sliderCumpleaños, sliderBufet, sliderGrados]
    },
    Cumpleaños: {
      title: 'Celebra tu aniversario',
      description:
        'Hacemos tus aniversarios memorables con decoración y catering para celebrar el amor y la unión.',
      imagenes: [sliderAniversarios, sliderCumpleaños, sliderBodas, sliderEmpresariales, sliderBufet]
    },
    Empresariales: {
      title: 'Eventos empresariales exitosos',
      description:
        'Garantizamos el éxito de sus eventos empresariales con servicios de planificación y logística de primera calidad.',
      imagenes: [sliderEmpresariales, sliderAniversarios, sliderCumpleaños, sliderBodas, sliderBufet]
    },
    Educativos: {
      title: 'Eventos educativos innovadores',
      description:
        'Únete a nosotros y transforma la educación en experiencias extraordinarias que inspiran y potencian el aprendizaje. ',
      imagenes: [sliderBufet, sliderEmpresariales, sliderAniversarios, sliderAniversarios, sliderBufet]
    },
  };