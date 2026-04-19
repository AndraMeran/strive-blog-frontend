import SingleComment from "./SingleComment"
import { useState, useEffect } from "react"
import AddComment from "./AddComment"

function CommentArea({ postId }) {
    const [comments, setComments] = useState([])
    const [deleteMessage, setDeleteMessage] = useState("")


    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:3000/posts/${postId}/comments`)
                const data = await response.json()
                setComments(data)
            } catch (error) {
                console.log("Errore nel recupero commenti:", error)
            }
        }

        if (postId) {
            fetchComments()
        }
    }, [postId])

    return (
        <div className="mt-4">
            <h3 className="mb-3">Commenti</h3>

            {deleteMessage && (
                <div className="alert alert-danger text-center">
                    {deleteMessage}
                </div>
            )}

            <div className="mb-4">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <SingleComment
                            key={comment._id}
                            comment={comment}
                            postId={postId}
                            setComments={setComments}
                            setDeleteMessage={setDeleteMessage}
                        />
                    ))
                ) : (
                    <p className="text-muted">Nessun commento ancora</p>
                )}
            </div>

            {localStorage.getItem("token") ? (
                <AddComment postId={postId} setComments={setComments} />
            ) : (
                <p className="text-muted">Effettua il login per commentare</p>
            )}
        </div>
    )
}



export default CommentArea
