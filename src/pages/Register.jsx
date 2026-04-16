import { useState } from "react"
import { Container, Form, Button, Card } from "react-bootstrap"

function Register() {
    const [registerData, setRegisterData] = useState({
        email: "",
        password: "",
        surname: "",
        name: "",
        birthDate: "",
        avatar: ""
    })

    const [message, setMessage] = useState("")

    const handleChange = (event) => {
        setRegisterData({
            ...registerData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("DATI REGISTER INVIATI:", registerData)


        try {
            const response = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerData)
            })

            const data = await response.json()
            console.log("RISPOSTA REGISTER:", data)

            if (!response.ok) {
                throw new Error(data.message || "Errore nella registrazione")
            }

            localStorage.setItem("token", data.token)

            setMessage("Registrazione completata!")

            setTimeout(() => {
                window.location.href = "/"
            }, 1500)
        } catch (error) {
            setMessage(error.message)
        }
    }

    return (
        <Container className="py-4 d-flex justify-content-center">
            <Card className="shadow-sm p-4" style={{ width: "100%", maxWidth: "500px" }}>
                <h2 className="mb-4 text-center">Register</h2>

                {message && <div className="alert alert-info text-center">{message}</div>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={registerData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Cognome</Form.Label>
                        <Form.Control
                            type="text"
                            name="surname"
                            value={registerData.surname}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Data di nascita</Form.Label>
                        <Form.Control
                            type="date"
                            name="birthDate"
                            value={registerData.birthDate}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Avatar URL</Form.Label>
                        <Form.Control
                            type="text"
                            name="avatar"
                            value={registerData.avatar}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={registerData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={registerData.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button type="submit" variant="dark" className="w-100">
                        Registrati
                    </Button>
                </Form>
            </Card>
        </Container>
    )
}

export default Register