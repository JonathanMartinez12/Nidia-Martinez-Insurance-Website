import type { ProductKey } from '@/config/products';
import type { ServiceContent } from '../types';
import { carrierNames } from '../carrier-names';

const services: Record<ProductKey, ServiceContent> = {
  /* Fuentes: ver 'medicare-advantage' en src/content/en/services.ts (Medicare.gov, verificadas el 2026-10-25). */
  'medicare-advantage': {
    h1: 'Planes Medicare Advantage en Luisiana',
    lede: 'Medicare Advantage, también llamado Parte C, reúne su cobertura de hospital, médica y por lo general de medicamentos en un solo plan de una compañía privada aprobada por Medicare. Ayudamos a personas en toda Luisiana a comparar planes para {planYear} y a elegir uno que funcione con sus médicos, sus medicamentos y su presupuesto.',
    summary:
      'Ayuda personal y sin costo para comparar e inscribirse en planes Medicare Advantage (Parte C) en Luisiana, con agentes locales bilingües y con licencia.',
    whoFor: [
      'Personas con la Parte A y la Parte B de Medicare que prefieren un solo plan en lugar de varios',
      'Quienes desean un límite anual de gastos de su bolsillo por los servicios cubiertos',
      'Personas que valoran los beneficios adicionales que incluyen muchos planes, como dental, visión o audición',
      'Quienes se sienten cómodos usando la red de médicos y hospitales de un plan',
    ],
    covers: [
      'Todo lo que cubren la Parte A (hospital) y la Parte B (médica) de Medicare Original',
      'Cobertura de medicamentos recetados en la mayoría de los planes (llamados planes MAPD)',
      'Un límite anual de gastos de su bolsillo por los servicios cubiertos de la Parte A y la Parte B',
      'Beneficios adicionales que varían según el plan, como dental, visión, audición y programas de ejercicio',
    ],
    sections: [
      {
        id: 'what-is-medicare-advantage',
        heading: '¿Qué es un plan Medicare Advantage (Parte C)?',
        blocks: [
          {
            type: 'p',
            text: 'Un plan Medicare Advantage es otra forma de recibir su cobertura de la Parte A y la Parte B de Medicare, a través de una compañía de seguros privada aprobada por Medicare en lugar de Medicare Original. Usted sigue teniendo Medicare, pero su plan paga sus reclamos y usted usa la tarjeta del plan cuando recibe atención.',
          },
          {
            type: 'p',
            text: 'La mayoría de los planes Medicare Advantage incluyen cobertura de medicamentos de Medicare (Parte D). Todos los planes fijan un límite anual de lo que usted paga de su bolsillo por los servicios cubiertos de la Parte A y la Parte B. A cambio, puede que tenga que usar médicos de la red del plan, pedir un referido para ver a un especialista o conseguir una aprobación (autorización previa) antes de que el plan cubra ciertos servicios o medicamentos. Usted sigue pagando su prima de la Parte B y es posible que también pague una prima al plan.',
          },
        ],
      },
      {
        id: 'what-it-covers',
        heading: '¿Qué cubren los planes Medicare Advantage?',
        blocks: [
          {
            type: 'p',
            text: 'Casi todos los servicios y suministros médicamente necesarios que cubre Medicare Original. Si usted está en un plan Medicare Advantage, Medicare Original sigue pagando los cuidados paliativos (hospicio), los costos de un trasplante de riñón y algunos costos de estudios de investigación clínica.',
          },
          {
            type: 'p',
            text: 'Muchos planes también incluyen beneficios que Medicare Original no cubre, como atención de la vista, la audición y dental, membresías de gimnasio, transporte a citas médicas o ciertos productos de venta libre. Por lo general estos beneficios son limitados, así que revisamos exactamente qué cubre cada plan antes de que se afilie.',
          },
        ],
      },
      {
        id: 'costs',
        heading: '¿Cuánto cuesta un plan Medicare Advantage?',
        blocks: [
          {
            type: 'p',
            text: 'Depende del plan. Usted paga su prima de la Parte B, cualquier prima que cobre el plan, y copagos, coseguros o deducibles cuando recibe atención, hasta el límite anual de gastos de su bolsillo del plan. Cada plan fija sus propios costos y reglas, y pueden cambiar cada año.',
          },
          {
            type: 'p',
            text: 'Por eso comparamos el costo total del año: la prima más lo que esperaría pagar por sus consultas habituales, especialistas y medicamentos. Un plan con una prima baja puede costar más en el año que uno con una prima más alta, según la atención que usted use.',
          },
        ],
      },
      {
        id: 'part-c-plans-in-louisiana',
        heading: 'Planes de la Parte C de Medicare en Luisiana',
        blocks: [
          {
            type: 'p',
            text: 'Los planes de la Parte C de Medicare y los planes Medicare Advantage son lo mismo. En Luisiana, como en todo el país, hay varios tipos:',
          },
          {
            type: 'ul',
            items: [
              '**HMO (Organización para el Mantenimiento de la Salud):** por lo general usa médicos y hospitales de la red del plan, salvo en emergencias, y puede necesitar referidos.',
              '**PPO (Organización de Proveedores Preferidos):** puede ver a proveedores fuera de la red, normalmente a un costo mayor.',
              '**Planes de Necesidades Especiales (SNP):** limitados a personas con ciertas afecciones crónicas, personas con Medicare y Medicaid, o personas que necesitan el nivel de atención de un hogar de ancianos. Vea nuestra guía de [planes de Medicare para diabetes y enfermedades del corazón](page:guide-diabetes-heart-snp).',
              '**Otros tipos**, como los planes Privados de Pago por Servicio y los de Cuenta de Ahorros Médicos, existen pero puede que no se ofrezcan donde usted vive.',
            ],
          },
          { type: 'h3', text: 'Los planes varían según la parroquia' },
          {
            type: 'p',
            text: 'Las compañías de seguros deciden dónde ofrecen cada plan, y cada plan tiene un área de servicio. Los planes disponibles en las parroquias de Orleans o Jefferson pueden ser distintos de los de St. Tammany o East Baton Rouge, y pueden cambiar de un año a otro. Buscamos los planes que se ofrecen en su dirección para el año que está eligiendo.',
          },
          { type: 'h3', text: 'Hospitales y médicos de Luisiana' },
          {
            type: 'p',
            text: 'Mucha gente pregunta si un plan funciona con sistemas de salud como Ochsner Health, LCMC Health u Our Lady of the Lake. La participación en la red es distinta en cada plan y puede cambiar cada año, así que antes de que se inscriba revisamos a sus médicos, especialistas y hospitales específicos, no solo el nombre del sistema de salud.',
          },
          { type: 'h3', text: 'Compañías de Medicare Advantage que comparamos' },
          {
            type: 'p',
            text: `En Luisiana comparamos actualmente planes Medicare Advantage de ${carrierNames('medicare-advantage', 'es')}. No todas las compañías ofrecen planes en todas las parroquias, y solo le recomendamos un plan que se ajuste a su situación.`,
          },
        ],
      },
      {
        id: 'how-to-choose',
        heading: 'Cómo elegir el plan Medicare Advantage adecuado en Luisiana',
        blocks: [
          {
            type: 'p',
            text: 'El plan adecuado es el que cubre a sus médicos y sus medicamentos al menor costo total para la forma en que usted usa la atención médica. Revise esta lista, o déjenos hacerlo con usted:',
          },
          {
            type: 'ol',
            items: [
              '**Médicos y hospitales.** ¿Están en la red del plan su médico de cabecera, sus especialistas y su hospital preferido? ¿Necesita referidos?',
              '**Medicamentos.** ¿Está cada uno de sus medicamentos en la lista del plan, y en qué nivel? ¿Alguno requiere autorización previa? ¿Su farmacia es preferida?',
              '**Costo total del año.** Sume la prima, los deducibles, los copagos y el límite anual de gastos de su bolsillo, no solo el precio mensual.',
              '**Viajes.** ¿Pasa tiempo fuera del estado o lejos de casa? Revise qué cubre el plan fuera de su área de servicio.',
              '**Beneficios adicionales.** Muchos planes ofrecen beneficios que Medicare Original no cubre, como visión, audición y dental. Tome en cuenta solo los que de verdad usará.',
              '**Calificaciones por estrellas.** Medicare califica los planes de 1 a 5 estrellas según su calidad y desempeño. Las calificaciones son una señal útil junto con sus propias necesidades.',
              '**Referidos y aprobaciones.** Pregunte qué servicios requieren un referido o autorización previa, sobre todo para los especialistas y tratamientos que ya usa con regularidad.',
            ],
          },
          {
            type: 'p',
            text: 'Puede agregar a sus proveedores en el [buscador de planes de Medicare](https://www.medicare.gov/plan-compare) para ver qué planes los incluyen, o llamarnos para hacer la comparación lado a lado.',
          },
        ],
      },
      {
        id: 'plans-for-next-year',
        heading: 'Planes Medicare Advantage en Luisiana para {planYear}',
        blocks: [
          {
            type: 'p',
            text: 'Los planes pueden cambiar sus primas, copagos, redes y listas de medicamentos cada año, así que el plan que le funcionó este año puede no funcionarle el próximo. A partir del 1 de octubre puede comparar los planes del año siguiente, y su plan actual debe informarle de cualquier cambio antes de que empiece el nuevo año del plan, en un Aviso Anual de Cambios que explica qué será diferente.',
          },
          {
            type: 'p',
            text: 'Si después de leer su aviso está conforme, no tiene que hacer nada: su plan se renueva automáticamente. Si algo cambió y le preocupa, como un médico que sale de la red o un medicamento que pasa a un nivel más alto, llámenos para una revisión antes del 7 de diciembre.',
          },
        ],
      },
      {
        id: 'when-to-enroll',
        heading: '¿Cuándo puedo afiliarme o cambiar de plan Medicare Advantage?',
        blocks: [
          {
            type: 'ul',
            items: [
              '**Cuando recibe Medicare por primera vez:** durante su Período de Inscripción Inicial, alrededor de su cumpleaños 65.',
              '**Del 15 de octubre al 7 de diciembre:** el [Período de Inscripción Anual](page:aep). Afíliese, cambie o deje un plan, con cobertura a partir del 1 de enero.',
              '**Del 1 de enero al 31 de marzo:** si ya está en un plan Medicare Advantage, puede cambiarse a otro o regresar a Medicare Original, una sola vez.',
              '**Períodos de Inscripción Especial:** situaciones como una mudanza o la pérdida de otra cobertura pueden permitirle cambiar de plan en otros momentos. Si en su zona se ofrece un plan con calificación de 5 estrellas, puede cambiarse a él una vez durante el año, y las personas con una afección crónica que califica pueden afiliarse en cualquier momento a un C-SNP que la atienda.',
            ],
          },
        ],
      },
      {
        id: 'network-changes',
        heading: '¿Qué pasa si mi médico sale de la red del plan?',
        blocks: [
          {
            type: 'p',
            text: 'Los médicos pueden entrar o salir de la red de un plan en cualquier momento del año, y por lo general eso no le permite cambiar de plan a mitad de año. Aun así, el plan debe darle acceso a médicos y especialistas calificados, ayudarle a elegir un nuevo proveedor, ayudarle a continuar la atención que ya está recibiendo e informarle sobre las opciones de inscripción que tenga.',
          },
          {
            type: 'p',
            text: 'Recibirá un aviso si su médico de cabecera o su proveedor de salud mental va a salir de la red y usted lo ha visto en los últimos tres años. Si eso pasa, llámenos y le ayudamos a revisar sus opciones.',
          },
        ],
      },
      {
        id: 'advantage-vs-supplement',
        heading: '¿Medicare Advantage o Medicare Suplementario?',
        blocks: [
          {
            type: 'p',
            text: 'Depende de su salud, de sus médicos y de cómo prefiere manejar su presupuesto. Con Medicare Advantage paga copagos a medida que usa la atención y por lo general se mantiene dentro de una red, con un límite anual de costos. Un [plan Suplementario de Medicare (Medigap)](page:service-medicare-supplement) funciona junto con Medicare Original: paga su prima mensual más un plan de la Parte D aparte, y a cambio tiene menos facturas cuando recibe atención y puede ver a cualquier proveedor de EE. UU. que acepte Medicare.',
          },
        ],
      },
      {
        id: 'near-you',
        heading: 'Ayuda con Medicare Advantage cerca de usted',
        blocks: [
          {
            type: 'p',
            text: 'Atendemos a las personas en nuestra oficina de Veterans Boulevard, en Metairie, y por teléfono desde cualquier parte del estado, en español o en inglés. Lea más sobre los [planes Medicare Advantage en Nueva Orleans](page:city-new-orleans), los [planes Medicare Advantage en Metairie](page:city-metairie), la [ayuda con Medicare en Kenner](page:city-kenner) y los [planes Medicare Advantage en Baton Rouge](page:city-baton-rouge).',
          },
          {
            type: 'p',
            text: 'Somos agentes con licencia; nos pagan las compañías de seguros, nunca usted. La prima del plan es la misma si se inscribe con nosotros o por su cuenta. Lo que recibe con nosotros es una persona real que le explica sus opciones en español o en inglés, le ayuda a inscribirse y sigue disponible cuando tiene preguntas sobre una factura o necesita cambiar de plan.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Cuál es el mejor plan Medicare Advantage en Luisiana?',
        a: 'No hay un plan que sea el mejor para todos. El plan adecuado para usted cubre a sus médicos y sus medicamentos al menor costo total del año según la atención que usa. Use la lista de esta página, o permítanos comparar por usted los planes de su parroquia.',
      },
      {
        q: '¿Qué planes Medicare Advantage hay en Luisiana para {planYear}?',
        a: 'Depende de su parroquia. Cada compañía decide dónde ofrece sus planes, y los planes cambian cada año. A partir del 1 de octubre puede comparar los planes del año siguiente, y puede inscribirse del 15 de octubre al 7 de diciembre para tener cobertura desde el 1 de enero. Buscamos en su dirección cada plan que ofrecemos.',
      },
      {
        q: '¿Medicare Advantage es lo mismo que la Parte C?',
        a: 'Sí. Los planes Medicare Advantage también se llaman Parte C de Medicare. Son planes de compañías privadas aprobados por Medicare que reemplazan la forma en que recibe su cobertura de la Parte A y la Parte B.',
      },
      {
        q: '¿Sigo pagando la prima de la Parte B con un plan Medicare Advantage?',
        a: 'Sí. Sigue pagando su prima mensual de la Parte B, y es posible que también pague una prima al plan. Le ayudamos a calcular su costo total del año, no solo la prima.',
      },
      {
        q: '¿Puedo conservar a mi médico?',
        a: 'Depende del plan. Antes de que se inscriba, verificamos que sus médicos y sus hospitales preferidos estén en la red del plan para evitar sorpresas.',
      },
      {
        q: '¿Con qué compañías de Medicare Advantage trabajan?',
        a: `Para Medicare Advantage en Luisiana trabajamos con ${carrierNames('medicare-advantage', 'es')}. La disponibilidad de los planes varía según la parroquia, y solo le recomendamos un plan que se ajuste a su situación.`,
      },
      {
        q: '¿Qué pasa si viajo o paso temporadas fuera del estado?',
        a: 'Muchos planes cubren solo la atención de emergencia y urgencia fuera del área de servicio del plan. Si viaja con frecuencia, pregunte por un plan PPO o un plan Suplementario de Medicare. Conversemos sobre sus planes.',
      },
    ],
  },

  /* Fuentes: ver 'medicare-supplement' en src/content/en/services.ts (Medicare.gov, verificadas el 2026-10-25). */
  'medicare-supplement': {
    h1: 'Planes Suplementarios de Medicare (Medigap) en Luisiana',
    lede: 'Un plan Suplementario de Medicare, también llamado Medigap, ayuda a pagar los costos que Medicare Original no cubre, como los deducibles y el 20% de coseguro. Aquí le explicamos cómo se comparan los planes por letra, las reglas que importan en Luisiana y cómo le ayudamos a elegir sin costo.',
    summary:
      'Orientación sin costo para elegir y solicitar un seguro Suplementario de Medicare (Medigap) en Luisiana, con agentes locales bilingües y con licencia.',
    whoFor: [
      'Personas con Medicare Original (Partes A y B) que quieren menos sorpresas en sus gastos',
      'Quienes desean ver a cualquier médico u hospital del país que acepte Medicare',
      'Personas que viajan o pasan parte del año fuera de Luisiana',
      'Quienes prefieren una prima mensual estable en lugar de copagos en cada visita',
    ],
    covers: [
      'Parte o todos los deducibles, copagos y coseguros de Medicare, según la letra del plan',
      'El 20% de coseguro de la Parte B en la mayoría de los planes',
      'Días adicionales de hospital cuando se agota la cobertura de hospital de Medicare',
      'Atención de emergencia durante viajes al extranjero en muchos planes (hasta los límites del plan)',
    ],
    sections: [
      {
        id: 'how-medigap-works',
        heading: '¿Cómo funcionan los planes Suplementarios de Medicare?',
        blocks: [
          {
            type: 'p',
            text: 'Un plan Medigap paga parte o todo lo que Medicare Original no cubre, para que tenga menos facturas inesperadas. Medicare Original paga una buena parte de sus gastos de hospital y médicos, pero no todo, y no tiene un límite anual de lo que usted paga. Los planes Medigap los venden compañías de seguros privadas y funcionan junto con Medicare Original. No hay redes: si un médico u hospital acepta Medicare, su plan Medigap también paga su parte.',
          },
          {
            type: 'p',
            text: 'En Luisiana, los planes Medigap están estandarizados y se identifican con letras. Un Plan G de una compañía tiene los mismos beneficios que un Plan G de cualquier otra. **El precio es la única diferencia** entre pólizas con la misma letra, por eso conviene comparar compañías.',
          },
        ],
      },
      {
        id: 'plan-chart',
        heading: '¿Qué cubre cada plan Medigap?',
        blocks: [
          {
            type: 'p',
            text: 'Esta tabla muestra los planes que se venden a personas nuevas en Medicare. “Sí” significa que el plan paga el 100% de ese beneficio; “No” significa que usted lo paga; un porcentaje significa que el plan paga esa parte; N/A significa que no aplica.',
          },
          {
            type: 'table',
            caption: 'Beneficios de los planes Medigap (planes estandarizados que se venden en Luisiana)',
            head: ['Beneficio', 'A', 'B', 'D', 'G', 'K', 'L', 'M', 'N'],
            rows: [
              [
                'Coseguro de la Parte A y gastos de hospital, hasta 365 días adicionales',
                'Sí',
                'Sí',
                'Sí',
                'Sí',
                'Sí',
                'Sí',
                'Sí',
                'Sí',
              ],
              ['Coseguro o copago de la Parte B', 'Sí', 'Sí', 'Sí', 'Sí', '50%', '75%', 'Sí', 'Sí*'],
              ['Sangre (primeras 3 pintas)', 'Sí', 'Sí', 'Sí', 'Sí', '50%', '75%', 'Sí', 'Sí'],
              [
                'Coseguro o copago de cuidados paliativos (hospicio) de la Parte A',
                'Sí',
                'Sí',
                'Sí',
                'Sí',
                '50%',
                '75%',
                'Sí',
                'Sí',
              ],
              ['Coseguro de centro de enfermería especializada', 'No', 'No', 'Sí', 'Sí', '50%', '75%', 'Sí', 'Sí'],
              ['Deducible de la Parte A', 'No', 'Sí', 'Sí', 'Sí', '50%', '75%', '50%', 'Sí'],
              ['Deducible de la Parte B', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'],
              ['Cargos en exceso de la Parte B', 'No', 'No', 'No', 'Sí', 'No', 'No', 'No', 'No'],
              [
                'Emergencias en viajes al extranjero (hasta los límites del plan)',
                'No',
                'No',
                '80%',
                '80%',
                'No',
                'No',
                '80%',
                '80%',
              ],
              ['Límite anual de gastos de su bolsillo', 'N/A', 'N/A', 'N/A', 'N/A', 'Sí', 'Sí', 'N/A', 'N/A'],
            ],
          },
          {
            type: 'ul',
            items: [
              '*El Plan N paga el coseguro de la Parte B, salvo un copago de hasta $20 en algunas consultas y de hasta $50 en visitas a la sala de emergencias cuando no lo internan.',
              'Los Planes K y L tienen un límite anual de gastos de su bolsillo. Cuando lo alcanza y paga el deducible de la Parte B, el plan paga el 100% de los servicios cubiertos el resto del año.',
              'Algunas compañías también ofrecen una versión del Plan G con deducible alto. Usted paga una cantidad fija de los costos cubiertos por Medicare antes de que la póliza pague algo, a cambio de una prima más baja.',
            ],
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Planes C y F',
            text: 'Los Planes C y F también cubren el deducible de la Parte B, por eso ya no se venden a personas nuevas en Medicare a partir del 1 de enero de 2020. Si usted era elegible para Medicare antes de esa fecha, quizás todavía pueda comprarlos. Si ya tiene uno, puede conservarlo.',
          },
        ],
      },
      {
        id: 'plan-g-vs-plan-n',
        heading: 'Plan G o Plan N: ¿cuál le conviene?',
        blocks: [
          {
            type: 'p',
            text: 'El Plan G cubre más; el Plan N le deja algunos costos más, así que su prima debe ser lo bastante baja para compensarlos. Ambos cubren sus gastos de hospital y la atención de enfermería especializada, y ninguno cubre el deducible anual de la Parte B. Las diferencias están en el consultorio:',
          },
          {
            type: 'ul',
            items: [
              '**Copagos:** con el Plan G no paga nada después del deducible de la Parte B. Con el Plan N puede pagar hasta $20 en algunas consultas y hasta $50 en una visita a la sala de emergencias cuando no lo internan.',
              '**Cargos en exceso:** algunos médicos no aceptan la cantidad aprobada por Medicare como pago completo y pueden cobrar hasta un 15% más. El Plan G paga ese “cargo en exceso”. El Plan N no.',
            ],
          },
          {
            type: 'p',
            text: 'El Plan N puede convenirle si en general goza de buena salud y sus médicos aceptan la asignación de Medicare. El Plan G puede ser mejor si va al médico con frecuencia o quiere costos más previsibles. Cotizamos ambos con varias compañías para que vea si la diferencia de prima vale la pena en su caso.',
          },
        ],
      },
      {
        id: 'medigap-in-louisiana',
        heading: 'Medigap en Luisiana: las reglas que debe conocer',
        blocks: [
          { type: 'h3', text: '¿Cuándo es el mejor momento para comprar un plan Medigap?' },
          {
            type: 'p',
            text: 'Durante su **período de inscripción abierta de Medigap**: los 6 meses que comienzan el primer mes en que tiene la Parte B de Medicare y 65 años o más. Ocurre una sola vez y no se repite. Durante ese período, una compañía no puede negarse a venderle ninguna póliza que ofrezca, no puede usar evaluación médica y no puede cobrarle más por problemas de salud.',
          },
          { type: 'h3', text: '¿Qué pasa si espero?' },
          {
            type: 'p',
            text: 'Fuera de ese período, puede pagar más, tener menos opciones o ser rechazado después de preguntas de salud, a menos que tenga un **derecho de emisión garantizada**. Lo tiene en situaciones como estas:',
          },
          {
            type: 'ul',
            items: [
              'Su plan Medicare Advantage deja Medicare o deja de atender su zona, o usted se muda fuera de su área de servicio.',
              'Se afilió a un plan Medicare Advantage por primera vez cuando pasó a ser elegible para Medicare y quiere volver a Medicare Original dentro del primer año.',
              'Su cobertura del empleador o del sindicato, que paga después de Medicare, va a terminar.',
              'Su compañía Medigap quiebra, no cumple las reglas o le engañó.',
            ],
          },
          {
            type: 'p',
            text: 'En la mayoría de estos casos, presenta la solicitud entre 60 días antes y 63 días después de que termine su cobertura anterior. Guarde las cartas o avisos que muestren cuándo terminó.',
          },
          { type: 'h3', text: '¿Puedo cambiar de plan Medigap más adelante?' },
          {
            type: 'p',
            text: 'A veces. Fuera de su período de inscripción abierta y sin un derecho de emisión garantizada, solo puede cambiarse si una compañía acepta venderle una póliza nueva, por lo general después de preguntas de salud. Tiene 30 días para decidir si se queda con la póliza nueva (período de “revisión gratuita”), y una póliza nueva puede hacerle esperar hasta 6 meses antes de cubrir una afección preexistente. Estos son derechos federales; la ley de Luisiana podría darle más, así que lo verificamos antes de que cancele algo.',
          },
          { type: 'h3', text: '¿Puedo obtener Medigap en Luisiana si tengo menos de 65 años?' },
          {
            type: 'p',
            text: 'Posiblemente. La ley federal no obliga a las compañías a vender Medigap a menores de 65 años, pero Luisiana es uno de los estados que exigen a las aseguradoras ofrecer al menos un tipo de póliza Medigap a las personas con Medicare menores de 65. Las opciones y los precios pueden ser distintos que para personas de 65 años o más, así que llámenos o consulte el [programa SHIIP del Departamento de Seguros de Luisiana](https://www.ldi.la.gov/consumers/senior-health-shiip) para conocer las reglas actuales.',
          },
        ],
      },
      {
        id: 'how-prices-are-set',
        heading: '¿Cómo se fijan los precios de Medigap?',
        blocks: [
          {
            type: 'p',
            text: 'Cada compañía elige una de tres formas de fijar el precio de sus pólizas, y esa decisión afecta lo que usted paga ahora y en el futuro:',
          },
          {
            type: 'ul',
            items: [
              '**Tarifa comunitaria:** por lo general todos pagan la misma prima, sin importar la edad.',
              '**Según la edad de emisión:** la prima se basa en su edad al comprar la póliza; comprar más joven cuesta menos, y no sube porque usted envejezca.',
              '**Según la edad alcanzada:** la prima se basa en su edad actual, así que sube a medida que envejece. Puede empezar siendo la más barata y terminar siendo la más cara.',
            ],
          },
          {
            type: 'p',
            text: 'Con cualquier método, las primas pueden subir por la inflación y otros factores, y normalmente aumentan cada año. Algunas compañías ofrecen descuentos, por ejemplo a quienes no fuman o pagan el año completo, y otras venden pólizas Medicare SELECT que pueden costar menos pero pueden exigir que use ciertos proveedores. Le mostramos cómo fija sus precios cada compañía, no solo la prima de este año.',
          },
        ],
      },
      {
        id: 'medigap-vs-medicare-advantage',
        heading: 'Medigap o Medicare Advantage: ¿cuál es la diferencia?',
        blocks: [
          {
            type: 'p',
            text: 'Medigap funciona junto con Medicare Original; Medicare Advantage reemplaza la forma en que recibe Medicare. Con Medigap conserva Medicare Original, puede ver a cualquier proveedor que acepte Medicare y agrega un plan de medicamentos de la Parte D aparte. Un [plan Medicare Advantage](page:service-medicare-advantage) es un plan privado todo en uno, por lo general con red, cobertura de medicamentos y un límite anual de gastos de su bolsillo.',
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'No puede tener ambos',
            text: 'Es ilegal que alguien le venda una póliza Suplementaria de Medicare mientras usted está en un plan Medicare Advantage, a menos que vaya a regresar a Medicare Original. Si alguien lo intenta, llámenos antes de firmar algo.',
          },
        ],
      },
      {
        id: 'drug-coverage',
        heading: '¿Medigap cubre medicamentos recetados?',
        blocks: [
          {
            type: 'p',
            text: 'No. Los planes Medigap que se venden hoy no incluyen cobertura de medicamentos. La mayoría de las personas combina su plan Suplementario con un [plan de medicamentos de la Parte D](page:service-part-d-prescription-drug-plans) independiente. Si se queda sin cobertura de medicamentos acreditable cuando es elegible por primera vez, podría tener que pagar una multa por inscripción tardía, así que le ayudamos a contratar ambos a la vez.',
          },
        ],
      },
      {
        id: 'companies-we-compare',
        heading: 'Compañías de seguro Suplementario de Medicare que comparamos en Luisiana',
        blocks: [
          {
            type: 'p',
            text: `Para planes Medigap comparamos actualmente ${carrierNames('medicare-supplement', 'es')}. Las primas pueden variar mucho entre compañías por la misma letra de plan, así que las ponemos lado a lado, le explicamos cómo fija sus tarifas cada una y le acompañamos en la solicitud. Nuestra ayuda no tiene costo.`,
          },
          {
            type: 'p',
            text: 'Ayudamos con planes Suplementarios de Medicare en todo el estado, por ejemplo con [ayuda con Medicare en Nueva Orleans](page:city-new-orleans), [agentes de Medicare en Metairie](page:city-metairie), [ayuda con Medicare en Covington, en el Northshore](page:city-covington) y [planes de Medicare en Baton Rouge](page:city-baton-rouge). [Contáctenos](page:contact) para comparar cotizaciones gratis.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué planes Medigap hay en Luisiana?',
        a: 'Luisiana usa los planes estándar por letra. Las personas nuevas en Medicare pueden elegir entre los Planes A, B, D, G, K, L, M y N; quienes eran elegibles antes del 1 de enero de 2020 también pueden comprar los Planes C y F. Cada compañía decide qué letras vende, así que comparamos lo que se le ofrece a usted.',
      },
      {
        q: '¿Cómo comparo los planes Suplementarios de Medicare en Luisiana?',
        a: 'Elija la letra de plan que le conviene y luego compare esa misma letra entre compañías. Los beneficios son idénticos, así que fíjese en la prima, en cómo la compañía ajusta sus tarifas con la edad y en su servicio. Hacemos esta comparación con usted gratis.',
      },
      {
        q: '¿Qué plan Suplementario de Medicare me conviene?',
        a: 'Depende de cuántas veces va al médico, de su presupuesto y de qué tan previsibles quiere que sean sus costos. Muchas personas eligen entre el Plan G (más cobertura) y el Plan N (algunos copagos y cargos en exceso). Revisamos su situación y le mostramos los números.',
      },
      {
        q: '¿Puedo cambiar de plan Medigap en Luisiana?',
        a: 'Puede solicitarlo en cualquier momento, pero fuera de su período de inscripción abierta de Medigap o de un derecho de emisión garantizada, la compañía puede hacerle preguntas de salud y rechazarle. Nunca cancele su póliza actual hasta que aprueben la nueva.',
      },
      {
        q: '¿El Plan G es igual en todas las compañías?',
        a: 'Sí. Los beneficios de cada letra están estandarizados. Lo que cambia es la prima, cómo suben las tarifas con el tiempo y el servicio de la compañía.',
      },
      {
        q: '¿Un plan Suplementario de Medicare incluye dental y visión?',
        a: 'No. Los planes Medigap siguen las reglas de Medicare Original y no cubren la atención dental, de la vista ni de la audición de rutina. Puede agregar un [plan dental y de visión](page:service-dental-vision-insurance) aparte.',
      },
      {
        q: '¿Puedo usar mi plan Medigap fuera de Luisiana?',
        a: 'Sí. Puede ver a cualquier proveedor de EE. UU. que acepte Medicare, lo que hace que Medigap sea una buena opción para quienes viajan.',
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
    h1: 'Planes de Necesidades Especiales (SNP) de Medicare en Luisiana',
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
        id: 'diabetes-heart-guide',
        heading: '¿Tiene diabetes o una enfermedad del corazón?',
        blocks: [
          {
            type: 'p',
            text: 'Si tiene diabetes, insuficiencia cardíaca crónica o un trastorno cardiovascular, un C-SNP puede ser una opción, y puede afiliarse en cualquier época del año mientras tenga una afección que califica. Nuestra guía de [planes de Medicare para diabetes y enfermedades del corazón](page:guide-diabetes-heart-snp) explica quién califica, cómo confirman los planes su afección y qué preguntar antes de inscribirse.',
          },
        ],
      },
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
