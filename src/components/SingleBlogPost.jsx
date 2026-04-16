import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function SingleBlogPost({ post }) {
    const navigate = useNavigate()

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
            <Card className="h-100 shadow-sm blog-card">
                <Card.Img
                    variant="top"
                    src={post.cover}
                    className="blog-img"
                    style={{ height: '220px', objectFit: 'cover' }}
                />

                <Card.Body className="d-flex flex-column">
                    <Card.Title className="fs-5">{post.title}</Card.Title>

                    <Card.Text className="text-muted mb-2">
                        {post.category}
                    </Card.Text>

                    <Card.Text className="mb-2">
                        {post.readTime?.value} {post.readTime?.unit}
                    </Card.Text>

                    <Card.Text>
                        {post.content.substring(0, 80)}...
                    </Card.Text>

                    <div className="d-flex justify-content-center mt-auto">
                        <Button
                            onClick={() => navigate(`/post/${post._id}`)}
                            variant="outline-secondary"
                            size="sm"
                        >
                            Details
                        </Button>
                        {localStorage.getItem("token") && (
                            <Button onClick={handleDelete} variant="outline-danger" size="sm">
                                Delete
                            </Button>
                        )}

                        {/* <Button
                            onClick={handleDelete}
                            variant="outline-danger"
                            size="sm"
                        >
                            Delete
                        </Button> */}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleBlogPost
