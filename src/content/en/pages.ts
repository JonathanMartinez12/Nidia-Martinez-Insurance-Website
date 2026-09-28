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
  h1: 'Medicare Annual Enrollment Period: October 15 – December 7',
  lede: "Each fall, people with Medicare can review their coverage and make changes for the coming year. Here's what the Annual Enrollment Period is, what your Annual Notice of Change means, and when you should — and shouldn't — do anything.",
  sections: [
    {
      id: 'what-is-aep',
      heading: 'What is the Annual Enrollment Period?',
      blocks: [
        {
          type: 'p',
          text: 'The Annual Enrollment Period (AEP), sometimes called Medicare Open Enrollment, runs from **October 15 through December 7** every year. During these weeks you can:',
        },
        {
          type: 'ul',
          items: [
            'Switch from Original Medicare to a Medicare Advantage plan, or from Medicare Advantage back to Original Medicare',
            'Change from one Medicare Advantage plan to another',
            'Join, switch or drop a Part D prescription drug plan',
          ],
        },
        {
          type: 'p',
          text: 'Changes you make take effect on **January 1**. If you make more than one change during the AEP, the last one you make before December 7 is the one that counts.',
        },
      ],
    },
    {
      id: 'anoc',
      heading: 'Your Annual Notice of Change (ANOC)',
      blocks: [
        {
          type: 'p',
          text: "If you're in a Medicare Advantage or Part D plan, your plan must send you an Annual Notice of Change by the end of September. It explains what's changing next year — premiums, deductibles, copays, the drug list and the provider network.",
        },
        {
          type: 'p',
          text: "Read it carefully and look for changes that affect you. Is your doctor still in network? Are your medicines still covered, and on the same tier? Did your hospital copay go up? Keep the notice handy — it's the most useful thing to bring to a plan review.",
        },
      ],
    },
    {
      id: 'happy',
      heading: "Happy with your plan? You don't need to do anything",
      blocks: [
        {
          type: 'p',
          text: "Your plan renews automatically for the next year. You don't need to call anyone or re-enroll. Many people stay in the same plan for years because it continues to meet their needs.",
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Unhappy with the changes?',
          text: "Schedule an in-person review with us. We'll go through your Annual Notice of Change together, compare other plans available where you live, and help you switch if something fits better — all before the December 7 deadline.",
        },
      ],
    },
    {
      id: 'health-changes',
      heading: 'If your health has changed',
      blocks: [
        {
          type: 'p',
          text: "If you've been diagnosed with a chronic heart condition or diabetes, you may qualify for a [Chronic Condition Special Needs Plan](page:service-special-needs-plans) with enhanced benefits. The Annual Enrollment Period is a good time to find out. Changes in your medicines are also a reason to recheck your [Part D coverage](page:service-part-d-prescription-drug-plans).",
        },
      ],
    },
    {
      id: 'other-periods',
      heading: 'Other enrollment periods to know',
      blocks: [
        {
          type: 'ul',
          items: [
            '**Initial Enrollment Period:** the seven months around your 65th birthday — the three months before, your birthday month and the three months after.',
            "**Medicare Advantage Open Enrollment Period (January 1 – March 31):** if you're in a Medicare Advantage plan, you can switch to another Medicare Advantage plan or go back to Original Medicare, one time.",
            '**Special Enrollment Periods:** certain events, such as moving, losing other coverage or qualifying for Extra Help, let you make changes at other times of the year.',
          ],
        },
      ],
    },
    {
      id: 'prepare',
      heading: 'How to prepare for your review',
      blocks: [
        { type: 'p', text: 'Gather these before your appointment:' },
        {
          type: 'ol',
          items: [
            'Your Annual Notice of Change and your current plan ID card',
            'Your red, white and blue Medicare card',
            'A list of your medicines, with doses',
            'The names of your doctors, specialists and preferred hospital',
            'The pharmacy you use',
          ],
        },
        {
          type: 'p',
          text: 'Be careful with unexpected calls during enrollment season — scammers are especially active in the fall. Read our tips on [avoiding Medicare scams](page:scam).',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'Do I have to do anything during Annual Enrollment?',
      a: "No. If you're happy with your coverage, it renews automatically. The Annual Enrollment Period is simply your chance to make changes if you want to.",
    },
    {
      q: 'Can I switch from Medicare Advantage to a Medicare Supplement during the AEP?',
      a: 'You can return to Original Medicare during the AEP, but in most cases a Medicare Supplement company can ask health questions when you apply outside your Medigap Open Enrollment Period. Talk with us before you drop a Medicare Advantage plan.',
    },
    {
      q: 'When will my new plan start?',
      a: 'Changes made during the Annual Enrollment Period take effect on January 1.',
    },
    {
      q: 'Does the AEP apply to Medicare Supplement plans?',
      a: "Not directly. Medigap policies don't follow the Annual Enrollment Period; you can apply at other times of year, although health questions may apply. The AEP is about Medicare Advantage and Part D plans.",
    },
    {
      q: 'What happens if I miss December 7?',
      a: "Your current coverage continues. If you're in a Medicare Advantage plan, you may still make one change during the Medicare Advantage Open Enrollment Period (January 1 – March 31), or you may qualify for a Special Enrollment Period.",
    },
  ],
};

export const scam: GuideContent = {
  h1: 'Medicare Scam Protection: How to Spot, Stop and Report Fraud',
  lede: 'Medicare scams arrive by phone, text, email and even at the front door. This guide explains the warning signs, what Medicare will never ask you for, and exactly what to do if you think you have been targeted.',
  sections: [
    {
      id: 'common-scams',
      heading: 'Common Medicare scams',
      blocks: [
        {
          type: 'ul',
          items: [
            '**The “new card” call.** A caller says you need a new Medicare card and asks you to “confirm” your Medicare or Social Security number.',
            '**“Free” equipment or tests.** Offers of free back braces, diabetic supplies or genetic tests — in exchange for your Medicare number.',
            '**Threats to cancel your benefits.** The caller claims your coverage will end unless you act right now.',
            '**Pressure to switch plans.** Someone pushes you to enroll in a new plan over the phone, often promising gifts or benefits that sound too good to be true.',
            '**Fake links.** Texts or emails that look official and ask you to click a link to “update” your information.',
          ],
        },
      ],
    },
    {
      id: 'medicare-never',
      heading: 'What Medicare will never do',
      blocks: [
        {
          type: 'p',
          text: "Medicare generally won't call you for personal information unless you called first and asked for a call back, or a plan you already belong to is contacting you. Medicare will never:",
        },
        {
          type: 'ul',
          items: [
            'Ask for your Medicare number or bank information in an unexpected call, text or email',
            "Threaten to cancel your benefits if you don't share information",
            'Charge you for a new Medicare card',
            'Come to your home to sell you something',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Our advice to every client',
          text: "Be cautious of unsolicited calls, texts or emails about Medicare. Never give personal information over the phone to someone you don't know. Don't enroll over the phone with a stranger — call us instead.",
        },
      ],
    },
    {
      id: 'protect-yourself',
      heading: 'How to protect yourself',
      blocks: [
        {
          type: 'ol',
          items: [
            "**Hang up.** You don't have to be polite to a pushy caller. Hang up and call a number you trust.",
            '**Guard your Medicare card like a credit card.** Share your number only with your doctors, your pharmacy, your insurance company or a licensed agent you chose to work with.',
            '**Don’t click links** in unexpected texts or emails about Medicare.',
            "**Check your statements.** Review your Medicare Summary Notices and your plan's Explanation of Benefits for services you didn't receive.",
            "**Know your agent.** A real licensed agent will tell you their name and license number and won't rush you. Agents aren't allowed to make unsolicited calls to sell you Medicare plans. You can look up an agent's license with the Louisiana Department of Insurance.",
            '**Talk it over.** Before signing anything, check with a family member or someone you trust.',
          ],
        },
      ],
    },
    {
      id: 'if-targeted',
      heading: "What to do if you think you've been scammed",
      blocks: [
        {
          type: 'ol',
          items: [
            'Call 1-800-MEDICARE (1-800-633-4227; TTY 1-877-486-2048) to report suspected fraud.',
            'If you shared your Social Security number or bank information, contact your bank right away and consider placing a fraud alert with the credit bureaus.',
            'Report the scam to the Federal Trade Commission at [ReportFraud.ftc.gov](https://reportfraud.ftc.gov).',
            'Report Medicare fraud to the HHS Office of Inspector General hotline at 1-800-HHS-TIPS (1-800-447-8477).',
            'Get free, local help from your Senior Medicare Patrol (SMP) through [smpresource.org](https://smpresource.org).',
            "Call us. We'll help you check your coverage and make sure nothing was changed without your permission.",
          ],
        },
      ],
    },
    {
      id: 'share',
      heading: 'Share this with someone you love',
      blocks: [
        {
          type: 'p',
          text: 'Scammers often target people who live alone or are new to Medicare. Print this page or email it to a parent, grandparent or neighbor. A two-minute conversation can prevent a lot of heartache — and remember the [Annual Enrollment Period](page:aep) is when scam calls tend to spike.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'Someone called and asked for my Medicare number. What should I do?',
      a: "Hang up and don't confirm any information. If you already shared your number, call 1-800-MEDICARE to report it, and call us so we can help you check your coverage.",
    },
    {
      q: 'Is it safe to enroll in a plan over the phone?',
      a: 'Only if you placed the call to someone you know and trust, such as a licensed agent you chose or the plan itself. Never enroll with a stranger who called you out of the blue.',
    },
    {
      q: 'How can I tell if an agent is legitimate?',
      a: "Ask for their full name and license number, and look them up with the Louisiana Department of Insurance. A legitimate agent won't pressure you, threaten you or ask you to decide on the spot.",
    },
    {
      q: 'Will you ever ask for my Medicare number online?',
      a: 'No. We will never ask for your Medicare number, Social Security number or bank information through our website or by email.',
    },
  ],
};

export const about: AboutContent = {
  h1: 'A Husband-and-Wife Team Helping Louisiana Seniors',
  lede: 'Martinez Insurance Agency is Nidia and John Martinez — licensed, bilingual insurance agents based in Greater New Orleans. We sit down with you, explain your options in plain language, and stay by your side long after you enroll.',
  sections: [
    {
      id: 'local-personal-bilingual',
      heading: 'Local, personal and bilingual',
      blocks: [
        {
          type: 'p',
          text: 'Martinez Insurance Agency is built around a simple idea: Medicare help should be honest, patient and personal. Nidia brings decades of experience with Medicare Advantage and Medicare Supplement plans. John helps families with final expense, life, hospital indemnity, dental and vision, and health insurance. Together we cover the questions that come up at 65 and beyond.',
        },
        {
          type: 'p',
          text: "We're fluent in English and Spanish, so you and your family can talk through every decision in the language you're most comfortable with.",
        },
      ],
    },
    {
      id: 'what-to-expect',
      heading: 'What working with us looks like',
      blocks: [
        {
          type: 'ul',
          items: [
            '**We listen first.** We ask about your doctors, prescriptions, health and budget before we talk about any plan.',
            '**We explain things plainly.** No jargon without an explanation, and no question is too small.',
            "**We meet in person.** We believe these decisions are best made face to face — and we're glad to help by phone when that's easier.",
            "**We're here year after year.** Call us when your plan changes, when a bill doesn't look right, or when you just have a question.",
          ],
        },
      ],
    },
    {
      id: 'why-no-cost',
      heading: 'Why our help costs you nothing',
      blocks: [
        {
          type: 'p',
          text: "We're paid by the insurance companies whose plans we offer. Your premium is the same whether you enroll through us or directly with the company, so you get a licensed local advisor at no extra cost. We don't offer every plan available in your area, and we'll always tell you which companies we represent.",
        },
      ],
    },
    {
      id: 'our-commitment',
      heading: 'Our commitment to you',
      blocks: [
        {
          type: 'p',
          text: "We follow Medicare's marketing rules: we won't cold-call you, pressure you or promise gifts to earn your business. We're not connected with or endorsed by the U.S. government or the federal Medicare program — we're local, licensed agents who work for you. Learn how to [protect yourself from Medicare scams](page:scam).",
        },
      ],
    },
  ],
};

export const agents: Record<string, AgentContent> = {
  'nidia-martinez': {
    headline: 'Licensed Medicare agent focused on Medicare Advantage & Medicare Supplement plans',
    bio: [
      'Nidia Martinez is a licensed insurance agent who has spent a long career helping people understand their insurance options. Today Nidia focuses on Medicare Advantage and Medicare Supplement plans for seniors across Greater New Orleans and throughout Louisiana.',
      'Nidia is fluent in English and Spanish and takes the time to explain each option clearly, compare plans side by side, and make sure every client feels confident before enrolling.',
      'Working alongside John Martinez at Martinez Insurance Agency, Nidia offers personal, in-person help at no cost to you, plus a familiar voice to call when your plan changes each year. Learn about [Medicare Advantage](page:service-medicare-advantage) and [Medicare Supplement](page:service-medicare-supplement) plans.',
    ],
    focus: [
      'Medicare Advantage (Part C)',
      'Medicare Supplement (Medigap)',
      'Annual Enrollment plan reviews',
      'Help for people new to Medicare',
    ],
    sections: [
      {
        id: 'what-to-expect',
        heading: 'What to expect when you meet with Nidia',
        blocks: [
          {
            type: 'ol',
            items: [
              'Nidia reviews your current coverage and, in the fall, your Annual Notice of Change.',
              'You share your doctors, prescriptions, pharmacy and budget.',
              'Nidia compares Medicare Advantage and Medicare Supplement options side by side, including total yearly costs.',
              'If you decide to make a change, Nidia helps you enroll or apply — and checks in again next year.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        heading: 'Questions Nidia can help you answer',
        blocks: [
          {
            type: 'ul',
            items: [
              'Should I choose Medicare Advantage or a Medicare Supplement?',
              'Are my doctors and hospital in the plan’s network?',
              'What will my prescriptions cost next year?',
              'Is it time to switch plans, or should I stay where I am?',
            ],
          },
          {
            type: 'p',
            text: 'Ready to talk? Read the [Annual Enrollment Period guide](page:aep) or [send us a message](page:contact).',
          },
        ],
      },
    ],
  },
  'john-martinez': {
    headline: 'Licensed insurance agent for final expense, life, hospital indemnity, dental & vision and health insurance',
    bio: [
      'John Martinez is a licensed insurance agent who works alongside Nidia at Martinez Insurance Agency. John helps Louisiana families with the coverage that fills the gaps around Medicare — final expense and low-cost life insurance, hospital indemnity plans, dental and vision coverage, and health insurance for people under 65.',
      "John is fluent in English and Spanish and works with clients in person and by phone. Whether you're planning ahead for your family or looking for help with hospital copays, John will explain your options in plain language and help you choose coverage that fits your budget.",
      "John also helps clients stay safe from Medicare scams. If you get a suspicious call about Medicare, don't enroll over the phone with a stranger — call John instead. Read our [Medicare scam protection guide](page:scam).",
    ],
    focus: [
      'Final expense insurance',
      'Low-cost life insurance',
      'Hospital indemnity plans',
      'Dental & vision insurance',
      'Health insurance (under 65)',
    ],
    sections: [
      {
        id: 'what-to-expect',
        heading: 'What to expect when you meet with John',
        blocks: [
          {
            type: 'ol',
            items: [
              'John asks what you want to protect — your family, your savings or your budget during a hospital stay.',
              'You talk through your health, your current coverage and what you can comfortably pay each month.',
              'John compares options from the companies we represent and explains each one in plain language.',
              'If you choose a policy, John helps with the application and stays available for questions.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        heading: 'Questions John can help you answer',
        blocks: [
          {
            type: 'ul',
            items: [
              'How much final expense coverage does my family really need?',
              'Can I get life insurance if I have diabetes or high blood pressure?',
              'Will a hospital indemnity plan help with my Medicare Advantage copays?',
              'What are my health insurance options before I turn 65?',
            ],
          },
          {
            type: 'p',
            text: 'Start with [final expense insurance](page:service-final-expense-insurance) or [send us a message](page:contact).',
          },
        ],
      },
    ],
  },
};

export const serviceArea: AreaHubContent = {
  h1: 'Medicare Help Across Louisiana',
  lede: "We're based in Greater New Orleans and help people with Medicare throughout Louisiana — in person across the metro area and the Northshore, and by phone anywhere in the state.",
  sections: [
    {
      id: 'where-we-work',
      heading: 'Where we work',
      blocks: [
        {
          type: 'p',
          text: 'Our home base is Greater New Orleans: the East Bank and West Bank of Jefferson Parish, Orleans Parish, St. Bernard Parish, and the Northshore communities of St. Tammany Parish. We also help clients in the River Parishes, including LaPlace, and in Baton Rouge. If you live anywhere else in Louisiana, call us — we can review your options by phone.',
        },
      ],
    },
    {
      id: 'why-local',
      heading: 'Why a local agent matters',
      blocks: [
        {
          type: 'p',
          text: 'Medicare Advantage plans are offered parish by parish. The plans available in Orleans Parish can differ from those in St. Tammany or East Baton Rouge, and provider networks vary even more. A local agent knows the plans, the hospitals and the doctors in your area — and is close by when you need help.',
        },
      ],
    },
    {
      id: 'in-person-or-phone',
      heading: 'In person or by phone',
      blocks: [
        {
          type: 'p',
          text: 'Many people prefer to review Medicare face to face, with their paperwork in front of them. Call us to set up an appointment. If traveling is hard, a phone review works well too, and family members can join from wherever they are.',
        },
      ],
    },
    {
      id: 'languages',
      heading: 'In English or Spanish',
      blocks: [
        {
          type: 'p',
          text: 'Both of our agents are fluent in Spanish, so Spanish-speaking families can get help in their own language — from the first phone call to the day your new plan starts. Start with our [Medicare questions and answers](page:faq).',
        },
      ],
    },
  ],
};

export const faq: FaqPageContent = {
  h1: 'Medicare Questions, Answered in Plain English',
  lede: "Straight answers to the questions we hear most from people in Greater New Orleans and across Louisiana. Don't see yours? Call us — there's no such thing as a silly Medicare question.",
  groups: [
    {
      id: 'working-with-us',
      heading: 'Working with us',
      faqs: [
        {
          q: 'How much does your help cost?',
          a: "Nothing. We're paid by the insurance companies, and your plan premium is the same whether you enroll through us or on your own.",
        },
        {
          q: 'Do you speak Spanish?',
          a: 'Yes. Both Nidia and John are fluent in English and Spanish — hablamos español.',
        },
        {
          q: 'Can we meet in person?',
          a: 'Yes. We offer personal, in-person help throughout Greater New Orleans. Call us to set up a time, or we can help by phone if you prefer.',
        },
        {
          q: 'Which insurance companies do you represent?',
          a: "We list the companies we represent on our [Medicare Advantage](page:service-medicare-advantage) and [Medicare Supplement](page:service-medicare-supplement) pages. We don't offer every plan available in your area.",
        },
        {
          q: 'Are you part of Medicare or the government?',
          a: "No. We're licensed insurance agents. We're not connected with or endorsed by the U.S. government or the federal Medicare program.",
        },
      ],
    },
    {
      id: 'medicare-basics',
      heading: 'Medicare basics',
      faqs: [
        {
          q: 'What are Medicare Parts A, B, C and D?',
          a: 'Part A is hospital insurance. Part B covers doctor visits and outpatient care. Part C, or Medicare Advantage, is a way to get your Medicare benefits through a private plan. Part D covers prescription drugs.',
        },
        {
          q: 'When should I sign up for Medicare?',
          a: 'Your Initial Enrollment Period is the seven-month window that begins three months before the month you turn 65. If you or your spouse are still working and have employer coverage, you may be able to delay Part B without a penalty — ask us before you decide.',
        },
        {
          q: 'Is there a penalty for signing up late?',
          a: 'There can be. The Part B penalty is generally 10% for each full 12-month period you could have had Part B but didn’t. The Part D penalty applies if you go 63 days or more without creditable drug coverage. Both penalties usually last as long as you have that coverage.',
        },
        {
          q: "What doesn't Original Medicare cover?",
          a: "Original Medicare doesn't cover most routine dental care, eye exams for glasses, hearing aids or long-term custodial care, and it has no yearly limit on out-of-pocket costs. That's why many people add other coverage.",
        },
      ],
    },
    {
      id: 'choosing-a-plan',
      heading: 'Choosing a plan',
      faqs: [
        {
          q: 'Should I choose Medicare Advantage or a Medicare Supplement?',
          a: "It depends on your health, your doctors, how much you travel and your budget. Medicare Advantage often has lower premiums and extra benefits but uses networks and copays. A Medicare Supplement usually costs more each month but lets you see any provider that accepts Medicare, with fewer out-of-pocket costs. We'll compare both with you.",
        },
        {
          q: "Can I change my plan if I don't like it?",
          a: 'Usually during specific enrollment periods — like the Annual Enrollment Period each fall — or if you qualify for a Special Enrollment Period. Medicare Advantage members also have a chance to switch between January 1 and March 31.',
        },
        {
          q: 'What is a Special Needs Plan?',
          a: 'A Medicare Advantage plan for people with specific needs, such as diabetes or chronic heart conditions, or for people with both Medicare and Medicaid. These plans may offer enhanced benefits. [Read about Special Needs Plans](page:service-special-needs-plans).',
        },
        {
          q: 'Do I need a Part D plan if I have a Medicare Supplement?',
          a: "If you want prescription coverage, yes — Medigap plans sold today don't include drug coverage. Going without creditable drug coverage can also lead to a late enrollment penalty.",
        },
      ],
    },
    {
      id: 'enrollment-and-reviews',
      heading: 'Enrollment and yearly reviews',
      faqs: [
        {
          q: 'What is the Annual Enrollment Period?',
          a: "October 15 to December 7 each year. It's when you can change Medicare Advantage and Part D plans for the following year. [Read our Annual Enrollment guide](page:aep).",
        },
        {
          q: 'What is an Annual Notice of Change?',
          a: 'A letter your Medicare Advantage or Part D plan sends by the end of September explaining changes for next year, such as premiums, copays and drug coverage.',
        },
        {
          q: "If I'm happy with my plan, do I need to do anything?",
          a: "No. Your plan renews automatically. If you're unhappy with the changes, schedule an in-person review with us.",
        },
        {
          q: 'What should I bring to my appointment?',
          a: 'Your Medicare card, any current plan cards, your Annual Notice of Change if you have one, a list of your medicines and doses, and the names of your doctors and pharmacy.',
        },
      ],
    },
    {
      id: 'safety',
      heading: 'Safety and scams',
      faqs: [
        {
          q: 'Will you ever call me out of the blue?',
          a: "No. We don't make unsolicited sales calls. We'll contact you only if you've asked us to, for example through our contact form.",
        },
        {
          q: 'What should I do if someone asks for my Medicare number?',
          a: "Don't give it to anyone who contacts you unexpectedly. Hang up and call a number you trust — or call us. See our [Medicare scam protection guide](page:scam).",
        },
      ],
    },
    {
      id: 'other-coverage',
      heading: 'Other coverage',
      faqs: [
        {
          q: 'What is final expense insurance?',
          a: 'A small whole life policy that helps your family pay for funeral and burial costs. [Read about final expense insurance](page:service-final-expense-insurance).',
        },
        {
          q: 'How does hospital indemnity insurance help with Medicare Advantage?',
          a: "It pays you a cash benefit for covered hospital stays, which you can put toward your plan's daily hospital copays or other expenses.",
        },
        {
          q: 'Can you help family members under 65?',
          a: 'Yes. We help with [health insurance for people under 65](page:service-health-insurance), life insurance, and dental and vision coverage.',
        },
      ],
    },
  ],
};

export const home: HomeContent = {
  faqs: [
    {
      q: 'How much does it cost to work with you?',
      a: 'Nothing. Insurance companies pay us, and your premium is the same whether you enroll with us or on your own.',
    },
    {
      q: "If I'm happy with my plan, do I need to change it?",
      a: "No. If you're satisfied after reading your Annual Notice of Change, your plan renews automatically. If the changes concern you, schedule a review with us.",
    },
    {
      q: 'Do you meet in person?',
      a: "Yes. We offer personal, in-person help in Greater New Orleans, and we're happy to help by phone anywhere in Louisiana.",
    },
    {
      q: 'Is this the government or Medicare calling?',
      a: "No — and Medicare won't call you uninvited to ask for your number. We're licensed agents, not the government. Learn how to [avoid Medicare scams](page:scam).",
    },
  ],
};

export const contact: ContactPageContent = {
  h1: 'Contact Us for a Free Medicare Consultation',
  lede: "Call us or send a short message. We'll set up a time to talk — in person or by phone, in English or Spanish — at no cost to you.",
  sections: [
    {
      id: 'what-happens-next',
      heading: 'What happens after you reach out',
      blocks: [
        {
          type: 'ol',
          items: [
            "We'll get back to you to learn a little about your situation and answer quick questions.",
            "If you'd like a full review, we'll schedule a time to meet in person or by phone.",
            "We'll compare plans with you and help you enroll if you decide to. There's never an obligation.",
          ],
        },
      ],
    },
    {
      id: 'what-to-have-ready',
      heading: 'What to have ready',
      blocks: [
        {
          type: 'ul',
          items: [
            'Your Medicare card and any current plan ID cards',
            'A list of your medicines, with doses',
            'Your doctors, specialists and preferred pharmacy',
            'Your Annual Notice of Change, if you received one',
          ],
        },
      ],
    },
    {
      id: 'your-privacy',
      heading: 'Your privacy',
      blocks: [
        {
          type: 'p',
          text: "Please don't send your Medicare number, Social Security number, date of birth or health details through this website. We'll only ask for the information we need, at the right time, through a secure process. Read our [privacy policy](page:privacy).",
        },
        {
          type: 'p',
          text: "Before we discuss specific Medicare Advantage or Part D plans, Medicare rules ask us to document which types of plans you'd like to talk about (a “Scope of Appointment”). We'll explain this short form when we schedule your appointment.",
        },
      ],
    },
  ],
};
