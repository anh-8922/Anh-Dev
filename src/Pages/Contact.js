import { useRef, useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import '../Styles/components.css';
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
              setMessageStatus('Message Sent');
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset()
      };

    return(
        <MainLayout>
            <section className='contact-section'>
                <div>   
                    <div style={{backgroundImage: `url("${message}")`, width:'25rem', height:'17rem', backgroundSize:'cover', margin:'auto'}}></div>
                    <ul className='social-connect'>
                        <li><div style={{
                            backgroundImage: `url("${github}")`, 
                            width:'3rem', height:'3rem',
                            backgroundSize:'cover'}}/></li>
                        <li><div style={{
                            backgroundImage: `url("${facebook}")`, 
                            width:'3rem', height:'3rem',
                            backgroundSize:'cover'}}/></li>
                        <li><div style={{
                            backgroundImage: `url("${linked}")`, 
                            width:'3rem', height:'3rem',
                            backgroundSize:'cover'}}/></li>
                        <li><div style={{
                            backgroundImage: `url("${discord}")`, 
                            width:'3rem', height:'3rem',
                            backgroundSize:'cover'}}/></li>
                        <li><div style={{
                            backgroundImage: `url("${email}")`, 
                            width:'3rem', height:'3rem',
                            backgroundSize:'cover'}}/></li>
                    </ul>
                </div>
                <div style={{margin: '2rem', display:'flex', flexDirection:'column'}}>
                    <h2>Leave your message</h2>
                    <form ref={form} 
                                onSubmit={sendEmail} 
                                style={{display:'flex', flexDirection:'column', gap:'1.5rem', alignItems:'flex-start'}}>
                        <div style={{display:'flex', flexDirection:'row', width:'40rem'}}>
                            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                                <div className='labels'>Name:</div>
                                <input type="text" 
                                        name="name" 
                                        placeholder='Name' 
                                        style={{height:'3rem', width:'100%', padding:'1rem', marginRight:'1rem'}} />
                            </div>
                            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                                <div className='labels'>Email:</div>
                                <input type="email" 
                                        name="email" 
                                        placeholder='Email Address' 
                                        style={{height:'3rem', width:'100%', padding:'1rem'}}/>
                            </div>
                        </div>        
                        <div style={{display:'flex', flexDirection:'row', width:'40rem'}}>
                            <div className='labels'>Subject:</div>
                            <input type="text" 
                                    name="subject" 
                                    placeholder='Subject' 
                                    style={{height:'3rem', width:'100%', padding:'1rem'}}/>
                        </div>        
                        <div>
                            <textarea name="message" 
                                        placeholder="Add Your message..."  
                                        style={{height:'13rem', width:'40rem', padding:'1rem'}}/>
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
