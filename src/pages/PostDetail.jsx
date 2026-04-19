
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import CommentArea from "../components/CommentArea"

function PostDetail({ posts }) {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const selectedPost = posts.find(
            (singlePost) => String(singlePost._id) === String(id)
        )
        setPost(selectedPost)
    }, [id, posts])

    if (!post) {
        return (
            <Container className="py-4">
                <h2>Post non trovato</h2>
            </Container>
        )
    }

    return (

        <Container className="py-4">
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        className="mb-3"
                        onClick={() => navigate(-1)}
                    >
                        ← Indietro
                    </Button>
                    <Card className="shadow-sm border-0">
                        <Card.Img
                            variant="top"
                            src={post.cover}
                            style={{ maxHeight: "420px", objectFit: "cover" }}
                        />

                        <Card.Body className="p-4">
                            <p className="text-muted mb-2">{post.category}</p>

                            <Card.Title className="fs-2 mb-3">{post.title}</Card.Title>

                            <div className="d-flex flex-wrap gap-3 mb-3 text-muted">
                                <span>
                                    Tempo di lettura: {post.readTime?.value} {post.readTime?.unit}
                                </span>


                            </div>

                            {(post.author || post.authorAvatar) && (
                                <div className="author-box mb-4">
                                    <img
                                        src={post.authorAvatar || "https://via.placeholder.com/50"}
                                        alt={post.author || "author"}
                                        className="author-avatar"
                                    />
                                    <div>
                                        <p className="author-label">Autore</p>
                                        <p className="author-name">{post.author}</p>
                                    </div>
                                </div>
                            )}

                            {post.updatedAt && (
                                <p className="last-update mb-4">
                                    Ultima modifica:{" "}
                                    {new Date(post.updatedAt).toLocaleString("it-IT")}
                                </p>
                            )}

                            <Card.Text style={{ lineHeight: "1.8" }}>
                                {post.content}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <div className="mt-4">
                        <CommentArea postId={post._id} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PostDetail