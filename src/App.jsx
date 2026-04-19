import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from './pages/Home'
import MyNav from './components/MyNav.jsx'
import MyFooter from "./components/MyFooter.jsx"
import PostDetail from "./pages/PostDetail"
import './App.css'
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  const fetchPosts = async (page = 1, search = "") => {
    try {
      const response = await fetch(
        `http://localhost:3000/blogPosts?page=${page}&search=${search}`
      )

      const data = await response.json()

      setPosts(data.blogPosts)
      setCurrentPage(data.currentPage)
      setTotalPages(data.totalPages)
    } catch (error) {
      console.log("Errore caricamento post:", error)
    }
  }

  useEffect(() => {
    fetchPosts(1, searchTerm)
  }, [searchTerm])

  return (
    <BrowserRouter>
      <MyNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              posts={posts}
              setPosts={setPosts}
              currentPage={currentPage}
              totalPages={totalPages}
              fetchPosts={fetchPosts}
            />
          }
        />

        <Route
          path="/post/:id"
          element={<PostDetail posts={posts} />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <MyFooter />
    </BrowserRouter>
  )
}

export default App