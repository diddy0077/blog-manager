import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({post, toggle, setToggle, color}) {
  return (
    <div
        key={post.id}
        className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-2xl transition duration-300 border border-gray-200"
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-5">
          {/* Accent tag with alternating colors */}
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${color} rounded-full mb-3`}
          >
            Featured
          </span>

          <h3 className="text-xl font-bold mb-2 text-gray-900">
            {post.title}
          </h3>

          <p className="text-sm text-gray-600 mb-3">
           {post.excerpt}
          </p>

          

          <div className="flex justify-between items-center text-xs text-gray-500 mt-10 mb-4">
            <span className="font-medium">{post.author}</span>
            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>

          {/* Button also picks up alternating gradient */}
          <Link
            to={`/posts/${post.slug}`}
            className={`inline-block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r ${color} text-white font-semibold hover:opacity-90 transition`}
          >
            Read More →
          </Link>
        </div>
      </div>
  )
}

export default PostCard