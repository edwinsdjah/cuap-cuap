// middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'dev_secret_key'
);

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value;
  const url = req.nextUrl.clone();

  // Abaikan assets, API, dll
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/assets')
  ) {
    return NextResponse.next();
  }

  // Proteksi /admin/*
  if (pathname.startsWith('/admin')) {
    if (!token) {
      url.pathname = '/';
      url.searchParams.set('login', 'true');
      return NextResponse.redirect(url);
    }

    try {
      await jwtVerify(token, SECRET_KEY);
      return NextResponse.next();
    } catch {
      url.pathname = '/';
      url.searchParams.set('login', 'true');
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|assets).*)'],
};
