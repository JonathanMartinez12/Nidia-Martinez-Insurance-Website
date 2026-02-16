# Nidia Martinez Insurance LLC Website

A modern, SEO-optimized Next.js 14 website for Nidia Martinez Insurance LLC, a Medicare and individual insurance agency serving Louisiana, Florida, and Mississippi.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **Bilingual Support** - Full English and Spanish translations
- ✅ **SEO Optimized** - Meta tags, schema markup, sitemap, robots.txt
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Modern UI** - Clean, professional design with CSS Modules
- ✅ **EmailJS Integration** - Contact form with email functionality
- ✅ **Blog Structure** - Ready for content management
- ✅ **Schema.org Markup** - LocalBusiness, FAQPage, and BreadcrumbList schemas

## Business Information

- **Company:** Nidia Martinez Insurance LLC
- **Phone:** (504) 913-7153
- **Email:** nidiamartinez576@outlook.com
- **Office:** 110 Veterans Blvd Suite 100-A, Metairie, LA 70005
- **Service Areas:** Louisiana, Florida, Mississippi
- **Languages:** English & Spanish (Bilingual Services)

## Services

1. Medicare Advantage Plans
2. Medicare Supplement Plans (Medigap)
3. Individual Dental Insurance
4. Individual Vision Insurance

## Carrier Partners

- Humana
- UnitedHealthcare / People Health
- AARP Medicare Supplements
- Devoted Health
- Aetna
- Blue Cross Blue Shield

## Tech Stack

- **Framework:** Next.js 14.2.0
- **React:** 18.3.0
- **Styling:** CSS Modules
- **Icons:** Lucide React
- **Email:** EmailJS Browser 4.3.3
- **Deployment:** Vercel-ready

## Project Structure

```
nidia-martinez-insurance/
├── app/
│   ├── layout.js                    # Root layout (English)
│   ├── page.js                      # Homepage (English)
│   ├── about/page.js                # About page
│   ├── services/
│   │   ├── page.js                  # Services overview
│   │   ├── medicare-advantage/
│   │   ├── medicare-supplements/
│   │   ├── dental-insurance/
│   │   └── vision-insurance/
│   ├── carriers/page.js             # Carriers page
│   ├── contact/page.js              # Contact page with form
│   ├── blog/
│   │   ├── page.js                  # Blog listing
│   │   └── [slug]/page.js           # Dynamic blog posts
│   ├── es/                          # Spanish pages
│   │   ├── layout.js                # Spanish layout
│   │   ├── page.js                  # Spanish homepage
│   │   └── ...                      # Spanish versions of all pages
│   ├── sitemap.js                   # Dynamic sitemap
│   └── robots.js                    # Robots.txt
├── components/
│   ├── Header.js                    # Main navigation with language toggle
│   ├── Footer.js                    # Footer with contact info
│   ├── ContactForm.js               # EmailJS contact form
│   ├── ServiceCard.js               # Service cards
│   ├── TestimonialCard.js           # Testimonial cards
│   ├── CarrierLogo.js               # Carrier logo component
│   └── SEO/
│       ├── LocalBusinessSchema.js   # Schema markup
│       └── FAQSchema.js             # FAQ schema
├── lib/
│   ├── emailjs.js                   # EmailJS configuration
│   └── translations.js              # English/Spanish translations
├── public/
│   └── images/
│       ├── carriers/                # Carrier logos
│       └── placeholders/            # Placeholder images
├── styles/
│   └── globals.css                  # Global styles and CSS variables
├── package.json
├── next.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd Nidia-Martinez-Insurance-Website
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up EmailJS:**

   - Create a free account at [EmailJS](https://www.emailjs.com/)
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template with these variables:
     - `{{from_name}}` - sender's name
     - `{{from_email}}` - sender's email
     - `{{phone}}` - sender's phone
     - `{{preferred_language}}` - preferred language
     - `{{service_interest}}` - service they're interested in
     - `{{message}}` - message content
   - Get your Service ID, Template ID, and Public Key
   - Update `lib/emailjs.js` with your credentials:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id',
  PUBLIC_KEY: 'your_public_key',
};
```

4. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

This website is optimized for deployment on Vercel:

1. **Push to GitHub:**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel:**

   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build
   - Deploy!

### Environment Variables (Optional)

If you want to keep EmailJS credentials private:

1. Create a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update `lib/emailjs.js` to use environment variables:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};
```

3. Add environment variables in Vercel dashboard

## Customization

### Adding Images

Replace placeholder images in:
- Hero sections: Professional photos of Nidia or office
- About page: Nidia's professional photo
- Service pages: Relevant service imagery
- Blog posts: Blog header images

### Adding Carrier Logos

Add actual carrier logos to `public/images/carriers/` and update the `CarrierLogo` component to use them.

### Updating Content

All English and Spanish content is centralized in `lib/translations.js`. Update translations there to change site content.

### Adding More Blog Posts

Add new blog posts to the `blogPosts` object in:
- `app/blog/page.js` (blog listing)
- `app/blog/[slug]/page.js` (blog post content)

### Customizing Styles

Global CSS variables are defined in `styles/globals.css`. Update the color palette, spacing, or other design tokens there.

## SEO Features

✅ **Meta Tags:** All pages have optimized title tags, meta descriptions, and Open Graph tags
✅ **Schema Markup:** LocalBusiness, FAQPage schemas implemented
✅ **Sitemap:** Dynamic XML sitemap at `/sitemap.xml`
✅ **Robots.txt:** Configured at `/robots.txt`
✅ **Canonical URLs:** All pages have canonical URLs
✅ **Hreflang Tags:** English and Spanish versions linked
✅ **Semantic HTML:** Proper heading hierarchy
✅ **Alt Text:** Placeholders for image alt text

## Accessibility

- Semantic HTML5 elements
- Proper ARIA labels
- Keyboard navigation support
- Color contrast ratios meet WCAG standards
- Responsive font sizes

## Performance Optimizations

- Next.js automatic code splitting
- Image optimization ready (add actual images)
- Minimal JavaScript bundle
- CSS Modules for scoped styling
- Font optimization with Google Fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Future Enhancements

- [ ] Add actual professional photos
- [ ] Replace carrier logo placeholders with actual logos
- [ ] Implement Google Maps embed for office location
- [ ] Add Google Analytics or similar tracking
- [ ] Integrate with a CMS for blog management
- [ ] Add client testimonial submission form
- [ ] Implement live chat or chatbot

## Support

For questions or issues, contact:
- **Email:** nidiamartinez576@outlook.com
- **Phone:** (504) 913-7153

## License

© 2026 Nidia Martinez Insurance LLC. All rights reserved.