/**
 * Real Google reviews of Martinez Insurance Solutions, copied from our Google Business Profile.
 * Drives the reviews section (hidden while this list is empty). Never edit a reviewer's words.
 *
 * - `author`: first name + last initial only.
 * - `body`: the reviewer's own text. When only the start of a long review was copied, set
 *   `excerpt: true` (shown with "…"); paste the full text from the profile to replace it.
 * - `date`: month the review was posted (YYYY-MM).
 * - `lang`: the language the review was written in.
 *
 * No Review/AggregateRating schema is generated from these: Google doesn't allow review rich
 * results for reviews a business shows about itself.
 */
export type CustomerReview = {
  author: string;
  body: string;
  excerpt?: boolean;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  lang: 'en' | 'es';
  source: 'Google';
};

export const reviews: CustomerReview[] = [
  {
    author: 'Gustavo K.',
    body: 'Nidia Martinez has been my Medicare advantage agent since I retired 7 years ago.',
    excerpt: true,
    date: '2026-10',
    rating: 5,
    lang: 'en',
    source: 'Google',
  },
  {
    author: 'Carlos C.',
    body: "It's good to know that there are still honest people and businesses that look out for you, not their pockets.",
    excerpt: true,
    date: '2026-10',
    rating: 5,
    lang: 'en',
    source: 'Google',
  },
  {
    author: 'Ana P.',
    body: 'Nidia Martinez gracias por su atencion y su amabilidad al aver llenado mi application del plan de Medicare.',
    date: '2026-10',
    rating: 5,
    lang: 'es',
    source: 'Google',
  },
  {
    author: 'Richard C.',
    body: 'Please reach out to Nidia Martinez for your insurance needs. She has been in this industry for a very long time.',
    excerpt: true,
    date: '2026-10',
    rating: 5,
    lang: 'en',
    source: 'Google',
  },
  {
    author: 'Cindy S.',
    body: 'Nidia Martinez with Martinez Insurance Solutions is very helpful when deciding on a Medicare plan.',
    excerpt: true,
    date: '2026-10',
    rating: 5,
    lang: 'en',
    source: 'Google',
  },
  {
    author: 'Lorena E.',
    body: 'Nidia is a pleasure to work with.',
    excerpt: true,
    date: '2026-10',
    rating: 5,
    lang: 'en',
    source: 'Google',
  },
  {
    author: 'Joycelyn L.',
    body: 'Ms Martinez is very helpful and knowledgeable.',
    date: '2026-10',
    rating: 5,
    lang: 'en',
    source: 'Google',
  },
];
