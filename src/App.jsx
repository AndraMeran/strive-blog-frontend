import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from './pages/Home'
import MyNav from './components/MyNav.jsx'
import MyFooter from "./components/MyFooter.jsx"
import PostDetail from "./pages/PostDetail"
// import initialPosts from "./data/posts"
import './App.css'
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  // const [posts, setPosts] = useState(initialPosts)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:3000/blogPosts")
      const data = await response.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <BrowserRouter>
      <MyNav />

      <Routes>
        <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <MyFooter />
    </BrowserRouter>
  )
}

export default App
