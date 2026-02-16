import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { getTranslation } from '@/lib/translations';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Nidia Martinez Insurance | Free Consultation',
  description: 'Contact Nidia Martinez for expert insurance guidance. Office visits or home visits available. Call (504) 913-7153 or visit our Metairie office. Se Habla Español.',
  alternates: {
    canonical: 'https://www.nidiamartinezinsurance.com/contact',
    languages: {
      'en-US': 'https://www.nidiamartinezinsurance.com/contact',
      'es-US': 'https://www.nidiamartinezinsurance.com/es/contact',
    },
  },
};

export default function ContactPage() {
  const t = getTranslation('en');

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="text-center">
            <h1>{t.contact.title}</h1>
            <p className={styles.subtitle}>{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2>{t.contact.info.title}</h2>

              <div className={styles.infoCards}>
                <a href="tel:+15049137153" className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>{t.contact.info.phone}</p>
                  </div>
                </a>

                <a href="mailto:nidiamartinez576@outlook.com" className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>{t.contact.info.email}</p>
                  </div>
                </a>

                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3>Office Address</h3>
                    <p>
                      {t.contact.info.address}<br />
                      {t.contact.info.city}
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3>{t.contact.info.hours}</h3>
                    {t.contact.info.hoursDetails.map((hour, index) => (
                      <p key={index}>{hour}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className={styles.mapContainer}>
                <h3>Visit Our Office</h3>
                <div className={styles.mapPlaceholder}>
                  <div className="placeholder-image" style={{ minHeight: '300px' }}>
                    Google Maps Embed<br />
                    110 Veterans Blvd Suite 100-A<br />
                    Metairie, LA 70005
                  </div>
                </div>
                <p className={styles.mapNote}>
                  <strong>Home visits available!</strong> If you prefer to meet at your home, Nidia is happy to come to you.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2>Send Us a Message</h2>
              <p className="text-light" style={{ marginBottom: 'var(--spacing-lg)' }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm translations={t.contact} />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center">
            <h2>Serving Multiple States</h2>
            <p className="text-light" style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)' }}>
              Licensed and ready to serve clients in Louisiana, Florida, and Mississippi
            </p>
            <div className={styles.statesBadges}>
              <div className={styles.stateBadge}>Louisiana</div>
              <div className={styles.stateBadge}>Florida</div>
              <div className={styles.stateBadge}>Mississippi</div>
            </div>
            <div className={styles.languageBadge}>
              <strong>Se Habla Español</strong> | Bilingual Services Available
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
