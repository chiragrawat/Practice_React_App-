import'./index.scss'
import { Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faBars, faEnvelope,faHome,faUser,} from '@fortawesome/free-solid-svg-icons'

import {faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'



const Sidebar =()=>{
    const [ShowNav, setShowNav] = useState(false);

    
   return(
<div className='nav-bar'>
    <Link className='logo' to='/'>
    <img src='./me.jpg' alt="logo" />
    <p className='chirag'>
        Chirag
    </p>
    
    
    </Link>
    <nav className={ShowNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclasname="active" to="/" onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>

        </NavLink>
        <NavLink exact="true" activeclasname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>


        </NavLink>
        <NavLink exact="true" activeclasname="active" className="contact-link" to="/contact-me" onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>


        </NavLink>

        <FontAwesomeIcon icon={faBars} className='hamburger-icon'
        onClick={() => setShowNav(true)}color='#4d4d4e' />


    </nav>

    <ul>
        <li>

            
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/chirag-rwt/'> 

            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>

            </a>
            </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/chiragrawat'> 

            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>


            </a>

        </li>

        



    </ul>

    <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />





</div>)

   }


   

export default Sidebar;
