import React from 'react'
import './ABout.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Embark on a transformative educational journey with our university's comprehensive education program. Our cutting-edge curriculum is designed to empower students with the knowledge,skills, an experiences needed to excel in the dynamic field of education</p>
                <p>With a focus of innovative, hands on learning, and persoanlized mentorship, our program prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities</p>
                <p>Whether you aspire to become a teacher, adiminstartor, counselor, or educational leader, our diverse range of program offer the perfect opportunity to achieve your goal and unlock your full potential in shaping the future of education</p>
            </div>
        </div>
    )
}

export default About