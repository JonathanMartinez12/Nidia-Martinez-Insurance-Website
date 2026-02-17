import Image from 'next/image';
import styles from './CarrierLogo.module.css';

export default function CarrierLogo({ name, href, logoUrl, logoText }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.logoCard}
      aria-label={`Visit ${name} website`}
    >
      <div className={styles.logoPlaceholder}>
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${name} logo`}
            className={styles.logoImage}
          />
        ) : (
          <span className={styles.logoText}>{logoText || name}</span>
        )}
      </div>
    </a>
  );
}
