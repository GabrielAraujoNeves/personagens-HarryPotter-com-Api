import React from 'react';
import SearchBar from './SearchBar';
import './style.css';

const Navbar = () => {
  return (
    <nav>
        <h1>personagens do filme Harry Potter</h1>
        <SearchBar/>
    </nav>
  )
}

export default Navbar