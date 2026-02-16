'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Header.module.css';

export default function Header({ lang = 'en', translations }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isSpanish = pathname.startsWith('/es');
  const t = translations;

  const navItems = [
    { href: `${isSpanish ? '/es' : ''}/#home`, label: t.nav.home },
    { href: `${isSpanish ? '/es' : ''}/about`, label: t.nav.about },
    { href: `${isSpanish ? '/es' : ''}/services`, label: t.nav.services },
    { href: `${isSpanish ? '/es' : ''}/carriers`, label: t.nav.carriers },
    { href: `${isSpanish ? '/es' : ''}/blog`, label: t.nav.blog },
    { href: `${isSpanish ? '/es' : ''}/contact`, label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    const currentPath = pathname;
    if (isSpanish) {
      // Switch to English
      const newPath = currentPath.replace('/es', '') || '/';
      window.location.href = newPath;
    } else {
      // Switch to Spanish
      window.location.href = `/es${currentPath}`;
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.contactInfo}>
              <a href="tel:+15049137153" className={styles.phone}>
                <Phone size={16} />
                <span>(504) 913-7153</span>
              </a>
              <span className={styles.divider}>|</span>
              <span className={styles.badge}>Se Habla Español</span>
            </div>
            <button onClick={toggleLanguage} className={styles.langToggle}>
              {isSpanish ? 'English' : 'Español'}
            </button>
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navContent}>
            <Link href={isSpanish ? '/es' : '/'} className={styles.logo}>
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
              <div className={styles.logoText}>
                <span className={styles.logoName}>Nidia Martinez</span>
                <span className={styles.logoTagline}>Insurance LLC</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className={styles.navLinks}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className={styles.mobileMenu}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
