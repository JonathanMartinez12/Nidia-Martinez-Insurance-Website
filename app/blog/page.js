import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Insurance Blog | Medicare & Healthcare Tips',
  description: 'Expert insights on Medicare, insurance, and healthcare planning. Stay informed with our latest articles and guides.',
  alternates: {
    canonical: 'https://www.nidiamartinezinsurance.com/blog',
    languages: {
      'en-US': 'https://www.nidiamartinezinsurance.com/blog',
      'es-US': 'https://www.nidiamartinezinsurance.com/es/blog',
    },
  },
};

const blogPosts = [
  {
    slug: 'medicare-advantage-vs-medicare-supplements',
    title: 'Understanding Medicare Advantage vs. Medicare Supplements',
    excerpt: 'Learn the key differences between Medicare Advantage and Medicare Supplement plans to make an informed decision about your healthcare coverage.',
    date: '2026-02-10',
    author: 'Nidia Martinez',
    category: 'Medicare Basics',
  },
  {
    slug: 'medicare-open-enrollment-2025',
    title: 'When Is Medicare Open Enrollment? Key Dates for 2025',
    excerpt: 'Don\'t miss important Medicare enrollment deadlines. Learn about Annual Enrollment Period, Special Enrollment Periods, and when you can make changes to your coverage.',
    date: '2026-01-25',
    author: 'Nidia Martinez',
    category: 'Enrollment',
  },
  {
    slug: 'bilingual-insurance-agents-matter',
    title: 'Why Bilingual Insurance Agents Matter for Your Family',
    excerpt: 'Discover how working with a bilingual insurance agent can help you better understand your options and make more confident healthcare decisions for your family.',
    date: '2026-01-15',
    author: 'Nidia Martinez',
    category: 'Community',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="text-center">
            <h1>Insurance Blog & Resources</h1>
            <p className={styles.subtitle}>
              Expert insights, tips, and guides to help you navigate Medicare and insurance decisions
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section">
        <div className="container">
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <article key={post.slug} className={styles.blogCard}>
                <div className={styles.blogImage}>
                  <div className="placeholder-image" style={{ minHeight: '200px' }}>
                    Blog Image
                  </div>
                </div>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>
                      <Calendar size={16} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h2 className={styles.blogTitle}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <div className={styles.blogFooter}>
                    <div className={styles.author}>
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
