import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  if (!process.env.MONGODB_URI) return NextResponse.json([]);
  try {
    const client = await clientPromise;
    const db = client.db('magik_lighting');
    const blogs = await db
      .collection('blogs')
      .find({ status: 'active' })
      .sort({ publishedAt: -1 })
      .limit(3)
      .toArray();
    return NextResponse.json(blogs);
  } catch {
    return NextResponse.json([]);
  }
}
