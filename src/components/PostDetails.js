import { useParams } from 'react-router-dom'

const PostDetails = ({posts, handleDeletePost}) => {
    const { id } = useParams()

    const post = posts.find((post) => post.id === id)

    return(
            <main>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <article>
                    {post.body}
                <p>
                    <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
                </p>
                </article>
            </main>
    )

}

export default PostDetails
