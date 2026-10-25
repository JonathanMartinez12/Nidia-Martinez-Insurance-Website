import type { CitySlug } from '@/config/cities';
import { site } from '@/config/site';
import type { CityContent } from '../types';
import { carrierNames } from '../carrier-names';

/* Fuentes: ver src/content/en/cities.ts (GOEA, SHIIP y Medicare.gov, verificadas el 2026-10-25). */
const office = site.address ? `${site.address.streetAddress}, ${site.address.addressLocality}` : 'nuestra oficina de Metairie';

const cities: Record<CitySlug, CityContent> = {
  'new-orleans': {
    h1: 'Planes Medicare Advantage en Nueva Orleans y su agente de Medicare local',
    lede: 'Desde Gentilly hasta el Garden District y desde New Orleans East hasta Algiers, ayudamos a los residentes de Nueva Orleans a comparar planes Medicare Advantage, Suplementarios de Medicare y de medicamentos que funcionen con los médicos y farmacias que ya usan.',
    sections: [
      {
        id: 'nola-plans',
        heading: 'Planes Medicare Advantage en Nueva Orleans',
        blocks: [
          {
            type: 'p',
            text: 'Los residentes de la parroquia de Orleans normalmente pueden elegir entre muchos [planes Medicare Advantage](page:service-medicare-advantage), y las opciones cambian cada año. Las reducimos a las pocas que se ajustan a sus médicos, sus recetas y su presupuesto, y le explicamos las diferencias en español o en inglés, lado a lado, incluido lo que cada plan le costaría en un año completo.',
          },
          {
            type: 'p',
            text: 'Medicare Advantage no es lo mejor para todos en la ciudad. Si quiere seguir viendo a cualquier médico que acepte Medicare, viaja con frecuencia o pasa temporadas con familia en otro estado, también cotizamos un [plan Suplementario de Medicare](page:service-medicare-supplement) con un [plan de medicamentos de la Parte D](page:service-part-d-prescription-drug-plans) aparte, para que compare ambos caminos con honestidad.',
          },
        ],
      },
      {
        id: 'nola-neighborhoods',
        heading: 'Ayuda para cada barrio de la ciudad',
        blocks: [
          {
            type: 'p',
            text: 'Nueva Orleans es una ciudad de barrios, y las preguntas sobre Medicare cambian un poco en cada uno. Un jubilado en Lakeview quizás quiera un plan que le permita seguir con un especialista de muchos años. Una familia del Seventh Ward quizás esté ayudando a un padre que acaba de cumplir 65 a entender un buzón lleno de ofertas de planes. Una pareja en New Orleans East quizás esté comparando beneficios dentales y de visión. Nos tomamos el tiempo de entender su situación antes de comparar un solo plan.',
          },
        ],
      },
      {
        id: 'nola-health-systems',
        heading: 'Revisamos sus médicos y hospitales',
        blocks: [
          {
            type: 'p',
            text: 'Muchos residentes de Nueva Orleans reciben atención en grandes sistemas de salud locales como Ochsner Health y LCMC Health, además de médicos independientes por toda la ciudad. Las redes de los planes no siempre incluyen todos los hospitales o clínicas, y pueden cambiar de un año a otro. Antes de que se inscriba, confirmamos que su médico de cabecera, sus especialistas y su hospital preferido estén en la red para el año que está eligiendo.',
          },
          {
            type: 'p',
            text: 'Si vive con diabetes o una enfermedad del corazón, pregúntenos por los Planes de Necesidades Especiales para Afecciones Crónicas. Nuestra guía de [planes de Medicare para diabetes y enfermedades del corazón](page:guide-diabetes-heart-snp) explica quién califica y cuándo puede afiliarse.',
          },
        ],
      },
      {
        id: 'nola-meeting',
        heading: 'Cómo llegar a nuestra oficina desde Nueva Orleans',
        blocks: [
          {
            type: 'p',
            text: `Nuestra oficina está en ${office}, justo al otro lado del límite de la parroquia. Desde la mayoría de los barrios de Nueva Orleans es un trayecto corto hacia el oeste, a Metairie, y nuestras citas son sin prisas, así que hay tiempo para todas sus preguntas. Si se le hace difícil moverse por la ciudad o prefiere quedarse en casa, podemos revisarlo todo por teléfono.`,
          },
          {
            type: 'p',
            text: '¿Prefiere empezar con alguien de su propia zona? Lea sobre la [ayuda con Medicare en Metairie](page:city-metairie) o, si vive al otro lado del río, nuestra página sobre [planes de Medicare en Gretna y el West Bank](page:city-gretna).',
          },
        ],
      },
      {
        id: 'nola-free-help',
        heading: 'Ayuda gratuita e imparcial en la parroquia de Orleans',
        blocks: [
          {
            type: 'p',
            text: 'Además de trabajar con un agente, puede recibir ayuda gratuita del New Orleans Council on Aging, que atiende a los adultos mayores de la parroquia, y de los consejeros de SHIIP de Luisiana al 1-800-259-5300. Para inscribirse en Medicare, vea nuestra guía: [¿Hay una oficina de Medicare cerca de mí en Nueva Orleans?](page:guide-medicare-office)',
          },
        ],
      },
      {
        id: 'nola-hurricanes',
        heading: 'La temporada de huracanes y su cobertura',
        blocks: [
          {
            type: 'p',
            text: 'Todo el que vive en Nueva Orleans sabe tener lista una mochila de emergencia de junio a noviembre. Agregue su tarjeta de Medicare, las tarjetas de su plan y una lista actualizada de sus medicamentos. Cuando se declara un desastre o una emergencia de salud pública, los planes de Medicare pueden flexibilizar algunas reglas, por ejemplo para recibir atención de proveedores fuera de la red o surtir recetas antes de tiempo. Si evacua, llame a su plan o llámenos para pedir ayuda.',
          },
        ],
      },
      {
        id: 'nola-turning-65',
        heading: 'Cumplir 65 en Nueva Orleans',
        blocks: [
          {
            type: 'p',
            text: 'Su Período de Inscripción Inicial dura siete meses: los tres meses antes del mes en que cumple 65, el mes de su cumpleaños y los tres meses siguientes. Inscribirse a tiempo le ayuda a evitar multas por inscripción tardía en la Parte B y la Parte D, y da inicio a su única oportunidad de seis meses para comprar un plan Suplementario de Medicare sin preguntas de salud. Ayudamos a los residentes de Nueva Orleans a organizar esas fechas para que no se les pase ninguna.',
          },
        ],
      },
      {
        id: 'nola-medicaid',
        heading: 'Medicare y Medicaid en Nueva Orleans',
        blocks: [
          {
            type: 'p',
            text: 'Algunos residentes de Nueva Orleans califican para Medicare y Medicaid de Luisiana a la vez, o para ayuda con los costos a través de la Ayuda Adicional o un Programa de Ahorros de Medicare. Si es su caso, un Plan de Necesidades Especiales para Personas con Doble Elegibilidad puede coordinar sus beneficios. Nuestra página de [Planes de Necesidades Especiales de Medicare](page:service-special-needs-plans) explica las opciones, y le ayudamos a saber dónde solicitar asistencia.',
          },
        ],
      },
      {
        id: 'nola-families',
        heading: 'Cómo ayudar a un padre o una madre con Medicare',
        blocks: [
          {
            type: 'p',
            text: 'Muchas de nuestras conversaciones en Nueva Orleans incluyen a un hijo, una hija o un nieto que ayuda a un familiar mayor. Usted es bienvenido en cada cita. Si necesita llamar a Medicare en nombre de su padre o madre, Medicare tiene un formulario de “Autorización para divulgar información personal de salud”, en español y en inglés, con el que su familiar puede nombrarle como alguien con quien Medicare puede hablar.',
          },
        ],
      },
      {
        id: 'nola-extras',
        heading: 'Dental, visión y audición en la ciudad',
        blocks: [
          {
            type: 'p',
            text: 'Medicare Original no cubre la atención dental de rutina, los anteojos ni los audífonos. Muchos planes Medicare Advantage en la parroquia de Orleans incluyen algunos de estos beneficios, por lo general con límites, y un [plan dental y de visión](page:service-dental-vision-insurance) independiente puede llenar ese vacío si tiene una póliza Medigap. Comparamos lo que realmente paga cada opción.',
          },
        ],
      },
      {
        id: 'nola-why-us',
        heading: 'Por qué en Nueva Orleans llaman a un agente local',
        blocks: [
          {
            type: 'p',
            text: 'Un centro de llamadas nacional puede inscribirle en un plan, pero no sabe qué clínicas tiene cerca ni se acordará de usted el próximo otoño. Nosotros sí. Hablará siempre con los mismos dos agentes con licencia, y nuestra ayuda no le cuesta nada.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puedo reunirme en persona con un agente de Medicare en Nueva Orleans?',
        a: `Sí. Atendemos a los residentes de Nueva Orleans en nuestra oficina de ${office}, a poca distancia de la ciudad, con cita previa. Si no puede trasladarse, le ayudamos por teléfono.`,
      },
      {
        q: '¿Cuántos planes Medicare Advantage hay en Nueva Orleans?',
        a: 'Cambia cada año y depende de su código postal. Buscamos en su dirección cada plan que ofrecemos y reducimos la lista a los que cubren a sus médicos y sus medicamentos.',
      },
      {
        q: '¿Los planes de Medicare en Nueva Orleans cubren Ochsner o LCMC Health?',
        a: 'Algunos sí y otros no, y las redes pueden cambiar cada año. Díganos qué médicos y hospitales usa, y revisaremos cada plan antes de que se inscriba.',
      },
      {
        q: '¿Su ayuda es gratis para los residentes de Nueva Orleans?',
        a: 'Sí. Nos pagan las compañías de seguros, y su prima es la misma si se inscribe con nosotros o por su cuenta.',
      },
    ],
    nearby: ['Metairie', 'Gretna', 'Chalmette', 'Harahan', 'Kenner'],
    featured: ['medicare-advantage', 'medicare-supplement', 'part-d-prescription-drug-plans'],
  },

  metairie: {
    h1: 'Planes Medicare Advantage y agentes de Medicare en Metairie',
    lede: `Nuestra oficina está aquí mismo, en Metairie: ${office}. Ayudamos a las personas mayores de la parroquia Jefferson a comparar en persona planes Medicare Advantage, Suplementarios de Medicare y de la Parte D, con cuidado y paciencia, sin costo por nuestra ayuda.`,
    sections: [
      {
        id: 'metairie-office',
        heading: 'Visite nuestra oficina en Metairie',
        blocks: [
          {
            type: 'p',
            text: `Nos encuentra en **${office}, LA ${site.address?.postalCode ?? ''}**, en Veterans Boulevard, cerca del límite con Nueva Orleans. Las visitas son con cita previa, así que llame al ${site.primaryPhone.display} y buscaremos un horario que le convenga a usted y a los familiares que quieran acompañarle.`,
          },
          { type: 'h3', text: 'Cómo llegar' },
          {
            type: 'ul',
            items: [
              '**Desde otras partes de Metairie o Kenner:** Veterans Boulevard corre hacia el este, hasta nuestra oficina.',
              '**Desde Nueva Orleans:** vaya hacia el oeste, cruzando el límite de la parroquia, hasta Metairie.',
              '**Desde el Northshore:** el puente Causeway llega a Metairie, a poca distancia de Veterans Boulevard.',
              '**Desde el West Bank:** cruce el río y continúe hasta Metairie.',
            ],
          },
          {
            type: 'p',
            text: 'Cuando llame para pedir su cita, le explicaremos dónde estacionar y cómo encontrar nuestra oficina, y nos aseguraremos de que la visita sea cómoda si usa bastón, andadera o silla de ruedas.',
          },
        ],
      },
      {
        id: 'metairie-plans',
        heading: 'Planes Medicare Advantage en Metairie',
        blocks: [
          {
            type: 'p',
            text: 'La parroquia Jefferson tiene una amplia variedad de [planes Medicare Advantage](page:service-medicare-advantage), y la lista cambia cada otoño. Comparamos los planes que se ofrecen en su dirección, revisamos sus médicos y medicamentos y sumamos el costo total del año, no solo la prima, para que vea qué plan realmente le conviene.',
          },
        ],
      },
      {
        id: 'metairie-networks',
        heading: 'Planes que funcionan con sus médicos de la parroquia Jefferson',
        blocks: [
          {
            type: 'p',
            text: 'Los residentes de Metairie suelen ver a médicos vinculados a hospitales cercanos como East Jefferson General Hospital y Ochsner. Las redes varían de un plan a otro y pueden cambiar de un año al siguiente, así que verificamos sus médicos, especialistas y farmacia antes de recomendarle algo.',
          },
        ],
      },
      {
        id: 'metairie-choices',
        heading: '¿Medicare Advantage o Medigap?',
        blocks: [
          {
            type: 'p',
            text: 'Una pregunta común entre los jubilados de Metairie es si elegir Medicare Advantage o un [plan Suplementario de Medicare](page:service-medicare-supplement) que les permita ver a cualquier proveedor del país. Si pasa temporadas entre Luisiana y familia en otro estado, esa diferencia importa mucho. Le mostramos ambos caminos lado a lado. Si tiene diabetes o una enfermedad del corazón, también revisamos si se ofrece donde vive un [plan C-SNP para diabetes o enfermedades del corazón](page:guide-diabetes-heart-snp).',
          },
        ],
      },
      {
        id: 'metairie-east-bank',
        heading: 'Ayuda local en el East Bank',
        blocks: [
          {
            type: 'p',
            text: 'Metairie es una comunidad no incorporada, así que la parroquia Jefferson presta muchos de sus servicios locales, entre ellos el Jefferson Council on Aging, que atiende a los adultos mayores de la parroquia. El programa SHIIP de Luisiana (1-800-259-5300) también ofrece asesoría gratuita sobre Medicare. Lo que nosotros agregamos es alguien cerca a quien llamar cuando surge una pregunta, no un centro de llamadas nacional que nunca ha oído hablar de Veterans Boulevard.',
          },
          {
            type: 'p',
            text: 'También ayudamos a nuestros vecinos en [Kenner](page:city-kenner) y, al otro lado del río, en [Gretna](page:city-gretna), y muchos de nuestros clientes viven en [Nueva Orleans](page:city-new-orleans).',
          },
        ],
      },
      {
        id: 'metairie-spanish',
        heading: 'Agentes de Medicare que hablan español, cerca de usted',
        blocks: [
          {
            type: 'p',
            text: 'La parroquia Jefferson tiene una gran comunidad hispanohablante, y muchas familias prefieren hablar de seguros médicos en español. Nuestros dos agentes hablan español con fluidez, así que usted y sus familiares pueden hacer todas sus preguntas en el idioma con el que se sientan más cómodos.',
          },
        ],
      },
      {
        id: 'metairie-appointment',
        heading: 'Qué traer a su cita',
        blocks: [
          {
            type: 'p',
            text: 'Traiga su tarjeta de Medicare, las tarjetas de su plan, una lista de sus medicamentos con sus dosis y los nombres de sus médicos. En otoño, traiga también su Aviso Anual de Cambios. Es todo lo que necesitamos para empezar.',
          },
        ],
      },
      {
        id: 'metairie-supplement',
        heading: 'Planes Suplementarios de Medicare en Metairie',
        blocks: [
          {
            type: 'p',
            text: `Si prefiere Medicare Original, comparamos planes Medigap de ${carrierNames('medicare-supplement', 'es')}. Los beneficios de cada letra son idénticos entre compañías, así que la comparación se reduce al precio y a cómo cada compañía sube sus tarifas con el tiempo. Muchos jubilados de Metairie comparan el Plan G con el Plan N, y le mostramos los números de ambos.`,
          },
        ],
      },
      {
        id: 'metairie-pharmacy',
        heading: 'Su farmacia y su plan de medicamentos',
        blocks: [
          {
            type: 'p',
            text: 'El costo de los medicamentos puede variar mucho de un plan a otro, incluso para la misma medicina. Buscamos cada receta en la lista de medicamentos de cada plan, revisamos si su farmacia de Metairie es preferida y le avisamos si alguna medicina requiere aprobación previa. Si sus ingresos son limitados, le explicamos la Ayuda Adicional, que puede solicitar a través del Seguro Social en cualquier momento.',
          },
        ],
      },
      {
        id: 'metairie-year-round',
        heading: 'Ayuda después de inscribirse',
        blocks: [
          {
            type: 'p',
            text: 'Nuestro trabajo no termina cuando se envía su solicitud. Los clientes de Metairie nos llaman por una factura confusa, una tarjeta perdida, un médico que sale de la red o una receta nueva. Cada otoño revisamos juntos su Aviso Anual de Cambios, y si su plan todavía le conviene, se queda con él.',
          },
        ],
      },
      {
        id: 'metairie-new-to-medicare',
        heading: '¿Nuevo en Medicare en la parroquia Jefferson?',
        blocks: [
          {
            type: 'p',
            text: 'Si ya recibe beneficios del Seguro Social, Medicare normalmente le envía su tarjeta unos tres meses antes de su cumpleaños 65 y le inscribe automáticamente en las Partes A y B. Si no los recibe, se inscribe a través del Seguro Social. En cualquier caso, una cita en nuestra oficina de Metairie unos meses antes le da tiempo de comparar planes con calma, sin prisas.',
          },
        ],
      },
      {
        id: 'metairie-family',
        heading: 'También seguro de vida y de gastos finales',
        blocks: [
          {
            type: 'p',
            text: 'Ya que está aquí, John también puede revisar con usted un [seguro de vida](page:service-life-insurance) o una pequeña [póliza de gastos finales](page:service-final-expense-insurance) para que su cónyuge o sus hijos no tengan que pagar los gastos del funeral. No hay presión; muchos clientes solo quieren conocer sus opciones.',
          },
        ],
      },
      {
        id: 'metairie-scams',
        heading: '¿Duda de una llamada? Mejor venga a vernos',
        blocks: [
          {
            type: 'p',
            text: 'Medicare no le llamará sin que usted lo pida para venderle un plan ni para pedirle su número de Medicare. Si recibe una llamada insistente o una carta que no entiende, tráigala a nuestra oficina de Metairie o llámenos, y le diremos si es real. Nuestra [guía para evitar fraudes](page:scam) explica las señales de alerta.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puedo reunirme en persona con un agente de Medicare en Metairie?',
        a: `Sí. Nuestra oficina está en ${office}. Llame al ${site.primaryPhone.display} para pedir una cita.`,
      },
      {
        q: '¿Su oficina de Metairie es una oficina de Medicare?',
        a: 'No. Somos una agencia de seguros privada con licencia, no Medicare ni el gobierno. Le ayudamos a comparar e inscribirse en planes privados de Medicare. Para Medicare, vea nuestra guía de [dónde recibir ayuda con Medicare cerca de usted](page:guide-medicare-office).',
      },
      {
        q: '¿Tienen agentes de Medicare que hablen español en Metairie?',
        a: 'Sí. Nuestros dos agentes hablan español e inglés, y toda su cita puede ser en español.',
      },
      {
        q: '¿Necesito hacer una cita?',
        a: 'Sí, por favor llame antes para que podamos reservar tiempo solo para usted y tener los planes listos para revisar.',
      },
    ],
    nearby: ['Harahan', 'River Ridge', 'Kenner', 'Jefferson', 'Nueva Orleans'],
    featured: ['medicare-advantage', 'medicare-supplement', 'special-needs-plans'],
  },

  kenner: {
    h1: 'Planes Medicare Advantage en Kenner, LA: ayuda bilingüe',
    lede: 'Kenner es hogar de muchas familias con raíces en toda América Latina, y nos enorgullece atenderlas en español y en inglés. Ya sea que esté empezando con Medicare o revisando su plan, le explicamos sus opciones con claridad, sin costo para usted.',
    sections: [
      {
        id: 'kenner-community',
        heading: 'Una ciudad de muchas culturas',
        blocks: [
          {
            type: 'p',
            text: 'Kenner, la ciudad más grande de la parroquia Jefferson, es conocida por ser la sede del Aeropuerto Internacional Louis Armstrong de Nueva Orleans. También tiene una de las comunidades hispanas más grandes de Luisiana, con muchas familias hondureñas. Muchos adultos mayores en Kenner están conociendo Medicare por primera vez mientras ayudan a sus hijos y nietos, y merecen orientación en el idioma que mejor conocen.',
          },
        ],
      },
      {
        id: 'kenner-plans',
        heading: 'Cómo comparamos planes Medicare Advantage en Kenner',
        blocks: [
          {
            type: 'p',
            text: 'Empezamos por lo que a usted le importa: la clínica a la que va, la farmacia de la esquina y los medicamentos que toma. Luego comparamos los [planes Medicare Advantage](page:service-medicare-advantage) que se ofrecen en su dirección de Kenner y le mostramos, en español o en inglés, cómo se suman los copagos, el costo de los medicamentos y el límite anual de gastos de su bolsillo.',
          },
        ],
      },
      {
        id: 'kenner-first-time',
        heading: '¿Es nuevo en Medicare?',
        blocks: [
          {
            type: 'p',
            text: 'Su Período de Inscripción Inicial comienza tres meses antes del mes en que cumple 65 años y termina tres meses después. Le ayudamos a decidir si inscribirse ahora en la Parte B, si su cobertura del trabajo cuenta como acreditable y qué camino le conviene: Medicare Advantage o Medicare Original con un plan suplementario. Si usted o su cónyuge siguen trabajando, las reglas de tiempo son diferentes, y se las explicamos paso a paso.',
          },
        ],
      },
      {
        id: 'kenner-costs',
        heading: 'Ayuda con los costos',
        blocks: [
          {
            type: 'p',
            text: 'Si el dinero no alcanza, quizás califique para programas que bajan sus costos, como la Ayuda Adicional para medicamentos o los Programas de Ahorros de Medicare que ofrece Medicaid de Luisiana. Le ayudamos a entender qué podría aplicarle y dónde solicitarlo. Las personas que tienen Medicare y Medicaid también podrían calificar para [planes de necesidades especiales](page:service-special-needs-plans) pensados para ellas, y quienes tienen diabetes o enfermedades del corazón quizás quieran leer sobre los [planes C-SNP](page:guide-diabetes-heart-snp).',
          },
        ],
      },
      {
        id: 'kenner-route',
        heading: 'Cómo llegar desde Kenner',
        blocks: [
          {
            type: 'p',
            text: 'Nuestra oficina está en la vecina [Metairie](page:city-metairie), en Veterans Boulevard. Desde Kenner, tanto Veterans Boulevard como la I-10 van hacia el este, en dirección a nosotros, así que la mayoría de las visitas son un trayecto fácil. Sus familiares siempre son bienvenidos a la conversación, en español, en inglés o en ambos.',
          },
          {
            type: 'p',
            text: 'El Jefferson Council on Aging atiende a los adultos mayores de toda la parroquia, incluido Kenner, y los consejeros de SHIIP de Luisiana (1-800-259-5300) dan orientación gratuita e imparcial sobre Medicare si desea una segunda opinión.',
          },
        ],
      },
      {
        id: 'kenner-part-d',
        heading: 'Planes de medicamentos para las familias de Kenner',
        blocks: [
          {
            type: 'p',
            text: 'Si elige Medicare Original, va a necesitar un [plan de medicamentos de la Parte D](page:service-part-d-prescription-drug-plans) aparte. Revisamos cada medicamento en la lista y los niveles de cada plan, comparamos las farmacias que usa en Kenner y calculamos lo que pagaría en el año. Esperar para tener cobertura de medicamentos cuando es elegible por primera vez puede significar una multa más adelante, así que le ayudamos a hacerlo bien desde el principio.',
          },
        ],
      },
      {
        id: 'kenner-planning',
        heading: 'Planificar para sus seres queridos',
        blocks: [
          {
            type: 'p',
            text: 'Muchas familias de Kenner también preguntan cómo evitar que los gastos del funeral recaigan en sus hijos. Una pequeña [póliza de gastos finales](page:service-final-expense-insurance) es una opción, y John le explica cómo funciona en español o en inglés, sin presión para comprar.',
          },
        ],
      },
      {
        id: 'kenner-scams',
        heading: 'Cuidado con las llamadas en cualquier idioma',
        blocks: [
          {
            type: 'p',
            text: 'Las llamadas fraudulentas sobre Medicare llegan en español y en inglés. Medicare nunca le llamará para venderle algo, y un agente de verdad no le presionará para inscribirse por teléfono. Si alguien le pide su número de Medicare o de Seguro Social, cuelgue y llámenos. Lea más sobre cómo [evitar fraudes de Medicare](page:scam).',
          },
        ],
      },
      {
        id: 'kenner-working',
        heading: '¿Sigue trabajando a los 65?',
        blocks: [
          {
            type: 'p',
            text: 'Muchos residentes de Kenner siguen trabajando después de los 65, en el aeropuerto, en hotelería o en sus propios negocios. Si usted o su cónyuge tienen seguro médico por un trabajo actual, quizás pueda esperar para inscribirse en la Parte B. Puede inscribirse en cualquier momento mientras siga con ese plan, o durante los 8 meses después de que termine el empleo o la cobertura, lo que ocurra primero, sin multa por inscripción tardía. COBRA y la cobertura de jubilados no cuentan como cobertura de un trabajo actual, así que revisemos su caso antes de decidir.',
          },
        ],
      },
      {
        id: 'kenner-review',
        heading: 'Una revisión anual, en su idioma',
        blocks: [
          {
            type: 'p',
            text: 'Los planes cambian cada año sus listas de medicamentos, sus copagos y sus médicos. Cada otoño, cuando llegue su Aviso Anual de Cambios, llámenos. Entre el 15 de octubre y el 7 de diciembre comparamos su plan con los demás que se ofrecen en Kenner y le decimos con claridad si conviene cambiar, en español o en inglés.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puedo reunirme en persona con un agente de Medicare en Kenner?',
        a: 'Sí. Nuestra oficina está al lado, en Metairie, a poca distancia de Kenner, y las visitas son con cita previa. También le ayudamos por teléfono.',
      },
      {
        q: '¿Puede ser toda mi cita en español?',
        a: 'Sí. Nuestros dos agentes hablan español, así que toda su cita, y cada llamada de seguimiento, puede ser en español.',
      },
      {
        q: '¿Me pueden ayudar si acabo de cumplir 65?',
        a: 'Sí. Le explicamos su Período de Inscripción Inicial, cuándo inscribirse en la Parte B y sus opciones de planes, y le ayudamos a evitar multas por inscripción tardía.',
      },
    ],
    nearby: ['Metairie', 'River Ridge', 'Harahan', 'LaPlace'],
    featured: ['medicare-advantage', 'part-d-prescription-drug-plans', 'final-expense-insurance'],
  },

  gretna: {
    h1: 'Planes Medicare Advantage en Gretna y el West Bank',
    lede: 'En el West Bank ayudamos a los residentes de Gretna, Marrero, Harvey, Terrytown y Westwego a entender Medicare, con ayuda personal cerca de casa.',
    sections: [
      {
        id: 'gretna-west-bank',
        heading: 'Al servicio del West Bank',
        blocks: [
          {
            type: 'p',
            text: 'Gretna es la sede del gobierno de la parroquia Jefferson y está justo al otro lado del río Misisipi, frente al centro de Nueva Orleans. Junto con Marrero, Harvey, Terrytown y Westwego, forma parte de una comunidad unida del West Bank donde la gente suele preferir tomar las decisiones importantes en persona. Así es exactamente como nos gusta trabajar.',
          },
        ],
      },
      {
        id: 'gretna-plans',
        heading: 'Opciones de Medicare Advantage en el West Bank',
        blocks: [
          {
            type: 'p',
            text: 'Los planes que se ofrecen en Gretna no siempre son los mismos que al otro lado del río, y los residentes del West Bank suelen tener lazos fuertes con ciertos médicos. Comparamos los [planes Medicare Advantage](page:service-medicare-advantage) disponibles en su dirección, y también le mostramos cómo funcionaría un [plan Suplementario de Medicare](page:service-medicare-supplement) si prefiere conservar la libertad de ver a cualquier proveedor que acepte Medicare.',
          },
        ],
      },
      {
        id: 'gretna-hospitals',
        heading: 'Conozca su red en el West Bank',
        blocks: [
          {
            type: 'p',
            text: 'Los residentes del West Bank suelen usar hospitales como Ochsner Medical Center – West Bank Campus en Gretna y West Jefferson Medical Center en Marrero, además de médicos por toda la zona. No todos los planes incluyen a todos los proveedores del West Bank, así que revisamos la red de cada plan que comparamos. Un [plan de indemnización hospitalaria](page:service-hospital-indemnity-insurance) también puede ayudar con los copagos si le internan.',
          },
        ],
      },
      {
        id: 'gretna-review',
        heading: 'El chequeo anual de su plan',
        blocks: [
          {
            type: 'p',
            text: 'Los planes cambian cada año sus costos, sus listas de medicamentos y sus redes. Cada otoño, lea su Aviso Anual de Cambios cuando llegue. Si está conforme, su plan se renueva automáticamente. Si algo cambió, como un copago más alto, un medicamento que ya no se cubre o un médico que salió de la red, llámenos y revisaremos sus opciones antes de que cierre el [Período de Inscripción Anual](page:aep) el 7 de diciembre.',
          },
        ],
      },
      {
        id: 'gretna-route',
        heading: 'Cruzar el río para vernos',
        blocks: [
          {
            type: 'p',
            text: 'Nuestra oficina está en [Metairie](page:city-metairie). Desde Gretna, el puente Crescent City Connection le lleva a Nueva Orleans y de ahí a Metairie; desde Marrero, Harvey o Westwego, el puente Huey P. Long es otra forma de cruzar. Si el trayecto es más de lo que quiere hacer, una cita por teléfono funciona igual de bien.',
          },
          {
            type: 'p',
            text: 'Para asesoría gratuita, el Jefferson Council on Aging atiende a los adultos mayores en ambas orillas de la parroquia, y el programa SHIIP de Luisiana responde preguntas sobre Medicare al 1-800-259-5300.',
          },
        ],
      },
      {
        id: 'gretna-scams',
        heading: 'Protéjase de las llamadas fraudulentas',
        blocks: [
          {
            type: 'p',
            text: 'Los estafadores suelen llamar a los adultos mayores con cuentos de “nuevas tarjetas de Medicare” o equipo médico “gratis”. Nunca le dé su número de Medicare a alguien que le llama de la nada. Si no está seguro de que una llamada sea legítima, cuelgue y llámenos. Lea más en nuestra [página de protección contra fraudes de Medicare](page:scam).',
          },
        ],
      },
      {
        id: 'gretna-dental',
        heading: 'Dental y visión para las personas mayores del West Bank',
        blocks: [
          {
            type: 'p',
            text: 'Medicare Original no cubre las limpiezas de rutina, las dentaduras, los exámenes de la vista ni los anteojos. Algunos planes Medicare Advantage incluyen beneficios dentales y de visión limitados, y un [plan dental y de visión](page:service-dental-vision-insurance) aparte es otra opción. Comparamos lo que realmente cubre cada opción para que no se lleve sorpresas en el dentista de Gretna o Marrero.',
          },
        ],
      },
      {
        id: 'gretna-medicaid',
        heading: 'Medicare y Medicaid en el West Bank',
        blocks: [
          {
            type: 'p',
            text: 'Si tiene Medicare y Medicaid de Luisiana, o podría calificar para la Ayuda Adicional o un Programa de Ahorros de Medicare, hay planes y programas pensados para su situación. Le explicamos cómo funcionan los [Planes de Necesidades Especiales para Personas con Doble Elegibilidad](page:service-special-needs-plans) y le indicamos dónde presentar su solicitud.',
          },
        ],
      },
      {
        id: 'gretna-turning-65',
        heading: 'Cumplir 65 en el West Bank',
        blocks: [
          {
            type: 'p',
            text: 'Si ya recibe beneficios del Seguro Social, normalmente le inscriben automáticamente en las Partes A y B, y su paquete de bienvenida con la tarjeta de Medicare llega unos tres meses antes de que empiece su cobertura. Ese paquete es la señal para llamarnos. Comparamos con usted Medicare Advantage y Medigap y nos aseguramos de que tenga cobertura de medicamentos, para que no enfrente una multa por inscripción tardía más adelante.',
          },
          {
            type: 'p',
            text: '¿Todavía no recibe Seguro Social? Entonces se inscribe usted mismo a través del Seguro Social. Nuestra guía de [dónde recibir ayuda con Medicare cerca de usted](page:guide-medicare-office) explica cómo hacerlo.',
          },
        ],
      },
      {
        id: 'gretna-csnp',
        heading: '¿Vive con diabetes o una enfermedad del corazón?',
        blocks: [
          {
            type: 'p',
            text: 'Algunos planes Medicare Advantage, llamados Planes de Necesidades Especiales para Afecciones Crónicas, están diseñados para personas con afecciones como la diabetes o la insuficiencia cardíaca crónica, y puede afiliarse en cualquier época del año si califica. Que haya uno en el West Bank depende del año. Nuestra guía de [planes de Medicare para diabetes y enfermedades del corazón](page:guide-diabetes-heart-snp) explica las reglas, y podemos revisar qué hay disponible en su dirección.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puedo reunirme en persona con un agente de Medicare si vivo en Gretna?',
        a: 'Sí. Atendemos a los residentes del West Bank en nuestra oficina de Metairie, al otro lado del río, con cita previa, y también le ayudamos por teléfono si cruzar el puente le resulta complicado.',
      },
      {
        q: '¿Los planes de Medicare del West Bank cubren West Jefferson Medical Center?',
        a: 'Depende del plan y del año. Díganos qué hospitales y médicos usa, y revisaremos la red de cada plan antes de que elija.',
      },
      {
        q: '¿También ayudan a las personas de Marrero, Harvey y Westwego?',
        a: 'Sí. Ayudamos a personas en todo el West Bank y en toda la parroquia Jefferson.',
      },
    ],
    nearby: ['Marrero', 'Harvey', 'Terrytown', 'Westwego', 'Algiers'],
    featured: ['medicare-advantage', 'hospital-indemnity-insurance', 'dental-vision-insurance'],
  },

  chalmette: {
    h1: 'Planes Medicare Advantage en Chalmette y la parroquia St. Bernard',
    lede: 'La parroquia St. Bernard es una comunidad resistente y unida, y las familias de Chalmette merecen orientación sobre Medicare de personas que conocen la zona. Ofrecemos ayuda paciente y sin costo para comparar planes y revisar su cobertura.',
    sections: [
      {
        id: 'chalmette-community',
        heading: 'Una comunidad que se cuida entre sí',
        blocks: [
          {
            type: 'p',
            text: 'Chalmette es la sede de la parroquia St. Bernard, río abajo del Lower Ninth Ward de Nueva Orleans. Las familias de aquí se reconstruyeron después del huracán Katrina, y muchos residentes mayores han vivido en la parroquia por generaciones. St. Bernard también es conocida por su herencia isleña, con raíces en las Islas Canarias, así que la ayuda en español también es parte de la historia de este lugar.',
          },
        ],
      },
      {
        id: 'chalmette-plans',
        heading: 'Planes Medicare Advantage en la parroquia St. Bernard',
        blocks: [
          {
            type: 'p',
            text: 'St. Bernard tiene su propio conjunto de planes y áreas de servicio, que puede no coincidir con lo que ve un amigo en las parroquias de Orleans o Jefferson. Buscamos los [planes Medicare Advantage](page:service-medicare-advantage) que se ofrecen en su dirección de Chalmette, Arabi, Meraux o Violet y comparamos los que incluyen a sus médicos.',
          },
        ],
      },
      {
        id: 'chalmette-care',
        heading: 'Atención cerca de casa',
        blocks: [
          {
            type: 'p',
            text: 'Tener médicos y un hospital cerca importa, sobre todo en una emergencia. Muchos residentes dependen del St. Bernard Parish Hospital en Chalmette y de proveedores en [Nueva Orleans](page:city-new-orleans). Cuando comparamos planes, confirmamos que los médicos y centros que usted usa, a ambos lados del límite de la parroquia, estén cubiertos.',
          },
        ],
      },
      {
        id: 'chalmette-supplement',
        heading: '¿Está pensando en un plan Suplementario de Medicare?',
        blocks: [
          {
            type: 'p',
            text: 'Si le atrae la idea de ver a cualquier médico que acepte Medicare, quizás valga la pena considerar un [plan Suplementario de Medicare](page:service-medicare-supplement). El mejor momento para comprarlo es durante su período de inscripción abierta de Medigap de seis meses, que empieza cuando tiene 65 años o más y está inscrito en la Parte B. Le explicamos qué significa ese período para usted y cómo se combina con un [plan de la Parte D](page:service-part-d-prescription-drug-plans).',
          },
        ],
      },
      {
        id: 'chalmette-family',
        heading: 'Planificar con su familia',
        blocks: [
          {
            type: 'p',
            text: 'Las conversaciones sobre Medicare suelen llevar a la familia: quién se encargará de las cosas y cómo se pagarán los gastos finales. Una pequeña [póliza de gastos finales](page:service-final-expense-insurance) puede ayudar a sus seres queridos a cubrir un funeral sin tocar sus ahorros. John le explica las opciones sin ninguna presión.',
          },
        ],
      },
      {
        id: 'chalmette-meet',
        heading: 'Reunirse con nosotros desde St. Bernard',
        blocks: [
          {
            type: 'p',
            text: 'Nuestra oficina está en Metairie, al otro lado de Nueva Orleans, así que muchos clientes de St. Bernard prefieren una revisión por teléfono, mientras que otros disfrutan del viaje y de una cita sin prisas. De cualquier forma, nosotros traemos las comparaciones de planes; usted trae sus preguntas, su lista de medicamentos y su tarjeta de Medicare.',
          },
          {
            type: 'p',
            text: 'En la zona, el St. Bernard Council on Aging atiende a los adultos mayores de la parroquia, y los consejeros de SHIIP de Luisiana ofrecen orientación gratuita sobre Medicare al 1-800-259-5300.',
          },
        ],
      },
      {
        id: 'chalmette-spanish',
        heading: 'Ayuda en español para las familias de St. Bernard',
        blocks: [
          {
            type: 'p',
            text: 'Ya sea que el español de su familia venga de la tradición isleña o de raíces más recientes en América Latina, nuestros dos agentes pueden explicarle Medicare completamente en español. Traiga a un familiar si quiere; con gusto hablamos con todos en la mesa.',
          },
        ],
      },
      {
        id: 'chalmette-cards',
        heading: 'Reponer tarjetas y documentos después de una tormenta',
        blocks: [
          {
            type: 'p',
            text: 'Si pierde o se daña su tarjeta de Medicare, puede imprimir o pedir una copia oficial desde su cuenta segura de Medicare.gov, o llamar al 1-800-MEDICARE para que le envíen una de reemplazo por correo. Su plan puede enviarle una nueva tarjeta del plan. Guarde fotos de sus tarjetas y una lista de sus medicamentos en su teléfono para tenerlas a la mano durante una evacuación.',
          },
        ],
      },
      {
        id: 'chalmette-drug-costs',
        heading: 'Ayuda para pagar sus recetas',
        blocks: [
          {
            type: 'p',
            text: 'Si sus ingresos y recursos son limitados, la Ayuda Adicional puede bajar lo que paga por su cobertura de medicamentos de Medicare. Puede solicitarla en cualquier momento a través del Seguro Social en SSA.gov/extrahelp, y con gusto le explicamos cómo funciona con su plan.',
          },
        ],
      },
      {
        id: 'chalmette-dates',
        heading: 'Fechas clave de Medicare para los residentes de St. Bernard',
        blocks: [
          {
            type: 'ul',
            items: [
              '**Del 15 de octubre al 7 de diciembre:** revise su plan y cámbiese si otro le conviene más, con cobertura a partir del 1 de enero.',
              '**Del 1 de enero al 31 de marzo:** si está en un plan Medicare Advantage, puede cambiar de plan o regresar a Medicare Original una vez.',
              '**Alrededor de su cumpleaños 65:** su Período de Inscripción Inicial de siete meses, cuando la mayoría elige su cobertura por primera vez.',
            ],
          },
          {
            type: 'p',
            text: 'Anote estas fechas en su calendario y llámenos unas semanas antes para tener tiempo de comparar planes con usted.',
          },
        ],
      },
      {
        id: 'chalmette-choosing',
        heading: '¿Medicare Advantage o Medicare Original en St. Bernard?',
        blocks: [
          {
            type: 'p',
            text: 'Si la mayoría de sus médicos están en Chalmette y Nueva Orleans y casi no viaja, un plan Medicare Advantage que tenga a esos proveedores en la red puede funcionar bien. Si quiere la mayor libertad para elegir médicos en cualquier parte del país, Medicare Original con una póliza Medigap puede convenirle más. Ponemos ambas opciones lado a lado con sus médicos y medicamentos reales.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puedo reunirme en persona con un agente de Medicare si vivo en Chalmette?',
        a: 'Sí, en nuestra oficina de Metairie, con cita previa. A muchos clientes de St. Bernard les resulta más fácil una cita por teléfono, y con gusto hacemos cualquiera de las dos.',
      },
      {
        q: '¿Los planes de Medicare en la parroquia St. Bernard son distintos de los de Nueva Orleans?',
        a: 'Pueden serlo. Cada plan tiene su propia área de servicio, así que revisamos los planes que se ofrecen en su dirección de St. Bernard en lugar de suponer.',
      },
      {
        q: '¿También ayudan con seguros de gastos finales?',
        a: 'Sí. John ayuda a las familias de St. Bernard con seguros de gastos finales y de vida, sin presión y sin costo por nuestra ayuda.',
      },
    ],
    nearby: ['Arabi', 'Meraux', 'Violet', 'Nueva Orleans'],
    featured: ['medicare-supplement', 'final-expense-insurance', 'part-d-prescription-drug-plans'],
  },

  slidell: {
    h1: 'Planes Medicare Advantage en Slidell, LA',
    lede: 'Slidell está en el extremo este de la parroquia St. Tammany, cerca de la frontera con Misisipi. Ayudamos a los residentes de Slidell a elegir una cobertura de Medicare que se ajuste a la vida en el Northshore.',
    sections: [
      {
        id: 'slidell-northshore',
        heading: 'Medicare en el este del Northshore',
        blocks: [
          {
            type: 'p',
            text: 'Al otro lado del lago Pontchartrain, frente a Nueva Orleans, Slidell se conecta con el South Shore por el puente Twin Span de la I-10 y con Misisipi por la I-10 y la I-59. Muchos residentes ven a médicos locales, mientras que otros todavía viajan a Nueva Orleans o cruzan la frontera estatal para ver especialistas. Por eso las reglas de la red son una parte importante al elegir un plan.',
          },
        ],
      },
      {
        id: 'slidell-plans',
        heading: 'Cómo elegir un plan Medicare Advantage en Slidell',
        blocks: [
          {
            type: 'p',
            text: 'La parroquia St. Tammany tiene su propio conjunto de [planes Medicare Advantage](page:service-medicare-advantage). Comparamos los que se ofrecen en su dirección de Slidell, Pearl River o Lacombe y revisamos cómo maneja cada uno a los médicos que usted ve en el Northshore, en Nueva Orleans y en Misisipi.',
          },
        ],
      },
      {
        id: 'slidell-providers',
        heading: 'Sus proveedores locales',
        blocks: [
          {
            type: 'p',
            text: 'Los residentes de Slidell suelen usar el Slidell Memorial Hospital y el Ochsner Medical Center – Northshore, además de consultorios en todo el este de St. Tammany. Si ve a un especialista en Nueva Orleans o en Misisipi, díganoslo. Algunos planes manejan mejor que otros a los proveedores del otro lado del lago o de otro estado, y la diferencia puede significar cientos de dólares o una factura inesperada. Revisamos cada uno por su nombre antes de que elija.',
          },
        ],
      },
      {
        id: 'slidell-plan-types',
        heading: '¿HMO, PPO o Suplementario?',
        blocks: [
          {
            type: 'p',
            text: 'Si quiere la libertad de ver proveedores en otros estados, un plan Medicare Advantage tipo PPO o un [plan Suplementario de Medicare](page:service-medicare-supplement) puede convenirle más que un HMO. Le explicamos cómo maneja cada opción la atención fuera de la red y cuánto podría costarle en un año típico. Si tiene diabetes o insuficiencia cardíaca, pregunte si se ofrece un [plan C-SNP](page:guide-diabetes-heart-snp) en St. Tammany.',
          },
        ],
      },
      {
        id: 'slidell-storms',
        heading: 'Cobertura lista para las tormentas',
        blocks: [
          {
            type: 'p',
            text: 'Slidell conoce bien las marejadas y las evacuaciones. Guarde copias de sus tarjetas de seguro y su lista de medicamentos en una bolsa impermeable, y pregunte en su farmacia por los resurtidos antes de que llegue una tormenta. Si se declara un desastre y tiene que trasladarse, hay reglas especiales que pueden facilitarle recibir atención o cambiar de plan. También podría considerar una [cobertura de indemnización hospitalaria](page:service-hospital-indemnity-insurance) para tener dinero extra durante una hospitalización.',
          },
        ],
      },
      {
        id: 'slidell-meet',
        heading: 'Reunirse con nosotros desde Slidell',
        blocks: [
          {
            type: 'p',
            text: 'Nuestra oficina está en [Metairie](page:city-metairie), al otro lado del lago. Muchos clientes de Slidell eligen una cita por teléfono, y otros aprovechan un viaje al South Shore para visitarnos. También ayudamos a los vecinos del oeste, en [Covington y Mandeville](page:city-covington).',
          },
          {
            type: 'p',
            text: 'Para ayuda local gratuita, el St. Tammany Council on Aging atiende a los adultos mayores de la parroquia, la Capital Area Agency on Aging también cubre St. Tammany, y el programa SHIIP de Luisiana responde preguntas sobre Medicare al 1-800-259-5300.',
          },
        ],
      },
      {
        id: 'slidell-moving',
        heading: '¿Se mudó a Slidell desde otro estado?',
        blocks: [
          {
            type: 'p',
            text: 'Muchos jubilados de Slidell llegaron desde Misisipi o desde más lejos. Mudarse fuera del área de servicio de su plan anterior normalmente abre un Período de Inscripción Especial para elegir un plan nuevo, y si su plan Medicare Advantage ya no cubre donde vive, quizás tenga el derecho garantizado de comprar ciertas pólizas Medigap. Llámenos poco después de su mudanza para que no se le pase el plazo.',
          },
        ],
      },
      {
        id: 'slidell-supplement',
        heading: 'Planes Suplementarios de Medicare en el este de St. Tammany',
        blocks: [
          {
            type: 'p',
            text: `Para quienes quieren ver médicos a ambos lados de la frontera estatal, comparamos planes Medigap de ${carrierNames('medicare-supplement', 'es')}. Como el Plan G o el Plan N de cada compañía tienen los mismos beneficios, nos enfocamos en el precio y en cómo cada compañía fija sus tarifas a medida que usted envejece.`,
          },
        ],
      },
      {
        id: 'slidell-extras',
        heading: 'Beneficios dentales, de visión y de audición',
        blocks: [
          {
            type: 'p',
            text: 'Los audífonos, las dentaduras y los anteojos son preguntas comunes en Slidell. Medicare Original no los cubre de rutina. Muchos planes Medicare Advantage incluyen alguna cobertura con límites, y un [plan dental y de visión](page:service-dental-vision-insurance) aparte funciona junto con una póliza Medigap. Leemos la letra pequeña para que sepa lo que un plan pagaría de verdad antes de elegirlo.',
          },
        ],
      },
      {
        id: 'slidell-part-d',
        heading: 'Cobertura de medicamentos en Slidell',
        blocks: [
          {
            type: 'p',
            text: 'Si combina Medicare Original con una póliza Medigap, también necesitará un [plan de medicamentos de la Parte D](page:service-part-d-prescription-drug-plans). Buscamos cada medicamento, su nivel y su costo anual estimado, y revisamos si la farmacia que usa en Slidell es preferida. Las listas de medicamentos cambian cada año, así que revisamos su plan de nuevo cada otoño, antes del 7 de diciembre.',
          },
          {
            type: 'p',
            text: 'Si sus ingresos son limitados, la Ayuda Adicional puede bajar el costo de sus medicamentos, y puede solicitarla a través del Seguro Social en cualquier momento.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puedo reunirme en persona con un agente de Medicare si vivo en Slidell?',
        a: 'Sí, en nuestra oficina de Metairie, con cita previa. La mayoría de los clientes de Slidell prefieren reunirse por teléfono, y trabajamos igual de cualquier forma.',
      },
      {
        q: '¿Mi plan de Medicare cubrirá médicos en Misisipi?',
        a: 'Depende del plan. Muchos HMO solo cubren la atención de emergencia y urgencia fuera de su área de servicio, mientras que los PPO y los planes Suplementarios son más flexibles. Lo revisamos antes de que se inscriba.',
      },
      {
        q: '¿Qué hago con mi cobertura si un huracán me obliga a evacuar?',
        a: 'Lleve sus tarjetas y su lista de medicamentos, llame a su plan y llámenos. Cuando se declara un desastre, hay reglas especiales que pueden facilitarle recibir atención lejos de casa.',
      },
    ],
    nearby: ['Pearl River', 'Lacombe', 'Mandeville', 'Covington'],
    featured: ['medicare-advantage', 'medicare-supplement', 'hospital-indemnity-insurance'],
  },

  covington: {
    h1: 'Planes Medicare Advantage en Covington y Mandeville',
    lede: 'Covington y Mandeville son hogar de muchos jubilados activos que quieren un plan al ritmo de su vida. Ofrecemos orientación sobre Medicare atenta y sin costo en todo el oeste de la parroquia St. Tammany.',
    sections: [
      {
        id: 'covington-area',
        heading: 'Al servicio del oeste de St. Tammany',
        blocks: [
          {
            type: 'p',
            text: 'Covington es la sede de la parroquia St. Tammany, y la vecina Mandeville está en la orilla norte del lago Pontchartrain, al final del Causeway. Muchos residentes se mudaron aquí desde el South Shore y todavía tienen médicos en Nueva Orleans o Metairie, mientras que otros se han cambiado a proveedores del Northshore.',
          },
        ],
      },
      {
        id: 'covington-plans',
        heading: 'Planes Medicare Advantage en Covington y Mandeville',
        blocks: [
          {
            type: 'p',
            text: 'Comparamos los [planes Medicare Advantage](page:service-medicare-advantage) que se ofrecen en su dirección de Covington, Mandeville, Madisonville o Abita Springs, y revisamos con atención las reglas de referidos, porque muchos jubilados del oeste de St. Tammany ven especialistas a ambos lados del lago.',
          },
        ],
      },
      {
        id: 'covington-networks',
        heading: 'Médicos a ambos lados del lago',
        blocks: [
          {
            type: 'p',
            text: 'El Northshore tiene sus propios hospitales, como St. Tammany Health System en Covington y Lakeview Regional Medical Center, además de clínicas de sistemas de salud más grandes. Si ve médicos a ambos lados del lago, la red de un plan, y si exige referidos, puede marcar una gran diferencia. Revisamos cada proveedor que usa, desde su cardiólogo hasta su oculista, y confirmamos si un plan exige referidos antes de verlos. Así su primera cita del año nuevo sale como usted espera.',
          },
        ],
      },
      {
        id: 'covington-travel',
        heading: '¿Viaja o visita a su familia?',
        blocks: [
          {
            type: 'p',
            text: 'Si pasa parte del año viajando o visitando familia en otro estado, pregunte cómo maneja un plan la atención lejos de casa. Los [planes Suplementarios de Medicare](page:service-medicare-supplement) funcionan con cualquier proveedor del país que acepte Medicare, mientras que muchos planes Medicare Advantage solo cubren la atención de emergencia y urgencia fuera de su área de servicio. Le ayudamos a sopesar las ventajas y desventajas.',
          },
        ],
      },
      {
        id: 'covington-dental',
        heading: 'No se olvide de la atención dental y de la vista',
        blocks: [
          {
            type: 'p',
            text: 'Medicare Original y los planes Suplementarios de Medicare no cubren la atención dental ni de la vista de rutina. Si tiene un plan suplementario, agregar un [plan dental y de visión](page:service-dental-vision-insurance) puede ayudarle con limpiezas, dentaduras, exámenes de la vista y anteojos.',
          },
        ],
      },
      {
        id: 'covington-route',
        heading: 'Por el Causeway hasta nuestra oficina',
        blocks: [
          {
            type: 'p',
            text: 'El puente Causeway llega a [Metairie](page:city-metairie), a poca distancia de nuestra oficina en Veterans Boulevard, así que la visita suele ser más fácil desde Mandeville de lo que la gente cree. Si prefiere no cruzar el lago, revisamos todo por teléfono. También ayudamos a clientes al este, en [Slidell](page:city-slidell).',
          },
          {
            type: 'p',
            text: 'Para ayuda gratuita cerca, el St. Tammany Council on Aging y la Capital Area Agency on Aging atienden a la parroquia St. Tammany, y puede comunicarse con los consejeros de SHIIP de Luisiana al 1-800-259-5300.',
          },
        ],
      },
      {
        id: 'covington-moving',
        heading: '¿Es nuevo en el Northshore?',
        blocks: [
          {
            type: 'p',
            text: 'Covington y Mandeville reciben a muchos jubilados de otros estados. Si se muda fuera del área de servicio de su plan actual, normalmente puede cambiar de plan con un Período de Inscripción Especial. Si tenía un plan Medicare Advantage que no atiende St. Tammany, quizás también tenga el derecho garantizado de comprar ciertas pólizas Medigap. Le ayudamos a organizar los plazos para que su cobertura no se interrumpa.',
          },
        ],
      },
      {
        id: 'covington-active',
        heading: 'Planes para una jubilación activa',
        blocks: [
          {
            type: 'p',
            text: 'Algunos planes Medicare Advantage incluyen beneficios como membresías de gimnasio o programas de ejercicio, y algunos cubren beneficios de audición o de visión que Medicare Original no cubre. Por lo general estos beneficios son limitados y varían según el plan, así que revisamos los detalles en lugar de juzgar un plan por su folleto, y solo tomamos en cuenta los beneficios que usted de verdad usará.',
          },
        ],
      },
      {
        id: 'covington-life',
        heading: 'Proteger a su cónyuge y a su familia',
        blocks: [
          {
            type: 'p',
            text: 'Los clientes del Northshore a menudo preguntan cómo proteger a su cónyuge o dejar algo para sus nietos. John puede explicarle opciones de [seguro de vida](page:service-life-insurance) a buen precio y cómo encajan junto con su cobertura de Medicare.',
          },
        ],
      },
      {
        id: 'covington-working',
        heading: '¿Sigue trabajando después de los 65 en el Northshore?',
        blocks: [
          {
            type: 'p',
            text: 'Si usted o su cónyuge tienen seguro médico de un empleador actual, quizás pueda retrasar la Parte B sin multa. Puede inscribirse mientras siga cubierto, o dentro de los 8 meses después de que termine el empleo o la cobertura, lo que ocurra primero. La cobertura de jubilados y COBRA funcionan distinto, así que consúltenos antes de dejar cualquier cobertura.',
          },
        ],
      },
      {
        id: 'covington-csnp',
        heading: 'Enfermedades del corazón y diabetes',
        blocks: [
          {
            type: 'p',
            text: 'Si le diagnosticaron diabetes, insuficiencia cardíaca o enfermedad de las arterias coronarias, pregunte si se ofrece un Plan de Necesidades Especiales para Afecciones Crónicas en St. Tammany para el próximo año. Estos planes incluyen coordinación de la atención y cobertura de medicamentos, y puede afiliarse en cuanto califique. Nuestra guía de [planes C-SNP para diabetes y enfermedades del corazón](page:guide-diabetes-heart-snp) explica quién califica y qué preguntar antes de inscribirse.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puedo reunirme en persona con un agente de Medicare desde Covington o Mandeville?',
        a: 'Sí. Nuestra oficina está en Metairie, cerca del extremo sur del Causeway, y las visitas son con cita previa. Las revisiones por teléfono también funcionan bien.',
      },
      {
        q: '¿Debo elegir un plan que cubra médicos a ambos lados del lago?',
        a: 'Si ve especialistas en Nueva Orleans o Metairie, sí, revíselo. Confirmamos cada médico que usa, en cualquiera de las dos orillas, antes de que se inscriba.',
      },
      {
        q: '¿Un plan Suplementario de Medicare cubre dental y visión?',
        a: 'No. Medigap sigue las reglas de Medicare Original, así que la atención dental y de la vista de rutina necesita un plan aparte. También le ayudamos con eso.',
      },
    ],
    nearby: ['Mandeville', 'Madisonville', 'Abita Springs', 'Slidell'],
    featured: ['medicare-supplement', 'medicare-advantage', 'dental-vision-insurance'],
  },

  'baton-rouge': {
    h1: 'Planes Medicare Advantage en Baton Rouge, LA',
    lede: 'La capital de Luisiana es una parte importante de la zona que atendemos. Ayudamos a los residentes de Baton Rouge a comparar planes de Medicare, revisar su cobertura cada año y recibir respuestas claras en español o en inglés, sin costo para ellos.',
    sections: [
      {
        id: 'br-capital',
        heading: 'Ayuda con Medicare en la región de la capital',
        blocks: [
          {
            type: 'p',
            text: 'Baton Rouge, en la parroquia East Baton Rouge, está subiendo por la I-10 desde Nueva Orleans y tiene su propia combinación de [planes Medicare Advantage](page:service-medicare-advantage) y redes de proveedores. El plan que funciona bien en Nueva Orleans puede no ser la mejor opción aquí, así que comparamos los planes que realmente se ofrecen en su dirección.',
          },
        ],
      },
      {
        id: 'br-suburbs',
        heading: 'Al servicio de toda el área de Baton Rouge',
        blocks: [
          {
            type: 'p',
            text: 'También ayudamos a personas en las comunidades alrededor de la capital, como **Denham Springs** en la parroquia Livingston, **Prairieville** y **Gonzales** en la parroquia Ascension, y **Zachary**, al norte de la ciudad. Los planes y las redes pueden variar de una parroquia a otra, así que siempre buscamos su dirección exacta. Un plan que se vende en East Baton Rouge quizás no se ofrezca en Livingston o Ascension, y al revés también. Atendemos a los clientes del área de Baton Rouge por teléfono, y con gusto hablamos de organizar una reunión en persona.',
          },
        ],
      },
      {
        id: 'br-hospitals',
        heading: 'Revisamos las redes de Baton Rouge',
        blocks: [
          {
            type: 'p',
            text: 'Entre los hospitales principales de la zona están Our Lady of the Lake Regional Medical Center, Baton Rouge General y Ochsner Medical Center – Baton Rouge. Algunos planes incluyen un sistema pero no otro, así que buscamos a sus médicos, especialistas y hospital antes de recomendarle un plan.',
          },
        ],
      },
      {
        id: 'br-retirees',
        heading: '¿Se jubila de un plan del estado o de un empleador?',
        blocks: [
          {
            type: 'p',
            text: 'Muchos residentes de Baton Rouge trabajan para el gobierno estatal, universidades, hospitales o grandes empleadores. Si se va a jubilar, averigüe cómo funciona su cobertura del empleador o de jubilados con Medicare antes de hacer cambios; dejar la cobertura de jubilados puede ser difícil de revertir. Traiga los documentos de sus beneficios y le ayudaremos a ver cómo encajan las piezas, incluido si le conviene un [plan Suplementario de Medicare](page:service-medicare-supplement) o un [plan de la Parte D](page:service-part-d-prescription-drug-plans).',
          },
        ],
      },
      {
        id: 'br-quote',
        heading: '¿Cómo obtengo una cotización de seguro de Medicare en Baton Rouge?',
        blocks: [
          {
            type: 'p',
            text: 'Llámenos para una revisión de planes gratuita. Tenga a la mano su tarjeta de Medicare, la tarjeta de su plan actual si tiene una, su lista de medicamentos con sus dosis y los nombres de sus médicos. Comparamos los planes que se ofrecen en su dirección y le explicamos los costos, por teléfono, en español o en inglés. Si tiene diabetes o una enfermedad del corazón, pregunte también por los [planes C-SNP](page:guide-diabetes-heart-snp).',
          },
        ],
      },
      {
        id: 'br-how-we-work',
        heading: 'Recursos locales gratuitos en la región de la capital',
        blocks: [
          {
            type: 'p',
            text: 'El East Baton Rouge Council on Aging y la Capital Area Agency on Aging atienden a los adultos mayores de la región, y el programa SHIIP de Luisiana ofrece asesoría gratuita sobre Medicare al 1-800-259-5300. Con nosotros, trabaja con los mismos agentes con licencia de principio a fin, incluso cuando necesita un [seguro de vida](page:service-life-insurance).',
          },
        ],
      },
      {
        id: 'br-turning-65',
        heading: 'Cumplir 65 en Baton Rouge',
        blocks: [
          {
            type: 'p',
            text: 'Si a los 65 todavía trabaja para el estado, una universidad o un sistema hospitalario, el momento de inscribirse en la Parte B depende de su cobertura del empleador. Si se jubila, importan su Período de Inscripción Inicial de siete meses y su período de inscripción abierta de Medigap de seis meses. Le organizamos las fechas para que evite multas y conserve sus opciones.',
          },
        ],
      },
      {
        id: 'br-spanish',
        heading: 'Ayuda bilingüe con Medicare en la capital',
        blocks: [
          {
            type: 'p',
            text: 'Baton Rouge tiene una comunidad hispanohablante en crecimiento, y muchas familias quieren hablar de su cobertura médica en español. Cada revisión que hacemos puede ser completamente en español, y sus familiares pueden unirse a la llamada.',
          },
        ],
      },
      {
        id: 'br-part-d',
        heading: 'Planes de medicamentos y farmacias en Baton Rouge',
        blocks: [
          {
            type: 'p',
            text: 'Ya sea que elija Medicare Advantage con cobertura de medicamentos o Medicare Original con un plan de medicamentos aparte, revisamos cada receta en la lista del plan, su nivel y si su farmacia de Baton Rouge es preferida. Si el costo le preocupa, le explicamos la Ayuda Adicional, que puede solicitar a través del Seguro Social en cualquier momento. Los medicamentos cambian, así que revisamos de nuevo su plan de medicamentos cada otoño.',
          },
        ],
      },
      {
        id: 'br-medicaid',
        heading: 'Medicare, Medicaid y ayuda con los costos',
        blocks: [
          {
            type: 'p',
            text: 'Algunos residentes de Baton Rouge califican para Medicare y Medicaid de Luisiana a la vez, o para programas que ayudan a pagar los costos de Medicare, como la Ayuda Adicional y los Programas de Ahorros de Medicare. Si tiene Medicare y Medicaid completo, un [Plan de Necesidades Especiales para Personas con Doble Elegibilidad](page:service-special-needs-plans) puede coordinar sus beneficios. Le explicamos las opciones y le indicamos dónde puede presentar su solicitud.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puedo reunirme en persona con un agente de Medicare en Baton Rouge?',
        a: 'Por lo general ayudamos a los clientes de Baton Rouge por teléfono, y con gusto hablamos de una reunión en persona. Nuestra oficina está en Metairie.',
      },
      {
        q: '¿Ayudan a las personas de Denham Springs, Prairieville, Gonzales y Zachary?',
        a: 'Sí. Ayudamos a personas en toda el área de Baton Rouge y revisamos los planes que se ofrecen en cada dirección exacta.',
      },
      {
        q: '¿Cómo obtengo una cotización de seguro de Medicare en Baton Rouge?',
        a: 'Llámenos para una revisión de planes gratuita. Tenga a la mano su tarjeta de Medicare, su lista de medicamentos y los nombres de sus médicos, y compararemos los planes que se ofrecen en su dirección, en español o en inglés.',
      },
      {
        q: '¿Los planes de Baton Rouge incluyen Our Lady of the Lake?',
        a: 'Algunos sí y otros no, y las redes pueden cambiar cada año. Revisamos sus médicos y su hospital en cada plan que comparamos.',
      },
    ],
    nearby: ['Denham Springs', 'Prairieville', 'Gonzales', 'Zachary'],
    featured: ['medicare-advantage', 'part-d-prescription-drug-plans', 'life-insurance'],
  },
};

export default cities;
