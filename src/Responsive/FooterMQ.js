import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {CgWebsite} from 'react-icons/cg';
import {MdOutlineContactMail} from 'react-icons/md';
import {AiOutlineHome} from 'react-icons/ai';
import {GiNotebook} from 'react-icons/gi';
import '../Styles/responsive.css'
import { Link } from 'react-router-dom';

export default function FooterMQ() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary" fixed='bottom' style={{height:'5rem'}}>
            <Container style={{display:'flex',flexDirection:'row', justifyContent:'center', gap:'1rem'}}>
                <Link className='foot-items'><AiOutlineHome/><span>Home</span></Link>
                <Link className='foot-items'><CgWebsite/><span>Projects</span></Link>
                <Link className='foot-items'><GiNotebook/><span>Experience</span></Link>
                <Link className='foot-items'><MdOutlineContactMail/><span>Contact</span></Link>
            </Container>
        </Navbar>   
    )
}

export function FooterMobile() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary" fixed='bottom' style={{height:'5rem'}}>
            <Container style={{display:'flex',flexDirection:'row', justifyContent:'center', gap:'1rem'}}>
                <Link className='foot-items'><AiOutlineHome/><span>Home</span></Link>
                <Link className='foot-items'><MdOutlineContactMail/><span>Contact</span></Link>
                <Link className='foot-items'><GiNotebook/><span>Menu</span></Link>
            </Container>
        </Navbar>   
    )
}
