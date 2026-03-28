# Magik Lighting - Premium Homepage

A modern, conversion-focused homepage for Magik Lighting built with Next.js 14, Tailwind CSS, MongoDB, and Cloudinary.

## Features

- 🎨 Luxury minimal design with warm beige palette and gold accents
- ⚡ Next.js 14 App Router for optimal performance
- 🎬 Smooth animations with Framer Motion
- 🖼️ Dynamic media from Cloudinary
- 💾 MongoDB for dynamic content management
- 📱 Fully responsive design
- ♿ Accessibility-focused components

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB
- **Media**: Cloudinary
- **Fonts**: Playfair Display (serif), Inter (sans-serif)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account
- Cloudinary account

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Environment variables are already configured in `.env.local`

4. Seed sample data to MongoDB (optional):
```bash
npm run seed
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
magik-lighting/
├── app/
│   ├── api/          # API routes for data fetching
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles
├── components/       # React components
├── lib/             # Utility functions
├── types/           # TypeScript types
└── public/          # Static assets
```

## Components

- **Header**: Sticky navigation with scroll effect
- **HeroSection**: Full-screen slider with CTAs
- **ProductCategories**: 5-card grid with hover effects
- **WhyMagik**: Feature highlights
- **AboutPreview**: Split layout with image
- **IndustrySolutions**: 6-card industry grid
- **FeaturedProducts**: Dynamic product showcase
- **Projects**: Case studies masonry
- **Certifications**: Logo strip
- **DistributorCTA**: Full-width banner
- **Testimonials**: Auto-sliding carousel
- **BlogPreview**: Latest 3 blogs
- **Footer**: Multi-column with WhatsApp button

## MongoDB Collections

The application uses the following collections:
- `banners` - Hero slider content
- `categories` - Product categories
- `products` - Product catalog
- `projects` - Case studies
- `testimonials` - Client reviews
- `blogs` - Blog posts
- `certifications` - Quality certifications

## Cloudinary Setup

Images are fetched from Cloudinary using the configured credentials. Upload your images to Cloudinary and use the public IDs in your MongoDB documents.

## Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:
- Background: #F8F6F2
- Section: #E8E1D6
- Primary: #3F3A34
- Gold: #C2A56A

### Fonts
Fonts are configured in `app/layout.tsx` using Google Fonts.

## Performance Optimizations

- Next.js Image optimization
- Lazy loading for images
- Code splitting
- MongoDB connection pooling
- Cloudinary automatic optimization

## Deployment

Deploy to Vercel:
```bash
vercel deploy
```

Make sure to add environment variables in Vercel dashboard.

## License

MIT
