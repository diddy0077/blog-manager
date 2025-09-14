import React,{useState, useEffect} from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import SinglePosts from './pages/SinglePosts'
import AddPostPage from './pages/AddPostPage'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import EditPostPage from './pages/EditPostPage'
import AboutPage from './pages/AboutPage'


function App() {
  const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

    useEffect(() => {
    setLoading(true)
    fetch('https://blogpost-server-se8d.onrender.com/posts')
      .then((res) => {
        if (!res.ok) {
        throw new Error('Error fetching Posts')
        }
        return res.json()
      })
      .then((data) => {
        setTimeout(() => {
          setPosts(data)
          setLoading(false)
        },2000)
      })
      .catch((err) => {
        console.log('Error fetching Posts', err)
        setError(err)
        setLoading(false)
      })
    
  }, [])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage posts={posts} setPosts={setPosts} loading={loading} />} />
          <Route path='posts' element={<PostsPage posts={posts} loading={loading} />} />
          <Route path='posts/:slug' element={<SinglePosts setPosts={setPosts}/>} />
          <Route path='add-post' element={<AddPostPage setPosts={setPosts}/>} />
          <Route path='edit-post/:slug' element={<EditPostPage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App