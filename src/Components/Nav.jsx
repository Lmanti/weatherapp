import React from 'react';
import Logo from '../Imgs/logo192.png'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav>
      <Link to="/">
      <span>
        <img id="logo" src={Logo} width="30" height="30" alt="" />Weather App</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;