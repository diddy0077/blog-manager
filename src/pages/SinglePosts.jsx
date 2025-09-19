import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function SinglePosts({setPosts}) {
  const { slug } = useParams()
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const nav = useNavigate()
  const [commentAuthor, setCommentAuthor] = useState('')
  const [commentText, setCommentText] = useState('')

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch(`https://blogpost-server-se8d.onrender.com/posts?slug=${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching post')
        }
        return res.json()
      })
      .then((data) => {
        console.log(data[0])
        setPost(data[0])
        setLoading(false)
      })
      .catch((err) => {
        console.log('Error fetching post', err)
        setError(err)
        setLoading(false)
    })
  }, [slug])

  function postComment() {
    const newComment = {
  id: Date.now(), // unique ID
  author: commentAuthor,
  text: commentText,
  createdAt: new Date().toISOString()
    }
    const updatedComments = [...post.comments, newComment]
   fetch(`https://blogpost-server-se8d.onrender.com/posts/${post.id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ ...post, comments: updatedComments })
   })
    setPost({ ...post, comments: updatedComments || []})
    setCommentAuthor('')
    setCommentText('')
  }

  const deleteJob = () => {
    fetch(`https://blogpost-server-se8d.onrender.com/posts/${post.id}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) {
        throw new Error('Error deleting job')
      }
      })
      .then((data) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== post.id));
        // setPosts((prev) => [...prev, data])
        toast.success('Job deleted Successfully')
         nav('/posts')
      })
      .catch((error) => {
      console.log('Error deleting job', error)
    })
   
  }

  if (loading) {
    return <div className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 h-screen flex items-center justify-center'>
              <div className='w-15 h-15 border border-white rounded-full border-t-transparent animate-spin border-3'></div>
           </div>
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white min-h-screen p-6">
        <Link to='/posts' className='flex items-center text-sm ml-4'>
          <ArrowLeft className='w-5 h-5'/>
          <p className='underline'>Back to all posts</p>
        </Link>
  <div className="max-w-5xl mx-auto px-6 py-20">

         {loading ? ( <p>Loading...</p> ) : ( <div>
            <div className="mb-12 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
        {post.title}
      </h1>
      <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-4">
        {post.slug}
      </p>
      <div className="text-sm text-white/70">
              <span>By <strong>{post.author}</strong></span> • 
        <span> {new Date(post.createdAt).toDateString()}</span> • 
        <span> {new Date(post.updatedAt).toDateString()}</span>
      </div>
    </div>

    {/* Post Image */}
    <div className="mb-12">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-[400px] rounded-2xl shadow-lg border-4 border-white/20 object-cover"
        
      />
    </div>

    {/* Post Content */}
    <article className="prose prose-invert max-w-3xl mx-auto text-white/90 mb-12">
            <p className=''>{post.content}</p>
      {/* You can inject the rest of the content dynamically here */}
    </article>

    {/* Tags */}
    {post?.tags && (
  <div className="flex flex-wrap gap-3 mb-12 justify-center">
    <span className="font-bold mr-2">Tags:</span>
    {post?.tags?.map((tag) => (
      <button
        key={tag}
        className="px-3 py-1 rounded-full text-sm font-semibold bg-white/30 text-white hover:bg-yellow-300 hover:text-black transition cursor-pointer"
      >
        {tag}
      </button>
    ))}
  </div>
)}
    </div>)}
    

    {/* Navigation Buttons (Optional: Previous/Next post) */}
    <div className="flex justify-between max-w-3xl mx-auto mb-12">
      <button onClick={() => setOpenModal(true)} className="cursor-pointer px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:text-black transition">
        Delete Post
      </button>
      <Link to={`/edit-post/${slug}`} className="cursor-pointer px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:text-black transition">
        Edit Post
      </Link>
    </div>

    {/* Comments Section Placeholder */}
    <div className="max-w-3xl mx-auto mt-12">
  <h2 className="text-2xl font-bold mb-6">Comments</h2>

  {/* Existing Comments */}
  {post?.comments?.length === 0 ? ( <p className='mb-4'>No comments yet...</p> ) : ( <div className="space-y-6 mb-10">
    {/* Example comment card — this will come from post.comments.map(...) */}
      {post?.comments?.map((comment) => {
        return (
           <div className="bg-white/10 p-4 rounded-lg border border-white/20">
            <p className="text-sm text-white/70 mb-1">By <span className="font-semibold text-yellow-300">{comment.author}</span> • {new Date(comment.createdAt).toLocaleString()}</p>
      <p className="text-white">{comment.text} 🔥</p>
    </div>
         )
     })}
  </div>)}

  {/* Add Comment Form */}
  <div className="bg-white/5 p-6 rounded-lg border border-white/20">
    <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your name"
                  className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
      />
      <textarea
        rows="4"
        placeholder="Write your comment..."
                  className="w-full p-4 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
      ></textarea>
      <button onClick={postComment} className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:text-black transition self-start cursor-pointer">
        Post Comment
      </button>
    </div>
  </div>
</div>


  </div>
</section>
      
      {openModal && <section className='modal bg-black/50 text-white fixed inset-0 h-screen flex items-center justify-center'>
        <div className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 rounded-lg'>
          <p>Are you sure you want to delete this post?</p>
          <p className='text-sm text-center mb-4'>This action cannot be undone.</p>
          <div className='flex gap-3 items-center justify-center mt-4 text-sm'>
             <button onClick={() => setOpenModal(false)} className='cursor-pointer px-4 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:text-black transition'>Cancel</button>
          <button onClick={deleteJob} className='cursor-pointer px-4 py-2 hover:bg-white hover:text-indigo-600 font-semibold rounded-lg shadow-md bg-yellow-300 text-black transition'>Confirm</button>
         </div>
         </div>
      </section>}

    </div>
  )
}

export default SinglePosts