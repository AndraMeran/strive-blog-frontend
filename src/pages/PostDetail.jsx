
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import CommentArea from "../components/CommentArea"
import { Container, Card, Row, Col } from "react-bootstrap"

function PostDetail({ posts }) {
    const { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        const selectedPost = posts.find((singlePost) => String(singlePost._id) === String(id))
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

                                {post.author && (
                                    <span>
                                        Autore: {post.author.firstName} {post.author.lastName}
                                    </span>
                                )}
                            </div>

                            {post.author?.avatar && (
                                <div className="d-flex align-items-center gap-2 mb-4">
                                    <img
                                        src={post.author.avatar}
                                        alt={`${post.author.firstName} ${post.author.lastName}`}
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            objectFit: "cover"
                                        }}
                                    />
                                    <span>
                                        {post.author.firstName} {post.author.lastName}
                                    </span>
                                </div>
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
