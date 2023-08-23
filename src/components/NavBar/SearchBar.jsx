import { useState } from "react"
import React from 'react'

const SearchBar = () => {
    const [searchQuery, setSearcQuery]  = useState('');

    const handleSearch = (e) => {
        setSearcQuery(e.target.value)
    }

    const handleSubmit = (e) => {
       e.preventDefault();
       
       console.log('pesquisa por:', searchQuery);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
         type="text" 
         placeholder="pesquisa"
         value={searchQuery}
         onChange={handleSearch}/>

         <button type="submit">Buscar</button>
    </form>
  )
}

export default SearchBar