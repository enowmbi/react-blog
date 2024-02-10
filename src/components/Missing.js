import { Link } from 'react-router-dom'

const Missing = () =>{
    return(
        <main>
            <h2>Page not found!</h2>
            <p>Well, that's disappointing</p>
            <Link to="/">visit our home page</Link>
         </main>
    )

}

export default Missing
