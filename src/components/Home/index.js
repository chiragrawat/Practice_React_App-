import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {  useState  } from 'react'



const Home = ()=>{
    const[letterclass,setletterclass]=useState('text-animate')
    

    const nameArray=['C','h','i','r','a','g']
    const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    


    return(
        <>
        <div className="container home-page">

            <div className="text-zone">

                <h1>
                    <span className={letterclass}>H</span>
                    <span className={`${letterclass} _12 `}>i</span>
                    <br/>
                    <span className={`${letterclass} _13 `}>I</span>
                    <span className={`${letterclass} _14 `}>'m</span>
                   
                    <span>   </span>
                    <AnimatedLetters letterclass={letterclass}
                    strArray={nameArray}
                    idx={15}/>
                   
                    <br/>
                    <AnimatedLetters letterclass={letterclass}
                    strArray={jobArray}
                    idx={22}/>
                   
                </h1>
                <h2>
                    Full Stack Webdevloper / Coder / Electrical engineer
                </h2>

                <Link to='/contact-me' className='flat-button'>
                CONTACT ME


                </Link>
            </div>
                
        </div>
        <Loader type='pacman'/>
        </>
        


    )

       
    
}


export default Home;