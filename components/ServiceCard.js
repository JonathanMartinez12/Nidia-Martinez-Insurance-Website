import Link from 'next/link';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ title, description, icon, href }) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.learnMore}>Learn More →</span>
    </Link>
  );
}
