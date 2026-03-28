# Magik Lighting - Project Structure

## Complete File Tree

```
magik-lighting/
│
├── app/
│   ├── api/                          # API Routes
│   │   ├── banners/route.ts         # Hero slider data
│   │   ├── blogs/route.ts           # Blog posts data
│   │   ├── categories/route.ts      # Product categories
│   │   ├── certifications/route.ts  # Quality certifications
│   │   ├── products/route.ts        # Product catalog
│   │   ├── projects/route.ts        # Case studies
│   │   └── testimonials/route.ts    # Client reviews
│   │
│   ├── layout.tsx                   # Root layout with fonts
│   ├── page.tsx                     # Homepage composition
│   └── globals.css                  # Global styles
│
├── components/                       # React Components
│   ├── Header.tsx                   # Sticky navigation
│   ├── HeroSection.tsx              # Full-screen slider
│   ├── ProductCategories.tsx        # 5-card category grid
│   ├── WhyMagik.tsx                 # Feature highlights
│   ├── AboutPreview.tsx             # Split layout section
│   ├── IndustrySolutions.tsx        # 6-card industry grid
│   ├── FeaturedProducts.tsx         # Product showcase
│   ├── Projects.tsx                 # Case studies masonry
│   ├── Certifications.tsx           # Logo strip
│   ├── DistributorCTA.tsx           # Full-width banner
│   ├── Testimonials.tsx             # Auto-sliding carousel
│   ├── BlogPreview.tsx              # Latest 3 blogs
│   └── Footer.tsx                   # Multi-column footer
│
├── lib/                             # Utility Functions
│   ├── mongodb.ts                   # MongoDB connection
│   └── cloudinary.ts                # Cloudinary config
│
├── scripts/                         # Utility Scripts
│   └── seed.ts                      # Database seeding
│
├── types/                           # TypeScript Types
│   └── index.ts                     # All type definitions
│
├── .env.local                       # Environment variables
├── tailwind.config.ts               # Tailwind configuration
├── tsconfig.json                    # TypeScript config
├── next.config.ts                   # Next.js config
├── package.json                     # Dependencies
├── README.md                        # Project overview
├── SETUP.md                         # Setup instructions
└── PROJECT_STRUCTURE.md             # This file
```

## Component Hierarchy

```
page.tsx
├── Header
├── HeroSection
├── ProductCategories
├── WhyMagik
├── AboutPreview
├── IndustrySolutions
├── FeaturedProducts
├── Projects
├── Certifications
├── DistributorCTA
├── Testimonials
├── BlogPreview
└── Footer
```

## Data Flow

```
MongoDB Atlas
    ↓
API Routes (/app/api/*)
    ↓
Components (fetch on mount)
    ↓
UI Rendering
```

## Key Technologies

### Frontend
- **Next.js 14**: App Router, Server Components
- **React 19**: Component library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations

### Backend
- **MongoDB**: NoSQL database
- **Next.js API Routes**: RESTful endpoints

### Media
- **Cloudinary**: Image/video CDN
- **next-cloudinary**: Cloudinary integration

### Fonts
- **Playfair Display**: Elegant serif for headings
- **Inter**: Clean sans-serif for body text

## Design System

### Color Palette
```css
Background:    #F8F6F2  /* Warm beige */
Section:       #E8E1D6  /* Light beige */
Primary Text:  #3F3A34  /* Dark brown */
Secondary:     #5C544A  /* Medium brown */
Gold:          #C2A56A  /* Accent gold */
Gold Hover:    #B89652  /* Darker gold */
Border:        #E5E5E5  /* Light gray */
White:         #FFFFFF  /* Pure white */
```

### Typography Scale
```
Hero:          text-5xl md:text-7xl (48-72px)
Section Title: text-4xl md:text-5xl (36-48px)
Card Title:    text-xl md:text-2xl (20-24px)
Body:          text-base md:text-lg (16-18px)
```

### Spacing
```
Section Padding: py-20 (80px)
Container:       max-w-7xl mx-auto
Grid Gap:        gap-6 md:gap-8
```

### Animations
- Fade in on scroll
- Slide up on scroll
- Hover scale (1.05)
- Image zoom on hover (1.1)
- Smooth transitions (300ms)

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/banners` | GET | Hero slider content |
| `/api/categories` | GET | Product categories (limit 5) |
| `/api/products` | GET | Products (featured=true for featured) |
| `/api/projects` | GET | Case studies (limit 6) |
| `/api/testimonials` | GET | Client reviews |
| `/api/blogs` | GET | Blog posts (limit 3, sorted by date) |
| `/api/certifications` | GET | Quality certifications |

## Environment Variables

```env
MONGODB_URI                          # MongoDB connection string
CLOUDINARY_CLOUD_NAME                # Cloudinary cloud name
CLOUDINARY_API_KEY                   # Cloudinary API key
CLOUDINARY_API_SECRET                # Cloudinary API secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME    # Public Cloudinary name
```

## Performance Optimizations

1. **Image Optimization**
   - Next.js Image component
   - Cloudinary automatic optimization
   - Lazy loading

2. **Code Splitting**
   - Dynamic imports
   - Route-based splitting

3. **Database**
   - Connection pooling
   - Indexed queries
   - Limited results

4. **Caching**
   - Static generation where possible
   - API route caching

## Responsive Breakpoints

```
sm:  640px   (Mobile landscape)
md:  768px   (Tablet)
lg:  1024px  (Desktop)
xl:  1280px  (Large desktop)
2xl: 1536px  (Extra large)
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features
- CSS Grid & Flexbox
- CSS Custom Properties

## Accessibility Features

- Semantic HTML
- Alt text for images
- Keyboard navigation
- Focus states
- ARIA labels where needed
- Color contrast compliance

## Future Enhancements

- [ ] Product detail pages
- [ ] Blog detail pages
- [ ] Contact form with email integration
- [ ] Distributor application form
- [ ] Product search & filters
- [ ] Multi-language support
- [ ] Admin dashboard
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Analytics integration
