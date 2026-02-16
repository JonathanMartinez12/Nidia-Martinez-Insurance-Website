import Link from 'next/link';
import { Heart, CheckCircle, Phone } from 'lucide-react';
import FAQSchema from '@/components/SEO/FAQSchema';
import styles from '../service.module.css';

export const metadata = {
  title: 'Medicare Supplement Insurance (Medigap) Plans | Fill Coverage Gaps',
  description: 'Expert guidance on Medicare Supplement (Medigap) plans. Compare Plan G, Plan N, and more. Licensed in LA, FL, MS. Free consultations. Call (504) 913-7153.',
  alternates: {
    canonical: 'https://www.nidiamartinezinsurance.com/services/medicare-supplements',
    languages: {
      'en-US': 'https://www.nidiamartinezinsurance.com/services/medicare-supplements',
      'es-US': 'https://www.nidiamartinezinsurance.com/es/services/medicare-supplements',
    },
  },
};

const faqs = [
  {
    question: 'What is a Medicare Supplement (Medigap) plan?',
    answer: 'Medicare Supplement Insurance (Medigap) is private insurance that helps pay some of the healthcare costs that Original Medicare doesn\'t cover, like copayments, coinsurance, and deductibles.',
  },
  {
    question: 'When can I buy a Medigap policy?',
    answer: 'The best time to buy a Medigap policy is during your Medigap Open Enrollment Period, which starts when you\'re 65 or older and enrolled in Medicare Part B. During this 6-month period, you have guaranteed issue rights.',
  },
  {
    question: 'What\'s the difference between Plan G and Plan N?',
    answer: 'Plan G covers nearly everything except the Part B deductible, offering comprehensive coverage. Plan N has lower premiums but requires copays for doctor visits ($20) and emergency room visits ($50) and doesn\'t cover Part B excess charges.',
  },
  {
    question: 'Can I switch Medigap plans?',
    answer: 'Yes, you can switch Medigap plans anytime, but you may have to go through medical underwriting unless you have guaranteed issue rights. It\'s best to compare options with an experienced agent.',
  },
  {
    question: 'Do Medigap plans cover prescription drugs?',
    answer: 'No, Medigap plans don\'t cover prescription drugs. You\'ll need to enroll in a separate Medicare Part D plan for prescription drug coverage.',
  },
];

export default function MedicareSupplementsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <Heart size={64} className={styles.heroIcon} />
            <h1>Medicare Supplement Insurance (Medigap) Plans</h1>
            <p className={styles.heroSubtitle}>
              Fill the gaps in Original Medicare coverage and enjoy peace of mind with comprehensive Medigap plans.
              Get expert guidance to choose the right supplement for you.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className="btn btn-primary btn-large">
                Compare Medigap Plans
              </Link>
              <a href="tel:+15049137153" className="btn btn-secondary btn-large">
                Call (504) 913-7153
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Medigap */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div>
              <h2>What is Medicare Supplement (Medigap)?</h2>
              <p>
                Medicare Supplement Insurance (also called Medigap) is sold by private insurance companies to help cover
                some of the out-of-pocket costs that Original Medicare doesn't pay, such as copayments, coinsurance, and
                deductibles.
              </p>
              <p>
                Medigap plans work alongside Original Medicare (Parts A and B). When you receive healthcare services,
                Medicare pays its share, and then your Medigap policy pays its share of the remaining costs.
              </p>
              <h3 style={{ marginTop: '2rem' }}>What Medigap Covers:</h3>
              <ul className={styles.benefitsList}>
                <li><CheckCircle size={20} /> Part A coinsurance and hospital costs</li>
                <li><CheckCircle size={20} /> Part B coinsurance or copayment</li>
                <li><CheckCircle size={20} /> Blood (first 3 pints)</li>
                <li><CheckCircle size={20} /> Part A hospice care coinsurance</li>
                <li><CheckCircle size={20} /> Skilled nursing facility care coinsurance</li>
                <li><CheckCircle size={20} /> Part B excess charges (some plans)</li>
                <li><CheckCircle size={20} /> Foreign travel emergency coverage</li>
              </ul>
            </div>
            <div className={styles.imageWrapper}>
              <div className="placeholder-image" style={{ minHeight: '400px' }}>Image 4</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Plans */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Most Popular Medigap Plans</h2>
            <p className="text-light" style={{ fontSize: '1.125rem' }}>
              Comprehensive coverage options for different needs and budgets
            </p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>Plan G (Most Popular)</h3>
              <p>
                Plan G offers the most comprehensive coverage available for new Medicare beneficiaries. It covers nearly
                everything except the Medicare Part B deductible.
              </p>
              <ul className={styles.planFeatures}>
                <li>Covers Part A deductible</li>
                <li>Covers Part B excess charges</li>
                <li>Foreign travel emergency coverage</li>
                <li>Predictable out-of-pocket costs</li>
                <li>No network restrictions</li>
              </ul>
            </div>
            <div className="card">
              <h3>Plan N (Budget-Friendly)</h3>
              <p>
                Plan N offers solid coverage at a lower monthly premium. It requires small copays for doctor and emergency
                room visits but still provides excellent value.
              </p>
              <ul className={styles.planFeatures}>
                <li>Lower monthly premiums</li>
                <li>Covers Part A deductible</li>
                <li>$20 copay for doctor visits</li>
                <li>$50 copay for ER visits</li>
                <li>No network restrictions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Choose */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>
            Who Should Choose Medicare Supplement?
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Want Doctor Freedom</h3>
              <p>
                If you want the freedom to see any doctor or specialist nationwide who accepts Medicare, without referrals
                or network restrictions, Medigap is ideal.
              </p>
            </div>
            <div className="card">
              <h3>Frequent Travelers</h3>
              <p>
                If you travel frequently or split time between multiple states, Medigap provides nationwide coverage and
                some plans even cover foreign travel emergencies.
              </p>
            </div>
            <div className="card">
              <h3>Predictable Costs</h3>
              <p>
                If you prefer predictable healthcare costs and don't want to worry about copays, coinsurance, or
                deductibles, Medigap plans offer excellent coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className="text-center">
            <h2 className={styles.ctaTitle}>Ready to Find Your Perfect Medigap Plan?</h2>
            <p className={styles.ctaText}>
              Let Nidia help you compare Medicare Supplement plans and find the coverage that fits your needs and budget.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary btn-large">
                Get a Free Medigap Quote
              </Link>
              <a href="tel:+15049137153" className={styles.ctaPhone}>
                <Phone size={24} />
                <span>(504) 913-7153</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
