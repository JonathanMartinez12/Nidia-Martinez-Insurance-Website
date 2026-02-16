import { Heart, Shield, Eye, Smile } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { getTranslation } from '@/lib/translations';

export const metadata = {
  title: 'Our Insurance Services | Medicare, Dental & Vision Coverage',
  description: 'Comprehensive insurance solutions including Medicare Advantage, Medicare Supplements, Dental, and Vision insurance. Licensed in LA, FL, MS. Call (504) 913-7153.',
  alternates: {
    canonical: 'https://www.nidiamartinezinsurance.com/services',
    languages: {
      'en-US': 'https://www.nidiamartinezinsurance.com/services',
      'es-US': 'https://www.nidiamartinezinsurance.com/es/services',
    },
  },
};

export default function ServicesPage() {
  const t = getTranslation('en');

  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #2c5282 100%)',
        color: 'var(--color-white)',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'var(--color-white)', marginBottom: 'var(--spacing-md)' }}>
            {t.services.title}
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
            {t.services.subtitle}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
    </>
  );
}
