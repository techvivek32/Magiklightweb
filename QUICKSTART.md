# Magik Lighting - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd magik-lighting
npm install
```

### Step 2: Seed Database (Optional)
```bash
npm run seed
```
This populates MongoDB with sample data for testing.

### Step 3: Run Development Server
```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 📋 What You'll See

The homepage includes:

1. **Hero Slider** - Full-screen banner with CTAs
2. **Product Categories** - 5 category cards with hover effects
3. **Why Magik** - 6 feature highlights
4. **About Preview** - Company introduction
5. **Industry Solutions** - 6 industry sectors
6. **Featured Products** - Product showcase from MongoDB
7. **Projects** - Case studies gallery
8. **Certifications** - Quality badges
9. **Distributor CTA** - Partnership banner
10. **Testimonials** - Client reviews carousel
11. **Blog Preview** - Latest 3 blog posts
12. **Footer** - Links + WhatsApp button

---

## 🎨 Design Features

- **Luxury minimal aesthetic** with warm beige palette
- **Gold accents** (#C2A56A) for premium feel
- **Smooth animations** with Framer Motion
- **Responsive design** for all devices
- **Optimized images** from Cloudinary

---

## 🔧 Key Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run seed` | Populate database with sample data |
| `npm run lint` | Run ESLint |

---

## 📁 Important Files

- **`.env.local`** - Environment variables (already configured)
- **`app/page.tsx`** - Homepage composition
- **`components/`** - All React components
- **`app/api/`** - API routes for data fetching
- **`tailwind.config.ts`** - Design system colors

---

## 🎯 Customization Quick Tips

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  gold: "#YOUR_COLOR",
  primary: "#YOUR_COLOR",
}
```

### Update Content
1. Run `npm run seed` to populate database
2. Or manually add data to MongoDB collections
3. Content updates automatically on page refresh

### Add Your Images
1. Upload to Cloudinary (cloud: dy435cnp3)
2. Get the public ID
3. Update MongoDB documents with the public ID

---

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

**MongoDB connection error?**
- Check `.env.local` has correct MONGODB_URI
- Verify internet connection
- Ensure MongoDB Atlas is accessible

**Images not loading?**
- Verify Cloudinary credentials in `.env.local`
- Check image public IDs in MongoDB
- Ensure images exist in Cloudinary account

---

## 📚 Documentation

- **README.md** - Project overview
- **SETUP.md** - Detailed setup instructions
- **PROJECT_STRUCTURE.md** - Complete file structure

---

## 🚢 Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy!

---

## ✨ Features Checklist

✅ Sticky header with scroll effect  
✅ Hero slider with Cloudinary images  
✅ Dynamic content from MongoDB  
✅ Smooth animations  
✅ Responsive design  
✅ WhatsApp floating button  
✅ SEO optimized  
✅ Performance optimized  

---

**Need help?** Check the detailed documentation in SETUP.md and PROJECT_STRUCTURE.md
