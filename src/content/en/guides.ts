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

export const guides: Record<GuideKey, GuideContent> = {
  'medicare-office': medicareOffice,
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
