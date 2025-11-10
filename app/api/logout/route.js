// app/api/logout/route.js
import { NextResponse } from 'next/server';

export async function POST() {
  // Buat response JSON sederhana dengan status 200
  const res = NextResponse.json(
    { success: true, msg: 'Logged out successfully' },
    { status: 200 } // ✅ status HTTP di sini, bukan di body
  );

  // Hapus cookie 'token' dengan cara yang aman
  res.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0, // ✅ pastikan cookie expired
  });

  return res;
}
