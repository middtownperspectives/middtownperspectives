import React from 'react';
import { NavLink } from 'react-router-dom';

import { navbar } from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={navbar}>
      <div>
        <p className='navlink'><NavLink exact to="/middtownperspectives" className='navlink'>Logo (Home)</NavLink></p>
      </div>
      <ul>
        <li><NavLink to="/middtownperspectives/about">about</NavLink></li>
        <li><NavLink to="/middtownperspectives/thesis">thesis</NavLink></li>
        <li><NavLink to="/middtownperspectives/resume">resume</NavLink></li>
        <li><NavLink to="/middtownperspectives/photography">photography</NavLink></li>
        <li><NavLink to="/middtownperspectives/design">design</NavLink></li>
        <li><NavLink to="/middtownperspectives/development">development</NavLink></li>
        <li><NavLink to="/middtownperspectives/playlist">playlist</NavLink></li>
      </ul>  
    </ nav>
  );
};

export default Nav;
