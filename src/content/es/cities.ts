import type { CitySlug } from '@/config/cities';
import type { CityContent } from '../types';

const cities: Record<CitySlug, CityContent> = {
  'new-orleans': {
    h1: 'Su agente de Medicare en Nueva Orleans',
    lede: 'Desde Gentilly hasta el Garden District, y desde New Orleans East hasta Algiers, ayudamos a los residentes de Nueva Orleans a entender Medicare y a elegir planes que funcionen con los médicos y las farmacias que ya usan.',
    sections: [
      {
        id: 'nola-neighborhoods',
        heading: 'Ayuda para cada vecindario de la ciudad',
        blocks: [
          {
            type: 'p',
            text: 'Nueva Orleans es una ciudad de vecindarios, y las preguntas sobre Medicare cambian un poco en cada uno. Una persona jubilada en Lakeview quizá quiera un plan que le permita seguir con el especialista de toda la vida, mientras que una familia del Seventh Ward tal vez esté ayudando a un padre que acaba de cumplir 65 años a ordenar un buzón lleno de ofertas de planes. Antes de comparar un solo plan, nos tomamos el tiempo de entender su situación.',
          },
          {
            type: 'p',
            text: 'Quienes viven en la parroquia de Orleans normalmente pueden elegir entre muchos planes Medicare Advantage, y tantas opciones pueden abrumar. Las reducimos a las pocas que se ajustan a sus médicos, sus recetas y su presupuesto, y le explicamos las diferencias en español o en inglés.',
          },
        ],
      },
      {
        id: 'nola-health-systems',
        heading: 'Revisamos sus médicos y hospitales',
        blocks: [
          {
            type: 'p',
            text: 'Muchos residentes de Nueva Orleans se atienden en grandes sistemas de salud locales como Ochsner Health y LCMC Health, además de médicos independientes por toda la ciudad. Las redes de los planes no siempre incluyen todos los hospitales o clínicas, así que antes de que se inscriba confirmamos que su médico de cabecera, sus especialistas y su hospital de preferencia estén en la red.',
          },
        ],
      },
      {
        id: 'nola-meeting',
        heading: 'Nos sentamos a conversar en la ciudad',
        blocks: [
          {
            type: 'p',
            text: 'La atención cara a cara es la esencia de nuestro trabajo. Llámenos y programaremos una cita en persona en el día y el lugar que le convengan. Si le cuesta moverse por la ciudad o prefiere quedarse en casa, también podemos revisar todo por teléfono.',
          },
        ],
      },
      {
        id: 'nola-hurricanes',
        heading: 'La temporada de huracanes y su cobertura',
        blocks: [
          {
            type: 'p',
            text: 'En Nueva Orleans todos saben que hay que tener lista una mochila de emergencia de junio a noviembre. Incluya su tarjeta de Medicare, las tarjetas de su plan y una lista actualizada de sus medicamentos. Cuando se declara un desastre o una emergencia de salud pública, los planes de Medicare pueden flexibilizar algunas reglas; por ejemplo, facilitar la atención con proveedores fuera de la red o permitir surtir recetas antes de tiempo. Si tiene que evacuar, llame a su plan o llámenos para ayudarle.',
          },
        ],
      },
    ],
    nearby: ['Metairie', 'Gretna', 'Chalmette', 'Harahan', 'Kenner'],
    featured: ['medicare-advantage', 'medicare-supplement', 'part-d-prescription-drug-plans'],
  },

  metairie: {
    h1: 'Agente de Medicare para Metairie, Luisiana',
    lede: 'Metairie es una de las comunidades más grandes de la parroquia Jefferson, y muchos de sus residentes disfrutan su jubilación cerca de sus hijos y nietos. Ayudamos a los adultos mayores de Metairie a comparar planes de Medicare con cuidado y paciencia, sin costo por nuestra ayuda.',
    sections: [
      {
        id: 'metairie-east-bank',
        heading: 'Ayuda local en el East Bank',
        blocks: [
          {
            type: 'p',
            text: 'Metairie se extiende junto al lago desde el canal de la calle 17 hacia Kenner. Es una comunidad no incorporada, así que la parroquia Jefferson presta muchos de sus servicios locales. Cuando se trata de Medicare, lo más importante es tener a alguien cerca a quien llamar cuando surge una duda, y no un centro de llamadas nacional que nunca ha oído hablar de Veterans Boulevard.',
          },
        ],
      },
      {
        id: 'metairie-networks',
        heading: 'Planes que funcionan con sus médicos de la parroquia Jefferson',
        blocks: [
          {
            type: 'p',
            text: 'Los residentes de Metairie suelen atenderse con médicos afiliados a hospitales cercanos como East Jefferson General Hospital y Ochsner. Las redes cambian de un plan a otro, y también de un año al siguiente, por eso verificamos sus médicos, especialistas y farmacia antes de recomendarle algo.',
          },
        ],
      },
      {
        id: 'metairie-choices',
        heading: '¿Medicare Advantage o Medigap?',
        blocks: [
          {
            type: 'p',
            text: 'Una pregunta frecuente entre las personas jubiladas de Metairie es si conviene un [plan Medicare Advantage](page:service-medicare-advantage) con prima baja o un plan [Medicare Suplementario](page:service-medicare-supplement) que permite ver a cualquier proveedor del país. Si usted reparte su tiempo entre Luisiana y la familia en otro estado, esa diferencia pesa mucho. Le presentamos ambos caminos lado a lado, incluido el costo total del año.',
          },
        ],
      },
      {
        id: 'metairie-spanish',
        heading: 'Hablamos español',
        blocks: [
          {
            type: 'p',
            text: 'La parroquia Jefferson es hogar de una gran comunidad hispanohablante, y muchas familias prefieren hablar de seguros de salud en español. Nuestros dos agentes hablan español con fluidez, así que usted y sus familiares pueden hacer todas sus preguntas en el idioma en que se sientan más a gusto.',
          },
        ],
      },
      {
        id: 'metairie-appointment',
        heading: 'Cómo programar su cita',
        blocks: [
          {
            type: 'p',
            text: 'Llámenos o envíenos un mensaje y fijaremos un momento para reunirnos. Traiga su tarjeta de Medicare, las tarjetas de su plan actual y una lista de sus medicamentos y médicos: con eso basta para empezar.',
          },
        ],
      },
    ],
    nearby: ['Harahan', 'River Ridge', 'Kenner', 'Jefferson', 'Nueva Orleans'],
    featured: ['medicare-advantage', 'medicare-supplement', 'special-needs-plans'],
  },

  kenner: {
    h1: 'Ayuda con Medicare en español en Kenner, Luisiana',
    lede: 'Kenner es hogar de muchas familias con raíces en toda América Latina, y nos enorgullece atenderlas en español y en inglés. Ya sea que Medicare sea algo nuevo para usted o que quiera revisar su plan, le explicaremos sus opciones con claridad y sin costo.',
    sections: [
      {
        id: 'kenner-community',
        heading: 'Una ciudad de muchas culturas',
        blocks: [
          {
            type: 'p',
            text: 'Kenner, la ciudad más grande de la parroquia Jefferson, es conocida por albergar el Aeropuerto Internacional Louis Armstrong de Nueva Orleans. También tiene una de las comunidades hispanas más grandes de Luisiana, con muchas familias hondureñas. Muchos adultos mayores de Kenner enfrentan Medicare por primera vez mientras ayudan a sus hijos y nietos, y merecen orientación en el idioma que mejor conocen.',
          },
        ],
      },
      {
        id: 'kenner-first-time',
        heading: '¿Medicare es nuevo para usted?',
        blocks: [
          {
            type: 'p',
            text: 'Su Período de Inscripción Inicial comienza tres meses antes del mes en que cumple 65 años y termina tres meses después. Le ayudaremos a decidir si le conviene inscribirse ahora en la Parte B, si la cobertura de su trabajo cuenta como acreditable y qué camino —Medicare Advantage o Medicare Original con un plan suplementario— se ajusta mejor a su vida. Si usted o su cónyuge siguen trabajando, las reglas de tiempo son diferentes, y se las explicaremos paso a paso.',
          },
        ],
      },
      {
        id: 'kenner-costs',
        heading: 'Ayuda con los costos',
        blocks: [
          {
            type: 'p',
            text: 'Si el dinero no alcanza, podría calificar para programas que reducen sus costos, como la Ayuda Adicional para medicamentos recetados o los Programas de Ahorros de Medicare que se ofrecen a través de Medicaid de Luisiana. Le ayudamos a entender cuáles podrían aplicarse a su caso y dónde solicitarlos. Las personas que tienen Medicare y Medicaid a la vez también podrían calificar para [planes para necesidades especiales](page:service-special-needs-plans) con beneficios adicionales.',
          },
        ],
      },
      {
        id: 'kenner-meet',
        heading: 'Nos reunimos con usted y su familia',
        blocks: [
          {
            type: 'p',
            text: 'Estamos cerca, en el área de Nueva Orleans. Llámenos para acordar una cita en persona, o hablemos por teléfono si le resulta más fácil. Sus familiares siempre son bienvenidos en la conversación, en español, en inglés o en ambos idiomas.',
          },
        ],
      },
    ],
    nearby: ['Metairie', 'River Ridge', 'Harahan', 'LaPlace'],
    featured: ['medicare-advantage', 'part-d-prescription-drug-plans', 'final-expense-insurance'],
  },

  gretna: {
    h1: 'Agente de Medicare para Gretna y el West Bank',
    lede: 'En el West Bank ayudamos a los residentes de Gretna, Marrero, Harvey, Terrytown y Westwego a entender Medicare, con atención personal cerca de su casa.',
    sections: [
      {
        id: 'gretna-west-bank',
        heading: 'Al servicio del West Bank',
        blocks: [
          {
            type: 'p',
            text: 'Gretna es la sede del gobierno de la parroquia Jefferson y está justo al otro lado del río Misisipi, frente al centro de Nueva Orleans. Junto con Marrero, Harvey, Terrytown y Westwego, forma parte de una comunidad muy unida donde la gente suele preferir tomar las decisiones importantes cara a cara. Así es precisamente como nos gusta trabajar.',
          },
        ],
      },
      {
        id: 'gretna-hospitals',
        heading: 'Conozca su red en el West Bank',
        blocks: [
          {
            type: 'p',
            text: 'Los residentes del West Bank suelen usar hospitales como Ochsner Medical Center – West Bank Campus, en Gretna, y West Jefferson Medical Center, en Marrero, además de médicos en toda la zona. No todos los planes incluyen a todos los proveedores del West Bank, así que revisamos la red de cada plan que comparamos.',
          },
        ],
      },
      {
        id: 'gretna-review',
        heading: 'El chequeo anual de su plan',
        blocks: [
          {
            type: 'p',
            text: 'Los planes cambian cada año sus costos, sus listas de medicamentos y sus redes. Cada otoño, lea su Aviso Anual de Cambios cuando llegue. Si su plan le sigue conviniendo, se renueva automáticamente. Si algo cambió —un copago más alto, un medicamento que ya no cubren o un médico que salió de la red—, llámenos y revisaremos sus opciones antes de que termine el [Período de Inscripción Anual](page:aep), el 7 de diciembre.',
          },
        ],
      },
      {
        id: 'gretna-scams',
        heading: 'Protéjase de las llamadas fraudulentas',
        blocks: [
          {
            type: 'p',
            text: 'Los estafadores suelen llamar a los adultos mayores con cuentos de “tarjetas nuevas de Medicare” o equipos médicos “gratis”. Nunca le dé su número de Medicare a alguien que le llame de la nada. Si tiene dudas sobre una llamada, cuelgue y llámenos. Encontrará más información en nuestra [página de protección contra fraudes de Medicare](page:scam).',
          },
        ],
      },
    ],
    nearby: ['Marrero', 'Harvey', 'Terrytown', 'Westwego', 'Algiers'],
    featured: ['medicare-advantage', 'hospital-indemnity-insurance', 'dental-vision-insurance'],
  },

  chalmette: {
    h1: 'Agente de Medicare en Chalmette y la parroquia St. Bernard',
    lede: 'La parroquia St. Bernard es una comunidad unida y resistente, y las familias de Chalmette merecen orientación sobre Medicare de personas que conocen la zona. Ofrecemos ayuda paciente y sin costo para comparar planes y revisar su cobertura.',
    sections: [
      {
        id: 'chalmette-community',
        heading: 'Una comunidad que se cuida entre sí',
        blocks: [
          {
            type: 'p',
            text: 'Chalmette es la sede de la parroquia St. Bernard, río abajo del Lower Ninth Ward de Nueva Orleans. Las familias de aquí reconstruyeron sus hogares después del huracán Katrina, y muchos residentes mayores han vivido en la parroquia por generaciones. St. Bernard también es conocida por su herencia isleña, con raíces en las Islas Canarias, así que la ayuda en español también forma parte de su historia.',
          },
        ],
      },
      {
        id: 'chalmette-care',
        heading: 'Atención cerca de casa',
        blocks: [
          {
            type: 'p',
            text: 'Tener médicos y un hospital cerca es importante, sobre todo en una emergencia. Muchos residentes confían en St. Bernard Parish Hospital, en Chalmette, además de proveedores en Nueva Orleans. Cuando comparamos planes, confirmamos que los médicos y centros que usted usa, a ambos lados del límite de la parroquia, estén cubiertos.',
          },
        ],
      },
      {
        id: 'chalmette-supplement',
        heading: '¿Está pensando en un plan Medicare Suplementario?',
        blocks: [
          {
            type: 'p',
            text: 'Si le atrae la idea de ver a cualquier médico que acepte Medicare, vale la pena considerar un plan [Medicare Suplementario](page:service-medicare-supplement). El mejor momento para comprarlo es durante su Período de Inscripción Abierta de Medigap, de seis meses, que comienza cuando usted tiene 65 años o más y ya cuenta con la Parte B. Le explicaremos qué significa ese período en su caso.',
          },
        ],
      },
      {
        id: 'chalmette-family',
        heading: 'Planificar con tiempo por su familia',
        blocks: [
          {
            type: 'p',
            text: 'Las conversaciones sobre Medicare a menudo terminan hablando de la familia: quién se encargará de todo y cómo se pagarán los gastos finales. Una pequeña [póliza de gastos finales](page:service-final-expense-insurance) puede ayudar a sus seres queridos a cubrir un funeral sin tocar sus ahorros. John puede explicarle las opciones sin ninguna presión.',
          },
        ],
      },
      {
        id: 'chalmette-meet',
        heading: 'Conversemos',
        blocks: [
          {
            type: 'p',
            text: 'Llámenos para programar una visita o una revisión por teléfono. Nosotros llevamos las comparaciones de planes; usted trae sus preguntas, su lista de medicamentos y su tarjeta de Medicare.',
          },
        ],
      },
    ],
    nearby: ['Arabi', 'Meraux', 'Violet', 'Nueva Orleans'],
    featured: ['medicare-supplement', 'final-expense-insurance', 'part-d-prescription-drug-plans'],
  },

  slidell: {
    h1: 'Agente de Medicare en Slidell, Luisiana',
    lede: 'Slidell está en el extremo este de la parroquia St. Tammany, cerca de la frontera con Misisipi. Ayudamos a los residentes de Slidell a elegir una cobertura de Medicare que se adapte a la vida en la orilla norte del lago.',
    sections: [
      {
        id: 'slidell-northshore',
        heading: 'Medicare en la orilla norte (Northshore)',
        blocks: [
          {
            type: 'p',
            text: 'Al otro lado del lago Pontchartrain, Slidell se conecta con la orilla sur por el puente doble de la I-10 (Twin Span) y con Misisipi por la I-10 y la I-59. Muchos residentes se atienden con médicos locales, mientras que otros todavía viajan a Nueva Orleans o cruzan la frontera estatal para ver a sus especialistas. Por eso, las reglas de la red son una parte importante al elegir un plan.',
          },
        ],
      },
      {
        id: 'slidell-providers',
        heading: 'Sus proveedores locales',
        blocks: [
          {
            type: 'p',
            text: 'Los residentes de Slidell suelen usar Slidell Memorial Hospital y Ochsner Medical Center – Northshore, además de consultorios en todo el este de St. Tammany. Si ve a un especialista en Nueva Orleans o en Misisipi, díganoslo: algunos planes manejan mejor que otros a los proveedores del otro lado del lago y de otros estados.',
          },
        ],
      },
      {
        id: 'slidell-plan-types',
        heading: '¿HMO, PPO o Suplementario?',
        blocks: [
          {
            type: 'p',
            text: 'Si quiere la libertad de ver proveedores en otros estados, un [plan Medicare Advantage](page:service-medicare-advantage) tipo PPO o un plan [Medicare Suplementario](page:service-medicare-supplement) podría convenirle más que un HMO. Le explicamos cómo maneja cada opción la atención fuera de la red y cuánto podría costarle en un año normal.',
          },
        ],
      },
      {
        id: 'slidell-storms',
        heading: 'Cobertura lista para las tormentas',
        blocks: [
          {
            type: 'p',
            text: 'En Slidell se conocen bien las marejadas ciclónicas y las evacuaciones. Guarde copias de sus tarjetas de seguro y su lista de medicamentos en una bolsa impermeable, y pregunte en su farmacia por los resurtidos antes de que llegue una tormenta. Si se declara un desastre y tiene que trasladarse, ciertas reglas especiales pueden facilitarle recibir atención o cambiar de plan. Estamos a una llamada de distancia si necesita ayuda. También puede considerar una [cobertura de indemnización hospitalaria](page:service-hospital-indemnity-insurance) para contar con dinero extra durante una hospitalización.',
          },
        ],
      },
    ],
    nearby: ['Pearl River', 'Lacombe', 'Mandeville', 'Covington'],
    featured: ['medicare-advantage', 'medicare-supplement', 'hospital-indemnity-insurance'],
  },

  covington: {
    h1: 'Agente de Medicare para Covington y Mandeville',
    lede: 'Covington y Mandeville son hogar de muchas personas jubiladas y activas que buscan un plan a la altura de su estilo de vida. Ofrecemos orientación sobre Medicare cuidadosa y sin costo en todo el oeste de la parroquia St. Tammany.',
    sections: [
      {
        id: 'covington-area',
        heading: 'Al servicio del oeste de St. Tammany',
        blocks: [
          {
            type: 'p',
            text: 'Covington es la sede de la parroquia St. Tammany, y la vecina Mandeville está en la orilla norte del lago Pontchartrain, al final del Causeway. Muchos residentes se mudaron aquí desde la orilla sur y conservan a sus médicos en Nueva Orleans o Metairie, mientras que otros ya se cambiaron a proveedores del Northshore.',
          },
        ],
      },
      {
        id: 'covington-networks',
        heading: 'Médicos a ambos lados del lago',
        blocks: [
          {
            type: 'p',
            text: 'El Northshore tiene sus propios hospitales, como St. Tammany Health System en Covington y Lakeview Regional Medical Center, además de clínicas de sistemas de salud más grandes. Si usted ve médicos a ambos lados del lago, la red del plan —y si exige referidos— puede marcar una gran diferencia. Revisamos cada uno de los proveedores que usted usa.',
          },
        ],
      },
      {
        id: 'covington-travel',
        heading: '¿Viaja o visita a su familia fuera del estado?',
        blocks: [
          {
            type: 'p',
            text: 'Si pasa parte del año de viaje o visitando a familiares en otro estado, pregunte cómo maneja cada plan la atención lejos de casa. Los planes [Medicare Suplementario](page:service-medicare-supplement) funcionan con cualquier proveedor del país que acepte Medicare, mientras que muchos planes Medicare Advantage solo cubren la atención de emergencia y de urgencia fuera de su área de servicio. Le ayudamos a sopesar las ventajas y desventajas.',
          },
        ],
      },
      {
        id: 'covington-dental',
        heading: 'No descuide la salud dental y de la vista',
        blocks: [
          {
            type: 'p',
            text: 'Ni Medicare Original ni los planes Suplementarios cubren la atención dental o de la vista de rutina. Si tiene un plan Suplementario, agregar un [plan dental y de visión](page:service-dental-vision-insurance) puede ayudarle con limpiezas, dentaduras, exámenes de la vista y anteojos.',
          },
        ],
      },
      {
        id: 'covington-schedule',
        heading: 'Programe una revisión',
        blocks: [
          {
            type: 'p',
            text: 'Comuníquese por teléfono o a través de nuestro formulario de contacto. Buscaremos un momento conveniente para reunirnos en persona o hablar por teléfono, en español o en inglés.',
          },
        ],
      },
    ],
    nearby: ['Mandeville', 'Madisonville', 'Abita Springs', 'Slidell'],
    featured: ['medicare-supplement', 'medicare-advantage', 'dental-vision-insurance'],
  },

  'baton-rouge': {
    h1: 'Agente de Medicare para Baton Rouge',
    lede: 'La capital de Luisiana es una parte importante del área que atendemos. Ayudamos a los residentes de Baton Rouge a comparar planes de Medicare, revisar su cobertura cada año y resolver sus dudas en español o en inglés.',
    sections: [
      {
        id: 'br-capital',
        heading: 'Ayuda con Medicare en la región de la capital',
        blocks: [
          {
            type: 'p',
            text: 'Baton Rouge, en la parroquia East Baton Rouge, está a unas 80 millas de Nueva Orleans por la I-10. La ciudad tiene su propia combinación de planes de Medicare y redes de proveedores, así que el plan que funciona bien en Nueva Orleans quizá no sea la mejor opción aquí. Comparamos los planes que realmente están disponibles donde usted vive.',
          },
        ],
      },
      {
        id: 'br-hospitals',
        heading: 'Revisamos las redes de Baton Rouge',
        blocks: [
          {
            type: 'p',
            text: 'Entre los principales hospitales de la zona están Our Lady of the Lake Regional Medical Center, Baton Rouge General y Ochsner Medical Center – Baton Rouge. Algunos planes incluyen un sistema de salud y no otro, así que buscamos a sus médicos, especialistas y hospital antes de recomendarle un plan.',
          },
        ],
      },
      {
        id: 'br-retirees',
        heading: '¿Se jubila de un empleo estatal o de una empresa?',
        blocks: [
          {
            type: 'p',
            text: 'Muchas personas en Baton Rouge trabajan para el gobierno estatal, universidades, hospitales o grandes empresas. Si se va a jubilar, averigüe cómo funciona su cobertura de empleador o de jubilado junto con Medicare antes de hacer cambios: renunciar a la cobertura de jubilado puede ser difícil de revertir. Traiga los documentos de sus beneficios y le ayudaremos a ver cómo encajan todas las piezas.',
          },
        ],
      },
      {
        id: 'br-how-we-work',
        heading: 'Cómo trabajamos con clientes de Baton Rouge',
        blocks: [
          {
            type: 'p',
            text: 'Tenemos nuestra base en el área de Nueva Orleans y atendemos clientes en toda Luisiana. En Baton Rouge podemos revisar sus opciones por teléfono y con gusto conversamos sobre la posibilidad de una reunión en persona. De cualquier forma, trabajará con los mismos agentes con licencia de principio a fin, también cuando necesite un [seguro de vida](page:service-life-insurance) o un nuevo [plan de la Parte D](page:service-part-d-prescription-drug-plans).',
          },
        ],
      },
    ],
    nearby: ['Denham Springs', 'Prairieville', 'Gonzales', 'Zachary'],
    featured: ['medicare-advantage', 'part-d-prescription-drug-plans', 'life-insurance'],
  },
};

export default cities;
