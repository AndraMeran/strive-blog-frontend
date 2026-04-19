import { Card, Button } from "react-bootstrap"

function SingleComment({ comment, postId, setComments, setDeleteMessage }) {
    const isAdmin = localStorage.getItem("isAdmin") === "true"

    const created = new Date(comment.createdAt).toLocaleString("it-IT")
    const updated = new Date(comment.updatedAt).toLocaleString("it-IT")
    const isEdited = comment.createdAt !== comment.updatedAt

    const handleDelete = async () => {
        const token = localStorage.getItem("token")

        try {
            const response = await fetch(
                `http://localhost:3000/posts/${postId}/comments/${comment._id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            if (!response.ok) {
                throw new Error("Errore nella cancellazione del commento")
            }

            setComments((prevComments) =>
                prevComments.filter(
                    (singleComment) => singleComment._id !== comment._id
                )
            )

            setDeleteMessage("Commento eliminato")

            setTimeout(() => {
                setDeleteMessage("")
            }, 3000)
        } catch (error) {
            console.log("Errore:", error)
        }
    }

    return (
        <Card className="mb-3 shadow-sm border-0">
            <Card.Body>
                <Card.Title className="fs-6 mb-2">
                    {comment.author}
                </Card.Title>

                <Card.Text className="mb-2">
                    {comment.text}
                </Card.Text>

                <p className="text-muted small mb-3">
                    {isEdited
                        ? `Ultima modifica: ${updated}`
                        : `Creato il: ${created}`}
                </p>

                {isAdmin && (
                    <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={handleDelete}
                    >
                        Elimina
                    </Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default SingleComment