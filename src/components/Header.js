import SearchBox from "../components/SearchBox"
import Nav from "../components/Nav"

const Header = ({ title, searchText, setSearchText }) =>{
    return(
        <header>
            <h1>{title}</h1>
        <SearchBox
             searchText={searchText} 
             setSearchText={setSearchText}
        />
        <Nav />
        </header>
    )

}

export default Header
