import { ConnectDB } from "lib/config/db";
import UserModel from "lib/model/UserModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(req) {
  const users = await UserModel.find({});
  return NextResponse.json({ users });
}
