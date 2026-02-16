import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer({ lang = 'en', translations }) {
  const t = translations;
  const isSpanish = lang === 'es';
  const baseUrl = isSpanish ? '/es' : '';

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Company Info */}
            <div className={styles.footerCol}>
              <div className={styles.logoSection}>
                <div className={styles.logoIcon}>
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 5L5 12.5V18.75C5 27.5 10.5 35.5 20 37.5C29.5 35.5 35 27.5 35 18.75V12.5L20 5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 10L10 15V20C10 26 13.75 31.25 20 32.5C26.25 31.25 30 26 30 20V15L20 10Z"
                      fill="white"
                      opacity="0.3"
                    />
                  </svg>
                </div>
                <h3 className={styles.companyName}>Nidia Martinez Insurance LLC</h3>
              </div>
              <p className={styles.tagline}>{t.footer.tagline}</p>
              <div className={styles.spanishBadge}>
                <span>{t.footer.speakSpanish}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerTitle}>{t.footer.quickLinks}</h4>
              <ul className={styles.footerLinks}>
                <li><Link href={`${baseUrl}/`}>{t.nav.home}</Link></li>
                <li><Link href={`${baseUrl}/about`}>{t.nav.about}</Link></li>
                <li><Link href={`${baseUrl}/services`}>{t.nav.services}</Link></li>
                <li><Link href={`${baseUrl}/carriers`}>{t.nav.carriers}</Link></li>
                <li><Link href={`${baseUrl}/blog`}>{t.nav.blog}</Link></li>
                <li><Link href={`${baseUrl}/contact`}>{t.nav.contact}</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerTitle}>{t.nav.services}</h4>
              <ul className={styles.footerLinks}>
                <li><Link href={`${baseUrl}/services/medicare-advantage`}>{t.home.services.medicareAdvantage.title}</Link></li>
                <li><Link href={`${baseUrl}/services/medicare-supplements`}>{t.home.services.medicareSupplements.title}</Link></li>
                <li><Link href={`${baseUrl}/services/dental-insurance`}>{t.home.services.dentalInsurance.title}</Link></li>
                <li><Link href={`${baseUrl}/services/vision-insurance`}>{t.home.services.visionInsurance.title}</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerTitle}>{t.footer.contactInfo}</h4>
              <div className={styles.contactList}>
                <a href="tel:+15049137153" className={styles.contactItem}>
                  <Phone size={18} />
                  <span>(504) 913-7153</span>
                </a>
                <a href="mailto:nidiamartinez576@outlook.com" className={styles.contactItem}>
                  <Mail size={18} />
                  <span>nidiamartinez576@outlook.com</span>
                </a>
                <div className={styles.contactItem}>
                  <MapPin size={18} />
                  <span>110 Veterans Blvd Suite 100-A<br />Metairie, LA 70005</span>
                </div>
              </div>
              <div className={styles.serviceAreas}>
                <h5>{t.footer.serviceAreas}</h5>
                <p>{t.footer.states}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomContent}>
            <p>{t.footer.copyright}</p>
            <div className={styles.socialLinks}>
              {/* Placeholder social media links */}
              <a href="#" aria-label="Facebook" className={styles.socialLink}>
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
