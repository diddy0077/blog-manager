import React, { useState } from "react";
import PostsDisplay from "../components/PostsDisplay";
import { useSearchParams, NavLink } from "react-router-dom";

function PostsPage({ posts, loading }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tags = searchParams.get("tags");
  const author = searchParams.get("author");
  const [visibleCounts, setVisibleCounts] = useState(3)
  const filteredPosts = posts.filter((post) => {
    const matchedTag = tags ? post.tags.includes(tags) : true;
    const matchedAuthor = author ? post.author.includes(author) : true;
    return matchedTag && matchedAuthor;
  });
  const tag = [
    "CSS",
    "Backend",
    "APIs",
    "Javascript",
    "Career",
    "Portfolio",
    "React",
    "Frontend",
    "Testing",
    "Design",
    "UI",
    "Integration",
  ];
  const authors = [
    "Sophia Lee",
    "Michael Brown",
    "Emily Davis",
    "Daniel John",
    "James Carter",
  ];

  const visblePosts = filteredPosts.slice(0, visibleCounts)
 

  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              All <span className="text-yellow-300">Posts</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Explore articles on web development, UI/UX, backend integration,
              testing, and more.
            </p>
          </div>

          {/* Main Content: Sidebar + Posts */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/5 bg-white/10 p-6 rounded-2xl max-h-[650px]">
              <h3 className="text-xl font-bold mb-4 text-white">
                Filter by Tag
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {tag.map((t, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => setSearchParams({ tags: t })}
                      className={`${
                        t === tags
                          ? "bg-yellow-300 text-black"
                          : "bg-white/30 text-white"
                      } px-3 py-1 rounded-full text-sm font-semibold hover:bg-yellow-300 hover:text-black transition cursor-pointer`}
                    >
                      {t}
                    </button>
                  );
                })}

                {/* Add more tags here */}
              </div>

              <h3 className="text-xl font-bold mb-4 text-white">
                Filter by Author
              </h3>
              <div className="flex flex-col gap-2">
                {authors.map((a, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => setSearchParams({ author: a })}
                      className={`${
                        a === author
                          ? "bg-yellow-300 text-black"
                          : "bg-white/30 text-white"
                      } px-4 py-2 rounded-lg text-left bg-white/30 hover:bg-yellow-300 hover:text-black transition cursor-pointer`}
                    >
                      {a}
                    </button>
                  );
                })}

                {/* Add more authors here */}
              </div>
              <button onClick={() => setSearchParams('')} className="mt-6 underline bg-white/30 p-2 py-1 rounded-lg hover:bg-yellow-300 hover:text-black transition duration-300 text-sm cursor-pointer">Clear Filters</button>
            </div>

            {/* Posts Display */}
            <div className="flex-1">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <PostsDisplay posts={visblePosts} isHome={false} />
              )}
            </div>
          </div>

          {/* Load More / Pagination */}
          <div className="mt-12 text-center">
          {visibleCounts < filteredPosts.length && (<button onClick={() => setVisibleCounts((prev) => prev + 3)} className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:text-black transition cursor-pointer">
              Load More
            </button>)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostsPage;
