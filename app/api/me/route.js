import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'dev_secret_key'
);

export async function GET(req) {
  const token = req.cookies.get('token')?.value;
  if (!token) return NextResponse.json({ authenticated: false });

  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return NextResponse.json({ authenticated: true, user: payload });
  } catch (error) {
    return NextResponse.json({ authenticated: false   });
  }
}
