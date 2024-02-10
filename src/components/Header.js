import SearchBox from "../components/SearchBox"
import Nav from "../components/Nav"

const Header = ({title}) =>{
    return(
        <header>
            <h1>{title}</h1>
        <SearchBox />
        <Nav />
        </header>
    )

}

export default Header
