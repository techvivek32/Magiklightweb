import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  if (!process.env.MONGODB_URI) return NextResponse.json([]);
  try {
    const client = await clientPromise;
    const db = client.db('magik_lighting');
    const projects = await db.collection('projects').find({ status: 'active' }).limit(6).toArray();
    return NextResponse.json(projects);
  } catch {
    return NextResponse.json([]);
  }
}
