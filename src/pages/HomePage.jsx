import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import PostsDisplay from '../components/PostsDisplay';


function HomePage({posts, loading}) {
  
  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    // later you can connect this to EmailJS, Firebase, etc.
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };





  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-yellow-300">BlogManager</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl">
            Your one-stop platform to explore insightful articles, share ideas, 
            and stay inspired. Start reading today and join the conversation.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <Link
              to="/posts"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:text-black transition"
            >
              Read Posts
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-transparent border border-white rounded-lg font-semibold hover:bg-white/20 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blogging illustration"
            className="rounded-2xl shadow-lg border-4 border-white/30"
          />
        </div>
      </div>
      </section>
      
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">
          Latest Posts
        </h2>

        {/* Grid */}
          <div>
               {loading ? ( <div className="flex items-center justify-center h-64">
  <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
</div>
 ) : (<PostsDisplay posts={posts} isHome={true}/>)}
       </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/posts"
            className="bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            View All Posts
          </Link>
        </div>
      </div>
      </section>
      
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-6 rounded-2xl shadow-lg overflow-hidden max-w-[90%] mx-auto my-12">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated With The Latest Posts ✨
        </h2>
        <p className="text-lg mb-8">
          Join our newsletter and get fresh frontend tips, tutorials, and updates straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 border border-pink-200 border-2 transition duration-300 text-white"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 cursor-pointer rounded-lg font-semibold shadow-md bg-white text-indigo-600 hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
    </div>
  )
}

export default HomePage