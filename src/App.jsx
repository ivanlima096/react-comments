import { useState } from "react"

export default function App() {

  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const [comments, setComments] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newCommnent = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date()
    }
    setComments((state) => [newCommnent, ...state])
    setAuthor("")
    setContent("")
  }

  return (
    <div id="app">
      <h2>Seção de comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input
          type="email"
          id="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="content">Comentário</label>
        <textarea
          id="content"
          cols="30"
          rows="6"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Enviar comentário</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0
          ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>{comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            ))
          ) : (
            <p>Seja o primeiro a comentar!</p>
          )}

      </section>
    </div>
  )
}