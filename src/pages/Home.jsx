
// import AllBlogPosts from "../components/AllBlogPosts"

// function Home({ posts, setPosts }) {

//     return <AllBlogPosts posts={posts} setPosts={setPosts} />
// }
// export default Home
import AllBlogPosts from "../components/AllBlogPosts"

function Home({ posts, setPosts, currentPage, totalPages, fetchPosts }) {
    return (
        <AllBlogPosts
            posts={posts}
            setPosts={setPosts}
            currentPage={currentPage}
            totalPages={totalPages}
            fetchPosts={fetchPosts}
        />
    )
}

export default Home

