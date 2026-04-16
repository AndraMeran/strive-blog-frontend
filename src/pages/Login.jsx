import { useState } from "react"
import { Container, Form, Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const [message, setMessage] = useState("")

    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("DATI LOGIN INVIATI:", loginData)

        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Errore nel login")
            }

            localStorage.setItem("token", data.token)

            setMessage("Login effettuato!")

            setTimeout(() => {
                window.location.href = "/"
                // setMessage("")
                // navigate("/")
            }, 1500)
        } catch (error) {
            setMessage(error.message)
        }
    }

    return (
        <Container className="py-4 d-flex justify-content-center">
            <Card className="shadow-sm p-4" style={{ width: "100%", maxWidth: "500px" }}>
                <h2 className="mb-4 text-center">Login</h2>

                {message && <div className="alert alert-info text-center">{message}</div>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary" className="w-100">
                        Accedi
                    </Button>
                </Form>
            </Card>
        </Container>
    )
}

export default Login