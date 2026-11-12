import '../App.css';
import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
        <img className="myImage" src="myImage.jpg" alt=""></img>
        <h1>Toirov Asadbek</h1>

        {/* <div className="icons">
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/18522/18522004.png" alt="" /></a>
          <a href="#"><img src="" alt="" /></a>
          <a href="#"><img src="" alt="" /></a>
          <a href="#"><img src="" alt="" /></a>
        </div> */}

        <nav>


  
            <Link to="/">Asosiy</Link>
            <Link to="/about">Haqimda</Link>
            <Link to="/projects">Loyihalar</Link>
            <Link to="/contact">Bog'lanish</Link>

        </nav>

      </header>
    </div>
  )
}

export default Header