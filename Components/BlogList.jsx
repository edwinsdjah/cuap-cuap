import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("FAILED TO FETCH BLOGS");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const SkeletonItems = () => {
    return (
      <div className="w-[300px] animate-pulse rounded-md shadow-md p-4">
        <div className="h-48 bg-gray-300 rounded-md mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex gap-4 my-10 overflow-x-auto scrollbar-hide px-4">
        {/* Wrapper dalam flex agar tidak terpotong */}
        <div className="flex flex-nowrap gap-4 mx-auto">
          <button
            onClick={() => setMenu("All")}
            className={`flex-shrink-0 whitespace-nowrap px-4 py-1 rounded-sm transition-all duration-200 ${
              menu === "All"
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            All
          </button>

          {[...new Set(blogs.map((item) => item.category))].map(
            (category, index) => (
              <button
                key={index}
                onClick={() => setMenu(category)}
                className={`flex-shrink-0 whitespace-nowrap px-4 py-1 rounded-sm transition-all duration-200 ${
                  menu === category
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {loading
          ? Array(8)
              .fill()
              .map((item, index) => {
                return <SkeletonItems key={index} />;
              })
          : blogs
              .filter((item) =>
                menu === "All" ? true : item.category === menu
              )
              .map((item, index) => {
                return (
                  <BlogItem
                    key={index}
                    id={item._id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    category={item.category}
                  />
                );
              })}
      </div>
    </div>
  );
};

export default BlogList;
