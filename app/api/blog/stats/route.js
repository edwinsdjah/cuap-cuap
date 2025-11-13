import { NextResponse } from "next/server";
import { ConnectDB } from "lib/config/db";
import BlogModel from "lib/model/BlogModel";

export async function GET() {
  try {
    await ConnectDB();

    // Hitung jumlah post per kategori
    const categoryStats = await BlogModel.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);

    // Group by createdAt
    const dailyStats = await BlogModel.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          createdCount: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Group by updatedAt
    const modifiedActivity = await BlogModel.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$updatedAt" } },
          modifiedCount: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    return NextResponse.json({
      success: true,
      dailyStats,
      modifiedActivity,
      categoryStats,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
