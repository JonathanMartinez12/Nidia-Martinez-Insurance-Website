import Link from 'next/link';
import CarrierLogo from '@/components/CarrierLogo';
import { Award, CheckCircle } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Trusted Insurance Carriers | Top-Rated Providers',
  description: 'We partner with industry-leading insurance carriers including Humana, UnitedHealthcare, AARP, Aetna, Blue Cross Blue Shield, and Devoted Health.',
  alternates: {
    canonical: 'https://www.nidiamartinezinsurance.com/carriers',
    languages: {
      'en-US': 'https://www.nidiamartinezinsurance.com/carriers',
      'es-US': 'https://www.nidiamartinezinsurance.com/es/carriers',
    },
  },
};

const carriers = [
  {
    name: 'Humana',
    href: 'https://www.humana.com',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG2q9P9yMYX58qynqoRGANv2_w0XC-3qGaIg&s',
    logoText: 'HUMANA',
    description: 'One of the nation\'s largest health insurance companies, Humana offers comprehensive Medicare Advantage plans with excellent benefits and customer service.'
  },
  {
    name: 'UnitedHealthcare',
    href: 'https://www.uhc.com',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/UnitedHealthcare_%28logo%29.svg/1280px-UnitedHealthcare_%28logo%29.svg.png',
    logoText: 'UnitedHealthcare',
    description: 'UnitedHealthcare provides a wide range of Medicare Advantage and Medicare Supplement plans with extensive provider networks nationwide.'
  },
  {
    name: 'AARP Medicare Supplements',
    href: 'https://www.aarpmedicareplans.com',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDs7JsysvJQHd1yoWJrNrs7VKjibv11MQtVw&s',
    logoText: 'AARP Medicare',
    description: 'AARP offers highly-rated Medicare Supplement (Medigap) plans through UnitedHealthcare, providing comprehensive coverage to fill gaps in Original Medicare.'
  },
  {
    name: 'Devoted Health',
    href: 'https://www.devoted.com',
    logoUrl: 'https://healthnewsillinois.com/wp-content/uploads/2021/10/Devoted-Health-logo.jpg',
    logoText: 'Devoted Health',
    description: 'Devoted Health is revolutionizing Medicare Advantage with technology-driven, personalized care and exceptional member support.'
  },
  {
    name: 'Aetna',
    href: 'https://www.aetna.com',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsp-EvNr_FL1nJqLBL0rwgYkUiOKBbasqtkA&s',
    logoText: 'AETNA',
    description: 'Aetna, a CVS Health company, offers comprehensive Medicare Advantage plans with integrated pharmacy benefits and preventive care focus.'
  },
  {
    name: 'Blue Cross Blue Shield',
    href: 'https://www.bcbs.com',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_cfU1H8rUjvP79s1Gn0TuUu8KaSNGumx-A&s',
    logoText: 'Blue Cross Blue Shield',
    description: 'Blue Cross Blue Shield is a trusted name in healthcare, offering Medicare Advantage and Medicare Supplement plans with extensive provider networks.'
  },
];

export default function CarriersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="text-center">
            <Award size={64} style={{ color: 'var(--color-secondary)', margin: '0 auto var(--spacing-lg)' }} />
            <h1>Our Trusted Insurance Carriers</h1>
            <p className={styles.subtitle}>
              We partner with industry-leading insurance companies to bring you the best coverage options
            </p>
          </div>
        </div>
      </section>

      {/* Why Multiple Carriers */}
      <section className="section">
        <div className="container">
          <div className={styles.whySection}>
            <h2 className="text-center">Why Working With Multiple Carriers Matters</h2>
            <p className="text-center text-light" style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
              As an independent insurance agent, Nidia Martinez works with multiple top-rated carriers to ensure you get the best coverage at the best price.
            </p>
            <div className="grid grid-3">
              <div className="card">
                <CheckCircle size={32} style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-md)' }} />
                <h3>More Options</h3>
                <p>
                  Compare plans from multiple carriers side-by-side to find the coverage that best fits your needs and budget.
                </p>
              </div>
              <div className="card">
                <CheckCircle size={32} style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-md)' }} />
                <h3>Unbiased Advice</h3>
                <p>
                  Get objective recommendations based on your specific situation, not on which carrier pays the highest commission.
                </p>
              </div>
              <div className="card">
                <CheckCircle size={32} style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-md)' }} />
                <h3>Better Value</h3>
                <p>
                  Access to multiple carriers means you can find better benefits, lower costs, and more comprehensive coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carriers Grid */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Our Carrier Partners</h2>
          <div className={styles.carriersGrid}>
            {carriers.map((carrier, index) => (
              <div key={index} className={styles.carrierCard}>
                <CarrierLogo
                  name={carrier.name}
                  href={carrier.href}
                  logoUrl={carrier.logoUrl}
                  logoText={carrier.logoText}
                />
                <div className={styles.carrierDescription}>
                  <h3>{carrier.name}</h3>
                  <p>{carrier.description}</p>
                  <a href={carrier.href} target="_blank" rel="noopener noreferrer" className={styles.visitLink}>
                    Visit {carrier.name} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className="text-center">
            <h2 style={{ color: 'var(--color-white)', marginBottom: 'var(--spacing-md)' }}>
              Ready to Compare Plans?
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--spacing-xl)' }}>
              Let Nidia help you compare plans from all our carrier partners to find your perfect coverage
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
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
    </>
  );
}
