import { useRef, useState } from 'react';
import MainLayout from '../Layout/MainLayout';

import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import message from '../Assets/message.png';


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
            <h1 style={{fontFamily: 'La Belle Aurore', fontSize:'4rem'}}>Contact</h1>
            <div className="session-title">SEND MESSAGE</div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                    
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
                                    
                                />
                    </form>
                        {messageStatus && alert (messageStatus)}
                    <div style={{backgroundImage: `url("${message}")`, width:'28rem', height:'20rem', backgroundSize:'cover'}}></div>
            </div> 
        </MainLayout>
    )
}
