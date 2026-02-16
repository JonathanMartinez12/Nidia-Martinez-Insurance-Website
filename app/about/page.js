import { Award, MapPin, Heart, CheckCircle } from 'lucide-react';
import { getTranslation } from '@/lib/translations';
import styles from './page.module.css';

export const metadata = {
  title: 'About Nidia Martinez | 25+ Years of Insurance Experience',
  description: 'Learn about Nidia Martinez, a licensed insurance agent with 25+ years of experience serving Louisiana, Florida, and Mississippi. Bilingual services in English and Spanish.',
  alternates: {
    canonical: 'https://www.nidiamartinezinsurance.com/about',
    languages: {
      'en-US': 'https://www.nidiamartinezinsurance.com/about',
      'es-US': 'https://www.nidiamartinezinsurance.com/es/about',
    },
  },
};

export default function AboutPage() {
  const t = getTranslation('en');

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="text-center">
            <h1>{t.about.title}</h1>
            <p className={styles.subtitle}>{t.about.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section">
        <div className="container">
          <div className={styles.bioGrid}>
            <div className={styles.bioImage}>
              <div className="placeholder-image" style={{ minHeight: '400px' }}>Image 2</div>
            </div>
            <div className={styles.bioContent}>
              <p className={styles.bioParagraph}>{t.about.bio.intro}</p>
              <p className={styles.bioParagraph}>{t.about.bio.experience}</p>
              <p className={styles.bioParagraph}>{t.about.bio.bilingual}</p>
              <p className={styles.bioParagraph}>{t.about.bio.personal}</p>
              <p className={styles.bioParagraph}>{t.about.bio.philosophy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="section section-alt">
        <div className="container">
          <div className={styles.licensesSection}>
            <div className={styles.sectionHeader}>
              <Award size={48} className={styles.sectionIcon} />
              <h2>{t.about.licenses.title}</h2>
              <p className="text-light">{t.about.licenses.description}</p>
            </div>
            <div className={styles.statesGrid}>
              {t.about.licenses.states.map((state, index) => (
                <div key={index} className={styles.stateCard}>
                  <MapPin size={32} />
                  <h3>{state}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>{t.about.specialties.title}</h2>
          </div>
          <div className="grid grid-3">
            {t.about.specialties.items.map((specialty, index) => (
              <div key={index} className={styles.specialtyCard}>
                <CheckCircle size={24} className={styles.checkIcon} />
                <span>{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section section-alt">
        <div className="container">
          <div className={styles.commitmentSection}>
            <div className={styles.commitmentHeader}>
              <Heart size={48} className={styles.sectionIcon} />
              <h2>{t.about.commitment.title}</h2>
            </div>
            <div className="grid grid-2">
              {t.about.commitment.items.map((item, index) => (
                <div key={index} className={styles.commitmentItem}>
                  <CheckCircle size={20} className={styles.checkIconSmall} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className="text-center">
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaText}>
              Contact Nidia today for a free, no-obligation consultation
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className="btn btn-primary btn-large">
                Schedule a Consultation
              </a>
              <a href="tel:+15049137153" className="btn btn-secondary btn-large">
                Call (504) 913-7153
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
