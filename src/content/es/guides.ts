import type { GuideContent, GuidesHubContent } from '../types';
import type { GuideKey } from '@/config/guides';

/*
 * Fuentes (verificadas el 2026-10-25): ver src/content/en/guides.ts. Además:
 * - Medicare.gov en español: https://es.medicare.gov
 */
const medicareOffice: GuideContent = {
  h1: '¿Hay una oficina de Medicare cerca de mí en Nueva Orleans?',
  lede: 'Medicare no tiene oficinas locales sin cita. Aquí le explicamos adónde acudir en Nueva Orleans y Metairie, quién hace qué y cómo le puede ayudar un agente local.',
  sections: [
    {
      id: 'short-answer',
      heading: '¿Hay una oficina de Medicare cerca de mí?',
      blocks: [
        {
          type: 'p',
          text: 'No. Medicare no tiene oficinas locales para atender sin cita. Usted se comunica con Medicare por teléfono al **1-800-MEDICARE**, por chat en Medicare.gov o por correo. Para inscribirse en persona, el Seguro Social tiene oficinas locales, y Luisiana ofrece asesoría gratuita y personal a través de un programa llamado SHIIP.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'No somos Medicare',
          text: 'Martinez Insurance Solutions es una agencia de seguros privada con licencia. No somos Medicare, ni el Seguro Social, ni ninguna agencia del gobierno. Le ayudamos a comparar e inscribirse en planes privados de Medicare.',
        },
        { type: 'p', text: 'A quién acudir depende de lo que necesite hacer:' },
        {
          type: 'ul',
          items: [
            '**Inscribirse en la Parte A y la Parte B, o solicitar la Ayuda Adicional:** el Seguro Social.',
            '**Reponer su tarjeta de Medicare, preguntar por un reclamo o comparar planes en línea:** 1-800-MEDICARE o Medicare.gov.',
            '**Asesoría gratuita e imparcial:** SHIIP, el Programa de Información sobre Seguros de Salud para Personas Mayores de Luisiana.',
            '**Comparar planes privados e inscribirse en persona con alguien de aquí:** un agente de Medicare con licencia.',
          ],
        },
      ],
    },
    {
      id: 'social-security',
      heading: '¿Dónde me inscribo en Medicare en Nueva Orleans?',
      blocks: [
        {
          type: 'p',
          text: 'La inscripción en Medicare se hace a través del Seguro Social, no de Medicare. La forma más fácil es en línea, en [SSA.gov/medicare/sign-up](https://www.ssa.gov/medicare/sign-up), con una cuenta gratuita "my Social Security". También puede llamar al Seguro Social al 1-800-772-1213 (TTY 1-800-325-0778) o comunicarse con su oficina local del Seguro Social.',
        },
        {
          type: 'p',
          text: 'Hay oficinas del Seguro Social que atienden el área de Nueva Orleans, pero sus direcciones y horarios pueden cambiar. Antes de ir, busque la oficina que corresponde a su código postal con el [localizador de oficinas](https://www.ssa.gov/locator) del Seguro Social. Si desea una cita, Medicare sugiere comunicarse con el Seguro Social unos 3 meses antes de cumplir 65 años. Nuestra [lista de pasos de Medicare al cumplir 65](page:guide-turning-65) repasa cada plazo.',
        },
        { type: 'h3', text: 'Qué trámites hace el Seguro Social' },
        {
          type: 'ul',
          items: [
            'La inscripción en la Parte A y la Parte B de Medicare',
            'La inscripción en la Parte B más adelante, si esperó porque tenía cobertura del trabajo',
            'La solicitud de Ayuda Adicional para pagar sus medicamentos, en cualquier momento, en [SSA.gov/extrahelp](https://www.ssa.gov/extrahelp)',
            'Los beneficios de jubilación y discapacidad del Seguro Social, que pueden iniciar su Parte A automáticamente',
          ],
        },
        {
          type: 'p',
          text: 'Si usted o su cónyuge trabajaron para un ferrocarril, comuníquese en su lugar con la Junta de Retiro Ferroviario al 1-877-772-5772.',
        },
      ],
    },
    {
      id: 'contact-medicare',
      heading: '¿Cómo me comunico directamente con Medicare?',
      blocks: [
        {
          type: 'p',
          text: 'Llame al **1-800-MEDICARE (1-800-633-4227)**. Los usuarios de TTY pueden llamar al 1-877-486-2048. La línea ofrece información las 24 horas del día, incluidos los fines de semana. También puede chatear con Medicare en [Medicare.gov](https://www.medicare.gov/talk-to-someone).',
        },
        { type: 'p', text: 'Medicare le puede ayudar, por ejemplo, a:' },
        {
          type: 'ul',
          items: [
            'Pedir una tarjeta de Medicare de reemplazo, o imprimirla desde su cuenta segura de Medicare.gov',
            'Resolver dudas sobre los reclamos y facturas de Medicare Original',
            'Comparar planes de salud y de medicamentos con el [buscador de planes de Medicare](https://www.medicare.gov/plan-compare)',
            'Obtener formularios y publicaciones en español y en inglés',
          ],
        },
        {
          type: 'p',
          text: 'Tenga su tarjeta de Medicare a la mano cuando llame. Cuando le pidan su número de Medicare, diga los números y las letras con claridad, uno por uno.',
        },
      ],
    },
    {
      id: 'shiip',
      heading: '¿Dónde recibo asesoría gratuita sobre Medicare en Luisiana?',
      blocks: [
        {
          type: 'p',
          text: 'Llame al **Senior Health Insurance Information Program (SHIIP)** de Luisiana al 1-800-259-5300, o visite la [página de SHIIP](https://www.ldi.la.gov/consumers/senior-health-shiip) en el sitio web del Departamento de Seguros de Luisiana. SHIIP es el Programa Estatal de Asistencia sobre Seguros de Salud (SHIP) de Luisiana.',
        },
        {
          type: 'p',
          text: 'Estos programas estatales reciben fondos del gobierno federal para dar asesoría local a las personas con Medicare. No tienen relación con ninguna compañía de seguros ni plan de salud, y su ayuda es gratuita y personal, para usted, su familia o la persona que le cuida.',
        },
      ],
    },
    {
      id: 'local-agent',
      heading: '¿Cuándo me conviene ver a un agente de Medicare local?',
      blocks: [
        {
          type: 'p',
          text: 'Acuda a un agente con licencia cuando esté listo para comparar planes privados de Medicare e inscribirse. El Seguro Social se encarga de su Parte A y Parte B. Las compañías de seguros privadas ofrecen los planes Medicare Advantage, Medicare Suplementario (Medigap) y de medicamentos de la Parte D, y un agente con licencia le ayuda a compararlos lado a lado.',
        },
        {
          type: 'p',
          text: 'En nuestra oficina de Veterans Boulevard, en Metairie, nos sentamos con usted, revisamos sus médicos y medicamentos con los planes disponibles donde usted vive, y le ayudamos a inscribirse si así lo decide. No le cuesta nada. También le atendemos por teléfono desde cualquier parte de Luisiana, en español o en inglés.',
        },
        {
          type: 'ul',
          items: [
            'Compare [planes Medicare Advantage en Luisiana](page:service-medicare-advantage)',
            'Conozca los [planes Suplementarios de Medicare (Medigap)](page:service-medicare-supplement)',
            'Busque un [plan de medicamentos de la Parte D](page:service-part-d-prescription-drug-plans) para sus recetas',
            'Reciba [ayuda con Medicare en Metairie](page:city-metairie) o vea los [planes Medicare Advantage en Nueva Orleans](page:city-new-orleans)',
          ],
        },
        { type: 'h3', text: 'Qué traer a su cita con nosotros' },
        {
          type: 'ul',
          items: [
            'Su tarjeta de Medicare y las tarjetas de cualquier plan que tenga ahora',
            'Una lista de sus medicamentos, con la dosis de cada uno',
            'Los nombres de sus médicos, especialistas y su farmacia preferida',
            'Su Aviso Anual de Cambios, si lo recibió',
          ],
        },
        {
          type: 'p',
          text: '[Contáctenos](page:contact) para pedir una cita gratis, en persona o por teléfono. Si prefiere, un familiar puede acompañarle.',
        },
      ],
    },
    {
      id: 'scam-warning',
      heading: '¿Medicare me llamará o vendrá a mi casa?',
      blocks: [
        {
          type: 'p',
          text: 'No. Medicare nunca le llamará para venderle algo ni le visitará en su casa. Medicare solo llama y pide información personal en situaciones limitadas, como cuando le devuelve una llamada que usted hizo primero.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Si alguien dice que llama "de Medicare"',
          text: 'Cuelgue. Luego llame usted mismo al 1-800-MEDICARE, con el número que aparece en el reverso de su tarjeta. Nunca dé su número de Medicare ni su número de Seguro Social a alguien que no conoce. Lea nuestra guía para [evitar fraudes de Medicare](page:scam).',
        },
      ],
    },
  ],
  faqs: [
    {
      q: '¿Dónde me inscribo en Medicare en Nueva Orleans?',
      a: 'A través del Seguro Social. Inscríbase en línea en SSA.gov, llame al 1-800-772-1213 o comuníquese con una oficina del Seguro Social. Use el [localizador de oficinas del Seguro Social](https://www.ssa.gov/locator) para encontrar la que corresponde a su código postal.',
    },
    {
      q: '¿Puedo ir en persona a una oficina de Medicare?',
      a: 'Medicare no tiene oficinas sin cita. Para inscribirse en persona, comuníquese con el Seguro Social, que tiene oficinas locales. Para comparar planes privados en persona, puede reunirse con un agente con licencia, como nuestro equipo en Metairie.',
    },
    {
      q: '¿Hay una oficina de Medicare en Metairie?',
      a: 'No. No hay una oficina de Medicare en Metairie. Nuestra oficina de Metairie es una agencia de seguros privada con licencia, no Medicare. Le ayudamos a comparar planes y le indicamos la oficina del gobierno que corresponde para todo lo demás.',
    },
    {
      q: '¿Quién me puede ayudar gratis con Medicare?',
      a: 'El 1-800-MEDICARE, el Seguro Social y SHIIP (1-800-259-5300) son gratuitos. Trabajar con nosotros también es gratis: nos pagan las compañías de seguros, y su prima es la misma si se inscribe con nosotros o por su cuenta.',
    },
  ],
};

