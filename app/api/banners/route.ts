import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  if (!process.env.MONGODB_URI) return NextResponse.json([]);
  try {
    const client = await clientPromise;
    const db = client.db('magik_lighting');
    const banners = await db.collection('banners').find({ status: 'active' }).sort({ order: 1 }).toArray();
    return NextResponse.json(banners);
  } catch {
    return NextResponse.json([]);
  }
}
