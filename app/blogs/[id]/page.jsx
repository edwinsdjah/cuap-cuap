"use client";

import { assets, blog_data } from "Assets/assets";
import axios from "axios";
import Footer from "Components/Footer";
import Header from "Components/Header";
import Navbar from "Components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlogData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/blog", {
        params: {
          id: params.id,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("FAILED TO LOAD DATA", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  // 👉 Skeleton komponen (placeholder saat loading)
  const BlogSkeleton = () => (
    <div className="flex flex-col items-center animate-pulse py-10">
      <div className="w-full max-w-[800px] space-y-10">
        {/* Judul + Author */}
        <div className="text-center space-y-6 mb-4">
          <div className="h-10 mb-2 sm:h-12 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-8 mb-2 sm:h-10 bg-gray-300 rounded w-1/2 mx-auto"></div>
          <div className="w-[60px] mb-2 h-[60px] bg-gray-300 rounded-full mx-auto"></div>
          <div className="h-4 mb-2 bg-gray-300 rounded w-1/3 mx-auto"></div>
        </div>

        {/* Gambar utama */}
        <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>

        {/* Isi konten */}
        <div className="space-y-3 mb-4">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-11/12"></div>
          <div className="h-4 bg-gray-300 rounded w-10/12"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-9/12"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>

        {/* Bagian share */}
        <div className="space-y-4 mb-4">
          <div className="h-6 bg-gray-300 rounded w-[240px]"></div>
          <div className="flex gap-4 justify-start">
            <div className="w-[50px] h-[50px] bg-gray-300 rounded-full"></div>
            <div className="w-[50px] h-[50px] bg-gray-300 rounded-full"></div>
            <div className="w-[50px] h-[50px] bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="py-5 px-5 md:px-12 lg:px-28">
        <Navbar />
        {loading ? (
          <BlogSkeleton />
        ) : data ? (
          <div className="py-5 px-5 md:px-12 lg:px-28">
            <div className="text-center my-24">
              <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
                {data.title}
              </h1>
              <Image
                className="mx-auto mt-6 border border-white rounded-full "
                src={data.authorImg}
                width={60}
                height={60}
                alt=""
              />
              <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
                {data.author}
              </p>
            </div>
            <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
              <Image
                className="border-4 border-white"
                src={data.image}
                width={1280}
                height={720}
                alt=""
              />
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>

              <div className="my-24">
                <p className="text-black font font-semibold py-4">
                  Share this Article to Social Media
                </p>
                <div className="flex">
                  <Image src={assets.facebook_icon} width={50} alt="" />
                  <Image src={assets.twitter_icon} width={50} alt="" />
                  <Image src={assets.googleplus_icon} width={50} alt="" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Page;
