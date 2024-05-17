import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Welcome to Edusity, your ultimate destination for all things education. At Edusity, we are dedicated to empowering students, educators, and lifelong learners with the resources, tools, and support they need to achieve their educational goals. Our comprehensive platform offers a wide range of features designed to enhance learning experiences and foster academic excellence.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero