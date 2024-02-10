import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import NewPost from "./components/NewPost"
import PostDetails from "./components/PostDetails"
import Missing from "./components/Missing"
import Footer from "./components/Footer"
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

function App() {
    const [searchText, setSearchText] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")
    const [posts, setPosts] = useState([
      {
          id: uuidv4(),
          title: "Oh Bread of Heaven",
          body: "God gives me life, God lives in me, He feeds my soul, he guides my ways, He, God gives me life, God lives in me, He feeds my soul, he guides my ways, He, God gives me life, God lives in me, He feeds my soul, he guides my ways, He",
          date: "2024-01-26"
      },
      {
          id: uuidv4(),
          title: "How can I repay the Lord for His goodness to me",
          body: "How can I repay the Lord for His goodness to me, How can I repay the Lord for His goodness to me, How can I repay the Lord for His goodness to me, How can I repay the Lord for His goodness to me, How can I repay the Lord for His goodness to me, How can I repay the Lord for His goodness to me",
          date: "2024-01-31"
      },
      {
          id: uuidv4(),
          title: "God of mercy and compassion",
          body: "God of mercy and compassion you looked with love towards me, Father thank you for being my Father,God of mercy and compassion you looked with love towards me, Father thank you for being my Father, God of mercy and compassion you looked with love towards me, Father thank you for being my Father",
          date: "2024-02-08"
      },
      {
          id: uuidv4(),
          title: "Lorem ipsum Dolor Sit Amet Consectetur",
          body: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Voluptatibus Optio, A Numquam Esse Ipsum Iure. Modi Autem Blanditiis Nulla Voluptate Nostrum Temporibus, Amet, Non Quas Consequuntur Eum Tempore Totam Sequi. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Neque, Vero Repellendus! Accusantium Doloremque Placeat Eaque Eligendi Quaerat? Cupiditate, Quae Corrupti?",
          date: "2024-02-11"
      }
    ])

    const navigate = useNavigate()

    useEffect(() => {
        const filteredResult = posts.filter((post) => post.title.toLowerCase().includes(searchText.toLowerCase())
            || post.body.toLowerCase().includes(searchText.toLowerCase()))
        setSearchResults(filteredResult.reverse())
    }, [posts, searchText])

    const handleDeletePost = (id) => {
        const filteredPosts = posts.filter((post) => post.id !== id)
        setPosts(filteredPosts)
        navigate("/")
    }

    const handleSubmitPost = (e) => {
        e.preventDefault()
        const newPost = {id: uuidv4(), title: postTitle, body: postBody, date: "2024-02-11"}
        const allPosts = [...posts, newPost]
        setPosts(allPosts)
        setPostTitle("")
        setPostBody("")
        navigate("/")
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
                    <Route path="/posts/:id" element={<PostDetails posts={posts} handleDeletePost={handleDeletePost}/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<Missing />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
