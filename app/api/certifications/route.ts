import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  if (!process.env.MONGODB_URI) return NextResponse.json([]);
  try {
    const client = await clientPromise;
    const db = client.db('magik_lighting');
    const certifications = await db.collection('certifications').find({ status: 'active' }).toArray();
    return NextResponse.json(certifications);
  } catch {
    return NextResponse.json([]);
  }
}
