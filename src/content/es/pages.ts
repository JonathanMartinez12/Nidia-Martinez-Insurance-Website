import type {
  AboutContent,
  AgentContent,
  AreaHubContent,
  ContactPageContent,
  FaqPageContent,
  GuideContent,
  HomeContent,
} from '../types';

export const aep: GuideContent = {
  h1: 'Período de Inscripción Anual de Medicare: del 15 de octubre al 7 de diciembre',
  lede: 'Cada otoño, las personas con Medicare pueden revisar su cobertura y hacer cambios para el año siguiente. Aquí le explicamos qué es el Período de Inscripción Anual, qué significa su Aviso Anual de Cambios y cuándo conviene —o no— hacer algo.',
  sections: [
    {
      id: 'what-is-aep',
      heading: '¿Qué es el Período de Inscripción Anual?',
      blocks: [
        {
          type: 'p',
          text: 'El Período de Inscripción Anual (AEP, por sus siglas en inglés), que a veces se llama Inscripción Abierta de Medicare, va del **15 de octubre al 7 de diciembre** de cada año. Durante esas semanas usted puede:',
        },
        {
          type: 'ul',
          items: [
            'Pasar de Medicare Original a un plan Medicare Advantage, o de Medicare Advantage de vuelta a Medicare Original',
            'Cambiar de un plan Medicare Advantage a otro',
            'Inscribirse en un plan de medicamentos de la Parte D, cambiarlo o cancelarlo',
          ],
        },
        {
          type: 'p',
          text: 'Los cambios entran en vigor el **1 de enero**. Si hace más de un cambio durante este período, cuenta el último que haga antes del 7 de diciembre.',
        },
      ],
    },
    {
      id: 'anoc',
      heading: 'Su Aviso Anual de Cambios (ANOC)',
      blocks: [
        {
          type: 'p',
          text: 'Si tiene un plan Medicare Advantage o de la Parte D, su plan debe enviarle un Aviso Anual de Cambios antes de que termine septiembre. Allí se explica lo que cambiará el próximo año: primas, deducibles, copagos, la lista de medicamentos y la red de proveedores.',
        },
        {
          type: 'p',
          text: 'Léalo con atención y busque los cambios que le afectan. ¿Su médico sigue en la red? ¿Sus medicamentos siguen cubiertos y en el mismo nivel? ¿Subió el copago del hospital? Tenga el aviso a la mano: es lo más útil que puede traer a la revisión de su plan.',
        },
      ],
    },
    {
      id: 'happy',
      heading: 'Si su plan le gusta, no tiene que hacer nada',
      blocks: [
        {
          type: 'p',
          text: 'Su plan se renueva automáticamente para el año siguiente. No tiene que llamar a nadie ni volver a inscribirse. Muchas personas conservan el mismo plan durante años porque sigue respondiendo a sus necesidades.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: '¿No le convencen los cambios?',
          text: 'Programe una revisión en persona con nosotros. Repasaremos juntos su Aviso Anual de Cambios, compararemos otros planes disponibles donde usted vive y le ayudaremos a cambiarse si otra opción le conviene más, todo antes de la fecha límite del 7 de diciembre.',
        },
      ],
    },
    {
      id: 'health-changes',
      heading: 'Si su salud ha cambiado',
      blocks: [
        {
          type: 'p',
          text: 'Si le diagnosticaron una enfermedad crónica del corazón o diabetes, podría calificar para un [Plan para Necesidades Especiales por Afecciones Crónicas](page:service-special-needs-plans) con beneficios adicionales. El Período de Inscripción Anual es un buen momento para averiguarlo. Los cambios en sus medicamentos también son una razón para revisar de nuevo su [cobertura de la Parte D](page:service-part-d-prescription-drug-plans).',
        },
      ],
    },
    {
      id: 'other-periods',
      heading: 'Otros períodos de inscripción que conviene conocer',
      blocks: [
        {
          type: 'ul',
          items: [
            '**Período de Inscripción Inicial:** los siete meses alrededor de su cumpleaños número 65: los tres meses anteriores, el mes de su cumpleaños y los tres meses siguientes.',
            '**Período de Inscripción Abierta de Medicare Advantage (del 1 de enero al 31 de marzo):** si tiene un plan Medicare Advantage, puede cambiarse a otro plan Medicare Advantage o volver a Medicare Original, una sola vez.',
            '**Períodos de Inscripción Especial:** ciertos acontecimientos, como mudarse, perder otra cobertura o calificar para la Ayuda Adicional, le permiten hacer cambios en otros momentos del año.',
          ],
        },
      ],
    },
    {
      id: 'prepare',
      heading: 'Cómo prepararse para su revisión',
      blocks: [
        { type: 'p', text: 'Reúna lo siguiente antes de su cita:' },
        {
          type: 'ol',
          items: [
            'Su Aviso Anual de Cambios y la tarjeta de su plan actual',
            'Su tarjeta roja, blanca y azul de Medicare',
            'Una lista de sus medicamentos, con las dosis',
            'Los nombres de sus médicos, especialistas y hospital de preferencia',
            'La farmacia que usa',
          ],
        },
        {
          type: 'p',
          text: 'Tenga cuidado con las llamadas inesperadas durante la temporada de inscripción: los estafadores están especialmente activos en el otoño. Lea nuestros consejos para [evitar fraudes de Medicare](page:scam).',
        },
      ],
    },
  ],
  faqs: [
    {
      q: '¿Tengo que hacer algo durante la Inscripción Anual?',
      a: 'No. Si su cobertura le satisface, se renueva automáticamente. El Período de Inscripción Anual es simplemente su oportunidad de hacer cambios si así lo desea.',
    },
    {
      q: '¿Puedo pasar de Medicare Advantage a un plan Medicare Suplementario durante este período?',
      a: 'Puede volver a Medicare Original durante la Inscripción Anual, pero en la mayoría de los casos una compañía de Medicare Suplementario puede hacerle preguntas de salud si presenta la solicitud fuera de su Período de Inscripción Abierta de Medigap. Hable con nosotros antes de dejar un plan Medicare Advantage.',
    },
    {
      q: '¿Cuándo empieza mi nuevo plan?',
      a: 'Los cambios que haga durante el Período de Inscripción Anual entran en vigor el 1 de enero.',
    },
    {
      q: '¿La Inscripción Anual se aplica a los planes Medicare Suplementario?',
      a: 'No directamente. Las pólizas Medigap no siguen el Período de Inscripción Anual; puede solicitarlas en otras épocas del año, aunque es posible que le hagan preguntas de salud. La Inscripción Anual se refiere a los planes Medicare Advantage y de la Parte D.',
    },
    {
      q: '¿Qué pasa si se me pasa el 7 de diciembre?',
      a: 'Su cobertura actual continúa. Si tiene un plan Medicare Advantage, todavía puede hacer un cambio durante el Período de Inscripción Abierta de Medicare Advantage (del 1 de enero al 31 de marzo), o quizá califique para un Período de Inscripción Especial.',
    },
  ],
};

