import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import NewPost from "./components/NewPost"
import Post from "./components/Post"
import Missing from "./components/Missing"
import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header
        className="header" 
        title={"The Simple Blog"}
      />
      <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts/new" element={<NewPost />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Missing />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
