import type { ProductKey } from '@/config/products';
import type { ServiceContent } from '../types';
import { carrierNames } from '../carrier-names';

const services: Record<ProductKey, ServiceContent> = {
  /*
   * Sources (verified 2026-10-25), Medicare & You 2027,
   * https://www.medicare.gov/publications/10050-medicare-and-you.pdf :
   * - MA = "Part C"; Medicare-approved private companies; still have Medicare; plan card; most include
   *   Part D; networks/service area; yearly out-of-pocket limit; prior authorization; referrals;
   *   plan types HMO / PPO / PFFS / MSA / SNP; Part B premium plus any plan premium; most plans offer
   *   extra benefits; Plan Finder shows whether your providers are in network; 1–5 star ratings and the
   *   5-star SEP; Oct 15–Dec 7 and Jan 1–Mar 31 (one switch) periods; compare plans from October 1;
   *   what MA covers (hospice / transplant / trials stay with Original Medicare), limited extra benefits,
   *   provider network changes during the year and plan obligations.
   * - Insurers decide where plans are offered: https://www.medicare.gov/health-drug-plans/health-plans/your-health-plan-options/SNP
   * Health systems are named only as examples people ask about; no network participation is claimed.
   */
  'medicare-advantage': {
    h1: 'Medicare Advantage Plans in Louisiana',
    lede: 'Medicare Advantage, also called Part C, bundles your hospital, medical and usually drug coverage into one plan from a Medicare-approved private company. We help people across Louisiana compare plans for {planYear} and choose one that fits their doctors, medicines and budget.',
    summary:
      'Personal, no-cost help comparing and enrolling in Medicare Advantage (Part C) plans in Louisiana, from licensed, bilingual local agents.',
    whoFor: [
      'People with Medicare Part A and Part B who want one plan instead of several',
      'Anyone who wants a yearly limit on out-of-pocket costs for covered services',
      'People who value extra benefits many plans include, such as dental, vision or hearing coverage',
      "Those comfortable using a plan's network of doctors and hospitals",
    ],
    covers: [
      'Everything Original Medicare Part A (hospital) and Part B (medical) covers',
      'Prescription drug coverage in most plans (often called MAPD plans)',
      'A yearly out-of-pocket limit for covered Part A and Part B services',
      'Extra benefits that vary by plan, such as routine dental, vision, hearing and fitness programs',
    ],
    sections: [
      {
        id: 'what-is-medicare-advantage',
        heading: 'What is a Medicare Advantage (Part C) plan?',
        blocks: [
          {
            type: 'p',
            text: 'A Medicare Advantage plan is another way to get your Medicare Part A and Part B coverage, through a Medicare-approved private insurance company instead of Original Medicare. You still have Medicare, but your plan pays your claims and you use the plan’s card when you get care.',
          },
          {
            type: 'p',
            text: 'Most Medicare Advantage plans include Medicare drug coverage (Part D). Every plan sets a yearly limit on what you pay out of pocket for covered Part A and Part B services. In return, you may need to use doctors in the plan’s network, get a referral to see a specialist, or get approval (prior authorization) before the plan covers certain services or drugs. You keep paying your Part B premium, and you may also pay a premium to the plan.',
          },
        ],
      },
      {
        id: 'what-it-covers',
        heading: 'What do Medicare Advantage plans cover?',
        blocks: [
          {
            type: 'p',
            text: 'Almost all the medically necessary services and supplies Original Medicare covers. If you are in a Medicare Advantage plan, Original Medicare still pays for hospice care, kidney transplant costs and some costs of clinical research studies.',
          },
          {
            type: 'p',
            text: "Many plans also include extras that Original Medicare doesn't, such as vision, hearing and dental care, gym memberships, rides to doctor visits or certain over-the-counter items. These benefits are generally limited, so we check exactly what each plan covers before you join.",
          },
        ],
      },
      {
        id: 'costs',
        heading: 'How much does a Medicare Advantage plan cost?',
        blocks: [
          {
            type: 'p',
            text: "It varies by plan. You pay your Part B premium, any premium the plan charges, and copays, coinsurance or deductibles when you get care, up to the plan's yearly out-of-pocket limit. Each plan sets its own costs and rules, and they can change every year.",
          },
          {
            type: 'p',
            text: 'That is why we compare total yearly cost: the premium plus what you would expect to pay for your usual doctor visits, specialists and prescriptions. A plan with a low premium can cost more over a year than one with a higher premium, depending on the care you use.',
          },
        ],
      },
      {
        id: 'part-c-plans-in-louisiana',
        heading: 'Medicare Part C plans in Louisiana',
        blocks: [
          {
            type: 'p',
            text: 'Medicare Part C plans and Medicare Advantage plans are the same thing. In Louisiana, as everywhere, they come in a few types:',
          },
          {
            type: 'ul',
            items: [
              '**HMO (Health Maintenance Organization):** you generally use doctors and hospitals in the plan’s network, except in an emergency, and may need referrals.',
              '**PPO (Preferred Provider Organization):** you can see out-of-network providers, usually at a higher cost.',
              '**Special Needs Plans (SNPs):** limited to people with certain chronic conditions, people with both Medicare and Medicaid, or people who need nursing-home-level care. See our guide to [Medicare plans for diabetes and heart disease](page:guide-diabetes-heart-snp).',
              '**Other types**, such as Private Fee-for-Service and Medical Savings Account plans, exist but may not be offered where you live.',
            ],
          },
          { type: 'h3', text: 'Plans vary by parish' },
          {
            type: 'p',
            text: 'Insurance companies decide where they offer each plan, and every plan has a service area. The plans available in Orleans or Jefferson Parish can differ from those in St. Tammany or East Baton Rouge, and they can change from year to year. We look up the plans offered at your address for the year you are choosing.',
          },
          { type: 'h3', text: 'Louisiana hospitals and doctors' },
          {
            type: 'p',
            text: 'People often ask whether a plan works with health systems such as Ochsner Health, LCMC Health or Our Lady of the Lake. Network participation is different for every plan and can change each year, so we check your specific doctors, specialists and hospitals before you enroll, not just the health system’s name.',
          },
          { type: 'h3', text: 'Medicare Advantage companies we compare' },
          {
            type: 'p',
            text: `In Louisiana we currently compare Medicare Advantage plans from ${carrierNames('medicare-advantage', 'en')}. Not every company offers plans in every parish, and we only recommend a plan that fits your situation.`,
          },
        ],
      },
      {
        id: 'how-to-choose',
        heading: 'How to choose the right Medicare Advantage plan in Louisiana',
        blocks: [
          {
            type: 'p',
            text: 'The right plan is the one that covers your doctors and medicines at the lowest total cost for the way you use care. Work through this checklist, or let us do it with you:',
          },
          {
            type: 'ol',
            items: [
              "**Doctors and hospitals.** Are your primary care doctor, specialists and preferred hospital in the plan's network? Do you need referrals?",
              "**Prescriptions.** Is each of your medicines on the plan's drug list, and at what tier? Do any need prior authorization? Is your pharmacy preferred?",
              '**Total yearly costs.** Add up the premium, deductibles, copays and the yearly out-of-pocket limit, not just the monthly price.',
              '**Travel.** Do you spend time out of state or away from home? Check what the plan covers outside its service area.',
              "**Extra benefits.** Many plans offer benefits Original Medicare doesn't cover, like vision, hearing and dental. Count only the ones you will use.",
              '**Star ratings.** Medicare rates plans from 1 to 5 stars on quality and performance. Ratings are one useful signal alongside your own needs.',
              '**Referrals and approvals.** Ask which services need a referral or prior authorization, especially for specialists and treatments you already use regularly.',
            ],
          },
          {
            type: 'p',
            text: 'You can add your providers in the [Medicare Plan Finder](https://www.medicare.gov/plan-compare) to see which plans include them, or call us to do the comparison side by side.',
          },
        ],
      },
      {
        id: 'plans-for-next-year',
        heading: 'Louisiana Medicare Advantage plans for {planYear}',
        blocks: [
          {
            type: 'p',
            text: 'Plans can change their premiums, copays, networks and drug lists every year, so the plan that fit you this year may not fit next year. Starting October 1 you can compare next year’s plans, and your current plan must tell you about any changes before the new plan year starts, in an Annual Notice of Change that explains what will be different.',
          },
          {
            type: 'p',
            text: "If you're happy after reading your notice, you don't need to do anything: your plan renews automatically. If something changed that worries you, such as a doctor leaving the network or a drug moving to a higher tier, call us for a review before December 7.",
          },
        ],
      },
      {
        id: 'when-to-enroll',
        heading: 'When can I join or switch Medicare Advantage plans?',
        blocks: [
          {
            type: 'ul',
            items: [
              '**When you first get Medicare:** during your Initial Enrollment Period around your 65th birthday.',
              '**October 15 – December 7:** the [Annual Enrollment Period](page:aep). Join, switch or drop a plan for coverage starting January 1.',
              '**January 1 – March 31:** if you are already in a Medicare Advantage plan, you can switch to another one or return to Original Medicare, once.',
              '**Special Enrollment Periods:** events like moving or losing other coverage can let you change plans at other times. If a plan with a 5-star rating is offered in your area, you can switch to it once during the year, and people with a qualifying chronic condition can join a C-SNP that serves it at any time.',
            ],
          },
        ],
      },
      {
        id: 'network-changes',
        heading: "What if my doctor leaves the plan's network?",
        blocks: [
          {
            type: 'p',
            text: "Doctors can join or leave a plan's network at any time during the year, and you generally can't change plans mid-year because of it. The plan must still give you access to qualified doctors and specialists, help you choose a new provider, help you continue care that's already in progress, and tell you about any enrollment options you have.",
          },
          {
            type: 'p',
            text: "You'll get a notice if your primary care or behavioral health provider is leaving and you've seen them in the past three years. If that happens, call us and we'll help you sort out your options.",
          },
        ],
      },
      {
        id: 'advantage-vs-supplement',
        heading: 'Medicare Advantage or Medicare Supplement?',
        blocks: [
          {
            type: 'p',
            text: 'It depends on your health, your doctors and how you like to budget. With Medicare Advantage you pay copays as you use care and generally stay within a network, with a yearly limit on your costs. A [Medicare Supplement (Medigap) plan](page:service-medicare-supplement) works alongside Original Medicare: you pay its monthly premium plus a separate Part D plan, and in return you have fewer bills when you get care and can see any provider in the U.S. that accepts Medicare.',
          },
        ],
      },
      {
        id: 'near-you',
        heading: 'Medicare Advantage help near you',
        blocks: [
          {
            type: 'p',
            text: 'We meet with people at our office on Veterans Boulevard in Metairie and help by phone anywhere in the state, in English or Spanish. Read more about [Medicare Advantage plans in New Orleans](page:city-new-orleans), [Medicare Advantage plans in Metairie](page:city-metairie), [Medicare help in Kenner](page:city-kenner) and [Medicare Advantage plans in Baton Rouge](page:city-baton-rouge).',
          },
          {
            type: 'p',
            text: "We're licensed agents, paid by the insurance companies, never by you. The plan premium is the same whether you enroll with us or on your own. What you get with us is a real person who explains your options in plain English or Spanish, helps you enroll, and stays available when you have questions about a bill or need to change plans.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the best Medicare Advantage plan in Louisiana?',
        a: "There isn't one best plan for everyone. The right plan for you covers your doctors and medicines at the lowest total yearly cost for how you use care. Use the checklist on this page, or let us compare the plans in your parish for you.",
      },
      {
        q: 'What Medicare Advantage plans are available in Louisiana for {planYear}?',
        a: 'It depends on your parish. Each company decides where it offers plans, and plans change every year. Starting October 1 you can compare next year’s plans, and you can enroll from October 15 to December 7 for coverage starting January 1. We look up every plan we offer at your address.',
      },
      {
        q: 'Is Medicare Advantage the same as Part C?',
        a: 'Yes. Medicare Advantage plans are also called Medicare Part C. They are Medicare-approved plans from private companies that replace how you get your Part A and Part B coverage.',
      },
      {
        q: 'Do I still pay my Part B premium with a Medicare Advantage plan?',
        a: 'Yes. You keep paying your monthly Part B premium, and you may also pay a premium to the plan. We help you estimate your total yearly costs, not just the premium.',
      },
      {
        q: 'Can I keep my doctor?',
        a: "It depends on the plan. Before you enroll, we check whether your doctors and preferred hospitals are in the plan's network so there are no surprises.",
      },
      {
        q: 'Which Medicare Advantage companies do you work with?',
        a: `For Medicare Advantage in Louisiana we work with ${carrierNames('medicare-advantage', 'en')}. Plan availability varies by parish, and we only recommend a plan that fits your situation.`,
      },
      {
        q: 'What if I travel or spend time out of state?',
        a: "Many plans cover only emergency and urgent care outside the plan's service area. If you travel often, ask about a PPO or a Medicare Supplement. Let's talk through your plans.",
      },
    ],
  },

  /*
   * Sources (verified 2026-10-25):
   * - Plan chart (A–N benefits, K/L out-of-pocket limits, N copays up to $20 / $50, high-deductible
   *   option in some states): https://www.medicare.gov/health-drug-plans/medigap/basics/compare-plan-benefits
   * - Plans C/F only for people eligible before Jan 1, 2020; D/G instead; Medigap Open Enrollment
   *   Period rules, pre-existing waiting period, pricing methods (community / issue-age / attained-age),
   *   Medicare SELECT, Louisiana on the list of states requiring at least one Medigap policy for people
   *   under 65, MA/MN/WI standardized differently: "Choosing a Medigap Policy",
   *   https://www.medicare.gov/publications/02110-choosing-a-medigap-policy.pdf
   * - Price is the only difference between same-letter policies; premiums typically increase each year:
   *   https://www.medicare.gov/health-drug-plans/medigap/basics/costs
   * - Guaranteed issue windows (60 days before / 63 days after coverage ends), MA trial right:
   *   https://www.medicare.gov/supplements-other-insurance/when-can-i-buy-medigap
   * - Switching: generally only in Open Enrollment or with a guaranteed issue right; insurer may still
   *   sell with underwriting; 30-day free look; up to 6-month wait:
   *   https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/change-policies/switch-drop
   * - Limiting charge up to 15% above the Medicare-approved amount: Medicare & You 2027,
   *   https://www.medicare.gov/publications/10050-medicare-and-you.pdf
   */
  'medicare-supplement': {
    h1: 'Medicare Supplement (Medigap) Plans in Louisiana',
    lede: "A Medicare Supplement plan, also called Medigap, helps pay the costs Original Medicare leaves behind, like deductibles and the 20% coinsurance. Here's how the lettered plans compare, the rules that matter in Louisiana, and how we help you choose at no cost.",
    summary:
      'No-cost guidance choosing and applying for Medicare Supplement (Medigap) insurance in Louisiana from licensed, bilingual local agents.',
    whoFor: [
      'People with Original Medicare (Parts A and B) who want fewer out-of-pocket surprises',
      'Anyone who wants to see any doctor or hospital in the country that accepts Medicare',
      'People who travel or split time between Louisiana and another state',
      'Those who prefer a steady monthly premium over copays at every visit',
    ],
    covers: [
      "Some or all of Medicare's deductibles, copays and coinsurance, depending on the plan letter",
      'The 20% Part B coinsurance on most plans',
      "Extra hospital days after Medicare's hospital coverage runs out",
      'Emergency care during foreign travel on many plans (up to plan limits)',
    ],
    sections: [
      {
        id: 'how-medigap-works',
        heading: 'How do Medicare Supplement plans work?',
        blocks: [
          {
            type: 'p',
            text: "A Medigap plan pays some or all of what Original Medicare doesn't, so you have fewer surprise bills. Original Medicare pays a large share of your hospital and medical costs, but not all of it, and it has no yearly limit on what you pay. Medigap plans are sold by private insurance companies and work alongside Original Medicare. There are no networks: if a doctor or hospital accepts Medicare, your Medigap plan pays its share too.",
          },
          {
            type: 'p',
            text: 'In Louisiana, Medigap plans are standardized and named by letter. A Plan G from one company has the same benefits as a Plan G from any other company. **Price is the only difference** between policies with the same letter, so comparing companies matters.',
          },
        ],
      },
      {
        id: 'plan-chart',
        heading: 'What does each Medigap plan cover?',
        blocks: [
          {
            type: 'p',
            text: 'This chart shows the plans sold to people new to Medicare. “Yes” means the plan pays 100% of that benefit; “No” means you pay it; a percentage means the plan pays that share; N/A means it doesn’t apply.',
          },
          {
            type: 'table',
            caption: 'Medigap plan benefits (standardized plans sold in Louisiana)',
            head: ['Benefit', 'A', 'B', 'D', 'G', 'K', 'L', 'M', 'N'],
            rows: [
              [
                'Part A coinsurance and hospital costs, up to 365 extra days',
                'Yes',
                'Yes',
                'Yes',
                'Yes',
                'Yes',
                'Yes',
                'Yes',
                'Yes',
              ],
              ['Part B coinsurance or copayment', 'Yes', 'Yes', 'Yes', 'Yes', '50%', '75%', 'Yes', 'Yes*'],
              ['Blood (first 3 pints)', 'Yes', 'Yes', 'Yes', 'Yes', '50%', '75%', 'Yes', 'Yes'],
              ['Part A hospice coinsurance or copayment', 'Yes', 'Yes', 'Yes', 'Yes', '50%', '75%', 'Yes', 'Yes'],
              ['Skilled nursing facility coinsurance', 'No', 'No', 'Yes', 'Yes', '50%', '75%', 'Yes', 'Yes'],
              ['Part A deductible', 'No', 'Yes', 'Yes', 'Yes', '50%', '75%', '50%', 'Yes'],
              ['Part B deductible', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'],
              ['Part B excess charges', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No'],
              ['Foreign travel emergency (up to plan limits)', 'No', 'No', '80%', '80%', 'No', 'No', '80%', '80%'],
              ['Yearly out-of-pocket limit', 'N/A', 'N/A', 'N/A', 'N/A', 'Yes', 'Yes', 'N/A', 'N/A'],
            ],
          },
          {
            type: 'ul',
            items: [
              '*Plan N pays the Part B coinsurance except for a copayment of up to $20 for some office visits and up to $50 for emergency room visits when you aren’t admitted.',
              'Plans K and L have a yearly out-of-pocket limit. After you reach it and pay the Part B deductible, the plan pays 100% of covered services for the rest of the year.',
              'Some companies also offer a high-deductible version of Plan G. You pay a set amount of Medicare-covered costs before the policy pays anything, in exchange for a lower premium.',
            ],
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Plans C and F',
            text: 'Plans C and F also cover the Part B deductible, so they are no longer sold to people new to Medicare on or after January 1, 2020. If you were eligible for Medicare before that date, you may still be able to buy them. If you already have one, you can keep it.',
          },
        ],
      },
      {
        id: 'plan-g-vs-plan-n',
        heading: 'Plan G vs. Plan N: which is right for you?',
        blocks: [
          {
            type: 'p',
            text: 'Plan G covers more; Plan N leaves you a few more costs, so its premium needs to be low enough to make up for them. Both cover your hospital costs and skilled nursing care, and neither covers the yearly Part B deductible. The differences are in the doctor’s office:',
          },
          {
            type: 'ul',
            items: [
              '**Copays:** with Plan G you pay nothing after the Part B deductible. With Plan N you may pay up to $20 for some office visits and up to $50 for an emergency room visit when you aren’t admitted.',
              '**Excess charges:** some doctors don’t accept Medicare’s approved amount as full payment and can charge up to 15% more. Plan G pays that “excess charge.” Plan N doesn’t.',
            ],
          },
          {
            type: 'p',
            text: 'Plan N can be a good fit if you are generally healthy and your doctors accept Medicare assignment. Plan G may suit you better if you see doctors often or want the most predictable costs. We price both from several companies so you can see whether the premium difference is worth it for you.',
          },
        ],
      },
      {
        id: 'medigap-in-louisiana',
        heading: 'Medigap in Louisiana: the rules to know',
        blocks: [
          { type: 'h3', text: 'When is the best time to buy a Medigap plan?' },
          {
            type: 'p',
            text: 'During your **Medigap Open Enrollment Period**: the 6 months that start the first month you have Medicare Part B and are 65 or older. It happens once and doesn’t repeat. During it, a company can’t refuse to sell you any policy it offers, can’t use medical underwriting, and can’t charge you more because of health problems.',
          },
          { type: 'h3', text: 'What happens if I wait?' },
          {
            type: 'p',
            text: 'Outside that window, you may pay more, have fewer choices, or be turned down after health questions, unless you have a **guaranteed issue right**. You have one in situations like these:',
          },
          {
            type: 'ul',
            items: [
              'Your Medicare Advantage plan leaves Medicare or stops serving your area, or you move out of its service area.',
              'You joined a Medicare Advantage plan for the first time when you became eligible for Medicare and want to switch back to Original Medicare within the first year.',
              'Your employer or union coverage that pays after Medicare is ending.',
              'Your Medigap company goes bankrupt, breaks the rules or misled you.',
            ],
          },
          {
            type: 'p',
            text: 'In most of these cases you apply between 60 days before and 63 days after your old coverage ends. Keep any letters or notices that show when it ended.',
          },
          { type: 'h3', text: 'Can I switch Medigap plans later?' },
          {
            type: 'p',
            text: 'Sometimes. Outside your Open Enrollment Period and without a guaranteed issue right, you can switch only if a company agrees to sell you a new policy, usually after health questions. You get 30 days to decide whether to keep the new policy (a “free look”), and a new policy may make you wait up to 6 months before covering a pre-existing condition. These are federal rights; Louisiana law may give you more, so we check before you cancel anything.',
          },
          { type: 'h3', text: 'Can I get Medigap in Louisiana if I’m under 65?' },
          {
            type: 'p',
            text: 'Possibly. Federal law doesn’t require companies to sell Medigap to people under 65, but Louisiana is one of the states that require insurance companies to offer at least one kind of Medigap policy to people with Medicare under 65. Choices and prices can differ from those for people 65 and older, so call us or the [Louisiana Department of Insurance SHIIP program](https://www.ldi.la.gov/consumers/senior-health-shiip) for the current rules.',
          },
        ],
      },
      {
        id: 'how-prices-are-set',
        heading: 'How are Medigap prices set?',
        blocks: [
          {
            type: 'p',
            text: 'Each company chooses one of three ways to price its policies, and that choice affects what you pay now and later:',
          },
          {
            type: 'ul',
            items: [
              '**Community-rated:** generally everyone pays the same premium, whatever their age.',
              '**Issue-age-rated:** the premium is based on your age when you buy, so buying younger costs less, and it doesn’t rise because you get older.',
              '**Attained-age-rated:** the premium is based on your current age, so it goes up as you get older. It may start out cheapest and become the most expensive.',
            ],
          },
          {
            type: 'p',
            text: 'With any method, premiums can still rise because of inflation and other factors, and they typically increase each year. Some companies offer discounts, such as for non-smokers or paying yearly, and some sell Medicare SELECT policies that may cost less but may require you to use certain providers. We show you how each company prices its plan, not just this year’s premium.',
          },
        ],
      },
      {
        id: 'medigap-vs-medicare-advantage',
        heading: 'Medigap vs. Medicare Advantage: what’s the difference?',
        blocks: [
          {
            type: 'p',
            text: 'Medigap works with Original Medicare; Medicare Advantage replaces how you get it. With Medigap you keep Original Medicare, can see any provider that accepts Medicare, and add a separate Part D drug plan. A [Medicare Advantage plan](page:service-medicare-advantage) is an all-in-one private plan, usually with a network, drug coverage and a yearly out-of-pocket limit.',
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'You can’t have both',
            text: "It's illegal for anyone to sell you a Medicare Supplement policy while you're in a Medicare Advantage plan, unless you're switching back to Original Medicare. If someone tries, call us before you sign anything.",
          },
        ],
      },
      {
        id: 'drug-coverage',
        heading: 'Does Medigap cover prescriptions?',
        blocks: [
          {
            type: 'p',
            text: 'No. Medigap plans sold today don’t include drug coverage. Most people pair their Medicare Supplement with a stand-alone [Part D prescription drug plan](page:service-part-d-prescription-drug-plans). If you go without creditable drug coverage when you are first eligible, you may owe a late enrollment penalty later, so we help you set up both at the same time.',
          },
        ],
      },
      {
        id: 'companies-we-compare',
        heading: 'Medicare Supplement companies we compare in Louisiana',
        blocks: [
          {
            type: 'p',
            text: `For Medigap plans we currently compare ${carrierNames('medicare-supplement', 'en')}. Premiums can differ widely between companies for the same plan letter, so we line them up side by side, explain how each sets its rates, and walk you through the application. There’s no fee for our help.`,
          },
          {
            type: 'p',
            text: 'We help with Medicare Supplement plans across the state, including [Medicare help in New Orleans](page:city-new-orleans), [Medicare agents in Metairie](page:city-metairie), [Medicare help on the Northshore in Covington](page:city-covington) and [Medicare plans in Baton Rouge](page:city-baton-rouge). [Contact us](page:contact) for a free quote comparison.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What Medigap plans are available in Louisiana?',
        a: 'Louisiana uses the standard lettered plans. People new to Medicare can choose from Plans A, B, D, G, K, L, M and N; people eligible before January 1, 2020 may also buy Plans C and F. Each company decides which letters it sells, so we compare what is offered to you.',
      },
      {
        q: 'How do I compare Medicare Supplement plans in Louisiana?',
        a: 'Pick the plan letter that fits you, then compare the same letter across companies. The benefits are identical, so look at the premium, how the company sets its rates as you age, and its service. We do this comparison with you for free.',
      },
      {
        q: 'Which Medicare Supplement plan is right for me?',
        a: 'It depends on how often you see doctors, your budget and how predictable you want your costs to be. Many people choose between Plan G (more coverage) and Plan N (some copays and excess charges). We walk through your situation and show you the numbers.',
      },
      {
        q: 'Can I switch Medigap plans in Louisiana?',
        a: 'You can apply any time, but outside your Medigap Open Enrollment Period or a guaranteed issue right, the company can ask health questions and decline you. Never cancel your current policy until the new one is approved.',
      },
      {
        q: 'Is Plan G the same with every company?',
        a: "Yes. The benefits of a lettered plan are standardized. What differs is the premium, how rates change over time, and the company's service.",
      },
      {
        q: 'Does a Medicare Supplement include dental and vision?',
        a: "No. Medigap plans follow Original Medicare's rules and don't cover routine dental, vision or hearing care. You can add a separate [dental and vision plan](page:service-dental-vision-insurance).",
      },
      {
        q: 'Can I use my Medigap plan outside Louisiana?',
        a: 'Yes. You can see any provider in the U.S. that accepts Medicare, which makes Medigap a good fit for people who travel.',
      },
    ],
  },

  'part-d-prescription-drug-plans': {
    h1: 'Medicare Part D Prescription Drug Plans in Louisiana',
    lede: "Part D plans help pay for the medicines your doctor prescribes. Every plan covers a different list of drugs at different prices, so the right plan depends on exactly what you take and where you fill it. We'll run the numbers with you.",
    summary:
      'Help comparing Medicare Part D prescription drug plans based on your medicines and pharmacy, at no cost, from licensed agents in Greater New Orleans.',
    whoFor: [
      'People with Original Medicare, with or without a Medicare Supplement',
      'Anyone whose current drug plan raised prices or dropped a medicine',
      "People turning 65 who don't have other creditable drug coverage",
      'Caregivers helping a parent manage several prescriptions',
    ],
    covers: [
      "Brand-name and generic prescription drugs on the plan's formulary",
      'Adult vaccines recommended by the CDC, such as the shingles vaccine, at no cost to you',
      'Covered insulin for no more than $35 a month',
      'A yearly cap on what you pay out of pocket for covered drugs',
    ],
    sections: [
      {
        id: 'how-part-d-works',
        heading: 'How Part D works',
        blocks: [
          {
            type: 'p',
            text: 'Part D coverage comes from private insurance companies approved by Medicare. You can get it through a stand-alone drug plan (paired with Original Medicare) or as part of most [Medicare Advantage plans](page:service-medicare-advantage). Each plan has a formulary — its list of covered drugs — sorted into tiers. Lower tiers usually cost less.',
          },
          {
            type: 'p',
            text: "Your costs depend on the plan's monthly premium, its deductible, and the copay or coinsurance for each drug's tier. Using a plan's preferred pharmacy can lower your costs further, and mail order can help with medicines you take every day.",
          },
        ],
      },
      {
        id: 'recent-changes',
        heading: 'Recent changes that help your wallet',
        blocks: [
          {
            type: 'ul',
            items: [
              '**A yearly out-of-pocket cap.** Since 2025, the law has capped what you pay for covered Part D drugs each year. The amount is adjusted annually.',
              '**Spread your costs out.** The Medicare Prescription Payment Plan lets you pay your drug costs in monthly amounts across the year instead of all at once at the pharmacy.',
              '**Insulin and vaccines.** Covered insulin costs no more than $35 a month, and recommended adult vaccines are covered at no cost to you.',
            ],
          },
        ],
      },
      {
        id: 'choosing',
        heading: 'How we compare drug plans',
        blocks: [
          {
            type: 'ol',
            items: [
              'We list every medicine you take, with the dose and how often you take it.',
              'We check which plans cover each drug, on what tier, and whether it needs prior authorization or has quantity limits.',
              'We compare the estimated yearly cost at the pharmacies you actually use.',
              'We review the results with you and help you enroll.',
            ],
          },
          {
            type: 'p',
            text: 'Because plans can change their drug lists and prices every year, we recommend repeating this check each fall during the [Annual Enrollment Period](page:aep).',
          },
        ],
      },
      {
        id: 'penalty',
        heading: 'Avoid the late enrollment penalty',
        blocks: [
          {
            type: 'p',
            text: "If you go 63 days or more in a row without Part D or other creditable prescription drug coverage after your Initial Enrollment Period ends, you may owe a late enrollment penalty added to your premium for as long as you have Part D. If you have coverage through an employer or union, ask whether it's creditable, and keep the letter that says so.",
          },
        ],
      },
      {
        id: 'extra-help',
        heading: 'Help paying for prescriptions',
        blocks: [
          {
            type: 'p',
            text: 'If your income and resources are limited, you may qualify for **Extra Help**, a Medicare program that lowers Part D premiums, deductibles and copays. We can help you find out whether you might qualify and how to apply through Social Security.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need Part D if I don't take any medicines now?",
        a: "Many people still enroll in a low-cost plan to avoid a late enrollment penalty later and to be covered if they suddenly need a prescription. We'll help you weigh it.",
      },
      {
        q: 'Why did my drug costs change this year?',
        a: "Plans update premiums, deductibles, drug lists and pharmacy networks every year. Your Annual Notice of Change explains what's different. Bring it to your review and we'll compare your options.",
      },
      {
        q: 'Can I switch drug plans in the middle of the year?',
        a: 'Usually only during certain enrollment periods, such as the Annual Enrollment Period from October 15 to December 7, unless you qualify for a Special Enrollment Period.',
      },
      {
        q: "What if my drug isn't on the plan's list?",
        a: 'You and your doctor can ask the plan for an exception, or you may be able to switch to a covered alternative. When we compare plans, we look for ones that cover what you take.',
      },
    ],
  },

  'special-needs-plans': {
    h1: 'Medicare Special Needs Plans (SNPs) in Louisiana',
    lede: "If you've been diagnosed with a chronic heart condition or diabetes, you may qualify for a Chronic Condition Special Needs Plan — a type of Medicare Advantage plan designed around your care, often with enhanced benefits. We'll help you find out if you qualify.",
    summary:
      'Help finding and enrolling in Medicare Chronic Condition Special Needs Plans (C-SNPs) for people with diabetes or heart conditions in Louisiana.',
    whoFor: [
      'People with Medicare Parts A and B who have diabetes',
      'People diagnosed with chronic heart failure or certain cardiovascular conditions',
      'Anyone who wants care coordination built around a chronic condition',
      "People who live in the plan's service area",
    ],
    covers: [
      'All the hospital and medical benefits of Original Medicare',
      'Prescription drug coverage, which every Special Needs Plan includes',
      'Doctor networks and drug lists designed around your condition',
      'Enhanced benefits that vary by plan, such as care coordination or extra supplemental benefits',
    ],
    sections: [
      {
        id: 'diabetes-heart-guide',
        heading: 'Have diabetes or a heart condition?',
        blocks: [
          {
            type: 'p',
            text: 'If you have diabetes, chronic heart failure or a cardiovascular disorder, a Chronic Condition SNP (C-SNP) may be an option, and you can join one any time of year while you have a qualifying condition. Our guide to [Medicare plans for diabetes and heart disease](page:guide-diabetes-heart-snp) explains who qualifies, how plans confirm your condition and what to ask before you enroll.',
          },
        ],
      },
      {
        id: 'what-is-a-csnp',
        heading: 'What is a Chronic Condition Special Needs Plan?',
        blocks: [
          {
            type: 'p',
            text: 'Special Needs Plans (SNPs) are Medicare Advantage plans limited to people with specific needs. A **Chronic Condition SNP (C-SNP)** is for people living with certain severe or disabling chronic conditions. Because everyone in the plan shares a similar health picture, the plan can tailor its doctors, drug list and care programs to that condition.',
          },
          {
            type: 'p',
            text: 'Common qualifying conditions include diabetes, chronic heart failure and cardiovascular disorders. The exact conditions depend on the plan, and the plan confirms your diagnosis with your doctor as part of enrollment.',
          },
        ],
      },
      {
        id: 'benefits',
        heading: 'Benefits you may qualify for',
        blocks: [
          {
            type: 'p',
            text: 'Benefits vary from plan to plan and year to year, so we review the specific plans available where you live. Depending on the plan, a C-SNP may include:',
          },
          {
            type: 'ul',
            items: [
              'A care coordinator or care team to help manage appointments and medications',
              'Lower copays for doctors and specialists who treat your condition',
              'Reduced costs for some medicines and supplies related to your condition',
              'Extra supplemental benefits, such as allowances for healthy food or over-the-counter items, for members who qualify',
            ],
          },
        ],
      },
      {
        id: 'when-to-join',
        heading: 'When you can join',
        blocks: [
          {
            type: 'p',
            text: "You can join a C-SNP during the regular enrollment periods, such as the [Annual Enrollment Period](page:aep). If you have a qualifying chronic condition, you also have a Special Enrollment Period that lets you join a C-SNP designed for your condition at other times of the year. Coverage continues only while you meet the plan's eligibility rules, so we'll explain what happens if your situation changes.",
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Diagnosed recently?',
            text: "If you've been diagnosed with a chronic heart condition or diabetes, call us. You may qualify for a plan with enhanced benefits — and you may not have to wait until fall to make a change.",
          },
        ],
      },
      {
        id: 'other-snps',
        heading: 'Other types of Special Needs Plans',
        blocks: [
          {
            type: 'p',
            text: "There are two other kinds of SNPs. **Dual Eligible SNPs (D-SNPs)** are for people who have both Medicare and Medicaid. **Institutional SNPs (I-SNPs)** are for people who live in a nursing home or need that level of care at home. If either might apply to you or a family member, we'll talk through the options.",
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'How we help',
        blocks: [
          {
            type: 'p',
            text: "We'll ask about your diagnosis and medicines, check which C-SNPs serve your parish, confirm your doctors are in network, and compare the costs with a regular [Medicare Advantage plan](page:service-medicare-advantage). If a C-SNP isn't the best fit for you, we'll say so.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I prove I have a qualifying condition?',
        a: "The plan verifies your condition with your doctor, usually soon after you apply. We'll explain the steps and what information the plan will need.",
      },
      {
        q: 'Is a C-SNP more expensive?',
        a: "Not necessarily. Many C-SNPs have premiums and copays similar to other Medicare Advantage plans, and some offer lower costs for condition-related care. We'll compare the details with you.",
      },
      {
        q: 'Can I keep my cardiologist or endocrinologist?',
        a: "It depends on the plan's network. We check your specialists before you enroll.",
      },
      {
        q: 'What if I have both diabetes and heart disease?',
        a: "Some plans are designed for people with more than one related condition. We'll look for the plan that fits your full health picture.",
      },
    ],
  },

  'dental-vision-insurance': {
    h1: 'Dental & Vision Insurance for Seniors in Louisiana',
    lede: "Original Medicare doesn't cover routine dental cleanings, fillings, dentures, eye exams or glasses. A dental and vision plan can help with those costs, whether you have Original Medicare, a Medicare Supplement, or you're under 65.",
    summary:
      'Help comparing individual dental and vision insurance in Louisiana for people on Original Medicare, a Medicare Supplement or under 65.',
    whoFor: [
      "People with Original Medicare and a Medicare Supplement, which don't cover routine dental or vision care",
      'Medicare Advantage members who want more dental coverage than their plan includes',
      'Adults under 65 without dental or vision benefits through work',
      'Anyone expecting to need dentures, crowns or new glasses',
    ],
    covers: [
      'Preventive dental care such as exams, cleanings and X-rays',
      'Basic and major dental services like fillings, extractions, crowns and dentures, depending on the plan',
      'Routine eye exams',
      'Allowances toward eyeglasses or contact lenses',
    ],
    sections: [
      {
        id: 'why-it-matters',
        heading: 'Why dental and vision coverage matters after 65',
        blocks: [
          {
            type: 'p',
            text: "Healthy teeth and good eyesight affect everything from nutrition to safety at home, yet Original Medicare generally doesn't pay for routine dental care, dentures, eye exams for glasses, or eyeglasses. Medicare Supplement plans follow the same rules. That leaves many retirees paying the full price out of pocket.",
          },
        ],
      },
      {
        id: 'how-plans-work',
        heading: 'How dental plans usually work',
        blocks: [
          { type: 'p', text: 'Stand-alone dental plans commonly organize care into three levels:' },
          {
            type: 'ul',
            items: [
              '**Preventive** — cleanings, exams and X-rays, often covered at a high percentage from the start.',
              '**Basic** — fillings and simple extractions, sometimes after a short waiting period.',
              '**Major** — crowns, bridges, root canals and dentures, often with a longer waiting period and a lower coverage percentage.',
            ],
          },
          {
            type: 'p',
            text: 'Most plans also have an **annual maximum** — the most the plan will pay in a year. We compare maximums, waiting periods and whether your dentist is in network, so you can pick a plan that fits the work you actually need done.',
          },
        ],
      },
      {
        id: 'vision',
        heading: 'Vision coverage',
        blocks: [
          {
            type: 'p',
            text: "Vision plans, or dental plans with a vision rider, typically help with a yearly eye exam and an allowance toward frames, lenses or contacts. Medicare does cover some eye care related to medical conditions — like cataract surgery and certain exams for diabetes or glaucoma — so we'll explain what's already covered before you buy more.",
          },
        ],
      },
      {
        id: 'questions-to-ask',
        heading: 'Questions to ask before you buy',
        blocks: [
          {
            type: 'ul',
            items: [
              'Is my dentist or eye doctor in the network, and what happens if I go out of network?',
              'What is the annual maximum, and does any unused benefit carry over to next year?',
              'How long are the waiting periods for fillings, crowns and dentures?',
              'Are implants covered, and if so, how much would I pay?',
              'Are hearing exams or hearing aids included?',
            ],
          },
          {
            type: 'p',
            text: 'Writing the answers down side by side makes it much easier to see which plan actually saves you money for the work you need.',
          },
        ],
      },
      {
        id: 'with-medicare-advantage',
        heading: 'If you have Medicare Advantage',
        blocks: [
          {
            type: 'p',
            text: "Many [Medicare Advantage plans](page:service-medicare-advantage) include some dental and vision benefits, but the coverage can be limited — for example, preventive care only, or a low yearly dental maximum. If you need major dental work, a separate plan can fill the gap. Bring your plan's Evidence of Coverage and we'll look at it together.",
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'How we help',
        blocks: [
          {
            type: 'p',
            text: "Tell us what you need done and which dentist or eye doctor you want to keep. We'll compare plans, explain waiting periods in plain language, and help you enroll.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there a waiting period for dentures?',
        a: "Often, yes. Many plans have waiting periods for major services such as dentures and crowns, though some plans shorten or waive them. We'll show you the options.",
      },
      {
        q: 'Can I keep my dentist?',
        a: "If your dentist is in the plan's network, you'll usually pay less. Some plans also pay for out-of-network dentists at a lower rate. We check before you enroll.",
      },
      {
        q: 'Does Medicare cover cataract surgery?',
        a: "Yes. Medicare Part B covers cataract surgery and one pair of eyeglasses or contact lenses after surgery that implants an intraocular lens. Routine eye exams for glasses aren't covered by Original Medicare.",
      },
      {
        q: 'Can I buy dental coverage any time of year?',
        a: 'Stand-alone dental and vision plans are generally available year-round, not only during Medicare enrollment periods.',
      },
    ],
  },

  'final-expense-insurance': {
    h1: 'Final Expense Insurance in Louisiana',
    lede: "Final expense insurance is a small whole life policy designed to help your family pay for your funeral, burial or cremation and other final bills. It's peace of mind that your loved ones won't be left with the cost.",
    summary:
      'Final expense (burial) life insurance for Louisiana families, with friendly bilingual guidance from licensed local agents.',
    whoFor: [
      'Adults, often ages 50 to 85, who want to cover funeral and burial costs',
      "People who don't want their children to pay for their final arrangements",
      "Those who may not qualify for, or don't need, a large life insurance policy",
      "Anyone who wants a fixed premium that won't go up with age",
    ],
    covers: [
      'A cash benefit paid to your beneficiary, who can use it however it is needed',
      'Funeral, burial or cremation costs',
      'Outstanding medical bills, small debts or travel for family',
      'Coverage that lasts your whole life as long as premiums are paid',
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'How final expense insurance works',
        blocks: [
          {
            type: 'p',
            text: "Final expense policies are a type of **whole life insurance** with smaller benefit amounts than traditional life insurance. Once your policy is in force, your premium generally stays level, your coverage doesn't expire, and the policy builds a modest cash value over time. When you pass away, the benefit is paid directly to the person you choose.",
          },
          {
            type: 'p',
            text: 'Because the money goes to your beneficiary, not to a particular funeral home, your family has flexibility — they can pay for services, settle a final hospital bill, or cover travel so relatives can be together.',
          },
        ],
      },
      {
        id: 'qualifying',
        heading: 'Qualifying is usually simple',
        blocks: [
          {
            type: 'ul',
            items: [
              '**Simplified issue:** no medical exam — just a few health questions on the application. If you qualify, full coverage often starts right away.',
              '**Graded or modified benefit:** for people with certain health conditions. The full benefit for natural causes is typically paid after a waiting period, often two or three years; before then the policy usually returns the premiums paid, plus interest.',
              '**Guaranteed acceptance:** no health questions at all, with a waiting period before the full benefit applies.',
            ],
          },
          {
            type: 'p',
            text: "Exact rules depend on the company and your answers, so we'll compare options and explain what applies to you before you apply.",
          },
        ],
      },
      {
        id: 'how-much',
        heading: 'How much coverage do you need?',
        blocks: [
          {
            type: 'p',
            text: "Think about the kind of service you'd want, burial or cremation, any arrangements you've already made, and other bills your family may face. We'll help you estimate a comfortable amount and find a monthly premium that fits your budget — without pressure to buy more than you need.",
          },
        ],
      },
      {
        id: 'plan-ahead',
        heading: 'Why plan ahead',
        blocks: [
          {
            type: 'p',
            text: 'Premiums are based partly on your age when you apply, so coverage generally costs less when you start earlier. Planning ahead also opens the door to an honest conversation with your family about your wishes, which can make a difficult time a little easier for everyone.',
          },
        ],
      },
      {
        id: 'local-help',
        heading: 'Help from a neighbor, in English or Spanish',
        blocks: [
          {
            type: 'p',
            text: 'John Martinez focuses on final expense and life insurance for families across Greater New Orleans. John will meet with you in person or by phone and make sure you understand every part of the policy before you sign. Pair it with [low-cost life insurance](page:service-life-insurance) if your family needs more protection.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is final expense insurance the same as a prepaid funeral plan?',
        a: 'No. A prepaid funeral plan is arranged with a specific funeral home. Final expense insurance pays a cash benefit to your beneficiary, who can use it at any funeral home or for other bills.',
      },
      {
        q: 'Will I need a medical exam?',
        a: 'Usually not. Most final expense policies use a short health questionnaire instead of an exam, and some policies ask no health questions at all.',
      },
      {
        q: 'Can my premium go up?',
        a: "Most final expense policies are whole life policies with level premiums that don't increase as you age. We'll confirm the details for any policy you consider.",
      },
      {
        q: 'How quickly is the benefit paid?',
        a: 'Claims are often paid soon after the company receives the death certificate and claim form, but timing varies by company. We can help your family with the paperwork.',
      },
    ],
  },

  'life-insurance': {
    h1: 'Low-Cost Life Insurance for Louisiana Families',
    lede: "Life insurance protects the people who depend on you. Whether you want to replace income, pay off a mortgage, or leave something for your children and grandchildren, we'll help you find affordable coverage that fits your budget.",
    summary:
      'Help comparing affordable term and whole life insurance for Louisiana families, from licensed bilingual agents in Greater New Orleans.',
    whoFor: [
      "Working adults who want to protect their family's income",
      'Homeowners who want their mortgage paid off if something happens',
      'Parents and grandparents who want to leave a legacy',
      'Anyone whose employer coverage ends when they retire or change jobs',
    ],
    covers: [
      'A death benefit paid to your beneficiaries, generally free of income tax',
      'Term coverage for a set number of years, or whole life coverage for life',
      'Optional riders on some policies, such as accelerated benefits for serious illness',
      'Level premiums on most term and whole life policies',
    ],
    sections: [
      {
        id: 'types',
        heading: 'Term or whole life?',
        blocks: [
          {
            type: 'p',
            text: "**Term life insurance** covers you for a set period — often 10, 20 or 30 years. It's usually the most affordable way to get a larger amount of coverage while you're raising a family or paying off a home.",
          },
          {
            type: 'p',
            text: '**Whole life insurance** lasts your entire life and builds cash value you can borrow against. Premiums are higher than term for the same amount of coverage, but they generally stay level. Smaller whole life policies designed for funeral costs are called [final expense insurance](page:service-final-expense-insurance).',
          },
        ],
      },
      {
        id: 'how-much',
        heading: 'How much life insurance do you need?',
        blocks: [
          { type: 'p', text: "A simple starting point is to add up what your family would need if you weren't here:" },
          {
            type: 'ul',
            items: [
              'The years of income your family relies on',
              'Your mortgage or rent and other debts',
              'Future costs like college or caring for a parent',
              'Funeral and final expenses',
            ],
          },
          {
            type: 'p',
            text: "Then subtract savings and any coverage you already have. We'll walk through the numbers together and show you what different amounts cost.",
          },
        ],
      },
      {
        id: 'keep-it-low',
        heading: 'Ways to keep your premium low',
        blocks: [
          {
            type: 'ul',
            items: [
              'Apply sooner rather than later — age is one of the biggest factors in price.',
              'Choose the term length you really need.',
              'Compare several companies; prices for the same coverage can vary a lot.',
              "Ask about no-exam options if you'd rather skip a medical exam.",
            ],
          },
        ],
      },
      {
        id: 'riders',
        heading: 'Riders worth knowing about',
        blocks: [
          {
            type: 'ul',
            items: [
              "**Accelerated death benefit** — on policies that include it, lets you use part of the benefit while living if you're diagnosed with a terminal illness.",
              '**Waiver of premium** — on some policies, keeps your coverage in force without premium payments if you become disabled.',
              '**Child or grandchild riders** — on some policies, adds a small amount of coverage for children or grandchildren.',
            ],
          },
          {
            type: 'p',
            text: "Riders vary by company and can add to the cost. We'll explain which ones are worth it for your family and which ones you can skip.",
          },
        ],
      },
      {
        id: 'work-coverage',
        heading: 'What about life insurance through work?',
        blocks: [
          {
            type: 'p',
            text: "Group life insurance through an employer is a great benefit, but it's often limited to a year or two of salary and may end when you leave the job or retire. A personal policy stays with you no matter where you work.",
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'How we help',
        blocks: [
          {
            type: 'p',
            text: 'John Martinez handles life insurance for our clients. John will explain your options in plain English or Spanish, compare quotes, and help with the application from start to finish.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I need a medical exam?',
        a: "Not always. Some policies approve you based on health questions and database checks, while others require a short exam for the lowest rates. We'll explain the trade-offs.",
      },
      {
        q: 'Can I get life insurance if I have health problems?',
        a: "Often, yes. Many companies offer coverage to people with conditions like diabetes or high blood pressure. We'll look for the best fit for your health and budget.",
      },
      {
        q: 'What happens when my term policy ends?',
        a: "Coverage stops unless you renew or convert it. Many term policies let you convert to permanent coverage without new health questions before a certain age. We'll check the conversion options on any policy you consider.",
      },
      {
        q: 'Who should be my beneficiary?',
        a: 'Most people name a spouse, children or a trust. Keep your beneficiaries up to date after major life events like a marriage, divorce or the birth of a grandchild.',
      },
    ],
  },

  'hospital-indemnity-insurance': {
    h1: 'Hospital Indemnity Insurance in Louisiana',
    lede: "A hospital stay can bring bills even when you have good coverage. Hospital indemnity insurance pays you a set cash benefit when you're admitted to the hospital, to help with copays, deductibles or everyday expenses while you recover.",
    summary:
      'Help choosing hospital indemnity insurance that pays cash benefits for hospital stays, often paired with Medicare Advantage, in Louisiana.',
    whoFor: [
      'Medicare Advantage members who want help with daily hospital copays',
      'People who want extra cash on hand for a hospital stay',
      'Anyone with a high deductible on their current health coverage',
      'Families planning ahead for the unexpected',
    ],
    covers: [
      "A fixed daily or per-stay cash benefit when you're admitted",
      'Benefits paid directly to you, to use as you wish',
      'On some plans, optional coverage for observation stays, skilled nursing or outpatient surgery',
      'Benefits paid in addition to your other insurance',
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'How hospital indemnity plans work',
        blocks: [
          {
            type: 'p',
            text: "Hospital indemnity insurance is supplemental coverage. It doesn't replace your health insurance or Medicare — it works alongside it. If you're admitted to the hospital for a covered reason, the plan pays a set amount, such as a benefit per day or per stay, straight to you.",
          },
          {
            type: 'p',
            text: 'Because the money comes to you, you decide how to use it: hospital copays, a ride home, prescriptions, groceries or a family member’s travel.',
          },
        ],
      },
      {
        id: 'with-medicare-advantage',
        heading: 'A natural fit with Medicare Advantage',
        blocks: [
          {
            type: 'p',
            text: "Many [Medicare Advantage plans](page:service-medicare-advantage) charge a copay for each day of a hospital stay, often for the first several days. A hospital indemnity plan can be set up to help offset those copays, so the two can work well together. We'll look at your plan's hospital copays and choose a benefit amount to match.",
          },
        ],
      },
      {
        id: 'what-to-compare',
        heading: 'What to compare',
        blocks: [
          {
            type: 'ul',
            items: [
              'The daily or per-stay benefit amount, and how many days it pays',
              'Whether it covers observation stays, which are billed as outpatient care',
              'Limits on pre-existing conditions and any waiting periods',
              'Extra riders such as skilled nursing, ambulance or cancer benefits',
              'The monthly premium and whether it can change',
            ],
          },
        ],
      },
      {
        id: 'example',
        heading: 'A simple example',
        blocks: [
          {
            type: 'p',
            text: "Say your Medicare Advantage plan charges a copay for each of the first several days of a hospital stay, and you're admitted for four days. If your hospital indemnity plan pays a daily benefit, you receive a payment for each covered day — money you can put toward those copays or anything else you need while you recover. The real amounts depend on your plans, so we'll run the numbers using your own plan documents.",
          },
          {
            type: 'p',
            text: "On the other hand, if your current coverage already keeps hospital costs low — for example, some Medicare Supplement plans pay the Part A hospital deductible and coinsurance — a hospital indemnity plan may add little value. If you don't need one, we'll tell you.",
          },
        ],
      },
      {
        id: 'good-to-know',
        heading: 'Good to know',
        blocks: [
          {
            type: 'p',
            text: "Hospital indemnity plans aren't a substitute for major medical coverage or Medicare, and benefits are limited to the amounts in the policy. Most plans can be purchased at any time of year. Some ask health questions, and benefits for pre-existing conditions may be limited for a period after you enroll.",
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'How we help',
        blocks: [
          {
            type: 'p',
            text: 'John will compare hospital indemnity options with you, explain exactly what triggers a payment, and help you choose a benefit that fills the gaps in your current coverage.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Does hospital indemnity pay my hospital directly?',
        a: 'No. Benefits are paid to you (or someone you choose), and you decide how to use the money.',
      },
      {
        q: 'Can I have hospital indemnity with Medicare Advantage?',
        a: "Yes. It's a separate policy that pays in addition to your Medicare Advantage plan, and many people use it to help with daily hospital copays.",
      },
      {
        q: 'Is an observation stay the same as being admitted?',
        a: "No. Observation is considered outpatient care even if you stay overnight, and some policies don't pay for it. We'll show you which plans include observation benefits.",
      },
      {
        q: 'Can I buy it any time?',
        a: "Usually, yes. Unlike Medicare plans, most hospital indemnity policies aren't limited to enrollment periods.",
      },
    ],
  },

  'health-insurance': {
    h1: 'Health Insurance for Louisianans Under 65',
    lede: "Not on Medicare yet? Whether you're self-employed, between jobs, retiring early or helping your family, we'll help you understand your health insurance options in Louisiana and choose coverage that fits your doctors and your budget.",
    summary:
      'Guidance on individual and family health insurance for Louisiana residents under 65, including Marketplace (ACA) options, from bilingual local agents.',
    whoFor: [
      'Self-employed people and small-business owners',
      "Early retirees who aren't yet eligible for Medicare",
      "Families who don't have coverage through work",
      'People losing employer coverage after a job change',
    ],
    covers: [
      'Doctor visits, hospital care and emergency services',
      'Prescription drugs',
      'Preventive care such as screenings and vaccines, often at no cost',
      'Mental health, maternity and the other essential health benefits required on ACA-compliant plans',
    ],
    sections: [
      {
        id: 'options',
        heading: 'Your options before Medicare',
        blocks: [
          {
            type: 'p',
            text: "Most people under 65 who don't get insurance through an employer buy an individual or family plan. In Louisiana, that often means a plan through the Health Insurance Marketplace created by the Affordable Care Act, where plans are grouped into metal levels such as Bronze, Silver and Gold based on how you and the plan share costs.",
          },
          {
            type: 'p',
            text: 'Depending on your household income, you may qualify for a premium tax credit that lowers your monthly payment, and some Silver plans come with extra savings on deductibles and copays.',
          },
        ],
      },
      {
        id: 'when-to-enroll',
        heading: 'When you can enroll',
        blocks: [
          {
            type: 'p',
            text: "Marketplace plans have an Open Enrollment Period each year that begins November 1. Outside that window, you generally need a qualifying life event — such as losing other coverage, moving, getting married or having a baby — to get a Special Enrollment Period. Special Enrollment windows are usually 60 days, so it's best to act soon after a change.",
          },
        ],
      },
      {
        id: 'plan-types',
        heading: 'Understanding plan types',
        blocks: [
          {
            type: 'p',
            text: "Individual plans come with different network types. **HMOs** and **EPOs** usually cover care only from in-network providers, except in emergencies, while **PPOs** also pay something toward out-of-network care. A plan with a lower premium often has a higher deductible, so we look at what you're likely to spend over a full year — not just the monthly price.",
          },
          {
            type: 'p',
            text: "If you take regular prescriptions or see specialists, those details can change which plan is the better deal. We'll check them for every plan we compare.",
          },
        ],
      },
      {
        id: 'compare',
        heading: 'What we compare for you',
        blocks: [
          {
            type: 'ul',
            items: [
              'Whether your doctors and hospitals are in network',
              'Your prescriptions and how each plan covers them',
              'The premium after any tax credit you qualify for',
              'Deductibles, copays and the out-of-pocket maximum',
            ],
          },
        ],
      },
      {
        id: 'turning-65',
        heading: 'Turning 65 soon?',
        blocks: [
          {
            type: 'p',
            text: "Your Initial Enrollment Period for Medicare starts three months before the month you turn 65. If you have an individual plan, plan the switch to Medicare carefully so there's no gap and you don't keep paying for coverage you no longer need. We help with the whole transition — from choosing between [Medicare Advantage](page:service-medicare-advantage) and a [Medicare Supplement](page:service-medicare-supplement) to picking a drug plan.",
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'How we help',
        blocks: [
          {
            type: 'p',
            text: "We'll listen to what matters most to you, explain your options in plain language, and help you enroll. If one person in your household has Medicare and another doesn't, we can help the whole family in one conversation.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I buy health insurance outside Open Enrollment?',
        a: 'Usually only if you have a qualifying life event, such as losing job-based coverage, moving or a change in household size. We can help you check whether you qualify for a Special Enrollment Period.',
      },
      {
        q: 'Will I qualify for lower premiums?',
        a: "It depends on your household income and size. Many people qualify for a premium tax credit. We'll help you estimate your savings.",
      },
      {
        q: "I'm under 65 and have Medicare because of a disability. Can you help?",
        a: "Yes. You have Medicare options too, including Medicare Advantage and Part D plans. Medicare Supplement options for people under 65 can be more limited, so let's talk through your situation.",
      },
      {
        q: 'Do you charge for help with health insurance?',
        a: "No. There's no fee for our help; we're paid by the insurance companies.",
      },
    ],
  },
};

export default services;