export const scam: GuideContent = {
  h1: 'Protección contra fraudes de Medicare: cómo reconocerlos, detenerlos y denunciarlos',
  lede: 'Los fraudes de Medicare llegan por teléfono, por mensaje de texto, por correo electrónico y hasta a la puerta de su casa. Esta guía le explica las señales de alerta, lo que Medicare nunca le pedirá y qué hacer exactamente si cree que intentaron estafarle.',
  sections: [
    {
      id: 'common-scams',
      heading: 'Fraudes de Medicare más comunes',
      blocks: [
        {
          type: 'ul',
          items: [
            '**La llamada de la “tarjeta nueva”.** Alguien le dice que necesita una nueva tarjeta de Medicare y le pide “confirmar” su número de Medicare o de Seguro Social.',
            '**Equipos o pruebas “gratis”.** Ofrecen fajas para la espalda, suministros para la diabetes o pruebas genéticas gratuitas a cambio de su número de Medicare.',
            '**Amenazas de cancelar sus beneficios.** La persona asegura que perderá su cobertura si no actúa de inmediato.',
            '**Presión para cambiar de plan.** Alguien insiste en que se inscriba en un plan nuevo por teléfono, muchas veces con promesas de regalos o beneficios demasiado buenos para ser verdad.',
            '**Enlaces falsos.** Mensajes de texto o correos que parecen oficiales y le piden hacer clic en un enlace para “actualizar” sus datos.',
          ],
        },
      ],
    },
    {
      id: 'medicare-never',
      heading: 'Lo que Medicare nunca hará',
      blocks: [
        {
          type: 'p',
          text: 'Por lo general, Medicare no le llamará para pedirle información personal, salvo que usted haya llamado primero y pedido que le devuelvan la llamada, o que un plan al que ya pertenece se esté comunicando con usted. Medicare nunca:',
        },
        {
          type: 'ul',
          items: [
            'Le pedirá su número de Medicare o datos bancarios en una llamada, mensaje o correo inesperado',
            'Le amenazará con cancelar sus beneficios si no comparte información',
            'Le cobrará por una tarjeta nueva de Medicare',
            'Irá a su casa a venderle algo',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Nuestro consejo para todos nuestros clientes',
          text: 'Desconfíe de las llamadas, mensajes de texto o correos sobre Medicare que usted no haya pedido. Nunca dé información personal por teléfono a alguien que no conoce. No se inscriba por teléfono con un desconocido: mejor llámenos a nosotros.',
        },
      ],
    },
    {
      id: 'protect-yourself',
      heading: 'Cómo protegerse',
      blocks: [
        {
          type: 'ol',
          items: [
            '**Cuelgue.** No tiene que ser amable con alguien que le presiona. Cuelgue y llame a un número de confianza.',
            '**Cuide su tarjeta de Medicare como una tarjeta de crédito.** Comparta su número solo con sus médicos, su farmacia, su compañía de seguros o un agente con licencia que usted haya elegido.',
            '**No haga clic en enlaces** de mensajes o correos inesperados sobre Medicare.',
            '**Revise sus estados de cuenta.** Lea sus Resúmenes de Medicare y la Explicación de Beneficios de su plan en busca de servicios que no recibió.',
            '**Conozca a su agente.** Un agente con licencia de verdad le dirá su nombre y su número de licencia, y no le apurará. Los agentes no pueden hacer llamadas no solicitadas para venderle planes de Medicare. Puede verificar la licencia de un agente con el Departamento de Seguros de Luisiana.',
            '**Consúltelo con alguien.** Antes de firmar algo, hable con un familiar o con alguien de confianza.',
          ],
        },
      ],
    },
    {
      id: 'if-targeted',
      heading: 'Qué hacer si cree que fue víctima de un fraude',
      blocks: [
        {
          type: 'ol',
          items: [
            'Llame al 1-800-MEDICARE (1-800-633-4227; TTY 1-877-486-2048) para reportar el posible fraude.',
            'Si compartió su número de Seguro Social o sus datos bancarios, comuníquese de inmediato con su banco y considere colocar una alerta de fraude con las agencias de crédito.',
            'Denuncie la estafa ante la Comisión Federal de Comercio en [ReportFraud.ftc.gov](https://reportfraud.ftc.gov).',
            'Reporte el fraude de Medicare a la línea de la Oficina del Inspector General del HHS: 1-800-HHS-TIPS (1-800-447-8477).',
            'Reciba ayuda local y gratuita de la Patrulla de Medicare para Personas Mayores (SMP) a través de [smpresource.org](https://smpresource.org).',
            'Llámenos. Le ayudaremos a revisar su cobertura y a confirmar que nadie hizo cambios sin su permiso.',
          ],
        },
      ],
    },
    {
      id: 'share',
      heading: 'Comparta esta información con un ser querido',
      blocks: [
        {
          type: 'p',
          text: 'Los estafadores suelen buscar a personas que viven solas o que acaban de empezar con Medicare. Imprima esta página o envíela por correo a su mamá, su papá, sus abuelos o un vecino. Una conversación de dos minutos puede evitar muchos disgustos. Y recuerde que durante el [Período de Inscripción Anual](page:aep) suelen aumentar las llamadas fraudulentas.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'Alguien me llamó y me pidió mi número de Medicare. ¿Qué hago?',
      a: 'Cuelgue y no confirme ningún dato. Si ya dio su número, llame al 1-800-MEDICARE para reportarlo y llámenos para ayudarle a revisar su cobertura.',
    },
    {
      q: '¿Es seguro inscribirse en un plan por teléfono?',
      a: 'Solo si usted hizo la llamada a alguien que conoce y en quien confía, como un agente con licencia que usted eligió o el propio plan. Nunca se inscriba con un desconocido que le llamó de la nada.',
    },
    {
      q: '¿Cómo sé si un agente es legítimo?',
      a: 'Pídale su nombre completo y su número de licencia, y verifíquelo con el Departamento de Seguros de Luisiana. Un agente legítimo no le presionará, no le amenazará ni le pedirá que decida en ese mismo momento.',
    },
    {
      q: '¿Ustedes me pedirán mi número de Medicare por internet?',
      a: 'No. Nunca le pediremos su número de Medicare, su número de Seguro Social ni datos bancarios a través de nuestro sitio web ni por correo electrónico.',
    },
  ],
};

export const about: AboutContent = {
  h1: 'Un matrimonio al servicio de los adultos mayores de Luisiana',
  lede: 'Plus 65 Medicare Advisors somos Nidia y John Martinez, agentes de seguros bilingües y con licencia en el área de Nueva Orleans. Nos sentamos con usted, le explicamos sus opciones con palabras sencillas y seguimos a su lado mucho después de que se inscribe.',
  sections: [
    {
      id: 'local-personal-bilingual',
      heading: 'Locales, cercanos y bilingües',
      blocks: [
        {
          type: 'p',
          text: 'Plus 65 Medicare Advisors nace de una idea sencilla: la ayuda con Medicare debe ser honesta, paciente y personal. Nidia aporta décadas de experiencia con planes Medicare Advantage y Medicare Suplementario. John ayuda a las familias con seguros de gastos finales, de vida, de indemnización hospitalaria, dentales y de visión, y de salud. Juntos respondemos las preguntas que surgen a partir de los 65 años.',
        },
        {
          type: 'p',
          text: 'Hablamos español e inglés con fluidez, para que usted y su familia puedan conversar cada decisión en el idioma en que se sientan más a gusto.',
        },
      ],
    },
    {
      id: 'what-to-expect',
      heading: 'Cómo es trabajar con nosotros',
      blocks: [
        {
          type: 'ul',
          items: [
            '**Primero escuchamos.** Le preguntamos por sus médicos, sus recetas, su salud y su presupuesto antes de hablar de cualquier plan.',
            '**Explicamos con claridad.** Nada de términos técnicos sin explicación, y ninguna pregunta es demasiado pequeña.',
            '**Nos reunimos en persona.** Creemos que estas decisiones se toman mejor cara a cara, y con gusto le ayudamos por teléfono cuando le resulte más fácil.',
            '**Seguimos aquí año tras año.** Llámenos cuando cambie su plan, cuando una factura no parezca correcta o simplemente cuando tenga una pregunta.',
          ],
        },
      ],
    },
    {
      id: 'why-no-cost',
      heading: 'Por qué nuestra ayuda no le cuesta nada',
      blocks: [
        {
          type: 'p',
          text: 'Nos pagan las compañías de seguros cuyos planes ofrecemos. Su prima es la misma si se inscribe con nosotros o directamente con la compañía, así que usted recibe asesoría local de agentes con licencia sin costo adicional. No ofrecemos todos los planes disponibles en su área, y siempre le diremos qué compañías representamos.',
        },
      ],
    },
    {
      id: 'our-commitment',
      heading: 'Nuestro compromiso con usted',
      blocks: [
        {
          type: 'p',
          text: 'Cumplimos las reglas de mercadeo de Medicare: no le llamaremos sin que lo pida, no le presionaremos ni le prometeremos regalos para ganarnos su confianza. No estamos afiliados ni respaldados por el gobierno de los EE. UU. ni por el programa federal de Medicare: somos agentes locales con licencia que trabajan para usted. Aprenda a [protegerse de los fraudes de Medicare](page:scam).',
        },
      ],
    },
  ],
};

export const agents: Record<string, AgentContent> = {
  'nidia-martinez': {
    headline: 'Agente de Medicare con licencia, con enfoque en Medicare Advantage y Medicare Suplementario',
    bio: [
      'Nidia Martinez es agente de seguros con licencia y ha dedicado una larga trayectoria a ayudar a las personas a entender sus opciones de seguro. Hoy Nidia se enfoca en los planes Medicare Advantage y Medicare Suplementario para adultos mayores de toda el área de Nueva Orleans y del resto de Luisiana.',
      'Nidia habla español e inglés con fluidez y se toma el tiempo de explicar cada opción con claridad, comparar planes lado a lado y asegurarse de que cada cliente tome su decisión con confianza antes de inscribirse.',
      'Junto a John Martinez en Plus 65 Medicare Advisors, Nidia ofrece ayuda personal y en persona sin costo para usted, además de una voz conocida a quien llamar cuando su plan cambie cada año. Conozca los planes [Medicare Advantage](page:service-medicare-advantage) y [Medicare Suplementario](page:service-medicare-supplement).',
    ],
    focus: [
      'Medicare Advantage (Parte C)',
      'Medicare Suplementario (Medigap)',
      'Revisiones de planes en la Inscripción Anual',
      'Ayuda para quienes empiezan con Medicare',
    ],
    sections: [
      {
        id: 'what-to-expect',
        heading: 'Qué esperar en su cita con Nidia',
        blocks: [
          {
            type: 'ol',
            items: [
              'Nidia revisa su cobertura actual y, en el otoño, su Aviso Anual de Cambios.',
              'Usted comparte sus médicos, sus recetas, su farmacia y su presupuesto.',
              'Nidia compara opciones de Medicare Advantage y Medicare Suplementario lado a lado, incluido el costo total del año.',
              'Si decide hacer un cambio, Nidia le ayuda con la inscripción o la solicitud, y vuelve a revisar con usted el año siguiente.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        heading: 'Preguntas que Nidia puede ayudarle a responder',
        blocks: [
          {
            type: 'ul',
            items: [
              '¿Me conviene Medicare Advantage o un plan Medicare Suplementario?',
              '¿Mis médicos y mi hospital están en la red del plan?',
              '¿Cuánto me costarán mis recetas el próximo año?',
              '¿Es momento de cambiar de plan o me conviene quedarme donde estoy?',
            ],
          },
          {
            type: 'p',
            text: '¿Quiere conversar? Lea la [guía del Período de Inscripción Anual](page:aep) o [envíenos un mensaje](page:contact).',
          },
        ],
      },
    ],
  },
  'john-martinez': {
    headline: 'Agente de seguros con licencia: gastos finales, vida, indemnización hospitalaria, dental y visión, y salud',
    bio: [
      'John Martinez es agente de seguros con licencia y trabaja junto a Nidia en Plus 65 Medicare Advisors. John ayuda a las familias de Luisiana con las coberturas que complementan a Medicare: seguros de gastos finales y de vida a buen precio, planes de indemnización hospitalaria, cobertura dental y de visión, y seguros de salud para menores de 65 años.',
      'John habla español e inglés con fluidez y atiende a sus clientes en persona y por teléfono. Ya sea que quiera planificar el futuro de su familia o busque ayuda con los copagos del hospital, John le explicará sus opciones con palabras sencillas y le ayudará a elegir una cobertura que se ajuste a su presupuesto.',
      'John también ayuda a sus clientes a protegerse de los fraudes de Medicare. Si recibe una llamada sospechosa sobre Medicare, no se inscriba por teléfono con un desconocido: mejor llame a John. Lea nuestra [guía de protección contra fraudes de Medicare](page:scam).',
    ],
    focus: [
      'Seguro de gastos finales',
      'Seguro de vida económico',
      'Planes de indemnización hospitalaria',
      'Seguro dental y de visión',
      'Seguro de salud (menores de 65)',
    ],
    sections: [
      {
        id: 'what-to-expect',
        heading: 'Qué esperar en su cita con John',
        blocks: [
          {
            type: 'ol',
            items: [
              'John le pregunta qué desea proteger: a su familia, sus ahorros o su presupuesto durante una hospitalización.',
              'Conversan sobre su salud, su cobertura actual y lo que puede pagar cómodamente cada mes.',
              'John compara opciones de las compañías que representamos y le explica cada una con palabras sencillas.',
              'Si elige una póliza, John le ayuda con la solicitud y sigue disponible para sus preguntas.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        heading: 'Preguntas que John puede ayudarle a responder',
        blocks: [
          {
            type: 'ul',
            items: [
              '¿Cuánta cobertura de gastos finales necesita realmente mi familia?',
              '¿Puedo obtener un seguro de vida si tengo diabetes o presión alta?',
              '¿Un plan de indemnización hospitalaria me ayudaría con los copagos de Medicare Advantage?',
              '¿Qué opciones de seguro de salud tengo antes de cumplir 65 años?',
            ],
          },
          {
            type: 'p',
            text: 'Comience con el [seguro de gastos finales](page:service-final-expense-insurance) o [envíenos un mensaje](page:contact).',
          },
        ],
      },
    ],
  },
};

export const serviceArea: AreaHubContent = {
  h1: 'Ayuda con Medicare en toda Luisiana',
  lede: 'Tenemos nuestra base en el área de Nueva Orleans y ayudamos con Medicare en toda Luisiana: en persona en el área metropolitana y la orilla norte del lago, y por teléfono en cualquier parte del estado.',
  sections: [
    {
      id: 'where-we-work',
      heading: 'Dónde trabajamos',
      blocks: [
        {
          type: 'p',
          text: 'Nuestra base es el área de Nueva Orleans: el East Bank y el West Bank de la parroquia Jefferson, la parroquia de Orleans, la parroquia St. Bernard y las comunidades del Northshore en la parroquia St. Tammany. También atendemos a clientes de las River Parishes, como LaPlace, y de Baton Rouge. Si vive en cualquier otra parte de Luisiana, llámenos: podemos revisar sus opciones por teléfono.',
        },
      ],
    },
    {
      id: 'why-local',
      heading: 'Por qué conviene un agente local',
      blocks: [
        {
          type: 'p',
          text: 'Los planes Medicare Advantage se ofrecen parroquia por parroquia. Los planes disponibles en la parroquia de Orleans pueden ser distintos de los de St. Tammany o East Baton Rouge, y las redes de proveedores varían todavía más. Un agente local conoce los planes, los hospitales y los médicos de su zona, y está cerca cuando usted necesita ayuda.',
        },
      ],
    },
    {
      id: 'in-person-or-phone',
      heading: 'En persona o por teléfono',
      blocks: [
        {
          type: 'p',
          text: 'Muchas personas prefieren revisar Medicare cara a cara, con sus documentos sobre la mesa. Llámenos para programar una cita. Si le cuesta trasladarse, una revisión por teléfono también funciona muy bien, y sus familiares pueden participar desde donde estén.',
        },
      ],
    },
    {
      id: 'languages',
      heading: 'En español o en inglés',
      blocks: [
        {
          type: 'p',
          text: 'Nuestros dos agentes hablan español con fluidez, así que las familias hispanohablantes reciben ayuda en su propio idioma desde la primera llamada hasta el día en que empieza su nuevo plan. Comience con nuestras [preguntas y respuestas sobre Medicare](page:faq).',
        },
      ],
    },
  ],
};

export const faq: FaqPageContent = {
  h1: 'Preguntas sobre Medicare, respondidas con claridad',
  lede: 'Respuestas directas a las preguntas que más escuchamos en el área de Nueva Orleans y en toda Luisiana. ¿No encuentra la suya? Llámenos: no existen preguntas tontas sobre Medicare.',
  groups: [
    {
      id: 'working-with-us',
      heading: 'Cómo trabajamos',
      faqs: [
        {
          q: '¿Cuánto cuesta su ayuda?',
          a: 'Nada. Nos pagan las compañías de seguros, y la prima de su plan es la misma si se inscribe con nosotros o por su cuenta.',
        },
        {
          q: '¿Hablan español?',
          a: 'Sí. Nidia y John hablan español e inglés con fluidez.',
        },
        {
          q: '¿Podemos reunirnos en persona?',
          a: 'Sí. Ofrecemos ayuda personal y en persona en toda el área de Nueva Orleans. Llámenos para programar una cita, o le ayudamos por teléfono si lo prefiere.',
        },
        {
          q: '¿Qué compañías de seguros representan?',
          a: 'Las compañías que representamos aparecen en nuestras páginas de [Medicare Advantage](page:service-medicare-advantage) y [Medicare Suplementario](page:service-medicare-supplement). No ofrecemos todos los planes disponibles en su área.',
        },
        {
          q: '¿Ustedes son parte de Medicare o del gobierno?',
          a: 'No. Somos agentes de seguros con licencia. No estamos afiliados ni respaldados por el gobierno de los EE. UU. ni por el programa federal de Medicare.',
        },
      ],
    },
    {
      id: 'medicare-basics',
      heading: 'Lo básico de Medicare',
      faqs: [
        {
          q: '¿Qué son las Partes A, B, C y D de Medicare?',
          a: 'La Parte A es el seguro de hospital. La Parte B cubre las consultas médicas y la atención ambulatoria. La Parte C, o Medicare Advantage, es una forma de recibir sus beneficios de Medicare a través de un plan privado. La Parte D cubre los medicamentos recetados.',
        },
        {
          q: '¿Cuándo debo inscribirme en Medicare?',
          a: 'Su Período de Inscripción Inicial es un plazo de siete meses que comienza tres meses antes del mes en que cumple 65 años. Si usted o su cónyuge siguen trabajando y tienen cobertura del empleador, quizá pueda aplazar la Parte B sin multa; pregúntenos antes de decidir.',
        },
        {
          q: '¿Hay multa por inscribirse tarde?',
          a: 'Puede haberla. La multa de la Parte B suele ser del 10 % por cada período completo de 12 meses en que pudo tener la Parte B y no la tuvo. La multa de la Parte D se aplica si pasa 63 días o más sin cobertura acreditable de medicamentos. Ambas multas suelen durar mientras tenga esa cobertura.',
        },
        {
          q: '¿Qué no cubre Medicare Original?',
          a: 'Medicare Original no cubre la mayor parte de la atención dental de rutina, los exámenes de la vista para lentes, los audífonos ni el cuidado a largo plazo, y no tiene un límite anual de gastos de bolsillo. Por eso muchas personas agregan otra cobertura.',
        },
      ],
    },
    {
      id: 'choosing-a-plan',
      heading: 'Cómo elegir un plan',
      faqs: [
        {
          q: '¿Me conviene Medicare Advantage o un plan Medicare Suplementario?',
          a: 'Depende de su salud, sus médicos, cuánto viaja y su presupuesto. Medicare Advantage suele tener primas más bajas y beneficios adicionales, pero usa redes y copagos. Un plan Suplementario normalmente cuesta más al mes, pero le permite ver a cualquier proveedor que acepte Medicare y tener menos gastos de bolsillo. Comparamos ambas opciones con usted.',
        },
        {
          q: '¿Puedo cambiar de plan si no me gusta?',
          a: 'Por lo general, durante períodos específicos —como el Período de Inscripción Anual cada otoño— o si califica para un Período de Inscripción Especial. Los miembros de Medicare Advantage también pueden cambiarse entre el 1 de enero y el 31 de marzo.',
        },
        {
          q: '¿Qué es un Plan para Necesidades Especiales?',
          a: 'Es un plan Medicare Advantage para personas con necesidades específicas, como diabetes o enfermedades crónicas del corazón, o para quienes tienen Medicare y Medicaid a la vez. Pueden ofrecer beneficios adicionales. [Lea sobre los Planes para Necesidades Especiales](page:service-special-needs-plans).',
        },
        {
          q: '¿Necesito un plan de la Parte D si tengo un plan Medicare Suplementario?',
          a: 'Si quiere cobertura de recetas, sí: los planes Medigap que se venden hoy no incluyen medicamentos. Además, estar sin cobertura acreditable de medicamentos puede generar una multa por inscripción tardía.',
        },
      ],
    },
    {
      id: 'enrollment-and-reviews',
      heading: 'Inscripción y revisiones anuales',
      faqs: [
        {
          q: '¿Qué es el Período de Inscripción Anual?',
          a: 'Va del 15 de octubre al 7 de diciembre de cada año. Es cuando puede cambiar sus planes Medicare Advantage y de la Parte D para el año siguiente. [Lea nuestra guía de la Inscripción Anual](page:aep).',
        },
        {
          q: '¿Qué es el Aviso Anual de Cambios?',
          a: 'Es una carta que su plan Medicare Advantage o de la Parte D le envía antes de que termine septiembre para explicarle los cambios del próximo año, como primas, copagos y cobertura de medicamentos.',
        },
        {
          q: 'Si mi plan me gusta, ¿tengo que hacer algo?',
          a: 'No. Su plan se renueva automáticamente. Si no le convencen los cambios, programe una revisión en persona con nosotros.',
        },
        {
          q: '¿Qué debo traer a mi cita?',
          a: 'Su tarjeta de Medicare, las tarjetas de su plan actual, su Aviso Anual de Cambios si lo tiene, una lista de sus medicamentos con las dosis y los nombres de sus médicos y su farmacia.',
        },
      ],
    },
    {
      id: 'safety',
      heading: 'Seguridad y fraudes',
      faqs: [
        {
          q: '¿Ustedes me llamarán sin que lo pida?',
          a: 'No. No hacemos llamadas de venta no solicitadas. Solo nos comunicaremos con usted si nos lo pide, por ejemplo a través de nuestro formulario de contacto.',
        },
        {
          q: '¿Qué hago si alguien me pide mi número de Medicare?',
          a: 'No se lo dé a nadie que se comunique con usted de forma inesperada. Cuelgue y llame a un número de confianza, o llámenos. Consulte nuestra [guía de protección contra fraudes de Medicare](page:scam).',
        },
      ],
    },
    {
      id: 'other-coverage',
      heading: 'Otras coberturas',
      faqs: [
        {
          q: '¿Qué es el seguro de gastos finales?',
          a: 'Es una póliza pequeña de vida permanente que ayuda a su familia a pagar el funeral y el entierro. [Lea sobre el seguro de gastos finales](page:service-final-expense-insurance).',
        },
        {
          q: '¿Cómo ayuda el seguro de indemnización hospitalaria con Medicare Advantage?',
          a: 'Le paga un beneficio en efectivo por las estadías cubiertas en el hospital, que puede usar para los copagos diarios de hospital de su plan o para otros gastos.',
        },
        {
          q: '¿Pueden ayudar a familiares menores de 65 años?',
          a: 'Sí. Ayudamos con [seguros de salud para menores de 65](page:service-health-insurance), seguros de vida y cobertura dental y de visión.',
        },
      ],
    },
  ],
};

export const home: HomeContent = {
  faqs: [
    {
      q: '¿Cuánto cuesta trabajar con ustedes?',
      a: 'Nada. Nos pagan las compañías de seguros, y su prima es la misma si se inscribe con nosotros o por su cuenta.',
    },
    {
      q: 'Si mi plan me gusta, ¿tengo que cambiarlo?',
      a: 'No. Si después de leer su Aviso Anual de Cambios su plan le sigue conviniendo, se renueva automáticamente. Si los cambios le preocupan, programe una revisión con nosotros.',
    },
    {
      q: '¿Se reúnen en persona?',
      a: 'Sí. Ofrecemos ayuda personal y en persona en el área de Nueva Orleans, y con gusto le ayudamos por teléfono desde cualquier parte de Luisiana.',
    },
    {
      q: '¿Es el gobierno o Medicare quien me llama?',
      a: 'No, y Medicare no le llamará sin que usted lo pida para solicitarle su número. Somos agentes con licencia, no el gobierno. Aprenda a [evitar fraudes de Medicare](page:scam).',
    },
  ],
};

export const contact: ContactPageContent = {
  h1: 'Contáctenos para una consulta gratis sobre Medicare',
  lede: 'Llámenos o envíenos un mensaje breve. Buscaremos un momento para conversar —en persona o por teléfono, en español o en inglés—, sin costo para usted.',
  sections: [
    {
      id: 'what-happens-next',
      heading: 'Qué sucede después de comunicarse con nosotros',
      blocks: [
        {
          type: 'ol',
          items: [
            'Nos pondremos en contacto para conocer un poco su situación y responder preguntas rápidas.',
            'Si desea una revisión completa, programaremos una cita en persona o por teléfono.',
            'Compararemos planes con usted y le ayudaremos a inscribirse si así lo decide. Nunca hay compromiso.',
          ],
        },
      ],
    },
    {
      id: 'what-to-have-ready',
      heading: 'Qué conviene tener a la mano',
      blocks: [
        {
          type: 'ul',
          items: [
            'Su tarjeta de Medicare y las tarjetas de su plan actual',
            'Una lista de sus medicamentos, con las dosis',
            'Sus médicos, especialistas y farmacia de preferencia',
            'Su Aviso Anual de Cambios, si lo recibió',
          ],
        },
      ],
    },
    {
      id: 'your-privacy',
      heading: 'Su privacidad',
      blocks: [
        {
          type: 'p',
          text: 'Por favor, no envíe su número de Medicare, su número de Seguro Social, su fecha de nacimiento ni detalles de salud a través de este sitio web. Solo le pediremos la información necesaria, en el momento adecuado y mediante un proceso seguro. Lea nuestra [política de privacidad](page:privacy).',
        },
        {
          type: 'p',
          text: 'Antes de hablar de planes específicos de Medicare Advantage o de la Parte D, las reglas de Medicare nos piden documentar qué tipos de planes desea conversar (el “Alcance de la Cita”). Le explicaremos este breve formulario al programar su cita.',
        },
      ],
    },
  ],
};
