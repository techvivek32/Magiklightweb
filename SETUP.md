# Magik Lighting - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
cd magik-lighting
npm install
```

### 2. Environment Configuration
The `.env.local` file is already configured with:
- MongoDB connection string
- Cloudinary credentials

### 3. Seed Sample Data (Optional)
To populate MongoDB with sample data:
```bash
npm run seed
```

This will create sample data for:
- Banners (hero slider)
- Categories (5 product categories)
- Products (featured products)
- Projects (case studies)
- Testimonials (client reviews)
- Blogs (3 sample posts)
- Certifications (quality badges)

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the homepage.

## Cloudinary Image Setup

The sample data uses Cloudinary's demo images. To use your own images:

1. Upload images to your Cloudinary account (dy435cnp3)
2. Get the public ID of each image
3. Update MongoDB documents with your image public IDs

Example:
```javascript
{
  "name": "LED Bulb",
  "image": "your-folder/your-image-name", // Cloudinary public ID
  "status": "active"
}
```

## MongoDB Collections Structure

### Banners
```javascript
{
  title: String,
  subtitle: String (optional),
  image: String, // Cloudinary public ID
  status: 'active' | 'inactive',
  order: Number
}
```

### Categories
```javascript
{
  title: String,
  image: String,
  description: String (optional),
  status: 'active' | 'inactive'
}
```

### Products
```javascript
{
  name: String,
  image: String,
  watt: String (optional),
  lumen: String (optional),
  category: String (optional),
  description: String (optional),
  status: 'active' | 'inactive',
  featured: Boolean
}
```

### Projects
```javascript
{
  title: String,
  image: String,
  industry: String,
  location: String,
  description: String (optional),
  status: 'active' | 'inactive'
}
```

### Testimonials
```javascript
{
  quote: String,
  name: String,
  role: String,
  company: String (optional),
  image: String (optional),
  status: 'active' | 'inactive'
}
```

### Blogs
```javascript
{
  title: String,
  image: String,
  description: String,
  content: String (optional),
  slug: String,
  publishedAt: Date,
  status: 'active' | 'inactive'
}
```

### Certifications
```javascript
{
  name: String,
  image: String,
  status: 'active' | 'inactive'
}
```

## Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  background: "#F8F6F2",
  section: "#E8E1D6",
  primary: "#3F3A34",
  secondary: "#5C544A",
  gold: "#C2A56A",
  goldHover: "#B89652",
  border: "#E5E5E5",
}
```

### Fonts
Edit `app/layout.tsx` to change fonts from Google Fonts.

### Content
Update MongoDB collections to change homepage content dynamically.

## Production Build

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `MONGODB_URI`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
4. Deploy

## Features Implemented

✅ Sticky header with scroll effect
✅ Hero slider with Cloudinary images
✅ Product categories grid with hover effects
✅ Why Magik features section
✅ About preview with split layout
✅ Industry solutions grid
✅ Featured products from MongoDB
✅ Projects showcase
✅ Certifications logo strip
✅ Distributor CTA banner
✅ Testimonials carousel
✅ Blog preview cards
✅ Footer with WhatsApp button
✅ Smooth animations with Framer Motion
✅ Responsive design
✅ MongoDB integration
✅ Cloudinary image optimization

## Performance Features

- Next.js Image optimization
- Lazy loading
- Code splitting
- MongoDB connection pooling
- Cloudinary automatic optimization
- Smooth scroll behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### MongoDB Connection Issues
- Verify MongoDB URI in `.env.local`
- Check network connectivity
- Ensure IP is whitelisted in MongoDB Atlas

### Cloudinary Images Not Loading
- Verify Cloudinary credentials
- Check image public IDs
- Ensure images exist in your Cloudinary account

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
