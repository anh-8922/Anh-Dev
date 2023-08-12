import { useRef, useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import '../Styles/components.css';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

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
            <div style={{margin: '2rem'}}>
            <form ref={form} 
                          onSubmit={sendEmail} 
                          style={{display:'flex', flexDirection:'column', gap:'2.5rem', justifyContent:"flex-start", marginLeft:'10rem', marginTop:'2rem'}}>
                        <input type="text" 
                               name="name" 
                               placeholder='Name' 
                               style={{height:'3rem', width:'40rem', padding:'1rem'}} />
                        <input type="email" 
                               name="email" 
                               placeholder='Email Address' 
                               style={{height:'3rem', width:'40rem', padding:'1rem'}}/>
                        <input type="text" 
                               name="subject" 
                               placeholder='Subject' 
                               style={{height:'3rem', width:'40rem', padding:'1rem'}}/>
                        <textarea name="message" 
                                  placeholder="Your message"  
                                  style={{height:'15rem', width:'40rem', padding:'1rem'}}/>
                        <input type="submit" 
                               value="Send Message" 
                               style={{height:'4rem', width:'15rem', padding:'1rem', fontSize:'1.3rem'}}/>
                    </form>
                    {messageStatus && alert (messageStatus)

}
            </div>
        </MainLayout>
    )
}
