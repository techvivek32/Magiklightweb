import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://Vercel-Admin-atlas-celeste-drum:Wp7zT4WwKyTsJgIG@atlas-celeste-drum.qeqss1f.mongodb.net/?retryWrites=true&w=majority";

const sampleData = {
  banners: [
    {
      title: "Illuminate Your World",
      subtitle: "Premium LED lighting solutions for every space",
      video: "samples/elephants",
      image: "samples/landscapes/beach-boat",
      status: "active",
      order: 1
    },
    {
      title: "Energy Efficient Lighting",
      subtitle: "Save up to 80% on electricity bills",
      video: "samples/sea-turtle",
      image: "samples/landscapes/nature-mountains",
      status: "active",
      order: 2
    }
  ],
  categories: [
    { title: "LED Bulbs", image: "samples/food/spices", status: "active" },
    { title: "Panel Lights", image: "samples/animals/three-dogs", status: "active" },
    { title: "Street Lights", image: "samples/landscapes/architecture-signs", status: "active" },
    { title: "Flood Lights", image: "samples/landscapes/girl-urban-view", status: "active" },
    { title: "Tube Lights", image: "samples/people/kitchen-bar", status: "active" }
  ],
  products: [
    {
      name: "Premium LED Bulb 9W",
      image: "/0d0260e3-3848-4c24-a8c7-5271d2aee437.jpg",
      watt: "9",
      lumen: "900",
      price: 299,
      originalPrice: 399,
      rating: 5,
      reviewCount: 41,
      status: "active",
      featured: true
    },
    {
      name: "Panel Light 18W",
      image: "/16c53c3f-c6fd-4c54-bf29-fd10817a1de8.jpg",
      watt: "18",
      lumen: "1800",
      price: 599,
      originalPrice: 799,
      rating: 4,
      reviewCount: 73,
      status: "active",
      featured: true
    },
    {
      name: "Street Light 50W",
      image: "/47c537e9-bd21-4fad-a1b6-f6b04c3f0171.jpg",
      watt: "50",
      lumen: "5000",
      price: 1299,
      originalPrice: 1599,
      rating: 5,
      reviewCount: 149,
      status: "active",
      featured: true
    },
    {
      name: "Flood Light 100W",
      image: "/8102fa06-da14-4d83-83a8-1ba0509c6c21.jpg",
      watt: "100",
      lumen: "10000",
      price: 2199,
      originalPrice: 2799,
      rating: 4,
      reviewCount: 164,
      status: "active",
      featured: true
    }
  ],
  projects: [
    {
      title: "Corporate Office Lighting",
      image: "samples/people/kitchen-bar",
      industry: "Commercial",
      location: "Mumbai, Maharashtra",
      status: "active"
    },
    {
      title: "Manufacturing Plant",
      image: "samples/landscapes/architecture-signs",
      industry: "Industrial",
      location: "Pune, Maharashtra",
      status: "active"
    },
    {
      title: "Luxury Hotel",
      image: "samples/landscapes/beach-boat",
      industry: "Hospitality",
      location: "Goa",
      status: "active"
    }
  ],
  testimonials: [
    {
      quote: "Magik Lighting transformed our office space with their premium LED solutions. The quality and service are exceptional.",
      name: "Rajesh Kumar",
      role: "Facility Manager",
      company: "Tech Corp India",
      status: "active"
    },
    {
      quote: "We've been using Magik products for 3 years now. Energy savings are significant and the products are highly durable.",
      name: "Priya Sharma",
      role: "Operations Head",
      company: "Manufacturing Ltd",
      status: "active"
    }
  ],
  blogs: [
    {
      title: "5 Benefits of LED Lighting for Your Business",
      image: "samples/people/kitchen-bar",
      description: "Discover how LED lighting can reduce costs and improve productivity in your workplace.",
      slug: "benefits-led-lighting-business",
      publishedAt: new Date(),
      status: "active"
    },
    {
      title: "How to Choose the Right Lighting for Your Home",
      image: "samples/landscapes/beach-boat",
      description: "A comprehensive guide to selecting perfect lighting solutions for every room.",
      slug: "choose-right-lighting-home",
      publishedAt: new Date(),
      status: "active"
    },
    {
      title: "LED vs Traditional Lighting: A Complete Comparison",
      image: "samples/landscapes/nature-mountains",
      description: "Understanding the differences and why LED is the future of lighting.",
      slug: "led-vs-traditional-lighting",
      publishedAt: new Date(),
      status: "active"
    }
  ],
  certifications: [
    { name: "ISO 9001", image: "samples/food/spices", status: "active" },
    { name: "BIS Certified", image: "samples/animals/three-dogs", status: "active" },
    { name: "CE Certified", image: "samples/landscapes/architecture-signs", status: "active" }
  ]
};

async function seed() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('magik_lighting');
    
    // Clear existing data
    for (const collection of Object.keys(sampleData)) {
      await db.collection(collection).deleteMany({});
      console.log(`Cleared ${collection} collection`);
    }
    
    // Insert sample data
    for (const [collection, data] of Object.entries(sampleData)) {
      await db.collection(collection).insertMany(data as any[]);
      console.log(`Inserted ${data.length} documents into ${collection}`);
    }
    
    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seed();
