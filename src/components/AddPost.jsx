import { useState } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"

function AddPost({ setPosts }) {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        cover: "",
        readTimeValue: "",
        readTimeUnit: "min",
        content: ""
    })

    const [successMessage, setSuccessMessage] = useState("")

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()


        const newPost = {
            title: formData.title,
            category: formData.category,
            cover: formData.cover,
            readTime: {
                value: formData.readTimeValue,
                unit: formData.readTimeUnit
            },
            content: formData.content
        }
        const token = localStorage.getItem("token")
        try {

            const response = await fetch("http://localhost:3000/blogPosts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(newPost)
            })

            if (!response.ok) {
                throw new Error("Errore nella creazione del post")
            }

            const createdPost = await response.json()
            console.log(createdPost)

            setPosts((prevPosts) => [createdPost, ...prevPosts])

            setSuccessMessage("Post creato! 🎉")

            setTimeout(() => {
                setSuccessMessage("")
            }, 3000)

            setFormData({
                title: "",
                category: "",
                cover: "",
                readTimeValue: "",
                readTimeUnit: "min",
                content: ""
            })
        } catch (error) {
            console.log("Errore:", error)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <div className="d-flex justify-content-center">
                    <h4>Crea un nuovo post</h4>
                </div>

                {successMessage && (
                    <div className="alert alert-success text-center mt-3">
                        {successMessage}
                    </div>
                )}

                <Form.Group as={Col} md="12">
                    <Form.Label className="mt-3">Titolo</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="12">
                    <Form.Label className="mt-3">Categoria</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="12">
                    <Form.Label className="mt-3">URL Immagine</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="cover"
                        value={formData.cover}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="12">
                    <Form.Label className="mt-3">Tempo di lettura</Form.Label>
                    <div className="d-flex gap-2">
                        <Form.Control
                            required
                            type="number"
                            name="readTimeValue"
                            value={formData.readTimeValue}
                            onChange={handleChange}
                            placeholder="5"
                        />
                        <Form.Select
                            name="readTimeUnit"
                            value={formData.readTimeUnit}
                            onChange={handleChange}
                        >
                            <option value="min">min</option>
                            <option value="sec">sec</option>
                        </Form.Select>
                    </div>
                </Form.Group>

                <Form.Group as={Col} md="12">
                    <Form.Label className="mt-3">Contenuto</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={4}
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                    />
                </Form.Group>

                <div className="d-flex justify-content-center">
                    <Button className="mt-3" type="submit">
                        Crea Post
                    </Button>
                </div>
            </Row>
        </Form>
    )
}

export default AddPost