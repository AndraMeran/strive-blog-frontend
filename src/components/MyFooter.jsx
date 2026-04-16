import { Container, Row, Col } from "react-bootstrap"

function MyFooter() {
    return <>
        <footer className="my-footer text-light pt-5 pb-1">
            <Container>
                <Row>

                    <Col md={4} className="mb-4">
                        <h3 className="fw-bold text-decoration-underline">Strive Blog</h3>
                    </Col>

                    {/* <div class="col-md-4 mb-4">
                        <h5 class="fw-semibold">Links</h5>
                        <ul class="list">
                            <li><a href="#" class="text-light text-decoration-none">Home</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Collection</a></li>
                            <li><a href="#" class="text-light text-decoration-none">About Us</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div> */}

                    <Col md={4} className="mb-4">
                        <h5 className="fw-semibold">Follow Us</h5>
                        <p className="mb-1">
                            Email: <a href="mailto:info@andrajewels.com" className="text-light">info@striveblog.com</a>
                        </p>
                        <p className="mb-1">
                            Phone: <a href="tel:+390123456789" className="text-light">+39 012 345 6789</a>
                        </p>
                        <div className="d-flex gap-3 mt-2">
                            <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-light fs-5"><i className="bi bi-twitter"></i></a>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col className="text-center">
                        &copy; 2026 Andra Strive Blog.
                    </Col>
                </Row>
            </Container>
        </footer>

    </>
}
export default MyFooter