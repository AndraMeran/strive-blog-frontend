
import Container from 'react-bootstrap/Container'
import { Row, Col, Button } from 'react-bootstrap'
import SingleBlogPost from './SingleBlogPost'
import { useState } from 'react'
import AddPost from './AddPost'
import { Link } from 'react-router-dom'

function AllBlogPosts({ posts, setPosts, currentPage, totalPages, fetchPosts }) {
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
                            <p className="text-muted text-center">Post non trovato</p>
                        )}
                    </Row>

                    <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                        <Button
                            variant="outline-dark"
                            disabled={currentPage === 1}
                            onClick={() => fetchPosts(currentPage - 1)}
                        >
                            Prev
                        </Button>

                        <span>
                            Pagina {currentPage} di {totalPages}
                        </span>

                        <Button
                            variant="outline-dark"
                            disabled={currentPage === totalPages}
                            onClick={() => fetchPosts(currentPage + 1)}
                        >
                            Next
                        </Button>
                    </div>
                </Col>

                <Col sm={4} className="d-flex flex-column">
                    {localStorage.getItem("token") ? (
                        <AddPost setPosts={setPosts} />
                    ) : (
                        // <p className="text-muted">Effettua il login per creare un post</p>
                        <div className="sidebar-box">
                            <h4 className="mb-3">Benvenuto!!!</h4>

                            <p className="text-muted">
                                Accedi per creare nuovi post, commentare e partecipare alla community.
                            </p>

                            <p className="text-muted mb-0">
                                Scopri articoli, idee, ispirazioni e contenuti selezionati ogni giorno su Strive Blog.
                            </p>

                            <hr />

                            <div className="sidebar-box mt-3">
                                <h5 className="mb-3">Top 3 post recenti</h5>

                                <ul className="sidebar-list">
                                    {posts.slice(0, 3).map((post) => (
                                        <li key={post._id}>
                                            <Link to={`/post/${post._id}`} className="sidebar-link">
                                                {post.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                            <div className="sidebar-box mt-3">
                                <h5 className="mb-3">Film della settimana </h5>
                                <p className="fw-semibold mb-1">Inception</p>
                                <p className="text-muted small mb-0">
                                    Un viaggio tra sogni e realtà firmato Christopher Nolan.
                                </p>
                            </div>
                            <div className="sidebar-box mt-3">
                                <h5 className="mb-3">Serie da recuperare </h5>
                                <ul className="sidebar-list">
                                    <li>Breaking Bad</li>
                                    <li>Dark</li>
                                    <li>The Bear</li>
                                </ul>
                            </div>
                            <div className="sidebar-box mt-3">
                                <h5 className="mb-3">Generi più amati </h5>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="badge bg-dark">Thriller</span>
                                    <span className="badge bg-primary">Sci-Fi</span>
                                    <span className="badge bg-danger">Drama</span>
                                    <span className="badge bg-success">Comedy</span>
                                </div>
                            </div>
                            <div className="sidebar-box mt-3 text-center">
                                <img
                                    src="https://i.pravatar.cc/100?img=12"
                                    alt="admin"
                                    className="admin-avatar"
                                />

                                <h5 className="mt-3 mb-1">Author of the week</h5>

                                <p className="text-muted mb-0">
                                    Scoprite tutti i suoi contenuti, idee e aggiornamenti curati dal team di Strive Blog.
                                </p>
                            </div>
                        </div>

                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default AllBlogPosts
