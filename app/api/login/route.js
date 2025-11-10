import { NextResponse } from 'next/server';
import { ConnectDB } from '../../../lib/config/db';
import UserModel from '../../../lib/model/UserModel';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'dev_secret_key'
);

export async function POST(req) {
  try {
    await ConnectDB();
    const { username, password } = await req.json();

    const user = await UserModel.findOne({ username });
    if (!user) {
      return NextResponse.json({ success: false, msg: 'User Not Found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, msg: 'Wrong Password' });
    }

    // ✅ Buat token pakai jose
    const token = await new SignJWT({ id: user._id, username: user.username })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1d')
      .sign(SECRET_KEY);

    const res = NextResponse.json({
      success: true,
      msg: 'Login Successful',
      user: { id: user._id, username: user.username },
    });

    res.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 24 * 60 * 60,
    });

    return res;
  } catch (err) {
    console.error('Login Error:', err);
    return NextResponse.json(
      { success: false, msg: 'Server Error' },
      { status: 500 }
    );
  }
}
