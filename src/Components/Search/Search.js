import { useState } from "react";

function Search() {

  const [searchInput, setSearchInput] = useState();

  return (
    <form>
      <input type="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      <input type="submit" />
    </form>
  )
}

export default Search;