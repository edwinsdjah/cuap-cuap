"use client";

import { assets } from "Assets/assets";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get("/api/blog", {
        params: {
          id: id,
        },
      });
      console.log(res.data);
      const blog = res.data;
      setData({
        title: blog.title,
        description: blog.description,
        category: blog.category,
        image: blog.image,
      });
    };
    fetchBlog();
  }, [id]);

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    if (data.image) formData.append("image", data.image);

    try {
      const res = await axios.put("/api/blog/${id}", formData);
      toast.success(res.data.msg);
      router.push("/admin/blogList");
    } catch (error) {
      toast.error("FAILED");
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} action="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!data.image ? assets.upload_area : data.image}
            width={140}
            height={70}
            alt=""
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          required
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type Here"
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Write Content Here"
          rows={6}
          required
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          Add Blog
        </button>
      </form>
    </>
  );
};

export default page;
