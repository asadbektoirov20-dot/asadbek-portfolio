import '../App.css';

import React from 'react'

const Hero = () => {
  return (
    <div>

    <section className="hero">

    <img className="myImage" src="myImage.jpg" alt=""></img>
    <h1>Toirov Asadbek</h1>
    <h2>Men Frontend dasturchisiman</h2>

    <div className="btns">
    <button className='inform'>Malumot</button>
    <button className='call'><img src="https://cdn-icons-png.flaticon.com/128/159/159832.png" alt="" width={'45px'} /></button>
    </div>
    </section>

    </div>
  )
}

export default Hero