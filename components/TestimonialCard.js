import { Quote } from 'lucide-react';
import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ text, author, location }) {
  return (
    <div className={styles.card}>
      <div className={styles.quoteIcon}>
        <Quote size={32} />
      </div>
      <p className={styles.text}>{text}</p>
      <div className={styles.author}>
        <p className={styles.name}>{author}</p>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
}
