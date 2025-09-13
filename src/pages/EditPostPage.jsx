import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function EditPostPage() {
   const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
  const [tags, setTags] = useState('')
  const params = useParams()
  const nav = useNavigate()
  const [post, setPost] = useState({})

  useEffect(() => {
    fetch(`https://blogpost-server-se8d.onrender.com/posts?slug=${params.slug}`)
      .then((res) => {
        if (!res.ok) return
        return res.json()
      })
      .then((data) => {
        console.log(data[0])
        setTitle(data[0].title)
        setSlug(data[0].slug)
        setAuthor(data[0].author)
        setExcerpt(data[0].excerpt)
        setImageUrl(data[0].imageUrl)
        setTags(data[0].tags.join(', '))
        setContent(data[0].content)
        setPost(data[0])
      })
      .catch((err) => console.log('Error fetching post', err))
    
  }, [params.slug])
   const tagsArray = tags.split(',').map((tag) => tag.trim())

  const handleSubmit = (e) => {
    e.preventDefault()
  const updatedPost = {
  title,
  slug,
  excerpt,
  content,
  author,
  tags: tagsArray,
  imageUrl,
  createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  comments: []
    }
     fetch(`https://blogpost-server-se8d.onrender.com/posts/${post.id}`, {
  method: "PUT",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(updatedPost)})
       .then((res) => {
         if (!res.ok) {
        throw new Error('Error updating job')
         }
        return res.json().catch(() => ({}));
       })
       .then((data) => {
         toast.success('Post Updated Successfully')
         console.log(data)
         nav(`/posts/${params.slug}`)
       })
       .catch((error) => {
      console.log('Error Updating Job', error)
    })
  }

  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 min-h-screen py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Update <span className="text-yellow-300">Post</span>
          </h1>
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
                className="cursor-pointer px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
              >
                Update Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditPostPage