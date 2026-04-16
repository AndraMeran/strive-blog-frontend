import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import SingleBlogPost from './SingleBlogPost'
import { useState } from 'react'
import AddPost from './AddPost'

function AllBlogPosts({ posts, setPosts }) {
    const [deleteMessage, setDeleteMessage] = useState("")
    return (
        <Container className="py-4">
            <Row className="align-items-start">
                <Col sm={8}>
                    <h1 className="text-center mb-4 fw-semibold">Post in evidenza</h1>

                    <Row className="g-4">
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <SingleBlogPost key={post._id} post={post} setPosts={setPosts} />
                            ))
                        ) : (
                            <p>Nessun post disponibile</p>
                        )}
                    </Row>
                </Col>

                <Col sm={4} className="d-flex flex-column">
                    {localStorage.getItem("token") ? (
                        <AddPost setPosts={setPosts} />
                    ) : (
                        <p className="text-muted">Effettua il login per creare un post</p>
                    )}
                    {/* <AddPost setPosts={setPosts} /> */}
                </Col>
            </Row>
        </Container>
    )
}

export default AllBlogPosts
