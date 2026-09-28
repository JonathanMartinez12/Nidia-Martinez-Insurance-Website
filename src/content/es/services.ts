import type { ProductKey } from '@/config/products';
import type { ServiceContent } from '../types';

const services: Record<ProductKey, ServiceContent> = {
  'medicare-advantage': {
    h1: 'Planes Medicare Advantage en Nueva Orleans y Luisiana',
    lede: 'Los planes Medicare Advantage (Parte C) reúnen en un solo plan su cobertura de hospital y atención médica —y, por lo general, sus medicamentos—, a través de una compañía privada aprobada por Medicare. Le ayudamos a comparar planes lado a lado y a elegir uno que funcione con sus médicos, sus medicinas y su presupuesto.',
    summary:
      'Ayuda personal y sin costo para comparar e inscribirse en planes Medicare Advantage (Parte C) en Luisiana, con agentes locales bilingües y con licencia.',
    whoFor: [
      'Personas con Medicare Parte A y Parte B que prefieren un solo plan en lugar de varios',
      'Quienes desean copagos previsibles y un límite anual de gastos de su bolsillo',
      'Personas que valoran los beneficios adicionales que incluyen algunos planes, como cobertura dental, de la vista o de audición',
      'Quienes se sienten cómodos usando la red de médicos y hospitales del plan',
    ],
    covers: [
      'Todo lo que cubre Medicare Original en la Parte A (hospital) y la Parte B (atención médica)',
      'Cobertura de medicamentos recetados en la mayoría de los planes (conocidos como planes MAPD)',
      'Un máximo anual de gastos de bolsillo para servicios cubiertos dentro de la red',
      'Beneficios adicionales que varían según el plan, como atención dental, de la vista, de audición y programas de ejercicio',
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'Cómo funciona Medicare Advantage',
        blocks: [
          {
            type: 'p',
            text: 'Al inscribirse en un plan Medicare Advantage, usted sigue teniendo Medicare. Continúa pagando la prima de la Parte B (a menos que otro programa, como Medicaid, la pague por usted) y el plan privado se encarga de pagar sus reclamos. Cada plan fija sus propios copagos, deducibles y red de proveedores, así que dos planes que se parecen en el papel pueden funcionar de manera muy distinta en la vida real.',
          },
          {
            type: 'p',
            text: 'La mayoría de los planes del área de Nueva Orleans son **HMO** o **PPO**. Un HMO normalmente le pide usar médicos de su red y puede requerir un referido para ver a un especialista. Un PPO le permite consultar proveedores fuera de la red, por lo general a un costo mayor. Algunos planes tienen una prima mensual de $0, pero usted igual paga copagos cuando recibe atención; la prima es solo una parte del panorama.',
          },
        ],
      },
      {
        id: 'what-we-compare',
        heading: 'Lo que comparamos por usted',
        blocks: [
          {
            type: 'p',
            text: 'El mejor plan para su vecino no siempre es el mejor para usted. Cuando nos sentamos a conversar, revisamos:',
          },
          {
            type: 'ul',
            items: [
              '**Sus médicos y hospitales**: confirmamos que los médicos y centros en los que usted confía estén en la red del plan.',
              '**Sus recetas**: buscamos cada medicamento en la lista de medicamentos cubiertos (formulario), con su nivel y su costo aproximado.',
              '**Sus costos totales**: prima, deducibles, copagos y el máximo de gastos de bolsillo, no solo el precio mensual.',
              '**Su farmacia**: las farmacias preferidas pueden bajar sus copagos de medicamentos.',
              '**Los beneficios adicionales que de verdad usará**: dental, visión, audífonos o asignaciones para productos de venta libre, cuando el plan los ofrece.',
            ],
          },
        ],
      },
      {
        id: 'when-to-enroll',
        heading: 'Cuándo puede inscribirse o cambiarse',
        blocks: [
          {
            type: 'p',
            text: 'Puede inscribirse en un plan Medicare Advantage cuando comienza a ser elegible para Medicare (su Período de Inscripción Inicial) y cada otoño durante el [Período de Inscripción Anual](page:aep), del 15 de octubre al 7 de diciembre. Si ya tiene un plan Medicare Advantage, el Período de Inscripción Abierta de Medicare Advantage, del 1 de enero al 31 de marzo, le permite hacer un cambio. Ciertos acontecimientos —como mudarse, perder otra cobertura o calificar para la Ayuda Adicional— pueden darle un Período de Inscripción Especial.',
          },
          {
            type: 'callout',
            tone: 'info',
            title: '¿Le gusta su plan actual?',
            text: 'Los planes pueden cambiar sus costos, redes y listas de medicamentos cada año. Si después de leer su Aviso Anual de Cambios usted sigue conforme, no tiene que hacer nada: su plan se renueva automáticamente. Si algo cambió y le preocupa, llámenos para revisarlo.',
          },
        ],
      },
      {
        id: 'advantage-vs-supplement',
        heading: '¿Medicare Advantage o Medicare Suplementario?',
        blocks: [
          {
            type: 'p',
            text: 'Es una de las preguntas más comunes. Medicare Advantage suele tener primas mensuales más bajas y puede incluir beneficios adicionales, pero usted paga copagos a medida que recibe atención y, en general, se mantiene dentro de una red. Un plan [Medicare Suplementario](page:service-medicare-supplement) funciona junto con Medicare Original, le permite ver a cualquier proveedor que acepte Medicare y, aunque su prima mensual suele ser más alta, deja menos cuentas por pagar al recibir atención. No hay una sola respuesta correcta: depende de su salud, de sus médicos y de cómo prefiere manejar su presupuesto.',
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'Cómo le ayudamos, sin costo para usted',
        blocks: [
          {
            type: 'p',
            text: 'Somos agentes con licencia en el área de Nueva Orleans y nos pagan las compañías de seguros, nunca usted. La prima del plan es la misma si se inscribe con nosotros o por su cuenta. Con nosotros cuenta con una persona real que le explica sus opciones en español o en inglés, le ayuda con la inscripción y sigue disponible cuando tenga dudas sobre una factura o necesite cambiar de plan.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Sigo pagando la prima de la Parte B con un plan Medicare Advantage?',
        a: 'Sí. Con casi todos los planes Medicare Advantage usted sigue pagando la prima de la Parte B, además de la prima que cobre el plan, si la hay. Algunos planes incluyen una reducción de la prima de la Parte B; se los señalaremos si le convienen.',
      },
      {
        q: '¿Puedo conservar a mi médico?',
        a: 'Muchas veces, sí, pero depende del plan. Antes de que se inscriba, verificamos que sus médicos y hospitales preferidos estén en la red del plan para evitar sorpresas.',
      },
      {
        q: '¿Los planes con prima de $0 de verdad cuestan $0?',
        a: 'La prima mensual del plan puede ser de $0, pero igual tendrá copagos o coseguro cuando reciba atención, y seguirá pagando la prima de la Parte B. Le ayudamos a calcular su costo total del año, no solo la prima.',
      },
      {
        q: '¿Con qué compañías de Medicare Advantage trabajan?',
        a: 'Puede ver las compañías que representamos en Luisiana en la sección “Compañías con las que trabajamos” de esta página. La disponibilidad de planes varía según la parroquia, y solo le recomendamos un plan que se ajuste a su situación.',
      },
      {
        q: '¿Qué pasa si viajo o paso temporadas fuera del estado?',
        a: 'Muchos planes HMO solo cubren atención de emergencia y de urgencia fuera de su área de servicio. Si viaja con frecuencia, un PPO o un plan Medicare Suplementario podría convenirle más. Hablemos de sus planes.',
      },
    ],
  },

  'medicare-supplement': {
    h1: 'Planes Medicare Suplementario (Medigap) en Nueva Orleans',
    lede: 'Un plan Medicare Suplementario —también llamado Medigap— ayuda a pagar los costos que Medicare Original deja pendientes, como deducibles, copagos y el 20 % de coseguro de las consultas médicas. Le explicamos los planes identificados con letras, comparamos precios de las compañías que representamos y le ayudamos con la solicitud.',
    summary:
      'Orientación sin costo para elegir y solicitar un seguro Medicare Suplementario (Medigap) en Luisiana, con agentes locales bilingües y con licencia.',
    whoFor: [
      'Personas con Medicare Original (Partes A y B) que quieren menos sorpresas en sus gastos',
      'Quienes desean ver a cualquier médico u hospital del país que acepte Medicare',
      'Personas que viajan o pasan parte del año entre Luisiana y otro estado',
      'Quienes prefieren una prima mensual estable en lugar de copagos en cada visita',
    ],
    covers: [
      'Parte o la totalidad de los deducibles, copagos y coseguros de Medicare, según la letra del plan',
      'El 20 % de coseguro de la Parte B en la mayoría de los planes',
      'Días adicionales de hospital cuando se agota la cobertura hospitalaria de Medicare',
      'Atención de emergencia durante viajes al extranjero en muchos planes (hasta los límites del plan)',
    ],
    sections: [
      {
        id: 'how-medigap-works',
        heading: 'Cómo funcionan los planes Medicare Suplementario',
        blocks: [
          {
            type: 'p',
            text: 'Medicare Original paga una buena parte de sus facturas de hospital y atención médica, pero no todo, y no tiene un límite anual de lo que usted paga. Los planes Medigap los venden compañías de seguros privadas y pagan una parte o la totalidad de lo que queda. Como el plan funciona junto con Medicare Original, no hay redes: si un médico u hospital acepta Medicare, su plan Medigap también paga su parte.',
          },
          {
            type: 'p',
            text: 'Los planes Medigap están estandarizados y se identifican con letras. Un Plan G de una compañía tiene los mismos beneficios básicos que un Plan G de otra; las diferencias están en el precio, en cómo la compañía fija y aumenta sus tarifas y en el servicio al cliente. Por eso vale la pena comparar compañías.',
          },
        ],
      },
      {
        id: 'popular-plans',
        heading: 'Los planes por los que más nos preguntan',
        blocks: [
          {
            type: 'ul',
            items: [
              '**Plan G**: cubre casi todos los vacíos de Medicare, excepto el deducible anual de la Parte B. Es el plan más completo disponible para quienes empezaron a tener derecho a Medicare en 2020 o después.',
              '**Plan N**: primas más bajas a cambio de pequeños copagos en algunas consultas y visitas a la sala de emergencias, además de posibles cargos en exceso de la Parte B.',
              '**Plan G de deducible alto**: los mismos beneficios del Plan G una vez que usted cubre un deducible anual, normalmente con una prima mucho más baja.',
            ],
          },
          {
            type: 'p',
            text: 'Los planes C y F ya no se venden a quienes empezaron a tener derecho a Medicare a partir del 1 de enero de 2020. Si usted ya tiene uno, por lo general puede conservarlo.',
          },
        ],
      },
      {
        id: 'drug-coverage',
        heading: 'No se olvide de la cobertura de medicamentos',
        blocks: [
          {
            type: 'p',
            text: 'Los planes Medigap que se venden hoy no incluyen cobertura de medicamentos recetados. La mayoría de las personas combinan su plan Suplementario con un [plan de medicamentos de la Parte D](page:service-part-d-prescription-drug-plans) independiente. Si pasa un tiempo sin cobertura acreditable de medicamentos cuando comienza a tener derecho, podría tener que pagar una multa por inscripción tardía más adelante; por eso le ayudamos a organizar ambos al mismo tiempo.',
          },
        ],
      },
      {
        id: 'timing',
        heading: 'El momento importa: su Período de Inscripción Abierta de Medigap',
        blocks: [
          {
            type: 'p',
            text: 'El mejor momento para comprar un plan Suplementario es durante su **Período de Inscripción Abierta de Medigap**: los seis meses que comienzan el primer mes en que usted tiene la Parte B de Medicare y 65 años o más. Durante ese período, las compañías deben venderle cualquier plan que ofrezcan en su área, sin rechazarle ni cobrarle más por su estado de salud.',
          },
          {
            type: 'p',
            text: 'Después de ese período, las compañías pueden hacer preguntas de salud y pueden rechazar su solicitud o cobrarle más, a menos que usted tenga un derecho de emisión garantizada (por ejemplo, al perder cierta cobertura). Si está pensando en pasar de Medicare Advantage a un plan Medigap, hable primero con nosotros para no quedarse sin la cobertura que necesita.',
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'Medigap no es Medicare Advantage',
            text: 'Es ilegal que alguien le venda una póliza Medicare Suplementario mientras usted está en un plan Medicare Advantage, a menos que esté regresando a Medicare Original. Si alguien lo intenta, llámenos antes de firmar cualquier cosa.',
          },
        ],
      },
      {
        id: 'comparing-prices',
        heading: 'Cómo comparamos precios de Medicare Suplementario en Luisiana',
        blocks: [
          {
            type: 'p',
            text: 'Las primas de Medigap pueden variar mucho entre compañías por exactamente el mismo plan. Comparamos las compañías que representamos, le explicamos cómo cada una ajusta sus precios con la edad y le acompañamos en la solicitud. Nuestra ayuda no tiene ningún cargo.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿El Plan G es igual en todas las compañías?',
        a: 'Sí: los beneficios de cada plan identificado con letra están estandarizados. Lo que cambia es la prima, cómo suben las tarifas con el tiempo y el servicio de la compañía. Le ayudamos a comparar.',
      },
      {
        q: '¿Me pueden rechazar para un plan Medicare Suplementario?',
        a: 'Durante su Período de Inscripción Abierta de Medigap de seis meses, o cuando tiene un derecho de emisión garantizada, no le pueden rechazar por su salud. Fuera de esos momentos, las compañías pueden evaluar su historial médico.',
      },
      {
        q: '¿Un plan Suplementario incluye dental y visión?',
        a: 'No. Los planes Medigap siguen las reglas de Medicare Original y no cubren la atención dental, de la vista ni de audición de rutina. Puede agregar un [plan dental y de visión](page:service-dental-vision-insurance) por separado.',
      },
      {
        q: '¿Puedo usar mi plan Medigap fuera de Luisiana?',
        a: 'Sí. Puede ver a cualquier proveedor de EE. UU. que acepte Medicare, por lo que Medigap es una buena opción para quienes viajan.',
      },
      {
        q: '¿Necesito un plan de medicamentos aparte?',
        a: 'Sí, si desea cobertura de recetas, y la mayoría de las personas la necesita. Los planes Medigap actuales no incluyen medicamentos, así que también le ayudaremos a elegir un plan de la Parte D.',
      },
    ],
  },

  'part-d-prescription-drug-plans': {
    h1: 'Planes de medicamentos recetados de la Parte D en Luisiana',
    lede: 'Los planes de la Parte D ayudan a pagar las medicinas que le receta su médico. Cada plan cubre una lista distinta de medicamentos a precios distintos, así que el plan adecuado depende exactamente de lo que usted toma y de dónde lo compra. Hacemos las cuentas con usted.',
    summary:
      'Ayuda sin costo para comparar planes de medicamentos recetados de la Parte D de Medicare según sus medicinas y su farmacia, con agentes con licencia en Nueva Orleans.',
    whoFor: [
      'Personas con Medicare Original, con o sin un plan Suplementario',
      'Quienes vieron subir los precios de su plan o perdieron la cobertura de algún medicamento',
      'Personas que cumplen 65 años y no tienen otra cobertura acreditable de medicamentos',
      'Familiares que ayudan a un padre o una madre a manejar varias recetas',
    ],
    covers: [
      'Medicamentos de marca y genéricos incluidos en el formulario del plan',
      'Vacunas para adultos recomendadas por los CDC, como la vacuna contra la culebrilla, sin costo para usted',
      'Insulina cubierta por no más de $35 al mes',
      'Un tope anual de lo que usted paga de su bolsillo por medicamentos cubiertos',
    ],
    sections: [
      {
        id: 'how-part-d-works',
        heading: 'Cómo funciona la Parte D',
        blocks: [
          {
            type: 'p',
            text: 'La cobertura de la Parte D la ofrecen compañías de seguros privadas aprobadas por Medicare. Puede obtenerla con un plan de medicamentos independiente (junto con Medicare Original) o como parte de la mayoría de los [planes Medicare Advantage](page:service-medicare-advantage). Cada plan tiene un formulario —su lista de medicamentos cubiertos— organizado por niveles. Los niveles más bajos suelen costar menos.',
          },
          {
            type: 'p',
            text: 'Sus costos dependen de la prima mensual del plan, de su deducible y del copago o coseguro de cada nivel. Usar una farmacia preferida del plan puede bajar aún más sus costos, y el servicio por correo puede ser útil para los medicamentos que toma todos los días.',
          },
        ],
      },
      {
        id: 'recent-changes',
        heading: 'Cambios recientes que ayudan a su bolsillo',
        blocks: [
          {
            type: 'ul',
            items: [
              '**Un tope anual de gastos de bolsillo.** Desde 2025, la ley limita lo que usted paga al año por los medicamentos cubiertos de la Parte D. La cantidad se ajusta cada año.',
              '**Pagos repartidos durante el año.** El Plan de Pagos de Medicamentos Recetados de Medicare le permite pagar sus medicinas en cuotas mensuales, en lugar de pagar todo de una vez en la farmacia.',
              '**Insulina y vacunas.** La insulina cubierta no cuesta más de $35 al mes, y las vacunas recomendadas para adultos no tienen costo para usted.',
            ],
          },
        ],
      },
      {
        id: 'choosing',
        heading: 'Cómo comparamos los planes de medicamentos',
        blocks: [
          {
            type: 'ol',
            items: [
              'Anotamos cada medicamento que usted toma, con la dosis y la frecuencia.',
              'Revisamos qué planes cubren cada medicamento, en qué nivel y si requiere autorización previa o tiene límites de cantidad.',
              'Comparamos el costo anual aproximado en las farmacias que usted realmente usa.',
              'Revisamos los resultados con usted y le ayudamos a inscribirse.',
            ],
          },
          {
            type: 'p',
            text: 'Como los planes pueden cambiar sus listas de medicamentos y sus precios cada año, le recomendamos repetir esta revisión cada otoño durante el [Período de Inscripción Anual](page:aep).',
          },
        ],
      },
      {
        id: 'penalty',
        heading: 'Evite la multa por inscripción tardía',
        blocks: [
          {
            type: 'p',
            text: 'Si pasa 63 días seguidos o más sin la Parte D ni otra cobertura acreditable de medicamentos después de que termina su Período de Inscripción Inicial, es posible que deba pagar una multa que se suma a su prima mientras tenga la Parte D. Si tiene cobertura a través de un empleador o sindicato, pregunte si es acreditable y guarde la carta que lo confirma.',
          },
        ],
      },
      {
        id: 'extra-help',
        heading: 'Ayuda para pagar sus recetas',
        blocks: [
          {
            type: 'p',
            text: 'Si sus ingresos y recursos son limitados, podría calificar para la **Ayuda Adicional** (Extra Help), un programa de Medicare que reduce las primas, los deducibles y los copagos de la Parte D. Le ayudamos a averiguar si podría calificar y cómo solicitarla a través del Seguro Social.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Necesito la Parte D si ahora no tomo medicamentos?',
        a: 'Muchas personas igual se inscriben en un plan económico para evitar la multa por inscripción tardía y tener cobertura si de pronto necesitan una receta. Le ayudamos a decidir.',
      },
      {
        q: '¿Por qué cambiaron mis costos de medicamentos este año?',
        a: 'Los planes actualizan cada año sus primas, deducibles, listas de medicamentos y redes de farmacias. Su Aviso Anual de Cambios explica qué es diferente. Tráigalo a su revisión y compararemos sus opciones.',
      },
      {
        q: '¿Puedo cambiar de plan de medicamentos a mitad de año?',
        a: 'Por lo general, solo durante ciertos períodos, como el Período de Inscripción Anual del 15 de octubre al 7 de diciembre, a menos que califique para un Período de Inscripción Especial.',
      },
      {
        q: '¿Qué pasa si mi medicamento no está en la lista del plan?',
        a: 'Usted y su médico pueden pedirle al plan una excepción, o quizá pueda cambiar a una alternativa cubierta. Cuando comparamos planes, buscamos los que cubren lo que usted toma.',
      },
    ],
  },

  'special-needs-plans': {
    h1: 'Planes de Medicare para diabetes y enfermedades del corazón (C-SNP)',
    lede: 'Si le han diagnosticado una enfermedad crónica del corazón o diabetes, podría calificar para un Plan para Necesidades Especiales por Afecciones Crónicas: un tipo de plan Medicare Advantage diseñado en torno a su cuidado, muchas veces con beneficios adicionales. Le ayudamos a saber si califica.',
    summary:
      'Ayuda para encontrar e inscribirse en Planes para Necesidades Especiales por Afecciones Crónicas (C-SNP) de Medicare para personas con diabetes o enfermedades del corazón en Luisiana.',
    whoFor: [
      'Personas con Medicare Partes A y B que tienen diabetes',
      'Personas diagnosticadas con insuficiencia cardíaca crónica o ciertas enfermedades cardiovasculares',
      'Quienes desean coordinación de su atención pensada para una enfermedad crónica',
      'Personas que viven en el área de servicio del plan',
    ],
    covers: [
      'Todos los beneficios de hospital y atención médica de Medicare Original',
      'Cobertura de medicamentos recetados, incluida en todos los Planes para Necesidades Especiales',
      'Redes de médicos y listas de medicamentos pensadas para su afección',
      'Beneficios adicionales que varían según el plan, como coordinación de la atención o beneficios suplementarios',
    ],
    sections: [
      {
        id: 'what-is-a-csnp',
        heading: '¿Qué es un Plan para Necesidades Especiales por Afecciones Crónicas?',
        blocks: [
          {
            type: 'p',
            text: 'Los Planes para Necesidades Especiales (SNP, por sus siglas en inglés) son planes Medicare Advantage limitados a personas con necesidades específicas. Un **C-SNP** es para personas que viven con ciertas afecciones crónicas graves o incapacitantes. Como todos los miembros del plan comparten un cuadro de salud parecido, el plan puede adaptar sus médicos, su lista de medicamentos y sus programas de atención a esa afección.',
          },
          {
            type: 'p',
            text: 'Entre las afecciones más comunes que dan derecho a estos planes están la diabetes, la insuficiencia cardíaca crónica y los trastornos cardiovasculares. Las afecciones exactas dependen del plan, y el plan confirma su diagnóstico con su médico como parte de la inscripción.',
          },
        ],
      },
      {
        id: 'benefits',
        heading: 'Beneficios a los que podría tener derecho',
        blocks: [
          {
            type: 'p',
            text: 'Los beneficios cambian de un plan a otro y de un año a otro, por eso revisamos los planes específicos disponibles donde usted vive. Según el plan, un C-SNP puede incluir:',
          },
          {
            type: 'ul',
            items: [
              'Un coordinador o equipo de atención que le ayude con citas y medicamentos',
              'Copagos más bajos con los médicos y especialistas que tratan su afección',
              'Costos reducidos en algunos medicamentos y suministros relacionados con su afección',
              'Beneficios suplementarios adicionales, como asignaciones para alimentos saludables o productos de venta libre, para los miembros que califiquen',
            ],
          },
        ],
      },
      {
        id: 'when-to-join',
        heading: 'Cuándo puede inscribirse',
        blocks: [
          {
            type: 'p',
            text: 'Puede inscribirse en un C-SNP durante los períodos regulares, como el [Período de Inscripción Anual](page:aep). Si tiene una afección crónica que da derecho al plan, también cuenta con un Período de Inscripción Especial que le permite inscribirse en otros momentos del año en un C-SNP diseñado para su afección. La cobertura continúa solo mientras usted cumpla los requisitos del plan, así que le explicaremos qué sucede si su situación cambia.',
          },
          {
            type: 'callout',
            tone: 'info',
            title: '¿Le hicieron un diagnóstico hace poco?',
            text: 'Si le diagnosticaron una enfermedad crónica del corazón o diabetes, llámenos. Podría calificar para un plan con beneficios adicionales, y quizá no tenga que esperar hasta el otoño para hacer un cambio.',
          },
        ],
      },
      {
        id: 'other-snps',
        heading: 'Otros tipos de Planes para Necesidades Especiales',
        blocks: [
          {
            type: 'p',
            text: 'Existen otros dos tipos de SNP. Los **D-SNP** son para personas que tienen Medicare y Medicaid a la vez. Los **I-SNP** son para personas que viven en un hogar de ancianos o que necesitan ese nivel de atención en casa. Si alguno de ellos podría aplicarse a usted o a un familiar, conversaremos sobre las opciones.',
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'Cómo le ayudamos',
        blocks: [
          {
            type: 'p',
            text: 'Le preguntaremos sobre su diagnóstico y sus medicamentos, revisaremos qué C-SNP atienden su parroquia, confirmaremos que sus médicos estén en la red y compararemos los costos con un [plan Medicare Advantage](page:service-medicare-advantage) regular. Si un C-SNP no es lo más conveniente para usted, se lo diremos con franqueza.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Cómo demuestro que tengo una afección que da derecho al plan?',
        a: 'El plan verifica su afección con su médico, normalmente poco después de que usted presenta la solicitud. Le explicaremos los pasos y la información que el plan necesitará.',
      },
      {
        q: '¿Un C-SNP es más caro?',
        a: 'No necesariamente. Muchos C-SNP tienen primas y copagos parecidos a los de otros planes Medicare Advantage, y algunos ofrecen costos más bajos para la atención relacionada con su afección. Compararemos los detalles con usted.',
      },
      {
        q: '¿Puedo conservar a mi cardiólogo o a mi endocrinólogo?',
        a: 'Depende de la red del plan. Revisamos a sus especialistas antes de que se inscriba.',
      },
      {
        q: '¿Y si tengo diabetes y también una enfermedad del corazón?',
        a: 'Algunos planes están pensados para personas con más de una afección relacionada. Buscaremos el plan que se ajuste a su situación de salud completa.',
      },
    ],
  },

  'dental-vision-insurance': {
    h1: 'Seguro dental y de visión para adultos mayores en Luisiana',
    lede: 'Medicare Original no cubre las limpiezas dentales de rutina, los empastes, las dentaduras, los exámenes de la vista ni los lentes. Un plan dental y de visión puede ayudarle con esos gastos, ya sea que tenga Medicare Original, un plan Suplementario o sea menor de 65 años.',
    summary:
      'Ayuda para comparar seguros dentales y de visión individuales en Luisiana para personas con Medicare Original, un plan Suplementario o menores de 65 años.',
    whoFor: [
      'Personas con Medicare Original y un plan Suplementario, que no cubren la atención dental ni de la vista de rutina',
      'Miembros de Medicare Advantage que quieren más cobertura dental de la que incluye su plan',
      'Adultos menores de 65 años sin beneficios dentales o de visión a través del trabajo',
      'Quienes prevén necesitar dentaduras, coronas o lentes nuevos',
    ],
    covers: [
      'Atención dental preventiva, como exámenes, limpiezas y radiografías',
      'Servicios dentales básicos y mayores, como empastes, extracciones, coronas y dentaduras, según el plan',
      'Exámenes de la vista de rutina',
      'Asignaciones para anteojos o lentes de contacto',
    ],
    sections: [
      {
        id: 'why-it-matters',
        heading: 'Por qué importa la cobertura dental y de visión después de los 65',
        blocks: [
          {
            type: 'p',
            text: 'Tener dientes sanos y buena vista influye en todo, desde la alimentación hasta la seguridad en casa. Sin embargo, Medicare Original por lo general no paga la atención dental de rutina, las dentaduras, los exámenes de la vista para lentes ni los anteojos, y los planes Suplementarios siguen las mismas reglas. Por eso muchas personas jubiladas terminan pagando el precio completo de su bolsillo.',
          },
        ],
      },
      {
        id: 'how-plans-work',
        heading: 'Cómo suelen funcionar los planes dentales',
        blocks: [
          { type: 'p', text: 'Los planes dentales independientes suelen organizar la atención en tres niveles:' },
          {
            type: 'ul',
            items: [
              '**Preventivo**: limpiezas, exámenes y radiografías, con frecuencia cubiertos en un porcentaje alto desde el principio.',
              '**Básico**: empastes y extracciones sencillas, a veces después de un período de espera corto.',
              '**Mayor**: coronas, puentes, tratamientos de conducto y dentaduras, muchas veces con un período de espera más largo y un porcentaje de cobertura menor.',
            ],
          },
          {
            type: 'p',
            text: 'La mayoría de los planes también tiene un **máximo anual**: lo más que el plan pagará en un año. Comparamos máximos, períodos de espera y si su dentista está en la red, para que elija un plan acorde con el trabajo que realmente necesita.',
          },
        ],
      },
      {
        id: 'vision',
        heading: 'Cobertura de la vista',
        blocks: [
          {
            type: 'p',
            text: 'Los planes de visión, o los planes dentales con una cláusula de visión, suelen ayudar con un examen de la vista al año y una asignación para marcos, lentes o lentes de contacto. Medicare sí cubre parte de la atención de los ojos relacionada con afecciones médicas —como la cirugía de cataratas y ciertos exámenes por diabetes o glaucoma—, así que le explicaremos lo que ya está cubierto antes de que compre algo más.',
          },
        ],
      },
      {
        id: 'questions-to-ask',
        heading: 'Preguntas que conviene hacer antes de comprar',
        blocks: [
          {
            type: 'ul',
            items: [
              '¿Mi dentista o mi oculista está en la red? ¿Qué pasa si me atiendo fuera de la red?',
              '¿Cuál es el máximo anual y se acumula para el año siguiente lo que no use?',
              '¿Cuánto duran los períodos de espera para empastes, coronas y dentaduras?',
              '¿Cubre los implantes? Si los cubre, ¿cuánto pagaría yo?',
              '¿Incluye exámenes de audición o audífonos?',
            ],
          },
          {
            type: 'p',
            text: 'Anotar las respuestas de cada plan una al lado de la otra facilita mucho ver cuál le ahorra dinero de verdad en el tratamiento que necesita.',
          },
        ],
      },
      {
        id: 'with-medicare-advantage',
        heading: 'Si tiene Medicare Advantage',
        blocks: [
          {
            type: 'p',
            text: 'Muchos [planes Medicare Advantage](page:service-medicare-advantage) incluyen algunos beneficios dentales y de visión, pero la cobertura puede ser limitada: por ejemplo, solo atención preventiva o un máximo dental anual bajo. Si necesita un trabajo dental importante, un plan aparte puede cubrir esa diferencia. Traiga la Evidencia de Cobertura de su plan y la revisamos juntos.',
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'Cómo le ayudamos',
        blocks: [
          {
            type: 'p',
            text: 'Cuéntenos qué tratamiento necesita y con qué dentista u oculista quiere seguir. Compararemos planes, le explicaremos los períodos de espera con palabras sencillas y le ayudaremos a inscribirse.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Hay un período de espera para las dentaduras?',
        a: 'Con frecuencia, sí. Muchos planes tienen períodos de espera para servicios mayores, como dentaduras y coronas, aunque algunos los acortan o los eliminan. Le mostraremos las opciones.',
      },
      {
        q: '¿Puedo seguir con mi dentista?',
        a: 'Si su dentista está en la red del plan, normalmente pagará menos. Algunos planes también pagan a dentistas fuera de la red, pero en menor proporción. Lo verificamos antes de que se inscriba.',
      },
      {
        q: '¿Medicare cubre la cirugía de cataratas?',
        a: 'Sí. La Parte B de Medicare cubre la cirugía de cataratas y un par de anteojos o lentes de contacto después de una cirugía en la que se implanta un lente intraocular. Los exámenes de rutina para lentes no están cubiertos por Medicare Original.',
      },
      {
        q: '¿Puedo comprar un plan dental en cualquier época del año?',
        a: 'Los planes dentales y de visión independientes por lo general están disponibles todo el año, no solo durante los períodos de inscripción de Medicare.',
      },
    ],
  },

  'final-expense-insurance': {
    h1: 'Seguro de gastos finales en Luisiana',
    lede: 'El seguro de gastos finales es una póliza pequeña de vida permanente pensada para ayudar a su familia a pagar el funeral, el entierro o la cremación y otras cuentas finales. Le da la tranquilidad de saber que sus seres queridos no tendrán que cargar con ese costo.',
    summary:
      'Seguro de vida para gastos finales (funeral y entierro) para familias de Luisiana, con orientación amable y bilingüe de agentes locales con licencia.',
    whoFor: [
      'Adultos, con frecuencia de 50 a 85 años, que desean cubrir los gastos del funeral y el entierro',
      'Personas que no quieren que sus hijos paguen sus arreglos finales',
      'Quienes quizá no califican para una póliza de vida grande, o no la necesitan',
      'Quienes desean una prima fija que no suba con la edad',
    ],
    covers: [
      'Un beneficio en efectivo para su beneficiario, que puede usarlo como sea necesario',
      'Los gastos del funeral, el entierro o la cremación',
      'Facturas médicas pendientes, deudas pequeñas o el viaje de familiares',
      'Cobertura para toda la vida, siempre que se paguen las primas',
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'Cómo funciona el seguro de gastos finales',
        blocks: [
          {
            type: 'p',
            text: 'Las pólizas de gastos finales son un tipo de **seguro de vida permanente** (vida entera) con beneficios más pequeños que un seguro de vida tradicional. Una vez vigente la póliza, la prima por lo general se mantiene igual, la cobertura no vence y la póliza acumula un modesto valor en efectivo con el tiempo. Al fallecer usted, el beneficio se paga directamente a la persona que haya elegido.',
          },
          {
            type: 'p',
            text: 'Como el dinero va a su beneficiario y no a una funeraria en particular, su familia tiene flexibilidad: puede pagar los servicios, saldar una última cuenta del hospital o cubrir el viaje para que los familiares puedan estar juntos.',
          },
        ],
      },
      {
        id: 'qualifying',
        heading: 'Calificar suele ser sencillo',
        blocks: [
          {
            type: 'ul',
            items: [
              '**Emisión simplificada:** sin examen médico, solo unas cuantas preguntas de salud en la solicitud. Si califica, la cobertura completa muchas veces empieza de inmediato.',
              '**Beneficio gradual o modificado:** para personas con ciertas condiciones de salud. El beneficio completo por causas naturales normalmente se paga después de un período de espera, a menudo de dos o tres años; antes de eso, la póliza por lo general devuelve las primas pagadas más intereses.',
              '**Aceptación garantizada:** sin preguntas de salud, con un período de espera antes de que aplique el beneficio completo.',
            ],
          },
          {
            type: 'p',
            text: 'Las reglas exactas dependen de la compañía y de sus respuestas, por eso comparamos opciones y le explicamos lo que se aplica a su caso antes de presentar la solicitud.',
          },
        ],
      },
      {
        id: 'how-much',
        heading: '¿Cuánta cobertura necesita?',
        blocks: [
          {
            type: 'p',
            text: 'Piense en el tipo de servicio que desearía, si prefiere entierro o cremación, los arreglos que ya haya hecho y otras cuentas que su familia podría enfrentar. Le ayudamos a calcular una cantidad razonable y a encontrar una prima mensual que se ajuste a su presupuesto, sin presiones para comprar más de lo necesario.',
          },
        ],
      },
      {
        id: 'plan-ahead',
        heading: 'Por qué conviene planificar con tiempo',
        blocks: [
          {
            type: 'p',
            text: 'Las primas dependen en parte de su edad al solicitar la póliza, así que la cobertura suele costar menos cuanto antes comience. Planificar con tiempo también abre la puerta a una conversación sincera con su familia sobre sus deseos, lo que puede hacer un momento difícil un poco más llevadero para todos.',
          },
        ],
      },
      {
        id: 'local-help',
        heading: 'Ayuda de alguien de la comunidad, en español o en inglés',
        blocks: [
          {
            type: 'p',
            text: 'John Martinez se dedica a los seguros de gastos finales y de vida para familias de toda el área de Nueva Orleans. John se reúne con usted en persona o por teléfono y se asegura de que entienda cada parte de la póliza antes de firmar. Si su familia necesita más protección, puede combinarla con un [seguro de vida económico](page:service-life-insurance).',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿El seguro de gastos finales es lo mismo que un plan funerario prepagado?',
        a: 'No. Un plan funerario prepagado se contrata con una funeraria específica. El seguro de gastos finales paga un beneficio en efectivo a su beneficiario, quien puede usarlo en cualquier funeraria o para otras cuentas.',
      },
      {
        q: '¿Necesitaré un examen médico?',
        a: 'Normalmente no. La mayoría de las pólizas de gastos finales usan un cuestionario breve de salud en lugar de un examen, y algunas no hacen ninguna pregunta de salud.',
      },
      {
        q: '¿Me pueden subir la prima?',
        a: 'La mayoría de las pólizas de gastos finales son de vida permanente con primas niveladas que no aumentan con la edad. Confirmaremos los detalles de cualquier póliza que considere.',
      },
      {
        q: '¿Qué tan rápido se paga el beneficio?',
        a: 'Con frecuencia los reclamos se pagan poco después de que la compañía recibe el certificado de defunción y el formulario de reclamo, pero los plazos varían según la compañía. Podemos ayudar a su familia con los trámites.',
      },
    ],
  },

  'life-insurance': {
    h1: 'Seguro de vida económico para familias de Luisiana',
    lede: 'El seguro de vida protege a quienes dependen de usted. Ya sea que quiera reemplazar sus ingresos, terminar de pagar una hipoteca o dejarles algo a sus hijos y nietos, le ayudamos a encontrar una cobertura accesible que se ajuste a su presupuesto.',
    summary:
      'Ayuda para comparar seguros de vida a término y permanentes a buen precio para familias de Luisiana, con agentes bilingües y con licencia en el área de Nueva Orleans.',
    whoFor: [
      'Adultos que trabajan y quieren proteger los ingresos de su familia',
      'Dueños de casa que quieren que su hipoteca quede pagada si algo sucede',
      'Padres y abuelos que desean dejar un legado',
      'Quienes pierden la cobertura del empleador al jubilarse o cambiar de trabajo',
    ],
    covers: [
      'Un beneficio por fallecimiento para sus beneficiarios, por lo general libre de impuestos sobre la renta',
      'Cobertura a término por un número fijo de años, o cobertura permanente de por vida',
      'Cláusulas opcionales en algunas pólizas, como beneficios anticipados por enfermedad grave',
      'Primas niveladas en la mayoría de las pólizas a término y permanentes',
    ],
    sections: [
      {
        id: 'types',
        heading: '¿Seguro a término o permanente?',
        blocks: [
          {
            type: 'p',
            text: 'El **seguro de vida a término** le cubre durante un período fijo, a menudo de 10, 20 o 30 años. Suele ser la forma más económica de obtener una cobertura más alta mientras cría a su familia o termina de pagar su casa.',
          },
          {
            type: 'p',
            text: 'El **seguro de vida permanente** (vida entera) dura toda su vida y acumula un valor en efectivo contra el que puede pedir préstamos. Las primas son más altas que las de un seguro a término por la misma cobertura, pero por lo general se mantienen fijas. Las pólizas permanentes pequeñas pensadas para los gastos del funeral se llaman [seguro de gastos finales](page:service-final-expense-insurance).',
          },
        ],
      },
      {
        id: 'how-much',
        heading: '¿Cuánto seguro de vida necesita?',
        blocks: [
          { type: 'p', text: 'Un buen punto de partida es sumar lo que su familia necesitaría si usted faltara:' },
          {
            type: 'ul',
            items: [
              'Los años de ingresos de los que depende su familia',
              'Su hipoteca o renta y otras deudas',
              'Gastos futuros, como la universidad o el cuidado de un padre o una madre',
              'Los gastos del funeral y otros gastos finales',
            ],
          },
          {
            type: 'p',
            text: 'Luego reste sus ahorros y cualquier cobertura que ya tenga. Haremos juntos las cuentas y le mostraremos cuánto cuestan distintas cantidades de cobertura.',
          },
        ],
      },
      {
        id: 'keep-it-low',
        heading: 'Cómo mantener baja su prima',
        blocks: [
          {
            type: 'ul',
            items: [
              'Solicite la póliza pronto: la edad es uno de los factores que más influyen en el precio.',
              'Elija el plazo que de verdad necesita.',
              'Compare varias compañías; el precio de una misma cobertura puede variar bastante.',
              'Pregunte por opciones sin examen médico si prefiere evitarlo.',
            ],
          },
        ],
      },
      {
        id: 'riders',
        heading: 'Cláusulas adicionales que conviene conocer',
        blocks: [
          {
            type: 'ul',
            items: [
              '**Beneficio por fallecimiento anticipado**: en las pólizas que lo incluyen, le permite usar parte del beneficio en vida si le diagnostican una enfermedad terminal.',
              '**Exención del pago de primas**: en algunas pólizas, mantiene su cobertura vigente sin pagar primas si usted queda con una discapacidad.',
              '**Cláusula para hijos o nietos**: en algunas pólizas, agrega una pequeña cobertura para sus hijos o nietos.',
            ],
          },
          {
            type: 'p',
            text: 'Las cláusulas varían según la compañía y pueden aumentar el costo. Le explicaremos cuáles valen la pena para su familia y cuáles puede omitir.',
          },
        ],
      },
      {
        id: 'work-coverage',
        heading: '¿Y el seguro de vida del trabajo?',
        blocks: [
          {
            type: 'p',
            text: 'El seguro de vida en grupo que ofrece un empleador es un gran beneficio, pero muchas veces se limita a uno o dos años de salario y puede terminar cuando usted deja el empleo o se jubila. Una póliza personal le acompaña sin importar dónde trabaje.',
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'Cómo le ayudamos',
        blocks: [
          {
            type: 'p',
            text: 'John Martinez atiende los seguros de vida de nuestros clientes. John le explicará sus opciones en español o en inglés, comparará cotizaciones y le ayudará con la solicitud de principio a fin.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Necesito un examen médico?',
        a: 'No siempre. Algunas pólizas se aprueban con preguntas de salud y consultas a bases de datos, mientras que otras piden un examen breve para ofrecer las tarifas más bajas. Le explicaremos las ventajas de cada opción.',
      },
      {
        q: '¿Puedo obtener un seguro de vida si tengo problemas de salud?',
        a: 'Muchas veces, sí. Muchas compañías ofrecen cobertura a personas con afecciones como diabetes o presión alta. Buscaremos la mejor opción para su salud y su presupuesto.',
      },
      {
        q: '¿Qué pasa cuando termina mi póliza a término?',
        a: 'La cobertura termina a menos que la renueve o la convierta. Muchas pólizas a término permiten convertirla en cobertura permanente sin nuevas preguntas de salud antes de cierta edad. Revisaremos las opciones de conversión de cualquier póliza que considere.',
      },
      {
        q: '¿A quién debo nombrar como beneficiario?',
        a: 'La mayoría de las personas nombra a su cónyuge, a sus hijos o a un fideicomiso. Mantenga actualizados sus beneficiarios después de acontecimientos importantes, como un matrimonio, un divorcio o el nacimiento de un nieto.',
      },
    ],
  },

  'hospital-indemnity-insurance': {
    h1: 'Seguro de indemnización hospitalaria en Luisiana',
    lede: 'Una estadía en el hospital puede traer cuentas aun cuando se tiene buena cobertura. El seguro de indemnización hospitalaria le paga una cantidad fija en efectivo cuando le internan en el hospital, para ayudarle con copagos, deducibles o gastos del día a día mientras se recupera.',
    summary:
      'Ayuda para elegir un seguro de indemnización hospitalaria que paga beneficios en efectivo por estadías en el hospital, a menudo combinado con Medicare Advantage, en Luisiana.',
    whoFor: [
      'Miembros de Medicare Advantage que quieren ayuda con los copagos diarios del hospital',
      'Personas que desean tener dinero disponible durante una hospitalización',
      'Quienes tienen un deducible alto en su cobertura de salud actual',
      'Familias que quieren estar preparadas para lo inesperado',
    ],
    covers: [
      'Un beneficio fijo en efectivo por día o por estadía cuando le internan',
      'Beneficios pagados directamente a usted, para usarlos como prefiera',
      'En algunos planes, cobertura opcional para estadías en observación, centros de enfermería especializada o cirugía ambulatoria',
      'Beneficios que se pagan además de su otro seguro',
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'Cómo funcionan los planes de indemnización hospitalaria',
        blocks: [
          {
            type: 'p',
            text: 'El seguro de indemnización hospitalaria es una cobertura suplementaria. No reemplaza su seguro de salud ni Medicare: funciona junto a ellos. Si le internan en el hospital por un motivo cubierto, el plan le paga directamente una cantidad fija, por ejemplo por cada día o por cada estadía.',
          },
          {
            type: 'p',
            text: 'Como el dinero llega a sus manos, usted decide cómo usarlo: copagos del hospital, el transporte de regreso a casa, medicinas, comida o el viaje de un familiar.',
          },
        ],
      },
      {
        id: 'with-medicare-advantage',
        heading: 'Un buen complemento para Medicare Advantage',
        blocks: [
          {
            type: 'p',
            text: 'Muchos [planes Medicare Advantage](page:service-medicare-advantage) cobran un copago por cada día de hospitalización, a menudo durante los primeros días. Un plan de indemnización hospitalaria puede organizarse para ayudar a compensar esos copagos, de modo que ambos se complementan bien. Revisaremos los copagos hospitalarios de su plan y elegiremos un beneficio que les corresponda.',
          },
        ],
      },
      {
        id: 'what-to-compare',
        heading: 'Qué conviene comparar',
        blocks: [
          {
            type: 'ul',
            items: [
              'El monto del beneficio por día o por estadía, y cuántos días paga',
              'Si cubre las estadías en observación, que se facturan como atención ambulatoria',
              'Los límites para afecciones preexistentes y los períodos de espera',
              'Cláusulas adicionales, como enfermería especializada, ambulancia o cáncer',
              'La prima mensual y si puede cambiar',
            ],
          },
        ],
      },
      {
        id: 'example',
        heading: 'Un ejemplo sencillo',
        blocks: [
          {
            type: 'p',
            text: 'Supongamos que su plan Medicare Advantage cobra un copago por cada uno de los primeros días de hospitalización y a usted le internan cuatro días. Si su plan de indemnización hospitalaria paga un beneficio diario, recibirá un pago por cada día cubierto: dinero que puede usar para esos copagos o para cualquier otra cosa que necesite mientras se recupera. Las cantidades reales dependen de sus planes, así que haremos las cuentas con los documentos de su propio plan.',
          },
          {
            type: 'p',
            text: 'Por otro lado, si su cobertura actual ya mantiene bajos los costos del hospital —por ejemplo, algunos planes Medicare Suplementario pagan el deducible y el coseguro hospitalario de la Parte A—, un plan de indemnización hospitalaria quizá aporte poco. Si no lo necesita, se lo diremos.',
          },
        ],
      },
      {
        id: 'good-to-know',
        heading: 'Conviene saber',
        blocks: [
          {
            type: 'p',
            text: 'Los planes de indemnización hospitalaria no sustituyen un seguro médico completo ni Medicare, y los beneficios se limitan a las cantidades de la póliza. La mayoría se puede comprar en cualquier época del año. Algunos hacen preguntas de salud, y los beneficios por afecciones preexistentes pueden estar limitados durante un tiempo después de inscribirse.',
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'Cómo le ayudamos',
        blocks: [
          {
            type: 'p',
            text: 'John comparará con usted las opciones de indemnización hospitalaria, le explicará exactamente qué da lugar a un pago y le ayudará a elegir un beneficio que cubra los vacíos de su cobertura actual.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿La indemnización hospitalaria le paga directamente al hospital?',
        a: 'No. Los beneficios se le pagan a usted (o a la persona que usted elija), y usted decide cómo usar el dinero.',
      },
      {
        q: '¿Puedo tener indemnización hospitalaria junto con Medicare Advantage?',
        a: 'Sí. Es una póliza aparte que paga además de su plan Medicare Advantage, y muchas personas la usan para ayudarse con los copagos diarios del hospital.',
      },
      {
        q: '¿Una estadía en observación es lo mismo que estar internado?',
        a: 'No. La observación se considera atención ambulatoria aunque pase la noche en el hospital, y algunas pólizas no la cubren. Le mostraremos qué planes incluyen beneficios por observación.',
      },
      {
        q: '¿Puedo comprarlo en cualquier momento?',
        a: 'Por lo general, sí. A diferencia de los planes de Medicare, la mayoría de las pólizas de indemnización hospitalaria no se limitan a períodos de inscripción.',
      },
    ],
  },

  'health-insurance': {
    h1: 'Seguro de salud para residentes de Luisiana menores de 65',
    lede: '¿Todavía no tiene Medicare? Ya sea que trabaje por cuenta propia, esté entre empleos, se haya jubilado antes de tiempo o esté ayudando a su familia, le ayudamos a entender sus opciones de seguro de salud en Luisiana y a elegir una cobertura que se ajuste a sus médicos y a su presupuesto.',
    summary:
      'Orientación sobre seguros de salud individuales y familiares para residentes de Luisiana menores de 65 años, incluidas opciones del Mercado de Seguros (ACA), con agentes locales bilingües.',
    whoFor: [
      'Personas que trabajan por cuenta propia y dueños de pequeños negocios',
      'Quienes se jubilaron antes de tener derecho a Medicare',
      'Familias que no tienen cobertura a través del trabajo',
      'Personas que pierden la cobertura del empleador por un cambio de empleo',
    ],
    covers: [
      'Consultas médicas, atención hospitalaria y servicios de emergencia',
      'Medicamentos recetados',
      'Atención preventiva, como pruebas de detección y vacunas, muchas veces sin costo',
      'Salud mental, maternidad y los demás beneficios de salud esenciales que exigen los planes que cumplen con la ACA',
    ],
    sections: [
      {
        id: 'options',
        heading: 'Sus opciones antes de Medicare',
        blocks: [
          {
            type: 'p',
            text: 'La mayoría de las personas menores de 65 años que no reciben seguro a través de un empleador compran un plan individual o familiar. En Luisiana, eso muchas veces significa un plan del Mercado de Seguros Médicos creado por la Ley de Cuidado de Salud a Bajo Precio (ACA), donde los planes se agrupan en niveles metálicos como Bronce, Plata y Oro según cómo se reparten los costos entre usted y el plan.',
          },
          {
            type: 'p',
            text: 'Según los ingresos de su hogar, podría calificar para un crédito tributario para la prima que reduce su pago mensual, y algunos planes Plata incluyen ahorros adicionales en deducibles y copagos.',
          },
        ],
      },
      {
        id: 'when-to-enroll',
        heading: 'Cuándo puede inscribirse',
        blocks: [
          {
            type: 'p',
            text: 'Los planes del Mercado tienen cada año un Período de Inscripción Abierta que comienza el 1 de noviembre. Fuera de ese período, por lo general necesita un acontecimiento que le dé derecho —como perder otra cobertura, mudarse, casarse o tener un bebé— para obtener un Período de Inscripción Especial. Esos períodos especiales suelen durar 60 días, así que conviene actuar pronto después de un cambio.',
          },
        ],
      },
      {
        id: 'plan-types',
        heading: 'Los tipos de plan',
        blocks: [
          {
            type: 'p',
            text: 'Los planes individuales tienen distintos tipos de red. Los **HMO** y los **EPO** por lo general solo cubren la atención con proveedores de la red, salvo en emergencias, mientras que los **PPO** también pagan una parte de la atención fuera de la red. Un plan con prima más baja muchas veces tiene un deducible más alto, así que revisamos lo que probablemente gastará en todo un año, no solo el precio mensual.',
          },
          {
            type: 'p',
            text: 'Si toma recetas con regularidad o ve a especialistas, esos detalles pueden cambiar cuál plan le conviene más. Los revisamos en cada plan que comparamos.',
          },
        ],
      },
      {
        id: 'compare',
        heading: 'Lo que comparamos por usted',
        blocks: [
          {
            type: 'ul',
            items: [
              'Si sus médicos y hospitales están en la red',
              'Sus recetas y cómo las cubre cada plan',
              'La prima después de cualquier crédito tributario al que tenga derecho',
              'Deducibles, copagos y el máximo de gastos de bolsillo',
            ],
          },
        ],
      },
      {
        id: 'turning-65',
        heading: '¿Cumple 65 años pronto?',
        blocks: [
          {
            type: 'p',
            text: 'Su Período de Inscripción Inicial en Medicare comienza tres meses antes del mes en que cumple 65 años. Si tiene un plan individual, planifique con cuidado el paso a Medicare para no quedarse sin cobertura ni seguir pagando por un seguro que ya no necesita. Le acompañamos en toda la transición: desde elegir entre [Medicare Advantage](page:service-medicare-advantage) y un plan [Medicare Suplementario](page:service-medicare-supplement) hasta escoger un plan de medicamentos.',
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'Cómo le ayudamos',
        blocks: [
          {
            type: 'p',
            text: 'Escucharemos lo que más le importa, le explicaremos sus opciones con palabras sencillas y le ayudaremos a inscribirse. Si en su hogar una persona tiene Medicare y otra no, podemos ayudar a toda la familia en una sola conversación.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puedo comprar un seguro de salud fuera de la Inscripción Abierta?',
        a: 'Por lo general, solo si tiene un acontecimiento que le dé derecho, como perder la cobertura del trabajo, mudarse o un cambio en el tamaño de su hogar. Podemos ayudarle a verificar si califica para un Período de Inscripción Especial.',
      },
      {
        q: '¿Calificaré para primas más bajas?',
        a: 'Depende de los ingresos y del tamaño de su hogar. Muchas personas califican para un crédito tributario para la prima. Le ayudaremos a calcular cuánto podría ahorrar.',
      },
      {
        q: 'Tengo menos de 65 años y tengo Medicare por una discapacidad. ¿Pueden ayudarme?',
        a: 'Sí. Usted también tiene opciones de Medicare, como planes Medicare Advantage y de la Parte D. Las opciones de Medicare Suplementario para menores de 65 pueden ser más limitadas, así que conversemos sobre su situación.',
      },
      {
        q: '¿Cobran por ayudar con el seguro de salud?',
        a: 'No. Nuestra ayuda no tiene ningún cargo; nos pagan las compañías de seguros.',
      },
    ],
  },
};

export default services;
