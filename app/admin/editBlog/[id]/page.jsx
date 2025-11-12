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
    image: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get("/api/blog", {
        params: {
          id: id,
        },
      });
      const blog = res.data;
      setData({
        title: blog.title || "",
        description: blog.description || "",
        category: blog.category || "",
        image: blog.image || "",
      });
      setPreview(blog.image || "");
    };
    fetchBlog();
  }, [id]);

  // mendeteksi apabila ada perubahan pada value preview, maka fungsi ifnya di panggil
  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    } else {
      setImageFile(null);
      setPreview(data.image || "");
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      if (imageFile) {
        // apabila ada perubahan gambar, maka kirim gambar baru
        formData.append("image", imageFile);
      } else if (data.image) {
        // jika tidak ada file baru, maka kita kirimkan existing file image saja
        formData.append("image", data.image);
      }
      const res = await axios.put(`/api/blog?id=${id}`, formData);
      toast.success(res.data?.msg || "Update Successfull");
      router.push("/admin/blogList");
    } catch (error) {
      toast.error("FAILED!!");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image" className="block mt-2 cursor-pointer">
          {preview ? (
            <Image
              className="mt-4"
              src={
                preview.startsWith("blob:")
                  ? preview
                  : preview || assets.upload_area
              }
              width={140}
              height={70}
              alt="thumbnail"
            />
          ) : (
            <Image
              className="mt-4"
              src={assets.upload_area}
              width={140}
              height={70}
              alt="upload area"
            />
          )}
        </label>
        <input onChange={onFileChange} type="file" id="image" />
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
          <option value="Life">Slice of Life</option>
          <option value="Sport">Sport</option>
          <option value="Technology">Technology</option>
          <option value="Art">Music and Art</option>
          <option value="Cinema">Cinema</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          Save Post
        </button>
      </form>
    </>
  );
};

export default page;
