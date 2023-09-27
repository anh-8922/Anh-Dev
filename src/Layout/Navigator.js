import { NavLink, Link, useNavigate } from "react-router-dom";
import './layout.css';
import '../Components/components.css';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {CgWebsite} from 'react-icons/cg';
import {LiaNewspaperSolid} from 'react-icons/lia';
import {ImBlog} from 'react-icons/im';
import {TbMessageStar} from 'react-icons/tb';

export default function Navigator() {
    return(
        <>
            <div className="profile-img"></div>
            <p>My name is Anh and I am a Web Developer</p>
            <ul className="social-content">
                <li><Link></Link></li>
                <li><Link></Link></li>
                <li><Link></Link></li>
                <li><Link></Link></li>
                <li><Link></Link></li>
            </ul>
            <ul className="nav-content">
                <li><NavLink className='nav-items'><BsFillPersonLinesFill/><span>About me</span></NavLink></li>
                <li><NavLink className='nav-items'><CgWebsite/><span>Portfolio</span></NavLink></li>
                <li><NavLink className='nav-items'><LiaNewspaperSolid/><span>Resume</span></NavLink></li>
                <li><NavLink className='nav-items'><ImBlog/><span>Blog</span></NavLink></li>
                <li><NavLink className='nav-items'><TbMessageStar/><span>Contact</span></NavLink></li>
            </ul>
            <button className="profile-button">Reach me</button>
            <div></div>
        </>
    )
}

