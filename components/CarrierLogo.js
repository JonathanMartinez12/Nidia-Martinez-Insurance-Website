import styles from './CarrierLogo.module.css';

export default function CarrierLogo({ name, href, logoText }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.logoCard}
      aria-label={`Visit ${name} website`}
    >
      <div className={styles.logoPlaceholder}>
        <span className={styles.logoText}>{logoText || name}</span>
      </div>
    </a>
  );
}
