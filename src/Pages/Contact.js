import { useRef, useState } from 'react';
import MainLayout from '../Layout/MainLayout';

import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import message from '../Assets/message.png';
import linked from '../Assets/linkedin.png';
import facebook from '../Assets/facebook.png';
import discord from '../Assets/discord.png';
import github from '../Assets/github.png';
import email from '../Assets/email.png'

export default function Contact() {
    const form = useRef();
    const [messageStatus, setMessageStatus] = useState('');
    const YOUR_SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID
    const YOUR_TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID
    const YOUR_PUBLIC_KEY = process.env.REACT_APP_MY_PUBLIC_KEY
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(`${YOUR_SERVICE_ID}`, `${YOUR_TEMPLATE_ID}`, form.current, `${YOUR_PUBLIC_KEY}`)
          .then((result) => {
              console.log(result.text);
              setMessageStatus('Thank you! Your message has been sent');
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset()
      };

    return(
        <MainLayout>
            <section className='contact-section'>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', height:'max-content'}}>   
                    <div style={{backgroundImage: `url("${message}")`, width:'25rem', height:'17rem', backgroundSize:'cover', margin:'auto'}}></div>
                    <h5>Let's Connect</h5>
                    <ul className='social-connect'>
                        <li><a href='https://github.com/anh-8922' target='_blank'><div style={{
                            backgroundImage: `url("${github}")`, 
                            width:'3rem', height:'3rem',
                            backgroundSize:'cover'}}/></a></li>
                        <li><a href='https://www.facebook.com/hafsa.chau' target='_blank'><div style={{
                            backgroundImage: `url("${facebook}")`, 
                            width:'3rem', height:'3rem',
                            backgroundSize:'cover'}}/></a></li>
                        <li><a href='https://www.linkedin.com/in/anh-kim-chau/' target='_blank'><div style={{
                            backgroundImage: `url("${linked}")`, 
                            width:'3rem', height:'3rem',
                            backgroundSize:'cover'}}/></a></li>
                        <li><a href='https://discordapp.com/users/1047844500418080778' target='_blank'><div style={{
                            backgroundImage: `url("${discord}")`, 
                            width:'3rem', height:'3rem',
                            backgroundSize:'cover'}}/></a></li>
                        <li><div style={{
                            backgroundImage: `url("${email}")`, 
                            width:'3rem', height:'3rem',
                            backgroundSize:'cover'}}/></li>
                    </ul>
                    <h5>or reach me at</h5>
                    <h3>anh-dev@hotmail.com</h3>
                </div>
                <div style={{margin: '2rem', display:'flex', flexDirection:'column'}}>
                    <h2 style={{color:'#2B2823'}}>Leave your message</h2>
                    <form ref={form} 
                                onSubmit={sendEmail} 
                                style={{display:'flex', flexDirection:'column', gap:'1.5rem', alignItems:'flex-start'}}>
                        <div style={{display:'flex', flexDirection:'row', width:'40rem'}}>
                            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                                <div className='labels'>Name:</div>
                                <input type="text" 
                                        name="name" 
                                        className='form-input'
                                        placeholder='Name' 
                                        style={{height:'3rem', width:'100%', padding:'1rem', marginRight:'1rem'}} />
                            </div>
                            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                                <div className='labels'>Email:</div>
                                <input type="email" 
                                        name="email" 
                                        className='form-input'
                                        placeholder='Email Address' 
                                        style={{height:'3rem', width:'100%', padding:'1rem'}}/>
                            </div>
                        </div>        
                        <div style={{display:'flex', flexDirection:'row', width:'40rem'}}>
                            <div className='labels'>Subject:</div>
                            <input type="text" 
                                    name="subject" 
                                    className='form-input'
                                    placeholder='Subject' 
                                    style={{height:'3rem', width:'100%', padding:'1rem'}}/>
                        </div>        
                        <div>
                            <textarea name="message" 
                                        placeholder="Add Your message..."  
                                        style={{
                                            height:'13rem', width:'40rem', 
                                            padding:'1rem', borderRadius:'0.5rem',
                                            borderColor:'grey'}}/>
                        </div>            
                        <input type="submit" 
                                    value="Send Message" 
                                    className='submit-msg'
                                />
                    </form>
                        {messageStatus && alert (messageStatus)}
                </div>
            </section>
           
        </MainLayout>
    )
}
