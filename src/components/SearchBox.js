const SearchBox = ({ searchText, setSearchText }) =>{
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <input
              id="search"
              type="text" 
              placeholder="Search posts" 
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
        </form>

    )
}

export default SearchBox
