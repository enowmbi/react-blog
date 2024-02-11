const NewPost = ({postTitle, setPostTitle, postBody, setPostBody, handleSubmitPost}) =>{
    return(
        <main>
            <h2> New Post </h2>
            <hr id="divider"/>
        <form id="new-post-form">
            <label id="post-title-label" htmlFor="post-title">Title:</label>
            <input
                type="text" 
                id="post-title" 
                placeholder="Enter Post Title" 
                required
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
        />

            <label id="post-body-label" htmlFor="post-body">Post:</label>
            <textarea 
                id="post-body" 
                placeholder="Enter Post Body" 
                required 
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
        />
            <button
                onClick={handleSubmitPost}
            >
                Submit
            </button>
        </form>
         </main>
    )

}

export default NewPost
