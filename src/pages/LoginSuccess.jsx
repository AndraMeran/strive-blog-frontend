import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Container, Spinner } from "react-bootstrap"

function LoginSuccess() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        const token = searchParams.get("token")
        const isAdmin = searchParams.get("isAdmin")

        if (token) {
            localStorage.setItem("token", token)
            localStorage.setItem("isAdmin", isAdmin)
        }

        navigate("/")
    }, [navigate, searchParams])

    return (
        <Container className="py-5 text-center">
            <Spinner animation="border" className="mb-3" />
            <p>Accesso con Google in corso...</p>
        </Container>
    )
}

export default LoginSuccess