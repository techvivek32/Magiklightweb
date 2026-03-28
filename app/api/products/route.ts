import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request: Request) {
  if (!process.env.MONGODB_URI) return NextResponse.json([]);
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const client = await clientPromise;
    const db = client.db('magik_lighting');
    const query: any = { status: 'active' };
    if (featured === 'true') query.featured = true;
    const products = await db.collection('products').find(query).limit(featured === 'true' ? 8 : 0).toArray();
    return NextResponse.json(products);
  } catch {
    return NextResponse.json([]);
  }
}
