import Link from 'next/link';
import { Shield, CheckCircle, Phone } from 'lucide-react';
import FAQSchema from '@/components/SEO/FAQSchema';
import styles from '../service.module.css';

export const metadata = {
  title: 'Medicare Advantage Plans in Louisiana, Florida & Mississippi',
  description: 'Expert guidance on Medicare Advantage plans. Compare top-rated plans from Humana, UnitedHealthcare, Aetna, and more. Free consultations available. Call (504) 913-7153.',
  alternates: {
    canonical: 'https://www.nidiamartinezinsurance.com/services/medicare-advantage',
    languages: {
      'en-US': 'https://www.nidiamartinezinsurance.com/services/medicare-advantage',
      'es-US': 'https://www.nidiamartinezinsurance.com/es/services/medicare-advantage',
    },
  },
};

const faqs = [
  {
    question: 'What is Medicare Advantage?',
    answer: 'Medicare Advantage (Part C) is an alternative to Original Medicare offered by private insurance companies approved by Medicare. These plans include all Part A and Part B benefits and often include additional coverage like prescription drugs, dental, vision, and hearing.',
  },
  {
    question: 'When can I enroll in a Medicare Advantage plan?',
    answer: 'You can enroll during the Annual Enrollment Period (October 15 - December 7), the Medicare Advantage Open Enrollment Period (January 1 - March 31), or during a Special Enrollment Period if you qualify.',
  },
  {
    question: 'How much does Medicare Advantage cost?',
    answer: 'Medicare Advantage plans have varying costs including monthly premiums (some as low as $0), deductibles, and copayments. You must continue paying your Part B premium. Costs vary by plan and location.',
  },
  {
    question: 'Can I see any doctor with Medicare Advantage?',
    answer: 'Most Medicare Advantage plans have provider networks. HMO plans typically require you to use in-network providers, while PPO plans offer more flexibility to see out-of-network doctors at a higher cost.',
  },
  {
    question: 'What\'s the difference between Medicare Advantage and Original Medicare?',
    answer: 'Original Medicare (Parts A & B) covers hospital and medical services. Medicare Advantage bundles these benefits into one plan and often includes extras like prescription drug coverage, dental, vision, and hearing. Medicare Advantage plans may have lower out-of-pocket costs but use provider networks.',
  },
];

export default function MedicareAdvantagePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <Shield size={64} className={styles.heroIcon} />
            <h1>Medicare Advantage Plans in Louisiana, Florida & Mississippi</h1>
            <p className={styles.heroSubtitle}>
              Comprehensive Medicare coverage with additional benefits beyond Original Medicare.
              Get personalized guidance to find the perfect plan for your needs.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className="btn btn-primary btn-large">
                Get a Free Quote
              </Link>
              <a href="tel:+15049137153" className="btn btn-secondary btn-large">
                Call (504) 913-7153
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Medicare Advantage */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div>
              <h2>What is Medicare Advantage?</h2>
              <p>
                Medicare Advantage (also called Medicare Part C) is an alternative way to receive your Medicare benefits.
                Instead of having Original Medicare (Parts A and B), you get all of your Part A and Part B coverage from a
                Medicare-approved private insurance company.
              </p>
              <p>
                Most Medicare Advantage plans include prescription drug coverage (Part D) and offer extra benefits that
                Original Medicare doesn't cover, such as:
              </p>
              <ul className={styles.benefitsList}>
                <li><CheckCircle size={20} /> Dental coverage</li>
                <li><CheckCircle size={20} /> Vision coverage</li>
                <li><CheckCircle size={20} /> Hearing aids</li>
                <li><CheckCircle size={20} /> Fitness programs (gym memberships)</li>
                <li><CheckCircle size={20} /> Over-the-counter allowances</li>
                <li><CheckCircle size={20} /> Transportation to medical appointments</li>
              </ul>
            </div>
            <div className={styles.imageWrapper}>
              <div className="placeholder-image" style={{ minHeight: '400px' }}>Image 3</div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Plans */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Types of Medicare Advantage Plans</h2>
            <p className="text-light" style={{ fontSize: '1.125rem' }}>
              Different plan types to fit your healthcare needs
            </p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>HMO (Health Maintenance Organization)</h3>
              <p>
                Lower out-of-pocket costs with a network of doctors and hospitals. You'll need to choose a primary care
                physician and get referrals to see specialists (except in emergencies).
              </p>
              <ul className={styles.planFeatures}>
                <li>Lower monthly premiums</li>
                <li>Network-based care</li>
                <li>Primary care physician required</li>
                <li>Referrals needed for specialists</li>
              </ul>
            </div>
            <div className="card">
              <h3>PPO (Preferred Provider Organization)</h3>
              <p>
                More flexibility to see any doctor or specialist without a referral. You can see out-of-network providers,
                but you'll pay less if you use in-network doctors.
              </p>
              <ul className={styles.planFeatures}>
                <li>Greater flexibility</li>
                <li>No referrals needed</li>
                <li>Out-of-network coverage available</li>
                <li>Higher premiums than HMO</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Choose */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>
            Who Should Choose Medicare Advantage?
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Budget-Conscious</h3>
              <p>
                If you want predictable costs and lower out-of-pocket expenses, Medicare Advantage plans often have lower
                premiums than Original Medicare with a Supplement.
              </p>
            </div>
            <div className="card">
              <h3>Want Extra Benefits</h3>
              <p>
                If you value dental, vision, hearing, and wellness benefits that aren't covered by Original Medicare,
                Medicare Advantage includes these extras.
              </p>
            </div>
            <div className="card">
              <h3>Comfortable with Networks</h3>
              <p>
                If you're okay seeing doctors within a specific network and don't mind getting referrals for specialists
                (HMO plans), Medicare Advantage can be a great fit.
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
            <h2 className={styles.ctaTitle}>Ready to Explore Your Medicare Advantage Options?</h2>
            <p className={styles.ctaText}>
              Let Nidia help you compare plans and find the best Medicare Advantage coverage for your needs and budget.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary btn-large">
                Schedule a Free Consultation
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
