import type { ProductKey } from '@/config/products';
import type { ServiceContent } from '../types';

const services: Record<ProductKey, ServiceContent> = {
  'medicare-advantage': {
    h1: 'Medicare Advantage Plans in New Orleans & Louisiana',
    lede: 'Medicare Advantage (Part C) plans bundle your hospital and medical coverage — and usually your prescription drugs — into one plan from a private insurance company approved by Medicare. We help you compare plans side by side and choose one that works with your doctors, your medicines and your budget.',
    summary:
      'Personal, no-cost help comparing and enrolling in Medicare Advantage (Part C) plans in Louisiana, from licensed, bilingual local agents.',
    whoFor: [
      'People with Medicare Part A and Part B who want one plan instead of several',
      'Anyone who wants predictable copays and a yearly limit on out-of-pocket costs',
      'People who value extra benefits some plans include, such as dental, vision or hearing coverage',
      "Those comfortable using a plan's network of doctors and hospitals",
    ],
    covers: [
      'Everything Original Medicare Part A (hospital) and Part B (medical) covers',
      'Prescription drug coverage in most plans (often called MAPD plans)',
      'A yearly out-of-pocket maximum for covered in-network services',
      'Extra benefits that vary by plan, such as routine dental, vision, hearing and fitness programs',
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'How Medicare Advantage works',
        blocks: [
          {
            type: 'p',
            text: 'When you join a Medicare Advantage plan, you still have Medicare. You keep paying your Part B premium (unless someone else, such as Medicaid, pays it for you), and the private plan takes over paying your claims. Each plan sets its own copays, deductibles and network, so two plans that look alike on paper can work very differently in real life.',
          },
          {
            type: 'p',
            text: "Most plans in Greater New Orleans are **HMOs** or **PPOs**. An HMO usually asks you to use doctors in its network and may require a referral to see a specialist. A PPO lets you see out-of-network providers, typically at a higher cost. Some plans charge a $0 monthly premium, but you'll still pay copays when you use care — so the premium is only one part of the picture.",
          },
        ],
      },
      {
        id: 'what-we-compare',
        heading: 'What we compare for you',
        blocks: [
          {
            type: 'p',
            text: 'The best plan for your neighbor may not be the best plan for you. When we sit down together, we look at:',
          },
          {
            type: 'ul',
            items: [
              "**Your doctors and hospitals** — we check that the physicians and facilities you rely on are in the plan's network.",
              "**Your prescriptions** — we look up each medicine on the plan's drug list (formulary), including its tier and estimated cost.",
              '**Your total costs** — premium, deductibles, copays and the out-of-pocket maximum, not just the monthly price.',
              '**Your pharmacy** — preferred pharmacies can lower your drug copays.',
              "**Extra benefits you'll actually use** — dental, vision, hearing aids or over-the-counter allowances, when a plan offers them.",
            ],
          },
        ],
      },
      {
        id: 'when-to-enroll',
        heading: 'When you can join or switch',
        blocks: [
          {
            type: 'p',
            text: "You can join a Medicare Advantage plan when you first become eligible for Medicare (your Initial Enrollment Period), and each fall during the [Annual Enrollment Period](page:aep), October 15 to December 7. If you're already in a Medicare Advantage plan, the Medicare Advantage Open Enrollment Period from January 1 to March 31 lets you make one change. Certain life events — like moving, losing other coverage or qualifying for Extra Help — may give you a Special Enrollment Period.",
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Happy with your plan?',
            text: "Plans can change their costs, networks and drug lists every year. If you're happy after reading your Annual Notice of Change, you don't need to do anything — your plan renews automatically. If something changed that worries you, call us for a review.",
          },
        ],
      },
      {
        id: 'advantage-vs-supplement',
        heading: 'Medicare Advantage or Medicare Supplement?',
        blocks: [
          {
            type: 'p',
            text: "This is one of the most common questions people ask. Medicare Advantage often has lower monthly premiums and may include extra benefits, but you pay copays as you use care and generally stay within a network. A [Medicare Supplement](page:service-medicare-supplement) plan works alongside Original Medicare, lets you see any provider that accepts Medicare, and usually has a higher monthly premium but fewer bills when you get care. There's no single right answer — it depends on your health, your doctors and how you like to budget.",
          },
        ],
      },
      {
        id: 'how-we-help',
        heading: 'How we help, at no cost to you',
        blocks: [
          {
            type: 'p',
            text: "We're licensed agents based in Greater New Orleans, and we're paid by the insurance companies — never by you. The plan premium is the same whether you enroll with us or on your own. What you get with us is a real person who explains your options in plain English or Spanish, helps with enrollment, and stays available when you have questions about a bill or need to change plans.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I still pay my Part B premium with a Medicare Advantage plan?',
        a: "Yes. With almost every Medicare Advantage plan you continue paying your Part B premium, plus any premium the plan charges. Some plans include a Part B premium reduction, sometimes called a “giveback.” We'll point those out if they fit your needs.",
      },
      {
        q: 'Can I keep my doctor?',
        a: "Often, yes — but it depends on the plan. Before you enroll, we check whether your doctors and preferred hospitals are in the plan's network so there are no surprises.",
      },
      {
        q: 'Are $0 premium plans really $0?',
        a: "The monthly plan premium can be $0, but you'll still have copays or coinsurance when you get care, and you'll keep paying your Part B premium. We help you estimate your total yearly costs, not just the premium.",
      },
      {
        q: 'Which Medicare Advantage companies do you work with?',
        a: 'You can see the companies we represent in Louisiana under “Carriers we work with” on this page. Plan availability varies by parish, and we only recommend a plan that fits your situation.',
      },
      {
        q: 'What if I travel or spend time out of state?',
        a: "Many HMO plans cover only emergency and urgent care outside the plan's service area. If you travel often, a PPO or a Medicare Supplement may be a better fit. Let's talk through your plans.",
      },
    ],
  },

  'medicare-supplement': {
    h1: 'Medicare Supplement (Medigap) Plans in New Orleans',
    lede: "A Medicare Supplement plan — also called Medigap — helps pay the costs Original Medicare leaves behind, like deductibles, copays and the 20% coinsurance for doctor visits. We'll explain the lettered plans, compare prices from the companies we represent, and help you apply.",
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
        heading: 'How Medicare Supplement plans work',
        blocks: [
          {
            type: 'p',
            text: "Original Medicare pays a large share of your hospital and medical bills, but not all of it — and it has no yearly limit on what you pay. Medigap plans are sold by private insurance companies and pay part or all of what's left. Because the plan works alongside Original Medicare, there are no networks: if a doctor or hospital accepts Medicare, your Medigap plan pays its share too.",
          },
          {
            type: 'p',
            text: "Medigap plans are standardized and identified by letters. A Plan G from one company has the same core benefits as a Plan G from another — the differences are the price, how the company sets and raises its rates, and customer service. That's why comparing companies matters.",
          },
        ],
      },
      {
        id: 'popular-plans',
        heading: 'The plans people ask about most',
        blocks: [
          {
            type: 'ul',
            items: [
              "**Plan G** — covers nearly all of Medicare's gaps except the yearly Part B deductible. It's the most comprehensive plan available to people who became eligible for Medicare in 2020 or later.",
              '**Plan N** — lower premiums in exchange for small copays for some office and emergency room visits, plus possible Part B excess charges.',
              '**High-deductible Plan G** — the same benefits as Plan G after you meet a yearly deductible, usually with a much lower premium.',
            ],
          },
          {
            type: 'p',
            text: 'Plans C and F are no longer sold to people who became eligible for Medicare on or after January 1, 2020. If you already have one, you can usually keep it.',
          },
        ],
      },
      {
        id: 'drug-coverage',
        heading: "Don't forget prescription coverage",
        blocks: [
          {
            type: 'p',
            text: 'Medigap plans sold today do not include prescription drug coverage. Most people pair their Medicare Supplement with a stand-alone [Part D prescription drug plan](page:service-part-d-prescription-drug-plans). If you go without creditable drug coverage when you are first eligible, you may owe a late enrollment penalty later — so we help you set up both at the same time.',
          },
        ],
      },
      {
        id: 'timing',
        heading: 'Timing matters: your Medigap Open Enrollment Period',
        blocks: [
          {
            type: 'p',
            text: 'Your best time to buy a Medicare Supplement is during your **Medigap Open Enrollment Period** — the six months that start the first month you have Medicare Part B and are 65 or older. During that window, companies must sell you any plan they offer in your area without turning you down or charging more because of your health.',
          },
          {
            type: 'p',
            text: "After that window, companies may ask health questions and can decline your application or charge more, unless you have a guaranteed issue right (for example, when you lose certain other coverage). If you're thinking about moving from Medicare Advantage to a Medigap plan, talk with us first so you don't give up coverage you need.",
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'Medigap is not Medicare Advantage',
            text: "It's illegal for anyone to sell you a Medicare Supplement policy while you're in a Medicare Advantage plan, unless you're switching back to Original Medicare. If someone tries, call us before you sign anything.",
          },
        ],
      },
      {
        id: 'comparing-prices',
        heading: 'Comparing Medicare Supplement prices in Louisiana',
        blocks: [
          {
            type: 'p',
            text: "Medigap premiums can vary widely between companies for the exact same plan letter. We compare the companies we represent, explain how each prices its plans as you age, and walk you through the application. There's no fee for our help.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Plan G the same with every company?',
        a: "Yes — the benefits of a lettered plan are standardized. What differs is the premium, how rates change over time, and the company's service. We help you compare.",
      },
      {
        q: 'Can I be turned down for a Medicare Supplement?',
        a: "During your six-month Medigap Open Enrollment Period, or when you have a guaranteed issue right, you can't be turned down because of your health. Outside those times, companies may use medical underwriting.",
      },
      {
        q: 'Does a Medicare Supplement include dental and vision?',
        a: "No. Medigap plans follow Original Medicare's rules and don't cover routine dental, vision or hearing care. You can add a separate [dental and vision plan](page:service-dental-vision-insurance).",
      },
      {
        q: 'Can I use my Medigap plan outside Louisiana?',
        a: 'Yes. You can see any provider in the U.S. that accepts Medicare, which makes Medigap a good fit for people who travel.',
      },
      {
        q: 'Do I need a separate drug plan?',
        a: "Yes, if you want prescription coverage — and most people do. Medigap plans sold today don't include drug coverage, so we'll help you choose a Part D plan too.",
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
    h1: 'Medicare Plans for Diabetes & Heart Conditions (C-SNPs)',
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
