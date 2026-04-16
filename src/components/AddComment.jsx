import { useState } from "react"
import { Form, Button } from "react-bootstrap"

function AddComment({ postId, setComments }) {
    const [commentText, setCommentText] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newComment = {
            text: commentText,
            author: "Utente"
        }

        try {
            const response = await fetch(`http://localhost:3000/posts/${postId}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newComment)
            })

            const createdComment = await response.json()

            // aggiorna UI con commento vero dal backend
            setComments((prevComments) => [createdComment, ...prevComments])

            setSuccessMessage("Commento aggiunto!")

            setTimeout(() => {
                setSuccessMessage("")
            }, 3000)

            setCommentText("")

        } catch (error) {
            console.log("Errore:", error)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            {successMessage && (
                <div className="alert alert-success text-center">
                    {successMessage}
                </div>
            )}

            <Form.Group className="mb-3">
                <Form.Label>Lascia un commento</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={commentText}
                    onChange={(event) => setCommentText(event.target.value)}
                    placeholder="Scrivi qui il tuo commento..."
                />
            </Form.Group>

            <Button type="submit" variant="dark">
                Aggiungi commento
            </Button>
        </Form>
    )
}

export default AddComment