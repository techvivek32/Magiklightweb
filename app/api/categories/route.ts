import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  if (!process.env.MONGODB_URI) return NextResponse.json([]);
  try {
    const client = await clientPromise;
    const db = client.db('magik_lighting');
    const categories = await db.collection('categories').find({ status: 'active' }).limit(5).toArray();
    return NextResponse.json(categories);
  } catch {
    return NextResponse.json([]);
  }
}
