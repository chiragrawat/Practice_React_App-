import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact=()=>{

    const callalert=(msg)=>{
        alert(msg);

    };

    const[letterclass,setletterclass]=useState('text-animate');
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9apv48o', 'template_xkd8pzi', form.current, {
        publicKey: 'YBa6a6jABP2eVT8YV',
      })
      .then(
        () => {
          callalert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

    
    
    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterclass={letterclass} strArray={ ['C','o','n','t','a','c','t',' ','m','e'] } idx={15} />

                </h1>
                <p>
                I’d love to hear from you! Whether you have a project in mind, want to collaborate, or just want to chat about tech, feel free to reach out. You can contact me through the form below or connect with me on LinkedIn.
                </p>

                
            <div className='contact-form' >
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                           <input type='text' name='name' placeholder='name' required >
                           </input>                      </li>
                           <li className='half'>
                           <input type='email' name='email' placeholder='email' required >
                           </input>                      </li>

                           <li>
                           <input type='text' name='subject' placeholder='subject' required >
                           </input>                      </li>
                           <li >
                           <textarea name='message' placeholder='message' required >
                           </textarea>                  </li>
                           <li>
                           <input type='Submit' className='flat-button' value='SEND'/>
                            
                            
                           </li>
                    </ul>
                </form>


            </div>


            </div>

            


        </div>

        <Loader type='pacman'/>
        
        </>
    )
}


export default Contact

