import { Link } from 'react-router-dom'

const Home = ({ posts }) =>{
    return(
        <main>
            <h2> Home </h2>
        <ul>
         { posts.map((post) => {
             return(
                 <li key={post.id}>
                     <article>
                         <Link to={`/posts/${post.id}`}>
                            <h3>{post.title}</h3>
                            <p>{post.date}</p>
                         </Link>
                            <p>{post.body}</p>
                         <hr />
                     </article>
                 </li>
             )
         })}
        </ul>
        </main>
    )

}

export default Home
