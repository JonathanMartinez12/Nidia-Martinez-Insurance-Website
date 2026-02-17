# Images Directory

This folder contains all images for the website.

## Folder Structure

```
public/images/
├── carriers/           # Carrier logos (Humana, UHC, AARP, etc.)
├── placeholders/       # Temporary placeholder images
├── hero/              # Hero section images
├── about/             # About page images (Nidia's photo)
├── services/          # Service page images
└── blog/              # Blog post images
```

## Where to Put Your Images

### Hero Section Images
Place main hero/banner images in `public/images/hero/`
- Suggested name: `hero-main.jpg` or `hero-main.png`
- Recommended size: 1200x800px or larger

### About Page
Place Nidia's professional photo in `public/images/about/`
- Suggested name: `nidia-martinez.jpg`
- Recommended size: 600x600px or larger (square or portrait)

### Carrier Logos
Place carrier logos in `public/images/carriers/`
- Current logos being used from external URLs
- For better performance, download and place here:
  - `humana.png` or `humana.svg`
  - `uhc.png` or `uhc.svg`
  - `aarp.png` or `aarp.svg`
  - `devoted.png` or `devoted.svg`
  - `aetna.png` or `aetna.svg`
  - `bcbs.png` or `bcbs.svg`

### Service Pages
Place service-related images in `public/images/services/`
- `medicare-advantage.jpg`
- `medicare-supplements.jpg`
- `dental-insurance.jpg`
- `vision-insurance.jpg`

### Blog Posts
Place blog images in `public/images/blog/`

## Image Best Practices

1. **Format**: Use JPG for photos, PNG for graphics with transparency, SVG for logos
2. **Size**: Optimize images before uploading (use tools like TinyPNG)
3. **Naming**: Use lowercase with hyphens (e.g., `my-image-name.jpg`)
4. **Dimensions**: Larger is better (Next.js will optimize), but keep under 5MB per image

## How to Reference Images in Code

Once you upload an image, reference it like this:

```javascript
// In a component:
<img src="/images/hero/hero-main.jpg" alt="Description" />

// Or with Next.js Image component:
import Image from 'next/image';
<Image src="/images/hero/hero-main.jpg" alt="Description" width={1200} height={800} />
```

## Current Image Placeholders

The website currently shows gray placeholder boxes labeled "Image 1", "Image 2", etc.
Replace these with your actual images for a professional look!
