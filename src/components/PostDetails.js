import { useParams } from 'react-router-dom'

const PostDetails = ({posts}) => {
    const { id } = useParams()

    const post = posts.find((post) => post.id === id)

    return(
            <main>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <article>{post.body}</article>
            </main>
    )

}

export default PostDetails
