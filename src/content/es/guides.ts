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
          text: 'Hay oficinas del Seguro Social que atienden el área de Nueva Orleans, pero sus direcciones y horarios pueden cambiar. Antes de ir, busque la oficina que corresponde a su código postal con el [localizador de oficinas](https://www.ssa.gov/locator) del Seguro Social. Si desea una cita, Medicare sugiere comunicarse con el Seguro Social unos 3 meses antes de cumplir 65 años.',
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

export const guides: Record<GuideKey, GuideContent> = {
  'medicare-office': medicareOffice,
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
