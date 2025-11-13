"use client";

import { assets } from "Assets/assets";
import axios from "axios";
import Footer from "Components/Footer";
import Navbar from "Components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [displayDate, setDisplayDate] = useState(null);
  const [dateLabel, setDateLabel] = useState("Published on");
  const [loading, setLoading] = useState(true);

  // 🧭 Helper: Format tanggal jadi “November 13, 2025”
  const formatDate = (date) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  };

  const fetchBlogData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/blog", {
        params: { id: params.id },
      });
      const blog = response.data;
      setData(blog);

      const created = new Date(blog.createdAt || blog.date);
      const updated = blog.updatedAt ? new Date(blog.updatedAt) : null;

      if (updated && updated.getTime() > created.getTime() + 5000) {
        setDateLabel("Modified on");
        setDisplayDate(formatDate(updated));
      } else {
        setDateLabel("Published on");
        setDisplayDate(formatDate(created));
      }
    } catch (error) {
      console.error("FAILED TO LOAD DATA", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  // 👉 Skeleton (tetap sama)
  const BlogSkeleton = () => (
    <div className="flex flex-col items-center animate-pulse py-10">
      <div className="w-full max-w-[800px] space-y-10">
        <div className="text-center space-y-6 mb-4 skel-title">
          <div className="h-10 mb-2 sm:h-12 bg-gray-300 rounded skel-image w-3/4 mx-auto"></div>
        </div>
        <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
        <div className="space-y-3 mb-4">
          <div className="h-8 mb-2 sm:h-10 bg-gray-300 rounded w-1/2 mx-auto"></div>
          <div className="w-[60px] mb-2 h-[60px] bg-gray-300 rounded-full mx-auto"></div>
          <div className="h-4 mb-2 bg-gray-300 rounded w-1/3 mx-auto"></div>
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
            {/* Title */}
            <div className="article-container content-container mt-10 text-center mx-auto">
              <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
                {data.title}
              </h1>
            </div>

            {/* Cover image */}
            <div className="mt-5 l:mt-10 w-full max-h-[720px] overflow-hidden">
              <Image
                className="blog-img"
                src={data.image}
                width={1920}
                height={720}
                alt={data.title}
              />
            </div>

            {/* Content */}
            <div className="max-w-[800px] md:mx-auto mt-[-100px] mb-10 mx-auto l:px-6 sm:px-20 content-container">
              <div className="flex flex-col flex-wrap mt-5 w-full">
                {/* Author section */}
                <div className="author-section basis-30">
                  <div className="author-detail-section flex flex-row items-center gap-3">
                    <Image
                      className="mt-6 rounded-full"
                      src={data.authorImg}
                      width={60}
                      height={60}
                      alt={data.author}
                    />
                    <p className="mt-1 pb-2 text-lg italic">{data.author}</p>
                  </div>

                  <div className="time-stamp mt-1 text-sm text-gray-600">
                    {displayDate && (
                      <p>
                        {dateLabel} {displayDate}
                      </p>
                    )}
                  </div>
                </div>

                {/* Blog content */}
                <div className="article-section flex-grow mt-6">
                  <div
                    className="blog-content prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  ></div>
                </div>
              </div>

              {/* Share buttons */}
              <div className="my-24">
                <p className="text-black font-semibold py-4">
                  Share this Article to Social Media
                </p>
                <div className="flex gap-4">
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

                  <Image
                    src={assets.googleplus_icon}
                    width={50}
                    alt="Google+"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default Page;
