import type { GuideContent, GuidesHubContent } from '../types';
import type { GuideKey } from '@/config/guides';

/*
 * Sources (verified 2026-10-25):
 * - Sign-up via Social Security, phone/TTY, local office:
 *   https://www.medicare.gov/basics/get-started-with-medicare/sign-up/how-do-i-sign-up-for-medicare
 * - SSA.gov/locator, appointment 3 months before 65, SSA.gov/extrahelp, 1-800-MEDICARE / TTY,
 *   live chat, "information 24 hours a day, including weekends", replacement cards, what SHIPs are:
 *   Medicare & You 2027, https://www.medicare.gov/publications/10050-medicare-and-you.pdf
 * - Louisiana SHIP = Senior Health Insurance Information Program (SHIIP), 1-800-259-5300,
 *   site on ldi.la.gov: https://www.shiphelp.org/ships/louisiana/
 * - "Medicare will never call you to sell you anything or visit you at your home":
 *   https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse
 */
const medicareOffice: GuideContent = {
  h1: 'Is There a Medicare Office Near Me in New Orleans?',
  lede: "Medicare doesn't have local walk-in offices. Here's where people in New Orleans and Metairie go for help, who does what, and where a local agent fits in.",
  sections: [
    {
      id: 'short-answer',
      heading: 'Is there a Medicare office near me?',
      blocks: [
        {
          type: 'p',
          text: "No. Medicare doesn't run local walk-in offices. You reach Medicare by phone at **1-800-MEDICARE**, by live chat on Medicare.gov, or by mail. For in-person help signing up, Social Security has local offices, and Louisiana offers free one-on-one counseling through a program called SHIIP.",
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'We are not Medicare',
          text: 'Martinez Insurance Solutions is a licensed private insurance agency. We are not Medicare, Social Security or any government agency. We help you compare and enroll in private Medicare plans.',
        },
        { type: 'p', text: 'Which door you need depends on what you want to get done:' },
        {
          type: 'ul',
          items: [
            '**Sign up for Part A and Part B, or apply for Extra Help:** Social Security.',
            '**Replace your Medicare card, ask about a claim, or compare plans online:** 1-800-MEDICARE or Medicare.gov.',
            '**Free, unbiased counseling:** SHIIP, Louisiana’s Senior Health Insurance Information Program.',
            '**Compare private plans and enroll with someone local, face to face:** a licensed Medicare agent.',
          ],
        },
      ],
    },
    {
      id: 'social-security',
      heading: 'Where do I sign up for Medicare in New Orleans?',
      blocks: [
        {
          type: 'p',
          text: 'You sign up for Medicare through Social Security, not through Medicare itself. The easiest way is online at [SSA.gov/medicare/sign-up](https://www.ssa.gov/medicare/sign-up) with a free "my Social Security" account. You can also call Social Security at 1-800-772-1213 (TTY 1-800-325-0778) or contact your local Social Security office.',
        },
        {
          type: 'p',
          text: "Social Security offices serve the Greater New Orleans area, but addresses and hours can change. Look up the office for your ZIP code with Social Security's [office locator](https://www.ssa.gov/locator) before you go. If you'd like an appointment, Medicare suggests contacting Social Security about 3 months before you turn 65.",
        },
        { type: 'h3', text: 'What Social Security handles' },
        {
          type: 'ul',
          items: [
            'Signing up for Medicare Part A and Part B',
            'Signing up for Part B later, if you waited because you had coverage from work',
            'Applying for Extra Help with prescription drug costs, at any time, at [SSA.gov/extrahelp](https://www.ssa.gov/extrahelp)',
            'Social Security retirement and disability benefits, which can start your Part A automatically',
          ],
        },
        {
          type: 'p',
          text: 'If you or your spouse worked for a railroad, contact the Railroad Retirement Board at 1-877-772-5772 instead.',
        },
      ],
    },
    {
      id: 'contact-medicare',
      heading: 'How do I contact Medicare directly?',
      blocks: [
        {
          type: 'p',
          text: 'Call **1-800-MEDICARE (1-800-633-4227)**. TTY users can call 1-877-486-2048. The line has information available 24 hours a day, including weekends. You can also chat live with Medicare at [Medicare.gov](https://www.medicare.gov/talk-to-someone).',
        },
        { type: 'p', text: 'Medicare can help you with things like:' },
        {
          type: 'ul',
          items: [
            'Ordering a replacement Medicare card, or printing one from your secure Medicare.gov account',
            'Questions about your Original Medicare claims and bills',
            'Comparing health and drug plans with the [Medicare Plan Finder](https://www.medicare.gov/plan-compare)',
            'Forms and publications, in English and Spanish',
          ],
        },
        {
          type: 'p',
          text: 'Have your Medicare card in front of you when you call. When asked for your Medicare Number, say the numbers and letters clearly, one at a time.',
        },
      ],
    },
    {
      id: 'shiip',
      heading: 'Where can I get free Medicare counseling in Louisiana?',
      blocks: [
        {
          type: 'p',
          text: "Call Louisiana's **Senior Health Insurance Information Program (SHIIP)** at 1-800-259-5300, or visit the [SHIIP page](https://www.ldi.la.gov/consumers/senior-health-shiip) on the Louisiana Department of Insurance website. SHIIP is Louisiana's State Health Insurance Assistance Program.",
        },
        {
          type: 'p',
          text: "State Health Insurance Assistance Programs get money from the federal government to give local counseling to people with Medicare. They aren't connected to any insurance company or health plan, and their help is free and personal, for you, your family or your caregiver.",
        },
      ],
    },
    {
      id: 'local-agent',
      heading: 'When should I see a local Medicare agent?',
      blocks: [
        {
          type: 'p',
          text: 'See a licensed agent when you are ready to compare private Medicare plans and enroll. Social Security handles your Part A and Part B. Private insurance companies offer Medicare Advantage, Medicare Supplement (Medigap) and Part D drug plans, and a licensed agent helps you compare them side by side.',
        },
        {
          type: 'p',
          text: 'At our office on Veterans Boulevard in Metairie, we sit down with you, check your doctors and prescriptions against the plans available where you live, and help you enroll if you decide to. There is no cost to you. We also help by phone anywhere in Louisiana, in English or Spanish.',
        },
        {
          type: 'ul',
          items: [
            'Compare [Medicare Advantage plans in Louisiana](page:service-medicare-advantage)',
            'Learn about [Medicare Supplement (Medigap) plans](page:service-medicare-supplement)',
            'Find a [Part D drug plan](page:service-part-d-prescription-drug-plans) for your medicines',
            'Get [Medicare help in Metairie](page:city-metairie) or see [Medicare Advantage plans in New Orleans](page:city-new-orleans)',
          ],
        },
        { type: 'h3', text: 'What to bring to your appointment with us' },
        {
          type: 'ul',
          items: [
            'Your Medicare card and the cards for any plan you have now',
            'A list of your medicines, with the dose of each one',
            'The names of your doctors, specialists and preferred pharmacy',
            'Your Annual Notice of Change, if you received one',
          ],
        },
        {
          type: 'p',
          text: '[Contact us](page:contact) to set up a free appointment, in person or by phone. A family member is welcome to join you.',
        },
      ],
    },
    {
      id: 'scam-warning',
      heading: 'Will Medicare call me or come to my home?',
      blocks: [
        {
          type: 'p',
          text: 'No. Medicare will never call you to sell you anything or visit you at your home. Medicare only calls and asks for personal information in limited situations, like returning a call you made first.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'If someone says they are "from Medicare"',
          text: "Hang up. Then call 1-800-MEDICARE yourself, using the number on the back of your card. Never give your Medicare Number or Social Security Number to a caller you don't know. Read our guide to [avoiding Medicare scams](page:scam).",
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'Where do I sign up for Medicare in New Orleans?',
      a: 'Through Social Security. Sign up online at SSA.gov, call 1-800-772-1213, or contact a Social Security office. Use [Social Security’s office locator](https://www.ssa.gov/locator) to find the office for your ZIP code.',
    },
    {
      q: 'Can I go to a Medicare office in person?',
      a: "Medicare doesn't have walk-in offices. For in-person help signing up, contact Social Security, which has local offices. For in-person help comparing private plans, you can meet with a licensed agent, like our team in Metairie.",
    },
    {
      q: 'Is there a Medicare office in Metairie?',
      a: 'No. There is no Medicare office in Metairie. Our Metairie office is a licensed private insurance agency, not Medicare. We can help you compare plans and point you to the right government office for anything else.',
    },
    {
      q: 'Who can help me with Medicare for free?',
      a: '1-800-MEDICARE, Social Security and SHIIP (1-800-259-5300) are all free. Working with us is free too: insurance companies pay us, and your premium is the same whether you enroll with us or on your own.',
    },
  ],
};

/*
 * Sources (verified 2026-10-25):
 * - C-SNP definition, CMS chronic condition list (diabetes mellitus, chronic heart failure,
 *   cardiovascular disorders limited to arrhythmias / CAD / PVD / chronic venous thromboembolic
 *   disorder), CMS multi-condition groups 1-5, "only one of the qualifying conditions" vs
 *   MAO-customized groups needing all: https://www.cms.gov/medicare/enrollment-renewal/special-needs-plans/chronic-conditions
 * - SNPs are HMO/PPO, cover Part A/B, all SNPs include Part D, care coordination, tailored
 *   benefits/providers/formularies, extra hospital days example, stay only while you meet the
 *   condition, insurers decide where SNPs are offered, network rules:
 *   https://www.medicare.gov/health-drug-plans/health-plans/your-health-plan-options/SNP
 * - "You aren't required to enroll in an SNP"; Plan Finder SNP filter; MA vs Original Medicare
 *   (any doctor that accepts Medicare, MA yearly out-of-pocket limit, no limit in Original Medicare
 *   unless Medigap etc.): Medicare & You 2027, https://www.medicare.gov/publications/10050-medicare-and-you.pdf
 * - Plan must confirm the qualifying condition; pre-enrollment qualification assessment tool;
 *   post-enrollment verification with a provider; C-SNP SEP (available while you have the
 *   condition, ends on enrollment; if found ineligible, SEP begins the month notified and ends two
 *   calendar months after): CMS CY 2027 MA/Part D Enrollment and Disenrollment Guidance §§20.8.4,
 *   30.6.14, 50.5, https://www.cms.gov/files/document/cy-2027-c-d-enrollment-disenrollment-guidance.pdf-0
 * - Medigap Open Enrollment / options may be limited later: https://www.medicare.gov/supplements-other-insurance/when-can-i-buy-medigap
 * - SEP when you lose special needs status (starts the month you lose it; ends on joining another
 *   plan or 3 calendar months after the involuntary disenrollment, whichever is earlier):
 *   https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/joining-a-plan/special-enrollment-periods
 */
const diabetesHeartSnp: GuideContent = {
  h1: 'Medicare Plans for Diabetes & Heart Disease: A Guide to C-SNPs in Louisiana',
  lede: 'If you have diabetes, heart failure or another heart condition, a Chronic Condition Special Needs Plan may be an option. Here is who qualifies, when you can join and what to ask first.',
  sections: [
    {
      id: 'what-is-a-csnp',
      heading: 'What is a Chronic Condition Special Needs Plan (C-SNP)?',
      blocks: [
        {
          type: 'p',
          text: 'A C-SNP is a type of Medicare Advantage plan that only people with certain severe or disabling chronic conditions can join, such as diabetes or chronic heart failure. Because members share a condition, the plan shapes its benefits, doctors and drug list around it and includes care coordination.',
        },
        {
          type: 'p',
          text: 'Like every Medicare Advantage plan, a C-SNP covers all of your Medicare Part A (hospital) and Part B (medical) benefits. C-SNPs are either HMO or PPO plans, and **every Special Needs Plan must include Medicare drug coverage (Part D)**, so you don’t buy a separate drug plan.',
        },
        {
          type: 'p',
          text: 'C-SNPs are one of three kinds of Special Needs Plans. The other two serve people who have both Medicare and Medicaid (D-SNPs) and people who need nursing-home-level care (I-SNPs). Read our overview of [Medicare Special Needs Plans in Louisiana](page:service-special-needs-plans) for all three.',
        },
      ],
    },
    {
      id: 'type-2-diabetes',
      heading: 'Can people with type 2 diabetes join a C-SNP?',
      blocks: [
        {
          type: 'p',
          text: 'Yes, if a C-SNP that serves diabetes is offered where you live. Diabetes mellitus is on the list of chronic conditions that Medicare (CMS) allows these plans to serve, and that medical term covers type 2 diabetes. You also need Medicare Part A and Part B and must live in the plan’s service area.',
        },
        { type: 'h3', text: 'What about type 1 diabetes?' },
        {
          type: 'p',
          text: 'Type 1 diabetes is also diabetes mellitus, so the same rules apply. Whatever type you have, the plan must confirm your diagnosis before your membership is final, usually by checking with your doctor.',
        },
      ],
    },
    {
      id: 'who-qualifies',
      heading: 'Who qualifies for a diabetes special needs plan?',
      blocks: [
        { type: 'p', text: 'You can join a diabetes C-SNP if all of these are true:' },
        {
          type: 'ul',
          items: [
            'You have Medicare Part A and Part B.',
            'You live in the plan’s service area.',
            'You have the condition the plan serves, and the plan confirms it.',
          ],
        },
        {
          type: 'p',
          text: 'You can stay in a C-SNP only while you continue to meet its condition. You are never required to join a Special Needs Plan; it is one option alongside a regular [Medicare Advantage plan](page:service-medicare-advantage) or Original Medicare with a [Medicare Supplement (Medigap) policy](page:service-medicare-supplement).',
        },
      ],
    },
    {
      id: 'diabetes-and-heart-disease',
      heading: 'Is there a Medicare plan for both diabetes and heart disease?',
      blocks: [
        {
          type: 'p',
          text: 'Yes. Some C-SNPs serve a group of related conditions instead of just one. CMS lets plans build a C-SNP around these groups of conditions that often occur together:',
        },
        {
          type: 'ul',
          items: [
            'Diabetes and chronic heart failure',
            'Chronic heart failure and cardiovascular disorders',
            'Diabetes and cardiovascular disorders',
            'Diabetes, chronic heart failure and cardiovascular disorders',
            'Stroke and cardiovascular disorders',
          ],
        },
        {
          type: 'p',
          text: 'In a plan built on one of these CMS groups, **you need only one of the conditions in the group to qualify**. Some plans create their own combination instead and require members to have every condition in it, so always read the plan’s eligibility rules, or ask us to check.',
        },
        { type: 'h3', text: 'Which heart conditions count?' },
        {
          type: 'p',
          text: 'On CMS’s list, chronic heart failure is its own condition. “Cardiovascular disorders” is limited to cardiac arrhythmias, coronary artery disease, peripheral vascular disease and chronic venous thromboembolic disorder. If you have heart failure, a C-SNP that serves heart failure, or one of the groups above that includes it, may fit.',
        },
      ],
    },
    {
      id: 'benefits',
      heading: 'What benefits can a C-SNP include?',
      blocks: [
        {
          type: 'p',
          text: 'Every C-SNP includes your Part A, Part B and Part D coverage plus care coordination. Beyond that, benefits vary by plan and change from year to year. Medicare explains that an SNP may cover extra services for the group it serves; for example, if you have congestive heart failure and need a hospital stay, an SNP may cover extra days in the hospital.',
        },
        {
          type: 'p',
          text: 'Because each plan sets its own benefits, we compare the actual plans offered in your parish with you, line by line, instead of promising any particular extra.',
        },
      ],
    },
    {
      id: 'csnp-vs-medicare-advantage',
      heading: 'How is a C-SNP different from a regular Medicare Advantage plan?',
      blocks: [
        {
          type: 'p',
          text: 'A C-SNP covers everything a regular Medicare Advantage plan does, but only people with the plan’s condition can join, drug coverage is always included, and its benefits, provider choices and drug list are tailored to that condition. Here is how the three main paths compare:',
        },
        {
          type: 'table',
          caption: 'C-SNP vs. regular Medicare Advantage vs. Original Medicare with Medigap',
          head: ['What to compare', 'C-SNP', 'Regular Medicare Advantage', 'Original Medicare + Medigap'],
          rows: [
            [
              'Who can join',
              'People with Part A and B in the service area who have the condition the plan serves',
              'People with Part A and B in the service area',
              'People with Part A and B; Medigap is easiest to get during your Medigap Open Enrollment Period',
            ],
            [
              'Doctors and hospitals',
              'Usually the plan’s network; some plans cover out-of-network care at a higher cost',
              'Usually the plan’s network; some plans cover out-of-network care at a higher cost',
              'Any doctor or hospital in the U.S. that accepts Medicare',
            ],
            ['Drug coverage', 'Always included', 'Included in most plans', 'Not included; you add a separate Part D plan'],
            ['Built around your condition', 'Yes: care coordination and a tailored drug list and network', 'No', 'No'],
            [
              'Yearly limit on out-of-pocket costs',
              'Yes, for covered services',
              'Yes, for covered services',
              'No limit in Original Medicare; Medigap helps pay your share',
            ],
            [
              'When you can join',
              'Any time while you have the qualifying condition, plus the regular enrollment periods',
              'Regular enrollment periods, like Oct 15 – Dec 7 each year',
              'Medigap: best during your 6-month Medigap Open Enrollment Period',
            ],
          ],
        },
      ],
    },
    {
      id: 'when-to-enroll',
      heading: 'When can I enroll in a diabetes C-SNP?',
      blocks: [
        {
          type: 'p',
          text: 'Any time of year. If you have a qualifying condition, a Special Enrollment Period lets you join a C-SNP that serves it whenever you’re ready. That chance lasts while you have the condition and ends once you enroll in the C-SNP. You can also join during the regular periods, like when you first get Medicare or during the [Annual Enrollment Period](page:aep), October 15 – December 7.',
        },
        { type: 'h3', text: 'What if the plan finds I don’t qualify?' },
        {
          type: 'p',
          text: 'If the plan can’t confirm your condition with your provider after you enroll, it notifies you. You then get a Special Enrollment Period to join another Medicare Advantage plan. It starts the month the plan notifies you and ends two calendar months after that month.',
        },
        { type: 'h3', text: 'What if my condition changes later?' },
        {
          type: 'p',
          text: 'If you no longer have a condition the plan serves, you can switch to another type of Medicare Advantage plan or a Medicare drug plan. Your chance starts the month you lose your special needs status and ends when you join another plan, or 3 calendar months after your involuntary disenrollment takes effect, whichever comes first.',
        },
      ],
    },
    {
      id: 'leaving-a-csnp',
      heading: 'Can I leave a C-SNP later?',
      blocks: [
        {
          type: 'p',
          text: 'Yes, during the regular enrollment periods. Once you join a C-SNP with its Special Enrollment Period, that particular chance to make changes ends, so you would normally use one of these instead:',
        },
        {
          type: 'ul',
          items: [
            '**October 15 – December 7:** switch to another Medicare Advantage plan, or return to Original Medicare, for coverage starting January 1.',
            '**January 1 – March 31:** if you are in any Medicare Advantage plan, including a C-SNP, switch to another Medicare Advantage plan, or drop it and return to Original Medicare and join a separate Medicare drug plan.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Thinking about Medigap later?',
          text: 'The best time to buy a Medigap policy is your 6-month Medigap Open Enrollment Period. After it ends, your options may be limited and the policy may cost more, unless you have a special right to buy one. Talk with us before you leave a Medicare Advantage plan.',
        },
      ],
    },
    {
      id: 'prove-your-condition',
      heading: 'How do I prove my condition?',
      blocks: [
        {
          type: 'p',
          text: 'The plan is required to confirm that you have the qualifying condition, and it does the checking. Many C-SNPs start with a short questionnaire when you apply (CMS calls it a pre-enrollment qualification assessment) and then verify the answers with your doctor or other provider after you enroll.',
        },
        { type: 'p', text: 'You can make it go smoothly:' },
        {
          type: 'ul',
          items: [
            'Have the name and phone number of the doctor who treats your diabetes or heart condition.',
            'Let your doctor’s office know the plan may contact them.',
            'Keep a current list of your medicines and doses.',
          ],
        },
      ],
    },
    {
      id: 'keep-your-doctors',
      heading: 'Can I keep my doctors in a C-SNP?',
      blocks: [
        {
          type: 'p',
          text: 'Only if they are in the plan’s network, or the plan covers out-of-network care. Some SNPs require you to use network providers except for emergencies, out-of-area urgent care or out-of-area dialysis; others cover out-of-network care, usually at a higher cost.',
        },
        {
          type: 'p',
          text: 'Before you enroll, we check your primary care doctor, your endocrinologist or cardiologist, and the hospital you prefer. Louisiana health systems take part in different plans, and networks can change each year, so we confirm them for the plan year you are choosing.',
        },
      ],
    },
    {
      id: 'availability',
      heading: 'Are C-SNPs available in my parish?',
      blocks: [
        {
          type: 'p',
          text: 'It depends on where you live and the year. Insurance companies decide where they offer Special Needs Plans, so availability differs from parish to parish and can change every year. We check the plans offered at your address for you.',
        },
        {
          type: 'p',
          text: 'You can also search on your own with the [Medicare Plan Finder](https://www.medicare.gov/plan-compare) and filter results by “Special Needs Plans (SNP).” We help people with [Medicare Advantage plans in New Orleans](page:city-new-orleans), [Metairie](page:city-metairie), [Baton Rouge](page:city-baton-rouge) and across Louisiana.',
        },
      ],
    },
    {
      id: 'questions-to-ask',
      heading: 'What should I ask before enrolling in a C-SNP?',
      blocks: [
        { type: 'p', text: 'Ask about your doctors, your drugs and your total costs before you sign anything:' },
        {
          type: 'ul',
          items: [
            '**Doctors:** Are my primary care doctor, specialists and hospital in the network? Do I need referrals?',
            '**Drugs:** Are all my medicines on the plan’s drug list, including insulin and diabetes supplies? Do any need prior approval?',
            '**Total yearly costs:** What are the premium, copays and the yearly out-of-pocket limit?',
            '**Care coordination:** Who is my care coordinator, and how do I reach them?',
            '**Eligibility:** Which condition or group does the plan serve, and how will it confirm mine?',
            '**Travel:** What is covered if I need care outside the service area?',
          ],
        },
        {
          type: 'p',
          text: 'We answer these with you at no cost, in person in Metairie or by phone, in English or Spanish. [Contact us](page:contact) to see whether a C-SNP fits you. If it doesn’t, we’ll tell you.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'Can people with type 1 diabetes join a C-SNP?',
      a: 'Yes, if a C-SNP that serves diabetes is offered in your area. Type 1 and type 2 are both diabetes mellitus, which is on CMS’s list of qualifying conditions. The plan confirms your diagnosis.',
    },
    {
      q: 'Do I have to wait for the Annual Enrollment Period to join a C-SNP?',
      a: 'No. If you have a qualifying condition, a Special Enrollment Period lets you join a C-SNP that serves it at any time of year. It ends once you enroll.',
    },
    {
      q: 'Do I need both diabetes and heart disease to join?',
      a: 'Usually not. In plans built on a CMS group of conditions, such as diabetes and chronic heart failure, you need only one condition in the group. Plans with their own custom combination can require all of them.',
    },
    {
      q: 'Does a C-SNP include prescription drug coverage?',
      a: 'Yes. Every Special Needs Plan must include Medicare drug coverage (Part D).',
    },
    {
      q: 'Does it cost anything to get help choosing a C-SNP?',
      a: 'No. Our help is free. Insurance companies pay us, and your premium is the same whether you enroll with us or on your own.',
    },
  ],
};

export const guides: Record<GuideKey, GuideContent> = {
  'medicare-office': medicareOffice,
  'diabetes-heart-snp': diabetesHeartSnp,
};

export const guidesHub: GuidesHubContent = {
  h1: 'Medicare Guides for Louisiana',
  lede: 'Straight answers to the questions we hear most, written in plain language for people in New Orleans, Metairie and across Louisiana.',
  sections: [
    {
      id: 'where-to-start',
      heading: 'Not sure where to start?',
      blocks: [
        {
          type: 'ul',
          items: [
            '**Trying to reach Medicare or sign up for Part A and Part B?** Start with [where to get Medicare help near you](page:guide-medicare-office).',
            '**Reviewing your plan this fall?** Read about the [Annual Enrollment Period](page:aep), when you can change plans for next year.',
            '**Got a call or letter that seems off?** See how to [spot and report Medicare scams](page:scam).',
            '**Comparing coverage?** Learn how [Medicare Advantage](page:service-medicare-advantage) and [Medicare Supplement](page:service-medicare-supplement) plans differ.',
          ],
        },
        {
          type: 'p',
          text: 'Every guide is based on official sources like Medicare.gov and CMS.gov, reviewed by our licensed agents, and updated when the rules change. We are a private insurance agency, not Medicare or the government. If you would rather talk it through, [contact us](page:contact) for free help in person in Metairie or by phone, in English or Spanish.',
        },
      ],
    },
  ],
};
