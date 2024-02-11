import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import NewPost from "./components/NewPost"
import EditPost from "./components/EditPost"
import PostDetails from "./components/PostDetails"
import Missing from "./components/Missing"
import Footer from "./components/Footer"
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import api from "./api/posts"

function App() {
    const [searchText, setSearchText] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")
    const [editPostTitle, setEditPostTitle] = useState("")
    const [editPostBody, setEditPostBody] = useState("")
    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    useEffect(() =>{
        const fetchPosts = async () =>{
            try{
                const response = await api.get('/posts')
                setPosts(response.data)
            }catch(err){
                if(err.response){
                    // response not in 200 range but we got a response
                    console.log(err.response.data)

                }else{
                    console.log(err.message)
                }
            }
        } 

        fetchPosts()

    }, [])

    useEffect(() => {
        const filteredResult = posts.filter((post) => post.title.toLowerCase().includes(searchText.toLowerCase())
            || post.body.toLowerCase().includes(searchText.toLowerCase()))
        setSearchResults(filteredResult.reverse())
    }, [posts, searchText])

    const handleDeletePost = async (id) => {
        try{
            await api.delete(`/posts/${id}`) 
            const filteredPosts = posts.filter((post) => post.id !== id)
            setPosts(filteredPosts)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    const handleSubmitPost = async (e) => {
        e.preventDefault()
        const newPost = {id: uuidv4(), title: postTitle, body: postBody, date: "2024-02-11"}
        try{
            const response = await api.post('/posts', newPost)
            const allPosts = [...posts, response.data] //use the response from the api -- api set's id etc
            setPosts(allPosts)
            setPostTitle("")
            setPostBody("")
            navigate("/")
        }catch(err){
            if(err.response){
                console.log(err.response.data)
            }else{
                console.log(err)
            }
        }
    }

    const handleEditPost =async (id) =>{
        const updatedPost = {id: id, title: editPostTitle, body: editPostBody, date: new Date()}
        try{
            const response = await api.put(`/posts/${id}`, updatedPost) 
            setPosts(posts.map((post) => post.id === id ? {...response.data} : post))
            setEditPostTitle("")
            setEditPostBody("")
            navigate("/")
        }catch(err){
            console.log(err.message)
        }
    }

    return (
        <div className="App">
            <Header
                className="header" 
                title={"The Simple Blog"}
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <main>
                <Routes>
                    <Route path="/" element={<Home posts={searchResults} />} />

                    <Route
                        path="/posts/new" 
                        element={
                            <NewPost  
                                postTitle={postTitle}
                                setPostTitle={setPostTitle} 
                                setBody={postBody}
                                setPostBody={setPostBody}
                                handleSubmitPost={handleSubmitPost}
                            />}
                    />

                    <Route
                        path="/posts/:id" 
                        element={
                            <PostDetails
                                posts={posts} 
                                handleDeletePost={handleDeletePost}
                                handleEditPost={handleEditPost}
                            />}
                    />

                    <Route
                        path="/posts/:id/edit" 
                        element={
                            <EditPost
                                posts={posts} 
                                editPostTitle={editPostTitle}
                                setEditPostTitle={setEditPostTitle}
                                editPostBody={editPostBody}
                                setEditPostBody={setEditPostBody}
                                handleEditPost={handleEditPost}
                            />}
                    />

                    <Route path="/about" element={<About />} />

                    <Route path="/*" element={<Missing />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
