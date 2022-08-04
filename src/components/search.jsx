import "../styles/search.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { useQuery } from "../hooks/useQuery";


export function Search() {
    const query = useQuery();
    const search = query.get("search");
    useEffect(()=>{
        setSearchText(search||"");
    },[search]);


    const [searchText, setSearchText] = useState("");
    const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    history("/?search=" + searchText)
  };

  return (
    <form className="searchContainer" onSubmit={handleSubmit}>
      <div className="searchBox">
        <input
          type="text"
          className="searchInput"
          placeholder="Buscar Pelicula"
          value={searchText}
          onChange={(e)=> setSearchText(e.target.value.toLowerCase())}
        />
        <button type="submit" className="searchButton">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
