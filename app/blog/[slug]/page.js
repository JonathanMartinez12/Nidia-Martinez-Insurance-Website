import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import styles from './page.module.css';

// This would typically come from a CMS or database
const blogPosts = {
  'medicare-advantage-vs-medicare-supplements': {
    title: 'Understanding Medicare Advantage vs. Medicare Supplements',
    date: '2026-02-10',
    author: 'Nidia Martinez',
    category: 'Medicare Basics',
    content: `
      <p>When you become eligible for Medicare, one of the most important decisions you'll make is choosing between Medicare Advantage and Medicare Supplement (Medigap) plans. Both options provide additional coverage beyond Original Medicare, but they work in very different ways.</p>

      <h2>What is Medicare Advantage?</h2>
      <p>Medicare Advantage (Part C) is an alternative to Original Medicare offered by private insurance companies. These plans include all Part A and Part B benefits and often include additional coverage like prescription drugs (Part D), dental, vision, and hearing.</p>

      <h3>Key Features of Medicare Advantage:</h3>
      <ul>
        <li>All-in-one coverage including hospital, medical, and often prescription drugs</li>
        <li>Extra benefits like dental, vision, hearing, and fitness programs</li>
        <li>Lower monthly premiums (some as low as $0)</li>
        <li>Provider networks (HMO, PPO)</li>
        <li>Annual out-of-pocket maximum for protection</li>
      </ul>

      <h2>What are Medicare Supplements (Medigap)?</h2>
      <p>Medicare Supplement Insurance (Medigap) works alongside Original Medicare to help pay for out-of-pocket costs like copayments, coinsurance, and deductibles. These plans are standardized and sold by private insurance companies.</p>

      <h3>Key Features of Medicare Supplements:</h3>
      <ul>
        <li>Works with Original Medicare Parts A and B</li>
        <li>Covers Medicare copays, coinsurance, and deductibles</li>
        <li>No provider networks - see any doctor that accepts Medicare</li>
        <li>Predictable costs with minimal surprise expenses</li>
        <li>Requires separate Part D plan for prescriptions</li>
      </ul>

      <h2>Which Option is Right for You?</h2>
      <p>The choice between Medicare Advantage and Medicare Supplement depends on your individual needs, budget, and healthcare preferences.</p>

      <h3>Consider Medicare Advantage if:</h3>
      <ul>
        <li>You want an all-in-one plan with extra benefits</li>
        <li>You're comfortable with provider networks</li>
        <li>You prefer lower monthly premiums</li>
        <li>You want prescription drug coverage included</li>
      </ul>

      <h3>Consider Medicare Supplement if:</h3>
      <ul>
        <li>You want the freedom to see any Medicare doctor</li>
        <li>You travel frequently or split time between states</li>
        <li>You prefer predictable healthcare costs</li>
        <li>You're willing to pay higher premiums for comprehensive coverage</li>
      </ul>

      <h2>Get Expert Guidance</h2>
      <p>Choosing between Medicare Advantage and Medicare Supplement is a personal decision that depends on your unique situation. As an independent insurance agent, I can help you compare plans from multiple carriers and find the coverage that best fits your needs and budget.</p>

      <p><strong>Contact Nidia Martinez today for a free consultation:</strong> (504) 913-7153</p>
    `,
  },
  'medicare-open-enrollment-2025': {
    title: 'When Is Medicare Open Enrollment? Key Dates for 2025',
    date: '2026-01-25',
    author: 'Nidia Martinez',
    category: 'Enrollment',
    content: `
      <p>Understanding Medicare enrollment periods is crucial to ensuring you have the coverage you need when you need it. Missing key deadlines can result in coverage gaps or late enrollment penalties.</p>

      <h2>Annual Enrollment Period (AEP)</h2>
      <p><strong>October 15 - December 7</strong></p>
      <p>The Annual Enrollment Period is the most well-known Medicare enrollment period. During this time, you can:</p>
      <ul>
        <li>Switch from Original Medicare to Medicare Advantage (or vice versa)</li>
        <li>Change from one Medicare Advantage plan to another</li>
        <li>Add, drop, or change Medicare Part D prescription drug coverage</li>
      </ul>

      <h2>Medicare Advantage Open Enrollment Period</h2>
      <p><strong>January 1 - March 31</strong></p>
      <p>If you're enrolled in a Medicare Advantage plan, you have one opportunity during this period to:</p>
      <ul>
        <li>Switch to a different Medicare Advantage plan</li>
        <li>Drop your Medicare Advantage plan and return to Original Medicare</li>
        <li>Join a Medicare Part D plan if you switch to Original Medicare</li>
      </ul>

      <h2>Initial Enrollment Period</h2>
      <p>Your Initial Enrollment Period begins 3 months before your 65th birthday month and extends 3 months after (7 months total). This is when you first sign up for Medicare.</p>

      <h2>Special Enrollment Periods</h2>
      <p>Certain life events may qualify you for a Special Enrollment Period, allowing you to make changes outside the regular enrollment periods:</p>
      <ul>
        <li>Moving to a new service area</li>
        <li>Losing other health coverage</li>
        <li>Moving into or out of a nursing home</li>
        <li>Qualifying for Extra Help with prescription costs</li>
      </ul>

      <h2>Don't Miss Your Enrollment Window</h2>
      <p>It's important to mark these dates on your calendar and review your coverage annually. Healthcare needs change, and new plans become available each year that might better suit your situation.</p>

      <p><strong>Need help navigating Medicare enrollment? Contact Nidia Martinez for expert guidance:</strong> (504) 913-7153</p>
    `,
  },
  'bilingual-insurance-agents-matter': {
    title: 'Why Bilingual Insurance Agents Matter for Your Family',
    date: '2026-01-15',
    author: 'Nidia Martinez',
    category: 'Community',
    content: `
      <p>Choosing health insurance is one of the most important financial decisions you'll make. For Spanish-speaking families, working with a bilingual insurance agent can make all the difference in understanding your options and making confident decisions.</p>

      <h2>Clear Communication in Your Preferred Language</h2>
      <p>Insurance terminology can be confusing even in your native language. Terms like "deductible," "copayment," "coinsurance," and "out-of-pocket maximum" are complex concepts that require clear explanation. When you work with a bilingual agent, you can discuss these details in the language you're most comfortable with, ensuring you truly understand what you're signing up for.</p>

      <h2>Helping Your Family Members</h2>
      <p>Many families have members who are more comfortable speaking Spanish than English. A bilingual agent can communicate directly with parents, grandparents, or other family members, eliminating the need for family members to translate complex insurance information.</p>

      <h2>Cultural Understanding</h2>
      <p>Bilingual agents often have deep connections to the communities they serve. They understand cultural values, family dynamics, and the unique challenges that Spanish-speaking families may face when navigating the American healthcare system.</p>

      <h2>Advocacy and Support</h2>
      <p>When issues arise with claims, billing, or coverage questions, having an agent who can communicate on your behalf in both English and Spanish is invaluable. Your agent becomes your advocate, ensuring nothing gets lost in translation.</p>

      <h2>Building Trust</h2>
      <p>Trust is essential when making important financial decisions. Being able to ask questions, express concerns, and discuss personal health matters in your preferred language helps build that trust. You deserve to work with someone who truly understands your needs.</p>

      <h2>Se Habla Español</h2>
      <p>At Nidia Martinez Insurance, I'm proud to serve the Spanish-speaking community across Louisiana, Florida, and Mississippi. Whether you prefer to conduct business in English or Spanish, I'm here to help you and your family find the right insurance coverage.</p>

      <p><strong>¿Necesita ayuda con Medicare o seguros? Llame a Nidia Martinez:</strong> (504) 913-7153</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Nidia Martinez Insurance Blog`,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 160),
    alternates: {
      canonical: `https://www.nidiamartinezinsurance.com/blog/${params.slug}`,
      languages: {
        'en-US': `https://www.nidiamartinezinsurance.com/blog/${params.slug}`,
        'es-US': `https://www.nidiamartinezinsurance.com/es/blog/${params.slug}`,
      },
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="container" style={{ padding: 'var(--spacing-3xl) 0', textAlign: 'center' }}>
        <h1>Blog Post Not Found</h1>
        <Link href="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <article className={styles.article}>
        <div className="container">
          <div className={styles.articleHeader}>
            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
            <div className={styles.articleMeta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.date}>
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className={styles.author}>
                <User size={16} />
                {post.author}
              </span>
            </div>
            <h1 className={styles.articleTitle}>{post.title}</h1>
          </div>

          <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className={styles.articleFooter}>
            <div className={styles.ctaBox}>
              <h3>Need Help With Your Insurance?</h3>
              <p>Contact Nidia Martinez for expert guidance on Medicare and insurance options.</p>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn btn-primary">Schedule a Consultation</a>
                <a href="tel:+15049137153" className="btn btn-secondary">Call (504) 913-7153</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