/* Fuentes: ver diabetesHeartSnp en src/content/en/guides.ts (CMS y Medicare.gov, verificadas el 2026-10-25). */
const diabetesHeartSnp: GuideContent = {
  h1: 'Planes de Medicare para diabetes y enfermedades del corazón: guía de los C-SNP en Luisiana',
  lede: 'Si tiene diabetes, insuficiencia cardíaca u otra enfermedad del corazón, un Plan de Necesidades Especiales para Afecciones Crónicas puede ser una opción. Aquí le explicamos quién califica, cuándo puede inscribirse y qué preguntar primero.',
  sections: [
    {
      id: 'what-is-a-csnp',
      heading: '¿Qué es un Plan de Necesidades Especiales para Afecciones Crónicas (C-SNP)?',
      blocks: [
        {
          type: 'p',
          text: 'Un C-SNP es un tipo de plan Medicare Advantage al que solo pueden afiliarse personas con ciertas afecciones crónicas graves o incapacitantes, como la diabetes o la insuficiencia cardíaca crónica. Como los afiliados comparten una afección, el plan adapta sus beneficios, médicos y lista de medicamentos a esa afección e incluye coordinación de la atención.',
        },
        {
          type: 'p',
          text: 'Como todo plan Medicare Advantage, un C-SNP cubre todos sus beneficios de la Parte A (hospital) y la Parte B (médica) de Medicare. Los C-SNP son planes HMO o PPO, y **todo Plan de Necesidades Especiales debe incluir cobertura de medicamentos de Medicare (Parte D)**, así que no necesita comprar un plan de medicamentos aparte.',
        },
        {
          type: 'p',
          text: 'Los C-SNP son uno de tres tipos de Planes de Necesidades Especiales. Los otros dos atienden a personas que tienen Medicare y Medicaid (D-SNP) y a personas que necesitan el nivel de atención de un hogar de ancianos (I-SNP). Lea nuestra información general sobre los [Planes de Necesidades Especiales de Medicare en Luisiana](page:service-special-needs-plans).',
        },
      ],
    },
    {
      id: 'type-2-diabetes',
      heading: '¿Pueden afiliarse a un C-SNP las personas con diabetes tipo 2?',
      blocks: [
        {
          type: 'p',
          text: 'Sí, si en su zona se ofrece un C-SNP para la diabetes. La diabetes mellitus está en la lista de afecciones crónicas que Medicare (CMS) permite atender a estos planes, y ese término médico incluye la diabetes tipo 2. También necesita tener la Parte A y la Parte B de Medicare y vivir en el área de servicio del plan.',
        },
        { type: 'h3', text: '¿Y la diabetes tipo 1?' },
        {
          type: 'p',
          text: 'La diabetes tipo 1 también es diabetes mellitus, así que se aplican las mismas reglas. Sin importar el tipo de diabetes, el plan debe confirmar su diagnóstico antes de que su afiliación quede firme, por lo general consultando con su médico.',
        },
      ],
    },
    {
      id: 'who-qualifies',
      heading: 'Información sobre quién califica para un plan de necesidades especiales para la diabetes',
      blocks: [
        { type: 'p', text: 'Puede afiliarse a un C-SNP para la diabetes si se cumple todo lo siguiente:' },
        {
          type: 'ul',
          items: [
            'Tiene la Parte A y la Parte B de Medicare.',
            'Vive en el área de servicio del plan.',
            'Tiene la afección que atiende el plan, y el plan la confirma.',
          ],
        },
        {
          type: 'p',
          text: 'Solo puede permanecer en un C-SNP mientras siga teniendo la afección del plan. Nunca está obligado a afiliarse a un Plan de Necesidades Especiales; es una opción más, junto con un [plan Medicare Advantage](page:service-medicare-advantage) regular o Medicare Original con una [póliza Suplementaria de Medicare (Medigap)](page:service-medicare-supplement).',
        },
      ],
    },
    {
      id: 'diabetes-and-heart-disease',
      heading: '¿Hay un plan de Medicare para la diabetes y las enfermedades del corazón a la vez?',
      blocks: [
        {
          type: 'p',
          text: 'Sí. Algunos C-SNP atienden un grupo de afecciones relacionadas en lugar de una sola. CMS permite que los planes se organicen alrededor de estos grupos de afecciones que suelen presentarse juntas:',
        },
        {
          type: 'ul',
          items: [
            'Diabetes e insuficiencia cardíaca crónica',
            'Insuficiencia cardíaca crónica y trastornos cardiovasculares',
            'Diabetes y trastornos cardiovasculares',
            'Diabetes, insuficiencia cardíaca crónica y trastornos cardiovasculares',
            'Derrame cerebral (accidente cerebrovascular) y trastornos cardiovasculares',
          ],
        },
        {
          type: 'p',
          text: 'En un plan organizado según uno de estos grupos de CMS, **basta con tener una de las afecciones del grupo para calificar**. Algunos planes crean su propia combinación y exigen que los afiliados tengan todas las afecciones de esa combinación, así que lea siempre las reglas de elegibilidad del plan o pídanos que las revisemos.',
        },
        { type: 'h3', text: '¿Qué enfermedades del corazón cuentan?' },
        {
          type: 'p',
          text: 'En la lista de CMS, la insuficiencia cardíaca crónica es una afección por sí sola. Los “trastornos cardiovasculares” se limitan a las arritmias cardíacas, la enfermedad de las arterias coronarias, la enfermedad vascular periférica y el trastorno tromboembólico venoso crónico. Si tiene insuficiencia cardíaca, puede convenirle un C-SNP que la atienda o uno de los grupos anteriores que la incluya.',
        },
      ],
    },
    {
      id: 'benefits',
      heading: '¿Qué beneficios puede incluir un plan de Medicare para necesidades especiales?',
      blocks: [
        {
          type: 'p',
          text: 'Todo C-SNP incluye su cobertura de la Parte A, la Parte B y la Parte D, además de coordinación de la atención. Fuera de eso, los beneficios varían según el plan y cambian de un año a otro. Medicare explica que un SNP puede cubrir servicios adicionales para el grupo que atiende; por ejemplo, si usted tiene insuficiencia cardíaca congestiva y necesita hospitalizarse, un SNP podría cubrir días adicionales en el hospital.',
        },
        {
          type: 'p',
          text: 'Como cada plan fija sus propios beneficios, comparamos con usted, punto por punto, los planes que realmente se ofrecen en su parroquia, en lugar de prometerle algún beneficio en particular.',
        },
      ],
    },
    {
      id: 'csnp-vs-medicare-advantage',
      heading: '¿En qué se diferencia un C-SNP de un plan Medicare Advantage regular?',
      blocks: [
        {
          type: 'p',
          text: 'Un C-SNP cubre todo lo que cubre un plan Medicare Advantage regular, pero solo pueden afiliarse personas con la afección del plan, siempre incluye cobertura de medicamentos y sus beneficios, proveedores y lista de medicamentos están adaptados a esa afección. Así se comparan las tres opciones principales:',
        },
        {
          type: 'table',
          caption: 'C-SNP frente a Medicare Advantage regular y Medicare Original con Medigap',
          head: ['Qué comparar', 'C-SNP', 'Medicare Advantage regular', 'Medicare Original + Medigap'],
          rows: [
            [
              'Quién puede afiliarse',
              'Personas con la Parte A y la B en el área de servicio que tienen la afección que atiende el plan',
              'Personas con la Parte A y la B en el área de servicio',
              'Personas con la Parte A y la B; es más fácil obtener Medigap durante su período de inscripción abierta de Medigap',
            ],
            [
              'Médicos y hospitales',
              'Por lo general, la red del plan; algunos planes cubren atención fuera de la red a un costo mayor',
              'Por lo general, la red del plan; algunos planes cubren atención fuera de la red a un costo mayor',
              'Cualquier médico u hospital en EE. UU. que acepte Medicare',
            ],
            [
              'Cobertura de medicamentos',
              'Siempre incluida',
              'Incluida en la mayoría de los planes',
              'No incluida; se agrega un plan de la Parte D aparte',
            ],
            ['Diseñado para su afección', 'Sí: coordinación de la atención, lista de medicamentos y red adaptadas', 'No', 'No'],
            [
              'Límite anual de gastos de su bolsillo',
              'Sí, para los servicios cubiertos',
              'Sí, para los servicios cubiertos',
              'Medicare Original no tiene límite; Medigap ayuda a pagar su parte',
            ],
            [
              'Cuándo puede afiliarse',
              'En cualquier momento mientras tenga la afección que califica, además de los períodos regulares',
              'En los períodos regulares, como del 15 de octubre al 7 de diciembre de cada año',
              'Medigap: lo mejor es durante su período de inscripción abierta de Medigap de 6 meses',
            ],
          ],
        },
      ],
    },
    {
      id: 'when-to-enroll',
      heading: '¿Cuándo puedo inscribirme en un C-SNP para la diabetes?',
      blocks: [
        {
          type: 'p',
          text: 'En cualquier época del año. Si tiene una afección que califica, un Período de Inscripción Especial le permite afiliarse a un C-SNP que la atienda cuando usted esté listo. Esa oportunidad dura mientras tenga la afección y termina cuando se inscribe en el C-SNP. También puede afiliarse en los períodos regulares, como cuando recibe Medicare por primera vez o durante el [Período de Inscripción Anual](page:aep), del 15 de octubre al 7 de diciembre.',
        },
        { type: 'h3', text: '¿Qué pasa si el plan determina que no califico?' },
        {
          type: 'p',
          text: 'Si después de su inscripción el plan no logra confirmar su afección con su proveedor, se lo notificará. Entonces tendrá un Período de Inscripción Especial para afiliarse a otro plan Medicare Advantage. Comienza el mes en que el plan le notifica y termina dos meses calendario después de ese mes.',
        },
        { type: 'h3', text: '¿Y si mi afección cambia más adelante?' },
        {
          type: 'p',
          text: 'Si ya no tiene una afección que atiende el plan, puede cambiarse a otro tipo de plan Medicare Advantage o a un plan de medicamentos de Medicare. Su oportunidad comienza el mes en que pierde su condición de necesidad especial y termina cuando se afilia a otro plan, o 3 meses calendario después de que entre en vigor su cancelación involuntaria, lo que ocurra primero.',
        },
      ],
    },
    {
      id: 'leaving-a-csnp',
      heading: '¿Puedo salirme de un C-SNP más adelante?',
      blocks: [
        {
          type: 'p',
          text: 'Sí, durante los períodos de inscripción regulares. Una vez que se afilia a un C-SNP con su Período de Inscripción Especial, esa oportunidad en particular para hacer cambios termina, así que normalmente usaría uno de estos períodos:',
        },
        {
          type: 'ul',
          items: [
            '**Del 15 de octubre al 7 de diciembre:** cámbiese a otro plan Medicare Advantage o regrese a Medicare Original, con cobertura a partir del 1 de enero.',
            '**Del 1 de enero al 31 de marzo:** si está en cualquier plan Medicare Advantage, incluido un C-SNP, cámbiese a otro plan Medicare Advantage, o déjelo, regrese a Medicare Original y afíliese a un plan de medicamentos de Medicare aparte.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: '¿Piensa en Medigap más adelante?',
          text: 'El mejor momento para comprar una póliza Medigap es su período de inscripción abierta de Medigap de 6 meses. Cuando termina, sus opciones pueden ser limitadas y la póliza puede costar más, a menos que tenga un derecho especial para comprarla. Hable con nosotros antes de dejar un plan Medicare Advantage.',
        },
      ],
    },
    {
      id: 'prove-your-condition',
      heading: '¿Cómo compruebo mi afección?',
      blocks: [
        {
          type: 'p',
          text: 'El plan está obligado a confirmar que usted tiene la afección que califica, y es el plan quien hace la verificación. Muchos C-SNP comienzan con un breve cuestionario cuando usted presenta la solicitud (CMS lo llama evaluación de calificación previa a la inscripción) y después verifican las respuestas con su médico u otro proveedor una vez que usted se inscribe.',
        },
        { type: 'p', text: 'Usted puede facilitar el proceso:' },
        {
          type: 'ul',
          items: [
            'Tenga a la mano el nombre y el teléfono del médico que trata su diabetes o su enfermedad del corazón.',
            'Avísele al consultorio de su médico que el plan podría comunicarse con ellos.',
            'Mantenga una lista actualizada de sus medicamentos y dosis.',
          ],
        },
      ],
    },
    {
      id: 'keep-your-doctors',
      heading: '¿Puedo seguir con mis proveedores en un plan de necesidades especiales?',
      blocks: [
        {
          type: 'p',
          text: 'Solo si están en la red del plan, o si el plan cubre atención fuera de la red. Algunos SNP exigen que use proveedores de la red, salvo en emergencias, atención urgente fuera del área o diálisis fuera del área; otros cubren atención fuera de la red, por lo general a un costo mayor.',
        },
        {
          type: 'p',
          text: 'Antes de que se inscriba, revisamos a su médico de cabecera, a su endocrinólogo o cardiólogo y el hospital que prefiere. Los sistemas de salud de Luisiana participan en planes distintos, y las redes pueden cambiar cada año, así que las confirmamos para el año del plan que está eligiendo.',
        },
      ],
    },
    {
      id: 'availability',
      heading: '¿Hay planes C-SNP disponibles en mi parroquia?',
      blocks: [
        {
          type: 'p',
          text: 'Depende de dónde viva y del año. Las compañías de seguros deciden dónde ofrecen Planes de Necesidades Especiales, así que la disponibilidad varía de una parroquia a otra y puede cambiar cada año. Nosotros revisamos los planes que se ofrecen en su dirección.',
        },
        {
          type: 'p',
          text: 'También puede buscar por su cuenta con el [buscador de planes de Medicare](https://www.medicare.gov/plan-compare) y filtrar los resultados por “Special Needs Plans (SNP)”. Ayudamos a personas con [planes Medicare Advantage en Nueva Orleans](page:city-new-orleans), [Metairie](page:city-metairie), [Baton Rouge](page:city-baton-rouge) y toda Luisiana.',
        },
      ],
    },
    {
      id: 'questions-to-ask',
      heading: '¿Qué debo preguntar antes de inscribirme en un C-SNP?',
      blocks: [
        { type: 'p', text: 'Pregunte por sus médicos, sus medicamentos y sus costos totales antes de firmar algo:' },
        {
          type: 'ul',
          items: [
            '**Médicos:** ¿Están en la red mi médico de cabecera, mis especialistas y mi hospital? ¿Necesito referidos?',
            '**Medicamentos:** ¿Están todos mis medicamentos en la lista del plan, incluidos la insulina y los suministros para la diabetes? ¿Alguno requiere aprobación previa?',
            '**Costos anuales totales:** ¿Cuánto son la prima, los copagos y el límite anual de gastos de mi bolsillo?',
            '**Coordinación de la atención:** ¿Quién es mi coordinador de atención y cómo me comunico con esa persona?',
            '**Elegibilidad:** ¿Qué afección o grupo atiende el plan y cómo confirmará la mía?',
            '**Viajes:** ¿Qué se cubre si necesito atención fuera del área de servicio?',
          ],
        },
        {
          type: 'p',
          text: 'Respondemos estas preguntas con usted sin costo, en persona en Metairie o por teléfono, en español o en inglés. [Contáctenos](page:contact) para ver si un C-SNP le conviene. Si no le conviene, se lo diremos.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: '¿Pueden afiliarse a un C-SNP las personas con diabetes tipo 1?',
      a: 'Sí, si en su zona se ofrece un C-SNP para la diabetes. La diabetes tipo 1 y la tipo 2 son diabetes mellitus, que está en la lista de afecciones que califican de CMS. El plan confirma su diagnóstico.',
    },
    {
      q: '¿Tengo que esperar al Período de Inscripción Anual para afiliarme a un C-SNP?',
      a: 'No. Si tiene una afección que califica, un Período de Inscripción Especial le permite afiliarse en cualquier época del año a un C-SNP que la atienda. Termina cuando se inscribe.',
    },
    {
      q: '¿Necesito tener diabetes y una enfermedad del corazón para afiliarme?',
      a: 'Por lo general, no. En los planes organizados según un grupo de afecciones de CMS, como diabetes e insuficiencia cardíaca crónica, basta con una afección del grupo. Los planes con su propia combinación pueden exigirlas todas.',
    },
    {
      q: '¿Un C-SNP incluye cobertura de medicamentos recetados?',
      a: 'Sí. Todo Plan de Necesidades Especiales debe incluir cobertura de medicamentos de Medicare (Parte D).',
    },
    {
      q: '¿Cuesta algo recibir ayuda para elegir un C-SNP?',
      a: 'No. Nuestra ayuda es gratis. Nos pagan las compañías de seguros, y su prima es la misma si se inscribe con nosotros o por su cuenta.',
    },
  ],
};

/* Fuentes: ver turning65 en src/content/en/guides.ts (Medicare.gov, verificadas el 2026-10-25). */
const turning65: GuideContent = {
  h1: 'Cumplir 65 en Luisiana: su lista de pasos para Medicare',
  lede: 'Cumplir 65 trae plazos que es fácil pasar por alto. Aquí le explicamos cuándo inscribirse, cómo evitar multas de por vida, cómo elegir su cobertura y dónde recibir ayuda gratis cerca de usted en Metairie y Nueva Orleans.',
  sections: [
    {
      id: 'when-to-sign-up',
      heading: '¿Cuándo puedo inscribirme en Medicare al cumplir 65?',
      blocks: [
        {
          type: 'p',
          text: 'Durante su **Período de Inscripción Inicial**, un plazo de 7 meses que empieza 3 meses antes del mes en que cumple 65, incluye el mes de su cumpleaños y termina 3 meses después. Por ejemplo, si cumple 65 el 2 de junio, su plazo va de marzo a septiembre. Si su cumpleaños es el día 1 del mes, el plazo empieza y termina un mes antes.',
        },
        {
          type: 'p',
          text: 'Si se inscribe en los primeros 3 meses, su cobertura normalmente empieza el primer día del mes de su cumpleaños. Si se inscribe en el mes de su cumpleaños o después, la cobertura empieza el primer día del mes siguiente a su inscripción, así que inscribirse temprano evita quedarse sin cobertura.',
        },
      ],
    },
    {
      id: 'automatic-enrollment',
      heading: '¿Me inscribirán en Medicare automáticamente?',
      blocks: [
        {
          type: 'p',
          text: 'Sí, si ya recibe beneficios del Seguro Social o de la Junta de Retiro Ferroviario. Tendrá la Parte A y la Parte B a partir del mes en que cumple 65, y su tarjeta de Medicare roja, blanca y azul llegará por correo unos 3 meses antes de su cumpleaños. En ese caso, la Parte A normalmente no tiene prima.',
        },
        {
          type: 'p',
          text: 'La mayoría de las personas conserva la Parte B. Si tiene otra cobertura y todavía no quiere la Parte B, debe avisar al Seguro Social antes de la fecha de inicio que aparece en su tarjeta; si no hace nada, la conserva y la prima se descuenta de su beneficio. Si todavía no recibe beneficios, tiene que inscribirse usted mismo.',
        },
      ],
    },
    {
      id: 'how-to-sign-up',
      heading: '¿Cómo me inscribo en la Parte A y la Parte B en Luisiana?',
      blocks: [
        {
          type: 'p',
          text: 'A través del Seguro Social. La forma más rápida es en línea, en [SSA.gov/medicare/sign-up](https://www.ssa.gov/medicare/sign-up). También puede llamar al Seguro Social al 1-800-772-1213 (TTY 1-800-325-0778) o comunicarse con su oficina local del Seguro Social. Si quiere una cita, llame unos 3 meses antes de cumplir 65.',
        },
        {
          type: 'p',
          text: 'Medicare no tiene oficinas locales sin cita. Nuestra guía para [encontrar una oficina de Medicare cerca de usted en Nueva Orleans](page:guide-medicare-office) explica quién hace qué.',
        },
      ],
    },
    {
      id: 'still-working',
      heading: '¿Qué pasa si sigo trabajando a los 65?',
      blocks: [
        {
          type: 'p',
          text: 'Si usted o su cónyuge tienen cobertura médica por un **trabajo actual**, quizás pueda esperar para inscribirse en la Parte B sin multa. Puede inscribirse en cualquier momento mientras tenga esa cobertura, o durante los 8 meses después de que termine el empleo o la cobertura, lo que ocurra primero. COBRA y la cobertura de jubilados no son cobertura de un trabajo actual, así que no cuente con ellas para retrasar la Parte B.',
        },
        {
          type: 'ul',
          items: [
            '**Pregunte a su empleador** si su plan paga antes o después de Medicare y si su cobertura de medicamentos es “acreditable”.',
            '**¿Tiene una Cuenta de Ahorros para la Salud (HSA)?** No puede aportar a una HSA una vez que tiene Medicare. La Parte A sin prima puede empezar hasta 6 meses antes de que se inscriba, así que planifique bien su último aporte.',
            '**¿Tiene un plan del Mercado de Seguros?** Inscríbase en Medicare cuando sea elegible por primera vez y cancele su plan del Mercado para que no se superpongan. Cuando es elegible para la Parte A sin prima, ya no puede seguir recibiendo ayuda para pagar las primas del Mercado.',
          ],
        },
        {
          type: 'p',
          text: '¿Tiene menos de 65 y busca cobertura? Vea nuestra página de [seguro médico para menores de 65](page:service-health-insurance).',
        },
      ],
    },
    {
      id: 'avoid-penalties',
      heading: '¿Cómo evito las multas por inscripción tardía en Medicare?',
      blocks: [
        {
          type: 'p',
          text: 'Inscríbase a tiempo y mantenga una cobertura de medicamentos acreditable. Las multas duran mientras tenga la cobertura:',
        },
        {
          type: 'ul',
          items: [
            '**Parte B:** su prima mensual puede subir un 10% por cada 12 meses completos en que pudo tener la Parte B y no se inscribió, a menos que haya calificado para un Período de Inscripción Especial.',
            '**Parte D:** si pasa 63 días seguidos o más después de su Período de Inscripción Inicial sin cobertura de medicamentos de Medicare ni otra cobertura de medicamentos acreditable, se agrega una multa a su prima de medicamentos. Equivale al 1% de la prima base nacional del beneficiario por cada mes completo sin cobertura, y por lo general la paga mientras tenga cobertura de medicamentos. Quienes reciben la Ayuda Adicional no la pagan.',
          ],
        },
        {
          type: 'p',
          text: 'Si se le pasa su Período de Inscripción Inicial y no califica para un Período de Inscripción Especial, puede inscribirse en la Parte B durante el Período de Inscripción General, del 1 de enero al 31 de marzo, pero quizás pague una multa, y esta aumenta cuanto más espere. Aunque hoy no tome medicamentos, un [plan de medicamentos de la Parte D](page:service-part-d-prescription-drug-plans) de bajo costo puede protegerle de la multa de la Parte D.',
        },
      ],
    },
    {
      id: 'medigap-open-enrollment',
      heading: '¿Cuándo debo comprar una póliza Medigap?',
      blocks: [
        {
          type: 'p',
          text: 'Durante su **período de inscripción abierta de Medigap** de 6 meses, que empieza el primer mes en que tiene la Parte B y 65 años o más. Ocurre una sola vez. Durante ese período, las compañías deben venderle cualquier póliza Medigap que ofrezcan y no pueden cobrarle más por su salud. Después, quizás pague más o le rechacen. Lea sobre los [planes Suplementarios de Medicare (Medigap) en Luisiana](page:service-medicare-supplement).',
        },
      ],
    },
    {
      id: 'choose-your-coverage',
      heading: '¿Me conviene Medicare Advantage o Medicare Original con Medigap?',
      blocks: [
        {
          type: 'p',
          text: 'Depende de sus médicos, su presupuesto y cuánto viaja. Así se comparan los dos caminos principales:',
        },
        {
          type: 'table',
          caption: 'Medicare Advantage frente a Medicare Original con Medigap',
          head: ['Qué comparar', 'Medicare Advantage (Parte C)', 'Medicare Original + Medigap + Parte D'],
          rows: [
            [
              'Médicos y hospitales',
              'Por lo general, la red del plan; algunos planes cubren atención fuera de la red a un costo mayor',
              'Cualquier médico u hospital en EE. UU. que acepte Medicare',
            ],
            ['Referidos', 'Pueden necesitarse para ver a un especialista', 'Por lo general no se necesitan'],
            ['Cobertura de medicamentos', 'Incluida en la mayoría de los planes', 'A través de un plan de la Parte D aparte'],
            [
              'Límite anual de gastos de su bolsillo',
              'Sí, para los servicios cubiertos',
              'Medicare Original no tiene límite; Medigap paga parte o toda su parte',
            ],
            [
              'Beneficios adicionales',
              'La mayoría de los planes ofrecen algunos, como visión, audición o dental',
              'No incluidos; se pueden agregar aparte',
            ],
            [
              'Lo que paga cada mes',
              'Prima de la Parte B, más cualquier prima del plan',
              'Prima de la Parte B, más las primas de Medigap y de la Parte D',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Compare los [planes Medicare Advantage en Luisiana](page:service-medicare-advantage), o pídanos cotizar ambos caminos con sus médicos y medicamentos reales.',
        },
      ],
    },
    {
      id: 'checklist',
      heading: 'Su lista de pasos de Medicare al cumplir 65',
      blocks: [
        {
          type: 'ol',
          items: [
            '**4 a 6 meses antes de su cumpleaños:** haga una lista de sus médicos, sus medicamentos (con dosis) y su farmacia. Pregunte a su empleador cómo funciona su cobertura con Medicare.',
            '**3 meses antes:** empieza su Período de Inscripción Inicial. Inscríbase en la Parte A y la Parte B en SSA.gov si no le inscriben automáticamente. Esté pendiente de su tarjeta de Medicare en el correo.',
            '**2 a 3 meses antes:** compare Medicare Advantage con Medicare Original más Medigap y la Parte D. Asegúrese de que su cobertura de medicamentos empiece cuando empiece Medicare.',
            '**El mes anterior:** inscríbase en su plan para que la cobertura empiece junto con Medicare. Cancele cualquier plan del Mercado y deje de aportar a su HSA a tiempo.',
            '**El mes de su cumpleaños:** lleve sus tarjetas nuevas. Si eligió Medicare Original, su período de inscripción abierta de Medigap de 6 meses ya está corriendo.',
            '**Cada otoño después:** lea su Aviso Anual de Cambios y revise su plan entre el 15 de octubre y el 7 de diciembre.',
          ],
        },
      ],
    },
    {
      id: 'local-help',
      heading: 'Ayuda al cumplir 65 cerca de usted, en Metairie y Nueva Orleans',
      blocks: [
        {
          type: 'p',
          text: 'Nos reunimos con personas que cumplen 65 en nuestra oficina de Metairie, o les ayudamos por teléfono desde cualquier parte de Luisiana, en español o en inglés, sin costo. Le ayudamos con los plazos, comparamos planes lado a lado y le inscribimos cuando esté listo. Conozca nuestra ayuda en [Metairie](page:city-metairie) y [Nueva Orleans](page:city-new-orleans), o [contáctenos](page:contact) para coordinar una cita.',
        },
        {
          type: 'p',
          text: '¿Prefiere una asesoría gratuita e imparcial? El programa SHIIP de Luisiana responde preguntas sobre Medicare al 1-800-259-5300.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: '¿Dónde recibo ayuda con Medicare cerca de mí al cumplir 65?',
      a: 'El Seguro Social se encarga de la inscripción en la Parte A y la Parte B, y el programa SHIIP de Luisiana (1-800-259-5300) ofrece asesoría gratuita. Para comparar e inscribirse en planes con un agente local con licencia, puede reunirse con nosotros en Metairie o hablar por teléfono. Nuestra ayuda es gratis.',
    },
    {
      q: '¿Tengo que inscribirme en Medicare a los 65 si tengo seguro por mi trabajo?',
      a: 'No siempre. Si la cobertura viene de su trabajo actual o del de su cónyuge, quizás pueda retrasar la Parte B sin multa. Consulte primero con su empleador, y recuerde que COBRA y la cobertura de jubilados no cuentan.',
    },
    {
      q: '¿Medicare es gratis al cumplir 65?',
      a: 'La Parte A no tiene prima para la mayoría de las personas. La Parte B tiene una prima mensual, y cualquier plan Medicare Advantage, Medigap o de la Parte D puede agregar su propia prima y costos.',
    },
    {
      q: '¿Qué pasa si se me pasa mi Período de Inscripción Inicial?',
      a: 'A menos que califique para un Período de Inscripción Especial, puede inscribirse en la Parte B del 1 de enero al 31 de marzo, pero su cobertura puede retrasarse y quizás pague una multa por inscripción tardía mientras tenga la Parte B.',
    },
  ],
};

export const guides: Record<GuideKey, GuideContent> = {
  'medicare-office': medicareOffice,
  'diabetes-heart-snp': diabetesHeartSnp,
  'turning-65': turning65,
};

export const guidesHub: GuidesHubContent = {
  h1: 'Guías de Medicare para Luisiana',
  lede: 'Respuestas claras a las preguntas que más escuchamos, en palabras sencillas, para personas en Nueva Orleans, Metairie y toda Luisiana.',
  sections: [
    {
      id: 'where-to-start',
      heading: '¿No sabe por dónde empezar?',
      blocks: [
        {
          type: 'ul',
          items: [
            '**¿Quiere comunicarse con Medicare o inscribirse en la Parte A y la Parte B?** Empiece por [dónde recibir ayuda con Medicare cerca de usted](page:guide-medicare-office).',
            '**¿Va a revisar su plan este otoño?** Lea sobre el [Período de Inscripción Anual](page:aep), cuando puede cambiar de plan para el año siguiente.',
            '**¿Recibió una llamada o carta sospechosa?** Vea cómo [detectar y denunciar fraudes de Medicare](page:scam).',
            '**¿Está comparando coberturas?** Conozca en qué se diferencian los planes [Medicare Advantage](page:service-medicare-advantage) y [Medicare Suplementario](page:service-medicare-supplement).',
          ],
        },
        {
          type: 'p',
          text: 'Cada guía se basa en fuentes oficiales como Medicare.gov y CMS.gov, la revisan nuestros agentes con licencia y se actualiza cuando cambian las reglas. Somos una agencia de seguros privada, no Medicare ni el gobierno. Si prefiere conversarlo, [contáctenos](page:contact) para recibir ayuda gratis en persona en Metairie o por teléfono, en español o en inglés.',
        },
      ],
    },
  ],
};
