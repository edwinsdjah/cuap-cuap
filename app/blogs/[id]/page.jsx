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
  const [articleDate, setArticleDate] = useState(null);
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
      let generateDate = new Date(response.data.date);
      setArticleDate(generateDate);
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
        <div className="text-center space-y-6 mb-4 mgt-10">
          <div className="h-10 mb-2 sm:h-12 bg-gray-300 rounded w-3/4 mx-auto skel-title"></div>
        </div>

        {/* Gambar utama */}
        <div className="w-full h-48 bg-gray-300 rounded-md mb-4 skel-image mgt-10"></div>

        {/* Isi konten */}
        <div className="space-y-3 mb-4">
          <div className="h-8 mb-2 sm:h-10 bg-gray-300 rounded w-1/2 mx-auto skel-author mgt-10"></div>
          <div className="w-[60px] mb-2 h-[60px] bg-gray-300 rounded-full mx-auto skel-author mgt-10"></div>
          <div className="h-4 mb-2 bg-gray-300 rounded w-1/3 mx-auto skel-author mgt-10"></div>
          <div className="h-4 bg-gray-300 rounded w-full skel-text mgt-10"></div>
          <div className="h-4 bg-gray-300 rounded w-11/12 skel-text mgt-10"></div>
          <div className="h-4 bg-gray-300 rounded w-10/12 skel-text mgt-10"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 skel-text mgt-10"></div>
          <div className="h-4 bg-gray-300 rounded w-9/12 skel-text mgt-10"></div>
          <div className="h-4 bg-gray-300 rounded w-full skel-text mgt-10"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6 skel-text mgt-10"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 skel-text mgt-10"></div>
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
          <div className="my-24">
            <div className="my-24">
              <div className="article-container content-container mt-10 text-center mx-auto">
                <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px]">
                  {data.title}
                </h1>
              </div>
            </div>
            <div className="mt-5 l:mt-10 w-full max-h-[720px] overflow-hidden">
              <Image
                className="blog-img"
                src={data.image}
                width={1920}
                height={720}
                alt=""
              />
            </div>
            <div className="max-w-[800px] md:mx-auto mt-[-100px] mb-10 mx-auto px-20 content-container">
              <div className="article-content-container flex flex-column flex-wrap mt-5 w-full">
                <div className="author-section basis-30">
                  <div className="author-detail-section flex flex-row items-center">
                    <Image
                      className="mt-6 "
                      src={data.authorImg}
                      width={60}
                      height={60}
                      alt=""
                    />
                    <p className="mt-1 pb-2 text-lg max-w-[740px] author-img italic">
                      {data.author}
                    </p>
                  </div>

                  <div className="time-stamp mt-1">
                    <p>Published on {articleDate.toDateString()}</p>
                  </div>
                </div>
                <div className="article-section flex-grow">
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  ></div>
                </div>
              </div>
              <div className="my-24">
                <p className="text-black font font-semibold py-4">
                  Share this Article to Social Media
                </p>
                <div className="flex">
                  {/* Facebook */}
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`,
                        "_blank"
                      )
                    }
                  >
                    <Image
                      src={assets.facebook_icon}
                      width={50}
                      alt="Facebook"
                    />
                  </button>
                  {/* Twitter */}
                  <button
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          window.location.href
                        )}&text=${encodeURIComponent(data.title)}`,
                        "_blank"
                      )
                    }
                  >
                    <Image src={assets.twitter_icon} width={50} alt="Twitter" />
                  </button>
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
