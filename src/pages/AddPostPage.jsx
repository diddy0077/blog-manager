import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function AddPostPage() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [tags, setTags] = useState('')
  const now = new Date().toISOString()
  const nav = useNavigate()

  const tagsArray = tags.split(',').map((tag) => tag.trim())

  const handleSubmit = (e) => {
   e.preventDefault()
   if(!title || !slug || !excerpt || !imageUrl || !content || !author || !tags) return
      const newPost = {
  id: Date.now(), // or json-server will auto-generate if you don't include
  title,
  slug,
  excerpt,
  content,
  author,
  tags: tagsArray,
  imageUrl,
  createdAt: now,
  updatedAt: now,
  comments: []
    }
    fetch('https://blogpost-server-se8d.onrender.com/posts', {method: 'POST', header: {"Content-Type": "application/json",
    }, body: JSON.stringify(newPost),
    })
      .then((res) => {
      return res.json()
      })
      .then((data) => console.log(data))
      .catch((err) => console.log('Error adding post', err))
    toast.success('Post Added Successfully')
   nav('/posts')
 }

  
 



  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 min-h-screen py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Add <span className="text-yellow-300">New Post</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Share your thoughts, tutorials, or insights on web development.
            Fill in the details below to create a new blog post.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold mb-2">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter post title"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-semibold mb-2">Slug</label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                type="text"
                placeholder="enter-a-url-slug"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-semibold mb-2">Excerpt</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows="3"
                placeholder="Write a short summary of your post..."
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold mb-2">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="6"
                placeholder="Write your full post here..."
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-semibold mb-2">Author</label>
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                placeholder="Author name"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-semibold mb-2">Tags</label>
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                type="text"
                placeholder="e.g. React, Frontend, JavaScript"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <p className="text-sm text-white/70 mt-1">
                Separate tags with commas.
              </p>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-semibold mb-2">Image URL</label>
              <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                type="text"
                placeholder="Paste an image link..."
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-end">
              <button
                type="button"
                className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
              >
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddPostPage;
