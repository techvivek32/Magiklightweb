export interface Banner {
  _id: string;
  title: string;
  subtitle?: string;
  image: string;
  status: 'active' | 'inactive';
  order?: number;
}

export interface Category {
  _id: string;
  title: string;
  image: string;
  description?: string;
  status: 'active' | 'inactive';
}

export interface Product {
  _id: string;
  name: string;
  image: string;
  watt?: string;
  lumen?: string;
  category?: string;
  description?: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  status: 'active' | 'inactive';
  featured?: boolean;
}

export interface Project {
  _id: string;
  title: string;
  image: string;
  industry: string;
  location: string;
  description?: string;
  status: 'active' | 'inactive';
}

export interface Testimonial {
  _id: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
  image?: string;
  status: 'active' | 'inactive';
}

export interface Blog {
  _id: string;
  title: string;
  image: string;
  description: string;
  content?: string;
  slug: string;
  publishedAt: Date;
  status: 'active' | 'inactive';
}

export interface Certification {
  _id: string;
  name: string;
  image: string;
  status: 'active' | 'inactive';
}
