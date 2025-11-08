import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'dev_secret_key'
);

export async function middleware(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    // kalau belum login, redirect ke halaman utama dengan query ?login=true
    const url = req.nextUrl.clone();
    url.pathname = '/';
    url.searchParams.set('login', 'true');
    return NextResponse.redirect(url);
  }

  try {
    await jwtVerify(token, SECRET_KEY);
    return NextResponse.next(); // token valid, lanjut ke /admin
  } catch (e) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    url.searchParams.set('login', 'true');
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/admin/:path*'], // middleware aktif untuk semua route /admin
};
