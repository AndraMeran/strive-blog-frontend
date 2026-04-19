import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function SingleBlogPost({ post, setPosts }) {
    const navigate = useNavigate()
    const isAdmin = localStorage.getItem("isAdmin") === "true"

    const goToDetails = () => {
        navigate(`/post/${post._id}`)
    }

    const handleDelete = async () => {
        const token = localStorage.getItem("token")

        try {
            const response = await fetch(`http://localhost:3000/blogPosts/${post._id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (!response.ok) {
                throw new Error("Errore nella cancellazione del post")
            }

            setPosts((prevPosts) =>
                prevPosts.filter((singlePost) => singlePost._id !== post._id)
            )
        } catch (error) {
            console.log("Errore:", error)
        }
    }

    return (
        <Col sm={6} md={6} lg={4}>
            <Card
                className="h-100 shadow-sm blog-card"
                onClick={goToDetails}
            >
                <Card.Img
                    variant="top"
                    src={post.cover}
                    className="blog-img"
                    style={{ height: "220px", objectFit: "cover" }}
                />

                <Card.Body className="d-flex flex-column">
                    <Card.Title className="fs-5 fw-semibold mb-2">
                        {post.title}
                    </Card.Title>

                    <Card.Text className="text-muted mb-2">
                        {post.category}
                    </Card.Text>

                    <Card.Text className="mb-2">
                        {post.readTime?.value} {post.readTime?.unit}
                    </Card.Text>

                    <Card.Text className="mb-3">
                        {post.content.substring(0, 80)}...
                    </Card.Text>

                    <div className="author-box">
                        <img
                            src={post.authorAvatar || "https://via.placeholder.com/50"}
                            alt="author"
                            className="author-avatar"
                        />

                        <div>
                            <p className="author-label">Autore</p>
                            <p className="author-name">{post.author}</p>
                        </div>
                    </div>

                    {post.updatedAt && (
                        <p className="last-update">
                            Ultima modifica:{" "}
                            {new Date(post.updatedAt).toLocaleString("it-IT")}
                        </p>
                    )}

                    <div className="d-flex justify-content-center mt-auto gap-2 pt-2">
                        <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={(e) => {
                                e.stopPropagation()
                                goToDetails()
                            }}
                        >
                            Details
                        </Button>

                        {isAdmin && (
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleDelete()
                                }}
                            >
                                Delete
                            </Button>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleBlogPost