import type { CitySlug } from '@/config/cities';
import type { CityContent } from '../types';

const cities: Record<CitySlug, CityContent> = {
  'new-orleans': {
    h1: 'Your New Orleans Medicare Agent',
    lede: 'From Gentilly to the Garden District and from New Orleans East to Algiers, we help New Orleanians understand Medicare and choose plans that work with the doctors and pharmacies they already use.',
    sections: [
      {
        id: 'nola-neighborhoods',
        heading: 'Help for every neighborhood in the city',
        blocks: [
          {
            type: 'p',
            text: 'New Orleans is a city of neighborhoods, and Medicare questions look a little different in each one. A retiree in Lakeview may want a plan that keeps a longtime specialist, while a family in the Seventh Ward may be helping a parent who just turned 65 sort through a mailbox full of plan offers. We take the time to understand your situation before we compare a single plan.',
          },
          {
            type: 'p',
            text: 'Orleans Parish residents can usually choose from many Medicare Advantage plans, and the choices can feel overwhelming. We narrow them down to the few that fit your doctors, prescriptions and budget, and we explain the differences in plain English or Spanish.',
          },
        ],
      },
      {
        id: 'nola-health-systems',
        heading: 'Checking your doctors and hospitals',
        blocks: [
          {
            type: 'p',
            text: "Many New Orleans residents get their care through large local health systems such as Ochsner Health and LCMC Health, along with independent doctors across the city. Plan networks don't always include every hospital or clinic, so before you enroll we confirm that your primary care doctor, your specialists and your preferred hospital are in network.",
          },
        ],
      },
      {
        id: 'nola-meeting',
        heading: 'Sitting down together in the city',
        blocks: [
          {
            type: 'p',
            text: "Face-to-face help is at the heart of what we do. Call us and we'll set up an in-person appointment at a time and place that suit you. If getting around town is hard, or you'd rather stay home, we can go over everything by phone instead.",
          },
        ],
      },
      {
        id: 'nola-hurricanes',
        heading: 'Hurricane season and your coverage',
        blocks: [
          {
            type: 'p',
            text: 'Every New Orleanian knows to keep a go-bag ready from June through November. Add your Medicare card, your plan ID cards and a current list of your medicines. When a disaster or public health emergency is declared, Medicare plans may relax some rules — for example, making it easier to get care from out-of-network providers or to refill prescriptions early. If you evacuate, call your plan, or call us for help.',
          },
        ],
      },
    ],
    nearby: ['Metairie', 'Gretna', 'Chalmette', 'Harahan', 'Kenner'],
    featured: ['medicare-advantage', 'medicare-supplement', 'part-d-prescription-drug-plans'],
  },

  metairie: {
    h1: 'Medicare Agent Serving Metairie, Louisiana',
    lede: 'Metairie is one of the largest communities in Jefferson Parish, and many of its residents are enjoying retirement close to children and grandchildren. We help Metairie seniors compare Medicare plans with care and patience — at no cost for our help.',
    sections: [
      {
        id: 'metairie-east-bank',
        heading: 'Local help on the East Bank',
        blocks: [
          {
            type: 'p',
            text: 'Metairie stretches along the lakefront from the 17th Street Canal toward Kenner. It is an unincorporated community, so Jefferson Parish provides many of its local services. When it comes to Medicare, what matters most is having someone nearby to call when a question comes up — not a national call center that has never heard of Veterans Boulevard.',
          },
        ],
      },
      {
        id: 'metairie-networks',
        heading: 'Plans that work with your Jefferson Parish doctors',
        blocks: [
          {
            type: 'p',
            text: 'Metairie residents often see physicians affiliated with nearby hospitals such as East Jefferson General Hospital and Ochsner. Networks differ from plan to plan — and can change from one year to the next — so we verify your doctors, specialists and pharmacy before we recommend anything.',
          },
        ],
      },
      {
        id: 'metairie-choices',
        heading: 'Medicare Advantage or Medigap?',
        blocks: [
          {
            type: 'p',
            text: 'A common question for Metairie retirees is whether to choose a [Medicare Advantage plan](page:service-medicare-advantage) with a low premium or a [Medicare Supplement](page:service-medicare-supplement) that lets them see any provider nationwide. If you split time between Louisiana and family in another state, that difference matters a great deal. We lay out both paths side by side, including total yearly costs.',
          },
        ],
      },
      {
        id: 'metairie-spanish',
        heading: 'Hablamos español',
        blocks: [
          {
            type: 'p',
            text: "Jefferson Parish is home to a large Spanish-speaking community, and many families prefer to talk about health insurance in Spanish. Both of our agents are fluent, so you and your relatives can ask every question in the language you're most comfortable with.",
          },
        ],
      },
      {
        id: 'metairie-appointment',
        heading: 'Setting up your appointment',
        blocks: [
          {
            type: 'p',
            text: "Call or send us a message and we'll schedule a time to sit down together. Please bring your Medicare card, any plan cards, and a list of your medicines and doctors — that's all we need to get started.",
          },
        ],
      },
    ],
    nearby: ['Harahan', 'River Ridge', 'Kenner', 'Jefferson', 'New Orleans'],
    featured: ['medicare-advantage', 'medicare-supplement', 'special-needs-plans'],
  },

  kenner: {
    h1: 'Bilingual Medicare Help in Kenner, Louisiana',
    lede: "Kenner is home to many families with roots across Latin America, and we're proud to serve them in both English and Spanish. Whether you're new to Medicare or reviewing your plan, we'll explain your options clearly — at no cost to you.",
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
        id: 'kenner-first-time',
        heading: 'New to Medicare?',
        blocks: [
          {
            type: 'p',
            text: "Your Initial Enrollment Period starts three months before the month you turn 65 and ends three months after it. We'll help you decide whether to sign up for Part B now, whether your job-based coverage counts as creditable, and which path — Medicare Advantage or Original Medicare with a supplement — fits your life. If you or your spouse are still working, the timing rules are different, and we'll walk you through them.",
          },
        ],
      },
      {
        id: 'kenner-costs',
        heading: 'Help with costs',
        blocks: [
          {
            type: 'p',
            text: 'If money is tight, you may qualify for programs that lower your costs, such as Extra Help with prescription drugs or the Medicare Savings Programs offered through Louisiana Medicaid. We can help you understand what might apply and where to apply. People who have both Medicare and Medicaid may also qualify for [special needs plans](page:service-special-needs-plans) with added benefits.',
          },
        ],
      },
      {
        id: 'kenner-meet',
        heading: 'Meeting with you and your family',
        blocks: [
          {
            type: 'p',
            text: "We're close by in Greater New Orleans. Give us a call to arrange an in-person appointment, or talk with us by phone if that's easier. Family members are always welcome to join the conversation — in English, in Spanish, or in both.",
          },
        ],
      },
    ],
    nearby: ['Metairie', 'River Ridge', 'Harahan', 'LaPlace'],
    featured: ['medicare-advantage', 'part-d-prescription-drug-plans', 'final-expense-insurance'],
  },

  gretna: {
    h1: 'Medicare Agent for Gretna & the West Bank',
    lede: 'On the West Bank, we help residents of Gretna, Marrero, Harvey, Terrytown and Westwego make sense of Medicare — with personal help close to home.',
    sections: [
      {
        id: 'gretna-west-bank',
        heading: 'Serving the West Bank',
        blocks: [
          {
            type: 'p',
            text: "Gretna is the seat of Jefferson Parish government and sits just across the Mississippi River from downtown New Orleans. Together with Marrero, Harvey, Terrytown and Westwego, it's part of a close-knit West Bank community where people often prefer to handle important decisions face to face. That's exactly how we like to work.",
          },
        ],
      },
      {
        id: 'gretna-hospitals',
        heading: 'Know your West Bank network',
        blocks: [
          {
            type: 'p',
            text: 'West Bank residents commonly use hospitals such as Ochsner Medical Center – West Bank Campus in Gretna and West Jefferson Medical Center in Marrero, plus doctors throughout the area. Not every plan includes every West Bank provider, so we check the network for each plan we compare.',
          },
        ],
      },
      {
        id: 'gretna-review',
        heading: 'Your yearly plan checkup',
        blocks: [
          {
            type: 'p',
            text: "Plans change their costs, drug lists and networks every year. Each fall, read your Annual Notice of Change when it arrives. If you're happy, your plan renews automatically. If something changed — a higher copay, a dropped medicine, a doctor who left the network — call us and we'll review your options before the [Annual Enrollment Period](page:aep) closes on December 7. Bring the notice with you and we'll go through it line by line.",
          },
        ],
      },
      {
        id: 'gretna-scams',
        heading: 'Protect yourself from scam calls',
        blocks: [
          {
            type: 'p',
            text: "Scammers often target older adults with calls about “new Medicare cards” or “free” medical equipment. Never give your Medicare number to someone who calls you out of the blue. If you're not sure a call is legitimate, hang up and call us. Learn more on our [Medicare scam protection page](page:scam).",
          },
        ],
      },
    ],
    nearby: ['Marrero', 'Harvey', 'Terrytown', 'Westwego', 'Algiers'],
    featured: ['medicare-advantage', 'hospital-indemnity-insurance', 'dental-vision-insurance'],
  },

  chalmette: {
    h1: 'Medicare Agent in Chalmette & St. Bernard Parish',
    lede: 'St. Bernard Parish is a resilient, tight-knit community, and Chalmette families deserve Medicare advice from people who know the area. We offer patient, no-cost help comparing plans and reviewing your coverage.',
    sections: [
      {
        id: 'chalmette-community',
        heading: 'A community that looks out for each other',
        blocks: [
          {
            type: 'p',
            text: "Chalmette is the parish seat of St. Bernard Parish, just downriver from New Orleans' Lower Ninth Ward. Families here rebuilt after Hurricane Katrina, and many older residents have lived in the parish for generations. St. Bernard is also known for its Isleño heritage, with roots in the Canary Islands — so Spanish-language help is part of the story here too.",
          },
        ],
      },
      {
        id: 'chalmette-care',
        heading: 'Care close to home',
        blocks: [
          {
            type: 'p',
            text: 'Having doctors and a hospital nearby matters, especially in an emergency. Many residents rely on St. Bernard Parish Hospital in Chalmette as well as providers in New Orleans. When we compare plans, we confirm that the doctors and facilities you use — on both sides of the parish line — are covered.',
          },
        ],
      },
      {
        id: 'chalmette-supplement',
        heading: 'Thinking about a Medicare Supplement?',
        blocks: [
          {
            type: 'p',
            text: "If you like the idea of seeing any doctor who accepts Medicare, a [Medicare Supplement](page:service-medicare-supplement) may be worth a look. The best time to buy one is during your six-month Medigap Open Enrollment Period, which starts when you're 65 or older and enrolled in Part B. We'll explain what that window means for you.",
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
        heading: "Let's talk",
        blocks: [
          {
            type: 'p',
            text: 'Call us to schedule a visit or a phone review. We bring the plan comparisons; you bring your questions, your medicine list and your Medicare card.',
          },
        ],
      },
    ],
    nearby: ['Arabi', 'Meraux', 'Violet', 'New Orleans'],
    featured: ['medicare-supplement', 'final-expense-insurance', 'part-d-prescription-drug-plans'],
  },

  slidell: {
    h1: 'Medicare Agent in Slidell, Louisiana',
    lede: 'Slidell sits at the eastern edge of St. Tammany Parish, close to the Mississippi state line. We help Slidell residents choose Medicare coverage that fits Northshore life.',
    sections: [
      {
        id: 'slidell-northshore',
        heading: 'Medicare on the Northshore',
        blocks: [
          {
            type: 'p',
            text: 'Across Lake Pontchartrain from New Orleans, Slidell connects to the South Shore by the I-10 Twin Span and to Mississippi by I-10 and I-59. Many residents see doctors locally, while others still travel into New Orleans or across the state line for specialists. That makes network rules an important part of choosing a plan.',
          },
        ],
      },
      {
        id: 'slidell-providers',
        heading: 'Your local providers',
        blocks: [
          {
            type: 'p',
            text: 'Slidell residents often use Slidell Memorial Hospital and Ochsner Medical Center – Northshore, along with practices throughout eastern St. Tammany. If you see a specialist in New Orleans or in Mississippi, tell us — some plans handle cross-lake and out-of-state providers better than others.',
          },
        ],
      },
      {
        id: 'slidell-plan-types',
        heading: 'HMO, PPO or Supplement?',
        blocks: [
          {
            type: 'p',
            text: 'If you want the freedom to see providers across state lines, a PPO-style [Medicare Advantage plan](page:service-medicare-advantage) or a [Medicare Supplement](page:service-medicare-supplement) may suit you better than an HMO. We explain how each option handles out-of-network care and what it could cost you in a typical year.',
          },
        ],
      },
      {
        id: 'slidell-storms',
        heading: 'Storm-ready coverage',
        blocks: [
          {
            type: 'p',
            text: "Slidell knows storm surge and evacuations. Keep copies of your insurance cards and medicine list in a waterproof bag, and ask your pharmacy about refills before a storm arrives. If a disaster is declared and you have to relocate, special rules may make it easier to get care or change plans. We're a phone call away if you need help sorting it out. You might also consider [hospital indemnity coverage](page:service-hospital-indemnity-insurance) for extra cash during a hospital stay.",
          },
        ],
      },
    ],
    nearby: ['Pearl River', 'Lacombe', 'Mandeville', 'Covington'],
    featured: ['medicare-advantage', 'medicare-supplement', 'hospital-indemnity-insurance'],
  },

  covington: {
    h1: 'Medicare Agent for Covington & Mandeville',
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
        id: 'covington-networks',
        heading: 'Doctors on both sides of the lake',
        blocks: [
          {
            type: 'p',
            text: "The Northshore has its own hospitals, including St. Tammany Health System in Covington and Lakeview Regional Medical Center, as well as clinics from larger health systems. If you see doctors on both sides of the lake, a plan's network — and whether it requires referrals — can make a real difference. We check every provider you use.",
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
        heading: "Don't overlook dental and vision",
        blocks: [
          {
            type: 'p',
            text: "Original Medicare and Medicare Supplement plans don't cover routine dental or vision care. If you have a supplement, adding a [dental and vision plan](page:service-dental-vision-insurance) can help with cleanings, dentures, eye exams and glasses.",
          },
        ],
      },
      {
        id: 'covington-schedule',
        heading: 'Scheduling a review',
        blocks: [
          {
            type: 'p',
            text: "Reach out by phone or through our contact form. We'll find a convenient time to meet in person or talk by phone, in English or Spanish.",
          },
        ],
      },
    ],
    nearby: ['Mandeville', 'Madisonville', 'Abita Springs', 'Slidell'],
    featured: ['medicare-supplement', 'medicare-advantage', 'dental-vision-insurance'],
  },

  'baton-rouge': {
    h1: 'Medicare Agent Serving Baton Rouge',
    lede: "Louisiana's capital is an important part of the area we serve. We help Baton Rouge residents compare Medicare plans, review their coverage each year, and get answers in English or Spanish.",
    sections: [
      {
        id: 'br-capital',
        heading: 'Medicare help in the Capital Region',
        blocks: [
          {
            type: 'p',
            text: 'Baton Rouge, in East Baton Rouge Parish, is about 80 miles up I-10 from New Orleans. The city has its own mix of Medicare plans and provider networks, so the plan that works well in New Orleans may not be the best choice here. We compare the plans actually available where you live.',
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
            text: 'Many Baton Rouge residents work for state government, universities, hospitals or large employers. If you are retiring, find out how your employer or retiree coverage works with Medicare before you make changes — dropping retiree coverage can be hard to undo. Bring your benefits paperwork and we will help you see how the pieces fit together.',
          },
        ],
      },
      {
        id: 'br-how-we-work',
        heading: 'How we work with Baton Rouge clients',
        blocks: [
          {
            type: 'p',
            text: "We're based in Greater New Orleans and serve clients throughout Louisiana. For Baton Rouge, we can review your options by phone, and we're happy to talk about setting up an in-person meeting. Either way, you work with the same licensed agents from start to finish — including when you need [life insurance](page:service-life-insurance) or a new [Part D plan](page:service-part-d-prescription-drug-plans).",
          },
        ],
      },
    ],
    nearby: ['Denham Springs', 'Prairieville', 'Gonzales', 'Zachary'],
    featured: ['medicare-advantage', 'part-d-prescription-drug-plans', 'life-insurance'],
  },
};

export default cities;
