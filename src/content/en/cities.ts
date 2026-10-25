import type { CitySlug } from '@/config/cities';
import { site } from '@/config/site';
import type { CityContent } from '../types';
import { carrierNames } from '../carrier-names';

/*
 * Sources (verified 2026-10-25):
 * - Parish Councils on Aging (Jefferson, New Orleans, St. Bernard, St. Tammany, East Baton Rouge) and
 *   the Capital Area Agency on Aging (serves East Baton Rouge, Livingston, Ascension, St. Tammany and
 *   others): Governor's Office of Elderly Affairs directory, https://goea.louisiana.gov/agency-directory/
 * - Louisiana SHIIP, 1-800-259-5300: https://www.shiphelp.org/ships/louisiana/
 * - SEP rules after a disaster / moving, plan network rules: see src/content/en/guides.ts sources.
 * Hospitals are named only as places people use; no plan network participation is claimed.
 * Routes are described without distances or drive times.
 */
const office = site.address ? `${site.address.streetAddress}, ${site.address.addressLocality}` : 'our Metairie office';

const cities: Record<CitySlug, CityContent> = {
  'new-orleans': {
    h1: 'Medicare Advantage Plans in New Orleans & Your Local Medicare Agent',
    lede: 'From Gentilly to the Garden District and from New Orleans East to Algiers, we help New Orleanians compare Medicare Advantage, Medicare Supplement and drug plans that work with the doctors and pharmacies they already use.',
    sections: [
      {
        id: 'nola-plans',
        heading: 'Medicare Advantage plans in New Orleans',
        blocks: [
          {
            type: 'p',
            text: 'Orleans Parish residents can usually choose from many [Medicare Advantage plans](page:service-medicare-advantage), and the choices change every year. We narrow them down to the few that fit your doctors, prescriptions and budget, then explain the differences in plain English or Spanish, side by side, including what each plan would cost you over a full year.',
          },
          {
            type: 'p',
            text: 'Not everyone in the city is best served by Medicare Advantage. If you want to keep seeing any doctor who takes Medicare, travel often, or split time with family out of state, we will also price a [Medicare Supplement plan](page:service-medicare-supplement) with a separate [Part D drug plan](page:service-part-d-prescription-drug-plans) so you can compare both paths honestly.',
          },
        ],
      },
      {
        id: 'nola-neighborhoods',
        heading: 'Help for every neighborhood in the city',
        blocks: [
          {
            type: 'p',
            text: 'New Orleans is a city of neighborhoods, and Medicare questions look a little different in each one. A retiree in Lakeview may want a plan that keeps a longtime specialist. A family in the Seventh Ward may be helping a parent who just turned 65 sort through a mailbox full of plan offers. A couple in New Orleans East may be weighing dental and vision extras. We take the time to understand your situation before we compare a single plan.',
          },
        ],
      },
      {
        id: 'nola-health-systems',
        heading: 'Checking your doctors and hospitals',
        blocks: [
          {
            type: 'p',
            text: 'Many New Orleans residents get their care through large local health systems such as Ochsner Health and LCMC Health, along with independent doctors across the city. Plan networks don’t always include every hospital or clinic, and they can change from one year to the next. Before you enroll, we confirm that your primary care doctor, your specialists and your preferred hospital are in network for the year you are choosing.',
          },
          {
            type: 'p',
            text: 'If you live with diabetes or a heart condition, ask us about Chronic Condition Special Needs Plans. Our guide to [Medicare plans for diabetes and heart disease](page:guide-diabetes-heart-snp) explains who qualifies and when you can join.',
          },
        ],
      },
      {
        id: 'nola-meeting',
        heading: 'Getting to our office from New Orleans',
        blocks: [
          {
            type: 'p',
            text: `Our office is at ${office}, just across the parish line from the city. From most New Orleans neighborhoods it’s a short drive west into Metairie, and our appointments are unhurried, so there’s time for every question. If getting around town is hard, or you’d rather stay home, we can go over everything by phone instead.`,
          },
          {
            type: 'p',
            text: 'Prefer to start with someone in your own area? Read about [Medicare help in Metairie](page:city-metairie), or if you live across the river, our page on [Medicare plans in Gretna and the West Bank](page:city-gretna).',
          },
        ],
      },
      {
        id: 'nola-free-help',
        heading: 'Free, unbiased help in Orleans Parish',
        blocks: [
          {
            type: 'p',
            text: 'Besides working with an agent, you can get free help from the New Orleans Council on Aging, which serves older adults in the parish, and from Louisiana’s SHIIP counselors at 1-800-259-5300. For signing up for Medicare itself, see our guide: [Is there a Medicare office near me in New Orleans?](page:guide-medicare-office)',
          },
        ],
      },
      {
        id: 'nola-hurricanes',
        heading: 'Hurricane season and your coverage',
        blocks: [
          {
            type: 'p',
            text: 'Every New Orleanian knows to keep a go-bag ready from June through November. Add your Medicare card, your plan ID cards and a current list of your medicines. When a disaster or public health emergency is declared, Medicare plans may relax some rules, for example making it easier to get care from out-of-network providers or to refill prescriptions early. If you evacuate, call your plan, or call us for help.',
          },
        ],
      },
      {
        id: 'nola-turning-65',
        heading: 'Turning 65 in New Orleans',
        blocks: [
          {
            type: 'p',
            text: 'Your Initial Enrollment Period lasts seven months: the three months before the month you turn 65, your birthday month, and the three months after. Signing up on time helps you avoid late enrollment penalties for Part B and Part D, and it starts your one-time six-month window to buy a Medicare Supplement without health questions. We help New Orleans residents line up those dates so nothing is missed.',
          },
        ],
      },
      {
        id: 'nola-medicaid',
        heading: 'Medicare and Medicaid in New Orleans',
        blocks: [
          {
            type: 'p',
            text: 'Some New Orleans residents qualify for both Medicare and Louisiana Medicaid, or for help with costs through Extra Help or a Medicare Savings Program. If that’s you, a Dual Eligible Special Needs Plan may coordinate your benefits. Our page on [Medicare Special Needs Plans](page:service-special-needs-plans) explains the options, and we can help you understand where to apply for assistance.',
          },
        ],
      },
      {
        id: 'nola-families',
        heading: 'Helping a parent with Medicare',
        blocks: [
          {
            type: 'p',
            text: 'Many of our New Orleans conversations include a son, daughter or grandchild helping an older relative. You’re welcome at every appointment. If you need to call Medicare on a parent’s behalf, Medicare has an “Authorization to Disclose Personal Health Information” form, in English and Spanish, that lets your parent name you as someone Medicare may speak with.',
          },
        ],
      },
      {
        id: 'nola-extras',
        heading: 'Dental, vision and hearing in the city',
        blocks: [
          {
            type: 'p',
            text: 'Original Medicare doesn’t cover routine dental care, eyeglasses or hearing aids. Many Medicare Advantage plans in Orleans Parish include some of these extras, usually with limits, and a stand-alone [dental and vision plan](page:service-dental-vision-insurance) can fill the gap if you have a Medigap policy. We compare what each option really pays for.',
          },
        ],
      },
      {
        id: 'nola-why-us',
        heading: 'Why New Orleanians call a local agent',
        blocks: [
          {
            type: 'p',
            text: 'A national call center can enroll you in a plan, but it won’t know which clinics are near you or remember you next fall. We do. You’ll talk to the same two licensed agents every time, and our help costs you nothing.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I meet a Medicare agent in person in New Orleans?',
        a: `Yes. We meet New Orleans residents at our office at ${office}, a short drive from the city, by appointment. If you can’t travel, we can help by phone.`,
      },
      {
        q: 'How many Medicare Advantage plans are available in New Orleans?',
        a: 'It changes every year and depends on your ZIP code. We look up every plan we offer at your address and narrow the list to the ones that cover your doctors and medicines.',
      },
      {
        q: 'Do Medicare plans in New Orleans cover Ochsner or LCMC Health?',
        a: 'Some do and some don’t, and networks can change each year. Tell us which doctors and hospitals you use, and we’ll check each plan before you enroll.',
      },
      {
        q: 'Is your help free for New Orleans residents?',
        a: 'Yes. Insurance companies pay us, and your premium is the same whether you enroll with us or on your own.',
      },
    ],
    nearby: ['Metairie', 'Gretna', 'Chalmette', 'Harahan', 'Kenner'],
    featured: ['medicare-advantage', 'medicare-supplement', 'part-d-prescription-drug-plans'],
  },

  metairie: {
    h1: 'Medicare Advantage Plans & Medicare Agents in Metairie',
    lede: `Our office is right here in Metairie, at ${office}. We help Jefferson Parish seniors compare Medicare Advantage, Medicare Supplement and Part D plans face to face, with care and patience, at no cost for our help.`,
    sections: [
      {
        id: 'metairie-office',
        heading: 'Visit our Metairie office',
        blocks: [
          {
            type: 'p',
            text: `You’ll find us at **${office}, LA ${site.address?.postalCode ?? ''}**, on Veterans Boulevard near the New Orleans line. Visits are by appointment, so call ${site.primaryPhone.display} and we’ll set a time that works for you and any family members who want to join.`,
          },
          { type: 'h3', text: 'Getting here' },
          {
            type: 'ul',
            items: [
              '**From elsewhere in Metairie or Kenner:** Veterans Boulevard runs east toward our office.',
              '**From New Orleans:** head west across the parish line into Metairie.',
              '**From the Northshore:** the Causeway Bridge lands in Metairie, a short drive from Veterans Boulevard.',
              '**From the West Bank:** cross the river and continue into Metairie.',
            ],
          },
          {
            type: 'p',
            text: 'When you call to book, we’ll explain where to park and how to find our suite, and we’ll make sure the visit is comfortable if you use a cane, walker or wheelchair.',
          },
        ],
      },
      {
        id: 'metairie-plans',
        heading: 'Medicare Advantage plans in Metairie',
        blocks: [
          {
            type: 'p',
            text: 'Jefferson Parish has a wide choice of [Medicare Advantage plans](page:service-medicare-advantage), and the line-up changes every fall. We compare the plans offered at your address, check your doctors and medicines, and add up the total yearly cost, not just the premium, so you can see which plan really fits.',
          },
        ],
      },
      {
        id: 'metairie-networks',
        heading: 'Plans that work with your Jefferson Parish doctors',
        blocks: [
          {
            type: 'p',
            text: 'Metairie residents often see physicians affiliated with nearby hospitals such as East Jefferson General Hospital and Ochsner. Networks differ from plan to plan and can change from one year to the next, so we verify your doctors, specialists and pharmacy before we recommend anything.',
          },
        ],
      },
      {
        id: 'metairie-choices',
        heading: 'Medicare Advantage or Medigap?',
        blocks: [
          {
            type: 'p',
            text: 'A common question for Metairie retirees is whether to choose Medicare Advantage or a [Medicare Supplement](page:service-medicare-supplement) that lets them see any provider nationwide. If you split time between Louisiana and family in another state, that difference matters a great deal. We lay out both paths side by side. If you have diabetes or a heart condition, we’ll also check whether a [C-SNP for diabetes or heart disease](page:guide-diabetes-heart-snp) is offered where you live.',
          },
        ],
      },
      {
        id: 'metairie-east-bank',
        heading: 'Local help on the East Bank',
        blocks: [
          {
            type: 'p',
            text: 'Metairie is an unincorporated community, so Jefferson Parish provides many of its local services, including the Jefferson Council on Aging, which serves older adults in the parish. Louisiana’s SHIIP program (1-800-259-5300) also offers free Medicare counseling. What we add is someone nearby to call when a question comes up, not a national call center that has never heard of Veterans Boulevard.',
          },
          {
            type: 'p',
            text: 'We also help neighbors in [Kenner](page:city-kenner) and across the river in [Gretna](page:city-gretna), and many of our clients live in [New Orleans](page:city-new-orleans).',
          },
        ],
      },
      {
        id: 'metairie-spanish',
        heading: 'Hablamos español',
        blocks: [
          {
            type: 'p',
            text: 'Jefferson Parish is home to a large Spanish-speaking community, and many families prefer to talk about health insurance in Spanish. Both of our agents are fluent, so you and your relatives can ask every question in the language you’re most comfortable with.',
          },
        ],
      },
      {
        id: 'metairie-appointment',
        heading: 'What to bring to your appointment',
        blocks: [
          {
            type: 'p',
            text: 'Bring your Medicare card, any plan cards, a list of your medicines with doses, and the names of your doctors. In the fall, bring your Annual Notice of Change too. That’s all we need to get started.',
          },
        ],
      },
      {
        id: 'metairie-supplement',
        heading: 'Medicare Supplement plans in Metairie',
        blocks: [
          {
            type: 'p',
            text: `If you prefer Original Medicare, we compare Medigap plans from ${carrierNames('medicare-supplement', 'en')}. The benefits of each lettered plan are identical from company to company, so the comparison comes down to price and how each company raises its rates over time. Many Metairie retirees weigh Plan G against Plan N, and we show you the numbers for both.`,
          },
        ],
      },
      {
        id: 'metairie-pharmacy',
        heading: 'Your pharmacy and your drug plan',
        blocks: [
          {
            type: 'p',
            text: 'Drug costs can swing widely from one plan to another, even for the same medicine. We look up each prescription on every plan’s drug list, check whether your Metairie pharmacy is preferred, and flag any medicine that needs prior approval. If your income is limited, we’ll explain Extra Help, which you can apply for through Social Security at any time.',
          },
        ],
      },
      {
        id: 'metairie-year-round',
        heading: 'Help after you enroll',
        blocks: [
          {
            type: 'p',
            text: 'Our work doesn’t end when your application is submitted. Metairie clients call us about a confusing bill, a lost card, a doctor leaving the network or a new prescription. Every fall we review your Annual Notice of Change together, and if your plan still fits, you stay put.',
          },
        ],
      },
      {
        id: 'metairie-new-to-medicare',
        heading: 'New to Medicare in Jefferson Parish?',
        blocks: [
          {
            type: 'p',
            text: 'If you’re already getting Social Security, Medicare usually mails your card about three months before your 65th birthday and enrolls you in Parts A and B automatically. If you’re not, you sign up through Social Security. Either way, an appointment in our Metairie office a few months ahead gives you time to compare plans calmly instead of rushing.',
          },
        ],
      },
      {
        id: 'metairie-family',
        heading: 'Life and final expense coverage, too',
        blocks: [
          {
            type: 'p',
            text: 'While you’re here, John can also review [life insurance](page:service-life-insurance) or a small [final expense policy](page:service-final-expense-insurance) so a spouse or children aren’t left with funeral bills. There’s no pressure; many clients simply want to know their options.',
          },
        ],
      },
      {
        id: 'metairie-scams',
        heading: 'Unsure about a phone call? Stop by instead',
        blocks: [
          {
            type: 'p',
            text: 'Medicare won’t call you uninvited to sell you a plan or ask for your Medicare number. If you get a pushy call or a letter you don’t understand, bring it to our Metairie office or call us, and we’ll tell you whether it’s real. Our [scam protection guide](page:scam) lists the warning signs.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I meet a Medicare agent in person in Metairie?',
        a: `Yes. Our office is at ${office}. Call ${site.primaryPhone.display} to set up an appointment.`,
      },
      {
        q: 'Is your Metairie office a Medicare office?',
        a: 'No. We are a licensed private insurance agency, not Medicare or the government. We help you compare and enroll in private Medicare plans. For Medicare itself, see our guide to [where to get Medicare help near you](page:guide-medicare-office).',
      },
      {
        q: 'Do you have Medicare agents who speak Spanish in Metairie?',
        a: 'Yes. Both of our agents speak English and Spanish, and your whole appointment can be in Spanish.',
      },
      {
        q: 'Do I need an appointment?',
        a: 'Yes, please call first so we can set aside time just for you and have plans ready to review.',
      },
    ],
    nearby: ['Harahan', 'River Ridge', 'Kenner', 'Jefferson', 'New Orleans'],
    featured: ['medicare-advantage', 'medicare-supplement', 'special-needs-plans'],
  },

  kenner: {
    h1: 'Medicare Advantage Plans in Kenner, LA: Bilingual Help',
    lede: 'Kenner is home to many families with roots across Latin America, and we’re proud to serve them in both English and Spanish. Whether you’re new to Medicare or reviewing your plan, we’ll explain your options clearly, at no cost to you.',
    sections: [
      {
        id: 'kenner-community',
        heading: 'A city of many cultures',
        blocks: [
          {
            type: 'p',
            text: 'Kenner, the largest city in Jefferson Parish, is known as the home of Louis Armstrong New Orleans International Airport. It also has one of the largest Hispanic communities in Louisiana, including many Honduran families. Many older adults in Kenner are working through Medicare for the first time while helping children and grandchildren, and they deserve advice in the language they know best.',
          },
        ],
      },
      {
        id: 'kenner-plans',
        heading: 'Comparing Medicare Advantage plans in Kenner',
        blocks: [
          {
            type: 'p',
            text: 'We start with what matters to you: the clinic you visit, the pharmacy around the corner and the medicines you take. Then we compare the [Medicare Advantage plans](page:service-medicare-advantage) offered at your Kenner address and show you, in Spanish or English, how copays, drug costs and the yearly out-of-pocket limit add up.',
          },
        ],
      },
      {
        id: 'kenner-first-time',
        heading: 'New to Medicare?',
        blocks: [
          {
            type: 'p',
            text: 'Your Initial Enrollment Period starts three months before the month you turn 65 and ends three months after it. We’ll help you decide whether to sign up for Part B now, whether your job-based coverage counts as creditable, and which path, Medicare Advantage or Original Medicare with a supplement, fits your life. If you or your spouse are still working, the timing rules are different, and we’ll walk you through them.',
          },
        ],
      },
      {
        id: 'kenner-costs',
        heading: 'Help with costs',
        blocks: [
          {
            type: 'p',
            text: 'If money is tight, you may qualify for programs that lower your costs, such as Extra Help with prescription drugs or the Medicare Savings Programs offered through Louisiana Medicaid. We can help you understand what might apply and where to apply. People who have both Medicare and Medicaid may also qualify for [special needs plans](page:service-special-needs-plans) designed for them, and people with diabetes or heart conditions may want to read about [C-SNPs](page:guide-diabetes-heart-snp).',
          },
        ],
      },
      {
        id: 'kenner-route',
        heading: 'Getting to us from Kenner',
        blocks: [
          {
            type: 'p',
            text: 'Our office is in neighboring [Metairie](page:city-metairie), on Veterans Boulevard. From Kenner, Veterans Boulevard and I-10 both lead east toward us, so most visits are an easy trip. Family members are always welcome to join the conversation, in English, in Spanish, or in both.',
          },
          {
            type: 'p',
            text: 'The Jefferson Council on Aging serves older adults across the parish, including Kenner, and Louisiana’s SHIIP counselors (1-800-259-5300) give free, unbiased Medicare advice if you’d like a second opinion.',
          },
        ],
      },
      {
        id: 'kenner-part-d',
        heading: 'Prescription drug plans for Kenner families',
        blocks: [
          {
            type: 'p',
            text: 'If you choose Original Medicare, you’ll want a separate [Part D drug plan](page:service-part-d-prescription-drug-plans). We check every medicine against each plan’s drug list and tiers, compare the pharmacies you use in Kenner, and estimate what you would pay over the year. Waiting to get drug coverage when you’re first eligible can mean a penalty later, so we help you get it right the first time.',
          },
        ],
      },
      {
        id: 'kenner-planning',
        heading: 'Planning ahead for your loved ones',
        blocks: [
          {
            type: 'p',
            text: 'Many Kenner families also ask how to keep funeral costs from falling on their children. A small [final expense policy](page:service-final-expense-insurance) is one option, and John can explain how it works in Spanish or English, with no pressure to buy.',
          },
        ],
      },
      {
        id: 'kenner-scams',
        heading: 'Watch out for calls in any language',
        blocks: [
          {
            type: 'p',
            text: 'Scam calls about Medicare arrive in Spanish as well as English. Medicare will never call to sell you anything, and a real agent won’t pressure you to enroll over the phone. If a caller asks for your Medicare or Social Security number, hang up and call us. Read more about [avoiding Medicare scams](page:scam).',
          },
        ],
      },
      {
        id: 'kenner-working',
        heading: 'Still working at 65?',
        blocks: [
          {
            type: 'p',
            text: 'Many Kenner residents keep working past 65, at the airport, in hospitality or in their own businesses. If you or your spouse have health coverage from a current job, you may be able to wait to sign up for Part B. You can sign up any time while you’re still covered by that plan, or during the 8 months after the job or the coverage ends, whichever comes first, without a late penalty. COBRA and retiree coverage don’t count as coverage from current work, so let’s check your situation before you decide.',
          },
        ],
      },
      {
        id: 'kenner-review',
        heading: 'A yearly review, in your language',
        blocks: [
          {
            type: 'p',
            text: 'Plans change their drug lists, copays and doctors every year. Each fall, when your Annual Notice of Change arrives, call us. Between October 15 and December 7 we’ll compare your plan against the others offered in Kenner and tell you plainly whether a change makes sense, in Spanish or English.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I meet a Medicare agent in person in Kenner?',
        a: 'Yes. Our office is next door in Metairie, an easy trip from Kenner, and visits are by appointment. We can also help by phone.',
      },
      {
        q: 'Can my whole appointment be in Spanish?',
        a: 'Yes. Both of our agents speak Spanish, so your whole appointment, and every follow-up call, can be in Spanish.',
      },
      {
        q: 'Can you help me if I just turned 65?',
        a: 'Yes. We explain your Initial Enrollment Period, Part B timing and your plan choices, and help you avoid late enrollment penalties.',
      },
    ],
    nearby: ['Metairie', 'River Ridge', 'Harahan', 'LaPlace'],
    featured: ['medicare-advantage', 'part-d-prescription-drug-plans', 'final-expense-insurance'],
  },

  gretna: {
    h1: 'Medicare Advantage Plans in Gretna & the West Bank',
    lede: 'On the West Bank, we help residents of Gretna, Marrero, Harvey, Terrytown and Westwego make sense of Medicare, with personal help close to home.',
    sections: [
      {
        id: 'gretna-west-bank',
        heading: 'Serving the West Bank',
        blocks: [
          {
            type: 'p',
            text: 'Gretna is the seat of Jefferson Parish government and sits just across the Mississippi River from downtown New Orleans. Together with Marrero, Harvey, Terrytown and Westwego, it’s part of a close-knit West Bank community where people often prefer to handle important decisions face to face. That’s exactly how we like to work.',
          },
        ],
      },
      {
        id: 'gretna-plans',
        heading: 'Medicare Advantage choices on the West Bank',
        blocks: [
          {
            type: 'p',
            text: 'The plans offered in Gretna are not always the same as the ones across the river, and West Bank residents often have strong ties to particular doctors. We compare [Medicare Advantage plans](page:service-medicare-advantage) available at your address, and we’ll also show you how a [Medicare Supplement](page:service-medicare-supplement) would work if you’d rather keep the freedom to see any provider that accepts Medicare.',
          },
        ],
      },
      {
        id: 'gretna-hospitals',
        heading: 'Know your West Bank network',
        blocks: [
          {
            type: 'p',
            text: 'West Bank residents commonly use hospitals such as Ochsner Medical Center – West Bank Campus in Gretna and West Jefferson Medical Center in Marrero, plus doctors throughout the area. Not every plan includes every West Bank provider, so we check the network for each plan we compare. A [hospital indemnity plan](page:service-hospital-indemnity-insurance) can also help with copays if you’re admitted.',
          },
        ],
      },
      {
        id: 'gretna-review',
        heading: 'Your yearly plan checkup',
        blocks: [
          {
            type: 'p',
            text: 'Plans change their costs, drug lists and networks every year. Each fall, read your Annual Notice of Change when it arrives. If you’re happy, your plan renews automatically. If something changed, such as a higher copay, a dropped medicine or a doctor who left the network, call us and we’ll review your options before the [Annual Enrollment Period](page:aep) closes on December 7.',
          },
        ],
      },
      {
        id: 'gretna-route',
        heading: 'Crossing the river to see us',
        blocks: [
          {
            type: 'p',
            text: 'Our office is in [Metairie](page:city-metairie). From Gretna, the Crescent City Connection takes you into New Orleans and on to Metairie; from Marrero, Harvey or Westwego, the Huey P. Long Bridge is another way across. If the drive is more than you want to take on, a phone appointment works just as well.',
          },
          {
            type: 'p',
            text: 'For free counseling, the Jefferson Council on Aging serves older adults on both banks of the parish, and Louisiana’s SHIIP program answers Medicare questions at 1-800-259-5300.',
          },
        ],
      },
      {
        id: 'gretna-scams',
        heading: 'Protect yourself from scam calls',
        blocks: [
          {
            type: 'p',
            text: 'Scammers often target older adults with calls about “new Medicare cards” or “free” medical equipment. Never give your Medicare number to someone who calls you out of the blue. If you’re not sure a call is legitimate, hang up and call us. Learn more on our [Medicare scam protection page](page:scam).',
          },
        ],
      },
      {
        id: 'gretna-dental',
        heading: 'Dental and vision for West Bank seniors',
        blocks: [
          {
            type: 'p',
            text: 'Original Medicare doesn’t cover routine cleanings, dentures, eye exams or glasses. Some Medicare Advantage plans include limited dental and vision benefits, and a separate [dental and vision plan](page:service-dental-vision-insurance) is another route. We compare what each option actually covers so you aren’t surprised at the dentist’s office in Gretna or Marrero.',
          },
        ],
      },
      {
        id: 'gretna-medicaid',
        heading: 'Medicare and Medicaid on the West Bank',
        blocks: [
          {
            type: 'p',
            text: 'If you have both Medicare and Louisiana Medicaid, or you may qualify for Extra Help or a Medicare Savings Program, there are plans and programs designed for your situation. We explain how [Dual Eligible Special Needs Plans](page:service-special-needs-plans) work and point you to the right place to apply.',
          },
        ],
      },
      {
        id: 'gretna-turning-65',
        heading: 'Turning 65 on the West Bank',
        blocks: [
          {
            type: 'p',
            text: 'If you already receive Social Security benefits, you’ll usually be enrolled in Parts A and B automatically, and your welcome package with your Medicare card arrives about three months before your coverage starts. That package is your cue to call us. We’ll compare Medicare Advantage and Medigap with you and make sure your drug coverage is in place, so you don’t face a late enrollment penalty later.',
          },
          {
            type: 'p',
            text: 'Not getting Social Security yet? Then you sign up through Social Security yourself. Our guide to [where to get Medicare help near you](page:guide-medicare-office) explains how.',
          },
        ],
      },
      {
        id: 'gretna-csnp',
        heading: 'Living with diabetes or a heart condition?',
        blocks: [
          {
            type: 'p',
            text: 'Some Medicare Advantage plans, called Chronic Condition Special Needs Plans, are built for people with conditions like diabetes or chronic heart failure, and you can join one any time of year if you qualify. Whether one is offered on the West Bank depends on the year. Our guide to [Medicare plans for diabetes and heart disease](page:guide-diabetes-heart-snp) explains the rules, and we can check what’s available at your address.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I meet a Medicare agent in person if I live in Gretna?',
        a: 'Yes. We meet West Bank residents at our Metairie office by appointment, across the river, and we can also help by phone if crossing the bridge is a hassle.',
      },
      {
        q: 'Do Medicare plans on the West Bank cover West Jefferson Medical Center?',
        a: 'It depends on the plan and the year. Tell us the hospitals and doctors you use, and we’ll check each plan’s network before you choose.',
      },
      {
        q: 'Do you help people in Marrero, Harvey and Westwego too?',
        a: 'Yes. We help people all over the West Bank and throughout Jefferson Parish.',
      },
    ],
    nearby: ['Marrero', 'Harvey', 'Terrytown', 'Westwego', 'Algiers'],
    featured: ['medicare-advantage', 'hospital-indemnity-insurance', 'dental-vision-insurance'],
  },

  chalmette: {
    h1: 'Medicare Advantage Plans in Chalmette & St. Bernard Parish',
    lede: 'St. Bernard Parish is a resilient, tight-knit community, and Chalmette families deserve Medicare advice from people who know the area. We offer patient, no-cost help comparing plans and reviewing your coverage.',
    sections: [
      {
        id: 'chalmette-community',
        heading: 'A community that looks out for each other',
        blocks: [
          {
            type: 'p',
            text: 'Chalmette is the parish seat of St. Bernard Parish, just downriver from New Orleans’ Lower Ninth Ward. Families here rebuilt after Hurricane Katrina, and many older residents have lived in the parish for generations. St. Bernard is also known for its Isleño heritage, with roots in the Canary Islands, so Spanish-language help is part of the story here too.',
          },
        ],
      },
      {
        id: 'chalmette-plans',
        heading: 'Medicare Advantage plans in St. Bernard Parish',
        blocks: [
          {
            type: 'p',
            text: 'St. Bernard has its own set of plans and service areas, which may not match what a friend in Orleans or Jefferson Parish sees. We look up the [Medicare Advantage plans](page:service-medicare-advantage) offered at your Chalmette, Arabi, Meraux or Violet address and compare the ones that include your doctors.',
          },
        ],
      },
      {
        id: 'chalmette-care',
        heading: 'Care close to home',
        blocks: [
          {
            type: 'p',
            text: 'Having doctors and a hospital nearby matters, especially in an emergency. Many residents rely on St. Bernard Parish Hospital in Chalmette as well as providers in [New Orleans](page:city-new-orleans). When we compare plans, we confirm that the doctors and facilities you use, on both sides of the parish line, are covered.',
          },
        ],
      },
      {
        id: 'chalmette-supplement',
        heading: 'Thinking about a Medicare Supplement?',
        blocks: [
          {
            type: 'p',
            text: 'If you like the idea of seeing any doctor who accepts Medicare, a [Medicare Supplement](page:service-medicare-supplement) may be worth a look. The best time to buy one is during your six-month Medigap Open Enrollment Period, which starts when you’re 65 or older and enrolled in Part B. We’ll explain what that window means for you, and how a [Part D plan](page:service-part-d-prescription-drug-plans) fits alongside it.',
          },
        ],
      },
      {
        id: 'chalmette-family',
        heading: 'Planning ahead for your family',
        blocks: [
          {
            type: 'p',
            text: 'Conversations about Medicare often turn to family: who will handle things, and how final costs will be paid. A small [final expense policy](page:service-final-expense-insurance) can help your loved ones cover a funeral without dipping into their savings. John can walk you through the options with no pressure.',
          },
        ],
      },
      {
        id: 'chalmette-meet',
        heading: 'Meeting with us from St. Bernard',
        blocks: [
          {
            type: 'p',
            text: 'Our office is in Metairie, on the other side of New Orleans, so many St. Bernard clients prefer a phone review, while others enjoy the trip in and an unhurried sit-down. Either way, we bring the plan comparisons; you bring your questions, your medicine list and your Medicare card.',
          },
          {
            type: 'p',
            text: 'Locally, the St. Bernard Council on Aging serves older adults in the parish, and Louisiana’s SHIIP counselors offer free Medicare advice at 1-800-259-5300.',
          },
        ],
      },
      {
        id: 'chalmette-spanish',
        heading: 'Spanish-language help for St. Bernard families',
        blocks: [
          {
            type: 'p',
            text: 'Whether your family’s Spanish comes from the Isleño tradition or from more recent roots in Latin America, both of our agents can explain Medicare entirely in Spanish. Bring a relative if you like; we’re glad to talk with everyone at the table.',
          },
        ],
      },
      {
        id: 'chalmette-cards',
        heading: 'Replacing cards and records after a storm',
        blocks: [
          {
            type: 'p',
            text: 'If your Medicare card is lost or damaged, you can print or order an official copy from your secure Medicare.gov account, or call 1-800-MEDICARE to have a replacement mailed. Your plan can send a new plan card. Keep photos of your cards and a list of your medicines on your phone so you have them during an evacuation.',
          },
        ],
      },
      {
        id: 'chalmette-drug-costs',
        heading: 'Help paying for prescriptions',
        blocks: [
          {
            type: 'p',
            text: 'If your income and resources are limited, Extra Help can lower what you pay for Medicare drug coverage. You can apply at any time through Social Security at SSA.gov/extrahelp, and we’re happy to explain how it works with your plan.',
          },
        ],
      },
      {
        id: 'chalmette-dates',
        heading: 'Key Medicare dates for St. Bernard residents',
        blocks: [
          {
            type: 'ul',
            items: [
              '**October 15 – December 7:** review your plan and switch if something better fits, for coverage starting January 1.',
              '**January 1 – March 31:** if you’re in a Medicare Advantage plan, you can switch plans or go back to Original Medicare once.',
              '**Around your 65th birthday:** your seven-month Initial Enrollment Period, when most people first choose their coverage.',
            ],
          },
          {
            type: 'p',
            text: 'Write these on your calendar, and call us a few weeks before so we have time to compare plans with you.',
          },
        ],
      },
      {
        id: 'chalmette-choosing',
        heading: 'Medicare Advantage or Original Medicare in St. Bernard?',
        blocks: [
          {
            type: 'p',
            text: 'If most of your doctors are in Chalmette and New Orleans and you rarely travel, a Medicare Advantage plan with those providers in network can work well. If you want the widest choice of doctors anywhere in the country, Original Medicare with a Medigap policy may suit you better. We put both side by side with your real doctors and medicines.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I meet a Medicare agent in person from Chalmette?',
        a: 'Yes, at our Metairie office by appointment. Many St. Bernard clients find a phone appointment easier, and we’re glad to do either.',
      },
      {
        q: 'Are Medicare plans in St. Bernard Parish different from New Orleans?',
        a: 'They can be. Each plan has its own service area, so we check the plans offered at your St. Bernard address rather than assuming.',
      },
      {
        q: 'Can you help with final expense insurance too?',
        a: 'Yes. John helps St. Bernard families with final expense and life insurance, with no pressure and no cost for our help.',
      },
    ],
    nearby: ['Arabi', 'Meraux', 'Violet', 'New Orleans'],
    featured: ['medicare-supplement', 'final-expense-insurance', 'part-d-prescription-drug-plans'],
  },

  slidell: {
    h1: 'Medicare Advantage Plans in Slidell, LA',
    lede: 'Slidell sits at the eastern edge of St. Tammany Parish, close to the Mississippi state line. We help Slidell residents choose Medicare coverage that fits Northshore life.',
    sections: [
      {
        id: 'slidell-northshore',
        heading: 'Medicare on the eastern Northshore',
        blocks: [
          {
            type: 'p',
            text: 'Across Lake Pontchartrain from New Orleans, Slidell connects to the South Shore by the I-10 Twin Span and to Mississippi by I-10 and I-59. Many residents see doctors locally, while others still travel into New Orleans or across the state line for specialists. That makes network rules an important part of choosing a plan.',
          },
        ],
      },
      {
        id: 'slidell-plans',
        heading: 'Choosing a Medicare Advantage plan in Slidell',
        blocks: [
          {
            type: 'p',
            text: 'St. Tammany Parish has its own set of [Medicare Advantage plans](page:service-medicare-advantage). We compare the ones offered at your Slidell, Pearl River or Lacombe address and check how each handles the doctors you see on the Northshore, in New Orleans and in Mississippi.',
          },
        ],
      },
      {
        id: 'slidell-providers',
        heading: 'Your local providers',
        blocks: [
          {
            type: 'p',
            text: 'Slidell residents often use Slidell Memorial Hospital and Ochsner Medical Center – Northshore, along with practices throughout eastern St. Tammany. If you see a specialist in New Orleans or in Mississippi, tell us. Some plans handle cross-lake and out-of-state providers better than others, and the difference can mean hundreds of dollars or a surprise bill. We check each one by name before you choose.',
          },
        ],
      },
      {
        id: 'slidell-plan-types',
        heading: 'HMO, PPO or Supplement?',
        blocks: [
          {
            type: 'p',
            text: 'If you want the freedom to see providers across state lines, a PPO-style Medicare Advantage plan or a [Medicare Supplement](page:service-medicare-supplement) may suit you better than an HMO. We explain how each option handles out-of-network care and what it could cost you in a typical year. If you have diabetes or heart failure, ask whether a [C-SNP](page:guide-diabetes-heart-snp) is offered in St. Tammany.',
          },
        ],
      },
      {
        id: 'slidell-storms',
        heading: 'Storm-ready coverage',
        blocks: [
          {
            type: 'p',
            text: 'Slidell knows storm surge and evacuations. Keep copies of your insurance cards and medicine list in a waterproof bag, and ask your pharmacy about refills before a storm arrives. If a disaster is declared and you have to relocate, special rules may make it easier to get care or change plans. You might also consider [hospital indemnity coverage](page:service-hospital-indemnity-insurance) for extra cash during a hospital stay.',
          },
        ],
      },
      {
        id: 'slidell-meet',
        heading: 'Meeting with us from Slidell',
        blocks: [
          {
            type: 'p',
            text: 'Our office is in [Metairie](page:city-metairie), across the lake. Many Slidell clients choose a phone appointment, and others combine a visit with a trip to the South Shore. We also help neighbors to the west in [Covington and Mandeville](page:city-covington).',
          },
          {
            type: 'p',
            text: 'For free local help, the St. Tammany Council on Aging serves older adults in the parish, the Capital Area Agency on Aging covers St. Tammany too, and Louisiana’s SHIIP program answers Medicare questions at 1-800-259-5300.',
          },
        ],
      },
      {
        id: 'slidell-moving',
        heading: 'Moved to Slidell from another state?',
        blocks: [
          {
            type: 'p',
            text: 'Lots of Slidell retirees arrived from Mississippi or farther away. Moving out of your old plan’s service area usually opens a Special Enrollment Period to choose a new plan, and if your Medicare Advantage plan no longer covers where you live, you may have a guaranteed right to buy certain Medigap policies. Call us soon after your move so you don’t miss the window.',
          },
        ],
      },
      {
        id: 'slidell-supplement',
        heading: 'Medicare Supplement plans in eastern St. Tammany',
        blocks: [
          {
            type: 'p',
            text: `For people who want to see doctors on both sides of the state line, we compare Medigap plans from ${carrierNames('medicare-supplement', 'en')}. Because every company’s Plan G or Plan N has the same benefits, we focus on price and how each company sets its rates as you age.`,
          },
        ],
      },
      {
        id: 'slidell-extras',
        heading: 'Dental, vision and hearing extras',
        blocks: [
          {
            type: 'p',
            text: 'Hearing aids, dentures and eyeglasses are common questions in Slidell. Original Medicare doesn’t cover them routinely. Many Medicare Advantage plans include some coverage with limits, and a separate [dental and vision plan](page:service-dental-vision-insurance) works alongside a Medigap policy. We read the fine print so you know what a plan would really pay before you choose it.',
          },
        ],
      },
      {
        id: 'slidell-part-d',
        heading: 'Prescription coverage in Slidell',
        blocks: [
          {
            type: 'p',
            text: 'If you pair Original Medicare with a Medigap policy, you’ll also need a [Part D drug plan](page:service-part-d-prescription-drug-plans). We look up each medicine, its tier and its estimated yearly cost, and check whether the pharmacy you use in Slidell is preferred. Drug lists change every year, so we review your plan again each fall before December 7.',
          },
          {
            type: 'p',
            text: 'If your income is limited, Extra Help can lower your drug costs, and you can apply through Social Security at any time.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I meet a Medicare agent in person if I live in Slidell?',
        a: 'Yes, at our Metairie office by appointment. Most Slidell clients prefer to meet by phone, and we work the same way either way.',
      },
      {
        q: 'Will my Medicare plan cover doctors in Mississippi?',
        a: 'It depends on the plan. Many HMOs cover only emergency and urgent care outside their service area, while PPOs and Medicare Supplements are more flexible. We check before you enroll.',
      },
      {
        q: 'What should I do with my coverage if a hurricane forces me to evacuate?',
        a: 'Take your cards and medicine list, call your plan, and call us. When a disaster is declared, special rules may make it easier to get care away from home.',
      },
    ],
    nearby: ['Pearl River', 'Lacombe', 'Mandeville', 'Covington'],
    featured: ['medicare-advantage', 'medicare-supplement', 'hospital-indemnity-insurance'],
  },

  covington: {
    h1: 'Medicare Advantage Plans in Covington & Mandeville',
    lede: 'Covington and Mandeville are home to many active retirees who want a plan that keeps up with their lives. We offer thoughtful, no-cost Medicare guidance across western St. Tammany Parish.',
    sections: [
      {
        id: 'covington-area',
        heading: 'Serving western St. Tammany',
        blocks: [
          {
            type: 'p',
            text: 'Covington is the parish seat of St. Tammany, and neighboring Mandeville sits on the north shore of Lake Pontchartrain at the end of the Causeway. Many residents moved here from the South Shore and still keep doctors in New Orleans or Metairie, while others have switched to providers on the Northshore.',
          },
        ],
      },
      {
        id: 'covington-plans',
        heading: 'Medicare Advantage plans in Covington and Mandeville',
        blocks: [
          {
            type: 'p',
            text: 'We compare the [Medicare Advantage plans](page:service-medicare-advantage) offered at your Covington, Mandeville, Madisonville or Abita Springs address, and we look closely at referral rules, since many western St. Tammany retirees see specialists on both sides of the lake.',
          },
        ],
      },
      {
        id: 'covington-networks',
        heading: 'Doctors on both sides of the lake',
        blocks: [
          {
            type: 'p',
            text: 'The Northshore has its own hospitals, including St. Tammany Health System in Covington and Lakeview Regional Medical Center, as well as clinics from larger health systems. If you see doctors on both sides of the lake, a plan’s network, and whether it requires referrals, can make a real difference. We check every provider you use, from your cardiologist to your eye doctor, and we confirm whether a plan needs referrals before you can see them. That way your first appointment of the new year goes the way you expect.',
          },
        ],
      },
      {
        id: 'covington-travel',
        heading: 'Traveling or visiting family?',
        blocks: [
          {
            type: 'p',
            text: 'If you spend part of the year traveling or visiting family out of state, ask how a plan handles care away from home. [Medicare Supplement](page:service-medicare-supplement) plans work with any provider nationwide that accepts Medicare, while many Medicare Advantage plans cover only emergency and urgent care outside their service area. We help you weigh the trade-offs.',
          },
        ],
      },
      {
        id: 'covington-dental',
        heading: 'Don’t overlook dental and vision',
        blocks: [
          {
            type: 'p',
            text: 'Original Medicare and Medicare Supplement plans don’t cover routine dental or vision care. If you have a supplement, adding a [dental and vision plan](page:service-dental-vision-insurance) can help with cleanings, dentures, eye exams and glasses.',
          },
        ],
      },
      {
        id: 'covington-route',
        heading: 'Across the Causeway to our office',
        blocks: [
          {
            type: 'p',
            text: 'The Causeway Bridge lands in [Metairie](page:city-metairie), a short drive from our office on Veterans Boulevard, so a visit is often easier from Mandeville than people expect. If you’d rather not cross the lake, we’ll review everything by phone. We also help clients to the east in [Slidell](page:city-slidell).',
          },
          {
            type: 'p',
            text: 'For free help nearby, the St. Tammany Council on Aging and the Capital Area Agency on Aging both serve St. Tammany Parish, and Louisiana’s SHIIP counselors can be reached at 1-800-259-5300.',
          },
        ],
      },
      {
        id: 'covington-moving',
        heading: 'New to the Northshore?',
        blocks: [
          {
            type: 'p',
            text: 'Covington and Mandeville welcome many retirees from out of state. If you move out of your current plan’s service area, you can usually switch plans with a Special Enrollment Period. If you had a Medicare Advantage plan that doesn’t serve St. Tammany, you may also have a guaranteed right to buy certain Medigap policies. We help you sort out timing so coverage doesn’t lapse.',
          },
        ],
      },
      {
        id: 'covington-active',
        heading: 'Plans for an active retirement',
        blocks: [
          {
            type: 'p',
            text: 'Some Medicare Advantage plans include extras such as gym memberships or fitness programs, and some cover hearing or vision benefits that Original Medicare doesn’t. These benefits are generally limited and vary by plan, so we check the details instead of judging a plan by its brochure, and we only count the extras you will actually use.',
          },
        ],
      },
      {
        id: 'covington-life',
        heading: 'Protecting your spouse and family',
        blocks: [
          {
            type: 'p',
            text: 'Northshore clients often ask about protecting a spouse or leaving something for grandchildren. John can explain affordable [life insurance](page:service-life-insurance) options and how they fit alongside your Medicare coverage.',
          },
        ],
      },
      {
        id: 'covington-working',
        heading: 'Still working past 65 on the Northshore?',
        blocks: [
          {
            type: 'p',
            text: 'If you or your spouse have health insurance from a current employer, you may be able to delay Part B without a penalty. You can sign up while you’re still covered, or within 8 months after the job or coverage ends, whichever is first. Retiree coverage and COBRA work differently, so check with us before you drop anything.',
          },
        ],
      },
      {
        id: 'covington-csnp',
        heading: 'Heart conditions and diabetes',
        blocks: [
          {
            type: 'p',
            text: 'If you’ve been diagnosed with diabetes, heart failure or coronary artery disease, ask whether a Chronic Condition Special Needs Plan is offered in St. Tammany for the coming year. These plans include care coordination and drug coverage, and you can join one whenever you qualify. Our guide to [C-SNPs for diabetes and heart disease](page:guide-diabetes-heart-snp) covers eligibility and what to ask before enrolling.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I meet a Medicare agent in person from Covington or Mandeville?',
        a: 'Yes. Our office is in Metairie, near the south end of the Causeway, and visits are by appointment. Phone reviews work well too.',
      },
      {
        q: 'Should I choose a plan that covers doctors on both sides of the lake?',
        a: 'If you see specialists in New Orleans or Metairie, yes, check that. We confirm every doctor you use, on either shore, before you enroll.',
      },
      {
        q: 'Does a Medicare Supplement cover dental and vision?',
        a: 'No. Medigap follows Original Medicare’s rules, so routine dental and vision need a separate plan. We can help with that too.',
      },
    ],
    nearby: ['Mandeville', 'Madisonville', 'Abita Springs', 'Slidell'],
    featured: ['medicare-supplement', 'medicare-advantage', 'dental-vision-insurance'],
  },

  'baton-rouge': {
    h1: 'Medicare Advantage Plans in Baton Rouge, LA',
    lede: 'Louisiana’s capital is an important part of the area we serve. We help Baton Rouge residents compare Medicare plans, review their coverage each year, and get clear answers in English or Spanish, at no cost to them.',
    sections: [
      {
        id: 'br-capital',
        heading: 'Medicare help in the Capital Region',
        blocks: [
          {
            type: 'p',
            text: 'Baton Rouge, in East Baton Rouge Parish, is up I-10 from New Orleans and has its own mix of [Medicare Advantage plans](page:service-medicare-advantage) and provider networks. The plan that works well in New Orleans may not be the best choice here, so we compare the plans actually available at your address.',
          },
        ],
      },
      {
        id: 'br-suburbs',
        heading: 'Serving greater Baton Rouge',
        blocks: [
          {
            type: 'p',
            text: 'We also help people in the communities around the capital, including **Denham Springs** in Livingston Parish, **Prairieville** and **Gonzales** in Ascension Parish, and **Zachary** north of the city. Plans and networks can differ from parish to parish, so we always look up your exact address. A plan sold in East Baton Rouge may not be offered in Livingston or Ascension, and the reverse is true too. We meet with greater Baton Rouge clients by phone, and we’re happy to talk about setting up an in-person meeting.',
          },
        ],
      },
      {
        id: 'br-hospitals',
        heading: 'Checking Baton Rouge networks',
        blocks: [
          {
            type: 'p',
            text: 'Major hospitals in the area include Our Lady of the Lake Regional Medical Center, Baton Rouge General and Ochsner Medical Center – Baton Rouge. Some plans include one system but not another, so we look up your doctors, specialists and hospital before recommending a plan.',
          },
        ],
      },
      {
        id: 'br-retirees',
        heading: 'Retiring from a state or employer plan?',
        blocks: [
          {
            type: 'p',
            text: 'Many Baton Rouge residents work for state government, universities, hospitals or large employers. If you are retiring, find out how your employer or retiree coverage works with Medicare before you make changes; dropping retiree coverage can be hard to undo. Bring your benefits paperwork and we will help you see how the pieces fit together, including whether a [Medicare Supplement](page:service-medicare-supplement) or a [Part D plan](page:service-part-d-prescription-drug-plans) makes sense.',
          },
        ],
      },
      {
        id: 'br-quote',
        heading: 'How to get a Medicare quote in Baton Rouge',
        blocks: [
          {
            type: 'p',
            text: 'Call us for a free plan review. Have your Medicare card, your current plan card if you have one, your list of medicines and doses, and your doctors’ names ready. We’ll compare the plans offered at your address and walk you through the costs, by phone, in English or Spanish. If you have diabetes or a heart condition, ask about [C-SNPs](page:guide-diabetes-heart-snp) too.',
          },
        ],
      },
      {
        id: 'br-how-we-work',
        heading: 'Free local resources in the Capital Region',
        blocks: [
          {
            type: 'p',
            text: 'The East Baton Rouge Council on Aging and the Capital Area Agency on Aging serve older adults in the region, and Louisiana’s SHIIP program gives free Medicare counseling at 1-800-259-5300. With us, you work with the same licensed agents from start to finish, including when you need [life insurance](page:service-life-insurance).',
          },
        ],
      },
      {
        id: 'br-turning-65',
        heading: 'Turning 65 in Baton Rouge',
        blocks: [
          {
            type: 'p',
            text: 'If you’re still working for the state, a university or a hospital system at 65, the timing of Part B depends on your employer coverage. If you’re retiring, your seven-month Initial Enrollment Period and your six-month Medigap Open Enrollment Period matter. We’ll map out your dates so you avoid penalties and keep your options open.',
          },
        ],
      },
      {
        id: 'br-spanish',
        heading: 'Bilingual Medicare help in the capital',
        blocks: [
          {
            type: 'p',
            text: 'Baton Rouge has a growing Spanish-speaking community, and many families want to talk about health coverage in Spanish. Every review we do can be fully in Spanish, and family members can join the call.',
          },
        ],
      },
      {
        id: 'br-part-d',
        heading: 'Drug plans and pharmacies in Baton Rouge',
        blocks: [
          {
            type: 'p',
            text: 'Whether you choose Medicare Advantage with drug coverage or Original Medicare with a separate drug plan, we check every prescription on the plan’s list, its tier and whether your Baton Rouge pharmacy is preferred. If cost is a concern, we explain Extra Help, which you can apply for through Social Security at any time. Medicines change, so we recheck your drug plan every fall.',
          },
        ],
      },
      {
        id: 'br-medicaid',
        heading: 'Medicare, Medicaid and help with costs',
        blocks: [
          {
            type: 'p',
            text: 'Some Baton Rouge residents qualify for both Medicare and Louisiana Medicaid, or for programs that help pay Medicare costs, like Extra Help and the Medicare Savings Programs. If you have both Medicare and full Medicaid, a [Dual Eligible Special Needs Plan](page:service-special-needs-plans) may coordinate your benefits. We explain the choices and point you to where you can apply.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I meet a Medicare agent in person in Baton Rouge?',
        a: 'We usually help Baton Rouge clients by phone, and we’re happy to talk about an in-person meeting. Our office is in Metairie.',
      },
      {
        q: 'Do you help people in Denham Springs, Prairieville, Gonzales and Zachary?',
        a: 'Yes. We help people throughout greater Baton Rouge and check the plans offered at each exact address.',
      },
      {
        q: 'How do I get a Medicare insurance quote in Baton Rouge?',
        a: 'Call us for a free plan review. Have your Medicare card, medicine list and doctors’ names ready, and we’ll compare the plans offered at your address.',
      },
      {
        q: 'Do Baton Rouge plans include Our Lady of the Lake?',
        a: 'Some do and some don’t, and networks can change each year. We check your doctors and hospital for every plan we compare.',
      },
    ],
    nearby: ['Denham Springs', 'Prairieville', 'Gonzales', 'Zachary'],
    featured: ['medicare-advantage', 'part-d-prescription-drug-plans', 'life-insurance'],
  },
};

export default cities;
