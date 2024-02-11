import { useParams, Link } from 'react-router-dom'

const PostDetails = ({posts, handleDeletePost, handleEditPost}) => {
    const { id } = useParams()

    const post = posts.find((post) => post.id === id)

    return(
            <main>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <article>
                    {post.body}
                <section id="edit-and-delete-post-btns">
                    <Link to={`/posts/${post.id}/edit`}><button>Edit Post</button></Link>
                    <button id="delete-post-btn" onClick={() => handleDeletePost(post.id)}>Delete Post</button>
                </section>
                </article>
            </main>
    )

}

export default PostDetails
