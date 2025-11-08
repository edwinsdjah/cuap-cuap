import { NextResponse } from 'next/server';
import { ConnectDB } from '../../../lib/config/db';
import UserModel from '../../../lib/model/UserModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'dev_secret_key';

export async function POST(req) {
  try {
    await ConnectDB();
    const body = await req.json();
    const { username, password } = body;

    const user = await UserModel.findOne({ username });
    if (!user) {
      return NextResponse.json({ success: false, msg: 'User Not Found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, msg: 'Wrong Password' });
    }

    // GENERATE SIMPLE JWT TOKEN
    const token = jwt.sign(
      { id: user._id, username: user.username },
      SECRET_KEY,
      {
        expiresIn: '1d',
      }
    );

    // KIRIM COOKIE
    const res = NextResponse.json({
      success: true,
      msg: 'Login Successfull',
    });
    res.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60,
      path: '/',
    });

    return res;
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: 'Server Error!!' },
      { status: 500 }
    );
  }
}
