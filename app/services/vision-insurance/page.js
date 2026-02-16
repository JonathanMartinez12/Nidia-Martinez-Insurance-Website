import Link from 'next/link';
import { Eye, CheckCircle, Phone } from 'lucide-react';
import FAQSchema from '@/components/SEO/FAQSchema';
import styles from '../service.module.css';

export const metadata = {
  title: 'Affordable Vision Insurance Plans | Eye Care Coverage',
  description: 'Individual vision insurance for eye exams, glasses, and contact lenses. Protect your eye health with affordable coverage. Call (504) 913-7153 for a free quote.',
  alternates: {
    canonical: 'https://www.nidiamartinezinsurance.com/services/vision-insurance',
    languages: {
      'en-US': 'https://www.nidiamartinezinsurance.com/services/vision-insurance',
      'es-US': 'https://www.nidiamartinezinsurance.com/es/services/vision-insurance',
    },
  },
};

const faqs = [
  {
    question: 'What does vision insurance cover?',
    answer: 'Vision insurance typically covers routine eye exams, prescription eyeglasses (frames and lenses), contact lenses, and often provides discounts on LASIK surgery and other vision correction procedures.',
  },
  {
    question: 'How often can I get new glasses?',
    answer: 'Most vision plans cover one eye exam per year, new lenses every year or two, and new frames every one to two years. Contact lens coverage is usually provided as an alternative to eyeglasses.',
  },
  {
    question: 'Can I use vision insurance at any eye doctor?',
    answer: 'Coverage depends on your plan type. Some plans have a network of providers where you\'ll receive the best benefits, while others offer more flexibility. Out-of-network services may be partially covered or require reimbursement.',
  },
];

export default function VisionInsurancePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <Eye size={64} className={styles.heroIcon} />
            <h1>Affordable Vision Insurance Plans</h1>
            <p className={styles.heroSubtitle}>
              Comprehensive eye care coverage for the whole family. Affordable plans that cover exams, glasses, contacts, and more.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className="btn btn-primary btn-large">Get a Free Quote</Link>
              <a href="tel:+15049137153" className="btn btn-secondary btn-large">Call (504) 913-7153</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div>
              <h2>Protect Your Eye Health</h2>
              <p>
                Regular eye exams are crucial for maintaining good vision and detecting eye diseases early. Vision insurance makes routine care affordable and helps you save on eyeglasses and contact lenses.
              </p>
              <h3 style={{ marginTop: '2rem' }}>What's Covered:</h3>
              <ul className={styles.benefitsList}>
                <li><CheckCircle size={20} /> Annual eye exams</li>
                <li><CheckCircle size={20} /> Prescription eyeglasses (lenses & frames)</li>
                <li><CheckCircle size={20} /> Contact lenses</li>
                <li><CheckCircle size={20} /> Lens enhancements (anti-glare, scratch-resistant)</li>
                <li><CheckCircle size={20} /> Discounts on LASIK and PRK</li>
                <li><CheckCircle size={20} /> Access to nationwide provider networks</li>
              </ul>
            </div>
            <div className={styles.imageWrapper}>
              <div className="placeholder-image" style={{ minHeight: '400px' }}>Image 6</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Vision Plan Benefits</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Eye Exams</h3>
              <p>Comprehensive annual eye exams to check vision and eye health</p>
              <ul className={styles.planFeatures}>
                <li>Refractive eye exams</li>
                <li>Glaucoma testing</li>
                <li>Retinal imaging</li>
                <li>Prescription updates</li>
              </ul>
            </div>
            <div className="card">
              <h3>Eyeglasses</h3>
              <p>Coverage for prescription lenses and stylish frames</p>
              <ul className={styles.planFeatures}>
                <li>Single vision lenses</li>
                <li>Bifocal lenses</li>
                <li>Progressive lenses</li>
                <li>Designer frame options</li>
              </ul>
            </div>
            <div className="card">
              <h3>Contact Lenses</h3>
              <p>Alternative to eyeglasses with annual allowances</p>
              <ul className={styles.planFeatures}>
                <li>Daily disposable</li>
                <li>Extended wear</li>
                <li>Toric (astigmatism)</li>
                <li>Multifocal contacts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Frequently Asked Questions</h2>
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

      <section className={styles.ctaSection}>
        <div className="container">
          <div className="text-center">
            <h2 className={styles.ctaTitle}>Ready to Protect Your Vision?</h2>
            <p className={styles.ctaText}>Find affordable vision insurance that fits your needs and budget.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary btn-large">Get a Free Vision Quote</Link>
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
