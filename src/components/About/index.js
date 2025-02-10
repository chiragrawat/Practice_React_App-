
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import {useState} from 'react';
import Loader from 'react-loaders'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCss3, faHtml5, faJs, faPython, faReact} from '@fortawesome/free-brands-svg-icons'

const About=()=>{
    const[letterclass,setletterclass]=useState('text-animate')

    


    


return(
    <>

    <div className='container about-page'>
        <div className="text-zone">


            <h1>
                <AnimatedLetters letterclass={letterclass} strArray={['A','b','o','u','t',' ','m','e']} 
                idx={15} ></AnimatedLetters>
                
            </h1>
            <p>
            Hi, I'm Chintu, a passionate computer science and electrical engineering student at Punjab Engineering College. With a strong foundation in programming and problem-solving, I've had the opportunity to work on a variety of projects spanning software development, machine learning, and embedded systems. From developing full-stack applications using the MERN stack to diving into control systems for drones in MATLAB, I enjoy blending my technical skills with creativity to build solutions that are both practical and innovative.

Throughout my journey, I’ve gained hands-on experience with tools like Python, C++, React, and MATLAB, applying these skills to projects that range from AI-driven applications to engineering simulations. One of my most exciting projects involves using machine learning for image forgery detection, where I combined my interests in computer vision and advanced algorithms to build a functional prototype. I also work on developing user-friendly applications, like a student chatbot with class reminders, which is designed to enhance the learning experience.

I'm constantly exploring new technologies and staying updated on the latest trends in software development and electrical engineering. Whether it’s building a modern website, designing control systems for unmanned aerial vehicles, or experimenting with new machine learning models, I love pushing the boundaries of what’s possible. Feel free to explore my projects and reach out for collaboration opportunities!


                
            </p>
        </div>

        <div className='cube-spiner'>
       
            
            <div className='scene'>
                <div className='cube'>

                    <div className="cube-face cube-face-front">

                    <FontAwesomeIcon className='react' icon={faReact}/>
                     </div>
                    <div className="cube-face cube-face-back">
                    <FontAwesomeIcon className='react' icon={faJs}/>
                    </div>
                    <div className="cube-face cube-face-left">
                    <FontAwesomeIcon className='react' icon={faCss3}/>
                    </div>
                    <div className="cube-face cube-face-right">
                        <FontAwesomeIcon className='react' icon={faHtml5}/>
                    </div>
                    <div className="cube-face cube-face-top">
                    <FontAwesomeIcon className='react' icon={faPython}/>
                    </div>
                    <div className="cube-face cube-face-bottom">
                    <FontAwesomeIcon className='react' icon={faHtml5}/>
                    </div>
                    </div>

                </div>
            </div>

        </div>
        <Loader type='pacman'/>
       


        </>




)




}








export default About
