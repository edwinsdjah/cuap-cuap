"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import BlogTableItem from "Components/AdminComponents/BlogTableItem";
import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { toast } from "react-toastify";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2"];

export default function DashboardPage() {
  const [categoryData, setCategoryData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const fetchBlog = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete("/api/blog", {
      params: { id: mongoId },
    });
    toast.success(response.data.msg);
    fetchBlog();
  };

  useEffect(() => {
    fetch("/api/blog/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCategoryData(
            data.categoryStats?.map((item) => ({
              name: item._id,
              value: item.count,
            })) || []
          );

          // === Gabungkan created dan modified jadi satu dataset ===
          const combinedMap = new Map();

          data.dailyStats.forEach((item) => {
            combinedMap.set(item._id, {
              date: item._id,
              createdCount: item.createdCount,
              modifiedCount: 0,
            });
          });

          data.modifiedActivity.forEach((item) => {
            if (combinedMap.has(item._id)) {
              combinedMap.get(item._id).modifiedCount = item.modifiedCount;
            } else {
              combinedMap.set(item._id, {
                date: item._id,
                createdCount: 0,
                modifiedCount: item.modifiedCount,
              });
            }
          });

          // Convert hasil Map jadi array
          const mergedData = Array.from(combinedMap.values()).sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );

          setDailyData(mergedData);
        }
      });
    fetchBlog();
  }, []);

  return (
    <div className="p-8 space-y-12 px-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* === Charts Section === */}
      <div className="flex flex-wrap gap-3 flex-row justify-start mt-5">
        {/* === Donut Chart === */}
        <Card className="">
          <CardHeader>
            <CardTitle>Post by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart width={400} height={300}>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                label={({ name, value }) => `${name}: ${value}`}
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </CardContent>
        </Card>

        {/* === Line Chart (pakai shadcn juga) === */}
        <Card className="">
          <CardHeader>
            <CardTitle>Posting Activity by Date</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              width={500}
              height={300}
              data={dailyData}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="createdCount"
                stroke="#82ca9d"
                name="Created Posts"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="modifiedCount"
                stroke="#8884d8"
                name="Modified Posts"
                strokeWidth={2}
              />
            </LineChart>
          </CardContent>
        </Card>
      </div>

      {/* === Table Section === */}
      <h1 className="text-3xl font-bold mb-6 mt-10">Blogs List</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-5 border border-gray-300 rounded-lg">
        <table className="w-full text-sm text-gray-600">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-200">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3 text-center">
                Author Name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => (
              <BlogTableItem
                key={index}
                mongoId={item._id}
                title={item.title}
                author={item.author}
                authorImg={item.authorImg}
                date={item.date}
                deleteBlog={deleteBlog}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
