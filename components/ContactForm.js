'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs';
import { Send } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm({ translations }) {
  const t = translations;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: 'either',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        preferred_language: formData.language,
        service_interest: formData.service,
        message: formData.message,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        language: 'either',
        service: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            {t.form.name} <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            {t.form.email} <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            {t.form.phone} <span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="language" className={styles.label}>
            {t.form.language} <span className={styles.required}>*</span>
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="either">{t.form.languageOptions.either}</option>
            <option value="english">{t.form.languageOptions.english}</option>
            <option value="spanish">{t.form.languageOptions.spanish}</option>
          </select>
        </div>

        <div className={styles.formGroup + ' ' + styles.fullWidth}>
          <label htmlFor="service" className={styles.label}>
            {t.form.service} <span className={styles.required}>*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">{t.form.serviceOptions.select}</option>
            <option value="medicare-advantage">{t.form.serviceOptions.medicareAdvantage}</option>
            <option value="medicare-supplements">{t.form.serviceOptions.medicareSupplements}</option>
            <option value="dental">{t.form.serviceOptions.dental}</option>
            <option value="vision">{t.form.serviceOptions.vision}</option>
            <option value="consultation">{t.form.serviceOptions.consultation}</option>
          </select>
        </div>

        <div className={styles.formGroup + ' ' + styles.fullWidth}>
          <label htmlFor="message" className={styles.label}>
            {t.form.message} <span className={styles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className={styles.textarea}
          />
        </div>
      </div>

      {status === 'success' && (
        <div className={styles.successMessage}>
          {t.form.success}
        </div>
      )}

      {status === 'error' && (
        <div className={styles.errorMessage}>
          {t.form.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className={styles.submitBtn}
      >
        {status === 'sending' ? (
          <>
            <span className={styles.spinner}></span>
            {t.form.sending}
          </>
        ) : (
          <>
            <Send size={20} />
            {t.form.submit}
          </>
        )}
      </button>
    </form>
  );
}
