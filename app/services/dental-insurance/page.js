import Link from 'next/link';
import { Smile, CheckCircle, Phone } from 'lucide-react';
import FAQSchema from '@/components/SEO/FAQSchema';
import styles from '../service.module.css';

export const metadata = {
  title: 'Individual Dental Insurance for All Ages | Affordable Coverage',
  description: 'Affordable dental insurance plans for individuals and families of all ages. Preventive care, basic procedures, and major services covered. Call (504) 913-7153.',
  alternates: {
    canonical: 'https://www.nidiamartinezinsurance.com/services/dental-insurance',
    languages: {
      'en-US': 'https://www.nidiamartinezinsurance.com/services/dental-insurance',
      'es-US': 'https://www.nidiamartinezinsurance.com/es/services/dental-insurance',
    },
  },
};

const faqs = [
  {
    question: 'What does dental insurance typically cover?',
    answer: 'Most dental insurance plans cover preventive care (cleanings, exams, X-rays) at 100%, basic procedures (fillings, extractions) at 70-80%, and major procedures (crowns, bridges, root canals) at 50%. Coverage levels vary by plan.',
  },
  {
    question: 'Is there a waiting period for dental insurance?',
    answer: 'Many dental plans have waiting periods for certain services. Preventive care is often available immediately, while basic procedures may have a 6-month waiting period and major procedures may have a 12-month waiting period.',
  },
  {
    question: 'Can I choose my own dentist?',
    answer: 'This depends on your plan type. PPO plans typically offer more flexibility to choose any dentist, while HMO/DHMO plans require you to select a dentist from their network. Out-of-network services may cost more or not be covered.',
  },
];

export default function DentalInsurancePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <Smile size={64} className={styles.heroIcon} />
            <h1>Individual Dental Insurance for All Ages</h1>
            <p className={styles.heroSubtitle}>
              Affordable dental coverage for individuals and families. Protect your smile with comprehensive plans that cover preventive care, basic procedures, and major dental work.
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
              <h2>Why Dental Insurance Matters</h2>
              <p>
                Regular dental care is essential for maintaining good oral health and catching problems early. Individual dental insurance helps make routine care affordable and provides financial protection against unexpected dental expenses.
              </p>
              <h3 style={{ marginTop: '2rem' }}>What's Typically Covered:</h3>
              <ul className={styles.benefitsList}>
                <li><CheckCircle size={20} /> Preventive care (cleanings, exams, X-rays)</li>
                <li><CheckCircle size={20} /> Basic procedures (fillings, extractions)</li>
                <li><CheckCircle size={20} /> Major procedures (crowns, bridges, root canals)</li>
                <li><CheckCircle size={20} /> Emergency dental care</li>
                <li><CheckCircle size={20} /> Orthodontics (some plans)</li>
              </ul>
            </div>
            <div className={styles.imageWrapper}>
              <div className="placeholder-image" style={{ minHeight: '400px' }}>Image 5</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Coverage Levels</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Preventive Care</h3>
              <p>Usually covered at 100% with no waiting period</p>
              <ul className={styles.planFeatures}>
                <li>Cleanings (2 per year)</li>
                <li>Exams (2 per year)</li>
                <li>X-rays</li>
                <li>Fluoride treatments</li>
              </ul>
            </div>
            <div className="card">
              <h3>Basic Procedures</h3>
              <p>Typically covered at 70-80%</p>
              <ul className={styles.planFeatures}>
                <li>Fillings</li>
                <li>Simple extractions</li>
                <li>Emergency care</li>
                <li>Periodontal maintenance</li>
              </ul>
            </div>
            <div className="card">
              <h3>Major Procedures</h3>
              <p>Usually covered at 50%</p>
              <ul className={styles.planFeatures}>
                <li>Crowns</li>
                <li>Bridges</li>
                <li>Dentures</li>
                <li>Root canals</li>
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
            <h2 className={styles.ctaTitle}>Ready to Protect Your Smile?</h2>
            <p className={styles.ctaText}>Get affordable dental coverage today. Nidia will help you find the right plan for your needs.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary btn-large">Get a Free Dental Quote</Link>
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
