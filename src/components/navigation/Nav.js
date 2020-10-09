import React from "react";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="container">
      <ul className="main-nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/thesis">thesis</NavLink></li>
        <li><NavLink to="/resume">resume</NavLink></li>
        <li><NavLink to="/photography">photography</NavLink></li>
        <li><NavLink to="/design">design</NavLink></li>
        <li><NavLink to="/development">development</NavLink></li>
        <li><NavLink to="/playlist">playlist</NavLink></li>
      </ul>  
    </ nav>
  );
};

export default Nav;
