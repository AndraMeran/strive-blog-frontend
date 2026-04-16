import "bootstrap-icons/font/bootstrap-icons.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"




function MyNav() {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    return <>
        <Navbar className="my-navbar">
            <Container>
                <Navbar.Brand className="brand-navbar" href="#home">Strive Blog</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="link-navbar" href="#home">Home</Nav.Link>
                </Nav>

                {/* <button onClick={toggleTheme}>Cambia Tema</button> */}

                <InputGroup style={{ maxWidth: "260px" }}>
                    <Form.Control
                        placeholder="Cerca un Post..."
                        onChange={() => { }}
                    />
                    <Button variant="light">
                        <i className="bi bi-search"></i>
                    </Button>
                </InputGroup>
                <div className="d-flex align-items-center ms-3 gap-2">
                    {!localStorage.getItem("token") && (
                        <>
                            <Button as={Link} to="/register" variant="light" size="sm">
                                Register
                            </Button>

                            <Button as={Link} to="/login" variant="light" size="sm">
                                Login
                            </Button>
                        </>
                    )}

                    {localStorage.getItem("token") && (
                        <Button variant="light" size="sm" onClick={handleLogout}>
                            Logout
                        </Button>
                    )}


                    {/* <Button as={Link} to="/auth" variant="light" size="sm">
                        Login
                    </Button>
                    <Button variant="outline-light" size="sm" onClick={handleLogout}>
                        Logout
                    </Button> */}
                </div>
            </Container>
        </Navbar>


    </>
}
export default MyNav