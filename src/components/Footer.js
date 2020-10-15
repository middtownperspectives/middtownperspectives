import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className='content'>
        <p>aaron middleton 2020</p>
        <ul>
          <li><a href="https://twitter.com/mddtwnprspctvs" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://github.com/middtownperspectives" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.facebook.com/middtown.perspectives" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a></li>
          <li><a href="https://www.instagram.com/middtownperspectives/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> </a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
