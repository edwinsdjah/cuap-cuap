import { ConnectDB } from 'lib/config/db';
const { NextResponse } = require('next/server');
import { writeFile } from 'fs/promises';
import { title } from 'process';
import BlogModel from 'lib/model/BlogModel';
const fs = require('fs');

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// API Endpoint for getting blogs
export async function GET(req) {
  const blogId = req.nextUrl.searchParams.get('id');
  // NEXT URL adalah method bawaaan dari next js
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
    // NEXT RESPONSE juga method bawaan dari next js
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// API Endpoint for uploading Blogs
export async function POST(req) {
  const formData = await req.formData();
  const timestamp = Date.now();
  const image = formData.get('image');
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get('title')}`,
    description: `${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get('authorImg')}`,
  };

  await BlogModel.create(blogData);
  console.log('Blog saved');

  return NextResponse.json({ success: true, msg: 'Blog Added' });
}

// API to delete blog
export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get('id');
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: 'Blog Deleted' });
}

export async function PUT(req) {
  try {
    const id = await req.nextUrl.searchParams.get('id');
    if (!id) {
      return NextResponse.json(
        { success: false, msg: 'POST ID Not Found' },
        { status: 404 }
      );
    }

    const formData = await req.formData();
    const updateData = {
      title: formData.get('title')?.toString(),
      description: formData.get('description')?.toString(),
      category: formData.get('category')?.toString(),
      author: formData.get('author')?.toString(),
      authorImg: formData.get('authorImg')?.toString(),
      updatedAt: new Date(),
    };

    // Jika ada file gambar baru
    const image = formData.get('image');
    if (image && image instanceof File) {
      const timestamp = Date.now();
      const imageByteData = await image.arrayBuffer();
      const buffer = Buffer.from(imageByteData);
      const path = `./public/${timestamp}_${image.name}`;
      await writeFile(path, buffer);
      updateData.image = `/${timestamp}_${image.name}`;
    }

    const updatedPost = await BlogModel.findByIdAndUpdate(id, updateData);
    if (!updatedPost) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    return NextResponse.json({ success: true, post: updatedPost });
  } catch (error) {
    console.log(error);
  }
}
