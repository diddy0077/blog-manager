import React, { useState } from 'react'
import PostCard from './PostCard';

function PostsDisplay({ posts,isHome }) {
  const [toggle, setToggle] = useState(false)
  const accentColors = [
  "from-indigo-500 to-purple-500",
  "from-pink-500 to-red-500",
  "from-green-500 to-teal-500",
  "from-yellow-500 to-orange-500",
  "from-sky-500 to-cyan-500",
  ];
  const postToDisplay = isHome ? posts.slice(0, 6) : posts

  return (
    <div className="grid gap-8 md:grid-cols-3">
  {postToDisplay.map((post, index) => {
    const color = accentColors[index % accentColors.length]; 
    return (
      <PostCard key={index} post={post} color={color} toggle={toggle} setToggle={setToggle} />
    );
  })}
</div>
  )
}

export default PostsDisplay