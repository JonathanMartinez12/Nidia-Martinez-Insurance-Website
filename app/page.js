import Link from 'next/link';
import { Heart, Shield, Eye, Smile, Award, Users, MapPin, Calendar, Clock, Phone } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CarrierLogo from '@/components/CarrierLogo';
import { getTranslation } from '@/lib/translations';
import styles from './page.module.css';

export const metadata = {
  title: 'Medicare & Insurance Solutions You Can Trust',
  description: 'Serving Louisiana, Florida & Mississippi for 25+ Years. Expert guidance for Medicare Advantage, Medicare Supplements, Dental, and Vision insurance. Hablamos Español.',
  alternates: {
    canonical: 'https://www.nidiamartinezinsurance.com',
    languages: {
      'en-US': 'https://www.nidiamartinezinsurance.com',
      'es-US': 'https://www.nidiamartinezinsurance.com/es',
    },
  },
};

export default function HomePage() {
  const t = getTranslation('en');

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>{t.home.hero.title}</h1>
              <p className={styles.heroSubtitle}>{t.home.hero.subtitle}</p>
              <div className={styles.heroCta}>
                <Link href="/contact" className="btn btn-primary btn-large">
                  {t.home.hero.cta1}
                </Link>
                <a href="tel:+15049137153" className="btn btn-secondary btn-large">
                  {t.home.hero.cta2}
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/images/hero/Nidia.png"
                alt="Nidia Martinez - Licensed Insurance Agent"
                style={{ borderRadius: 'var(--radius-xl)', maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>{t.home.services.title}</h2>
            <p className="text-light" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              {t.home.services.subtitle}
            </p>
          </div>
          <div className="grid grid-4">
            <ServiceCard
              title={t.home.services.medicareAdvantage.title}
              description={t.home.services.medicareAdvantage.description}
              icon={<Shield size={40} />}
              href="/services/medicare-advantage"
            />
            <ServiceCard
              title={t.home.services.medicareSupplements.title}
              description={t.home.services.medicareSupplements.description}
              icon={<Heart size={40} />}
              href="/services/medicare-supplements"
            />
            <ServiceCard
              title={t.home.services.dentalInsurance.title}
              description={t.home.services.dentalInsurance.description}
              icon={<Smile size={40} />}
              href="/services/dental-insurance"
            />
            <ServiceCard
              title={t.home.services.visionInsurance.title}
              description={t.home.services.visionInsurance.description}
              icon={<Eye size={40} />}
              href="/services/vision-insurance"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>{t.home.whyChooseUs.title}</h2>
            <p className="text-light" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              {t.home.whyChooseUs.subtitle}
            </p>
          </div>
          <div className="grid grid-3">
            {t.home.whyChooseUs.reasons.map((reason, index) => (
              <div key={index} className="card">
                <div className={styles.reasonIcon}>
                  {index === 0 && <Award size={32} />}
                  {index === 1 && <Users size={32} />}
                  {index === 2 && <MapPin size={32} />}
                  {index === 3 && <Calendar size={32} />}
                  {index === 4 && <Clock size={32} />}
                  {index === 5 && <Heart size={32} />}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{reason.title}</h3>
                <p className="text-light" style={{ marginBottom: 0 }}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carriers Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>{t.home.carriers.title}</h2>
            <p className="text-light" style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
              {t.home.carriers.subtitle}
            </p>
          </div>
          <div className="grid grid-3">
            <CarrierLogo
              name="Humana"
              href="https://www.humana.com"
              logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG2q9P9yMYX58qynqoRGANv2_w0XC-3qGaIg&s"
              logoText="HUMANA"
            />
            <CarrierLogo
              name="UnitedHealthcare"
              href="https://www.uhc.com"
              logoUrl="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/UnitedHealthcare_%28logo%29.svg/1280px-UnitedHealthcare_%28logo%29.svg.png"
              logoText="UnitedHealthcare"
            />
            <CarrierLogo
              name="AARP Medicare"
              href="https://www.aarpmedicareplans.com"
              logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDs7JsysvJQHd1yoWJrNrs7VKjibv11MQtVw&s"
              logoText="AARP Medicare"
            />
            <CarrierLogo
              name="Devoted Health"
              href="https://www.devoted.com"
              logoUrl="https://healthnewsillinois.com/wp-content/uploads/2021/10/Devoted-Health-logo.jpg"
              logoText="Devoted Health"
            />
            <CarrierLogo
              name="Aetna"
              href="https://www.aetna.com"
              logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsp-EvNr_FL1nJqLBL0rwgYkUiOKBbasqtkA&s"
              logoText="AETNA"
            />
            <CarrierLogo
              name="Blue Cross Blue Shield"
              href="https://www.bcbs.com"
              logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_cfU1H8rUjvP79s1Gn0TuUu8KaSNGumx-A&s"
              logoText="Blue Cross Blue Shield"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>{t.home.testimonials.title}</h2>
            <p className="text-light" style={{ fontSize: '1.125rem' }}>
              {t.home.testimonials.subtitle}
            </p>
          </div>
          <div className="grid grid-3">
            {t.home.testimonials.items.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>{t.home.cta.title}</h2>
            <p className={styles.ctaSubtitle}>{t.home.cta.subtitle}</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary btn-large">
                {t.home.cta.button}
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
