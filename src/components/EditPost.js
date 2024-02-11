import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({posts, editPostTitle, setEditPostTitle, editPostBody, setEditPostBody, handleEditPost}) =>{
    const { id } = useParams()
    const post = posts.find((post) => post.id === id)

    useEffect(()=>{
        if(post){
            setEditPostTitle(post.title)
            setEditPostBody(post.body)
        }
    }, [post, setEditPostTitle, setEditPostBody])

    return(
        <main>
            <h2> Edit Post </h2>
            <hr id="divider"/>
        <form id="edit-post-form" onSubmit={(e) => e.preventDefault()}>
            <label id="post-title-label" htmlFor="post-title">Title:</label>
            <input
                type="text" 
                id="post-title" 
                required
                value={editPostTitle}
                onChange={(e) => setEditPostTitle(e.target.value)}
        />

            <label id="post-body-label" htmlFor="post-body">Post:</label>
            <textarea 
                id="post-body" 
                required 
                value={editPostBody}
                onChange={(e) => setEditPostBody(e.target.value)}
        />
            <button
                onClick={()=>handleEditPost(post.id)}
            >
                Update
            </button>
        </form>
         </main>
    )

}

export default EditPost
