import { NavLink, Link, useNavigate } from "react-router-dom";
import './layout.css';
import '../Components/components.css';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {CgWebsite} from 'react-icons/cg';
import {LiaNewspaperSolid} from 'react-icons/lia';
import {ImBlog} from 'react-icons/im';
import {TbMessageStar} from 'react-icons/tb';
//import Social Network Icons Images
import discord1 from '../Assets/social/discord1.png';
import faceb from '../Assets/social/faceb.png';
import github1 from  '../Assets/social/github1.png';
import hotmail from '../Assets/social/hotmail.png';
import linked from '../Assets/social/linked.png';

export default function Navigator() {
    return(
        <>
            <div className="profile-img"></div>
            <p style={{width:'17rem', margin:'0 0.5rem'}}>My name is Anh. I am a <br/>web enthusiast</p>
            <ul className="social-content">
                <li>
                    <Link to='https://discordapp.com/users/1047844500418080778' target='_blank'>
                        <img className="social-icons" src={discord1} alt="discord"/>
                    </Link>
                </li>
                <li>
                    <Link to='https://www.facebook.com/hafsa.chau' target="_blank">
                        <img className="social-icons" src={faceb} alt="facebook"/>
                    </Link>
                </li>
                <li>
                    <Link to='https://github.com/anh-8922' target="_blank">
                        <img className="social-icons" src={github1} alt="github"/>
                    </Link>
                </li>
                <li>
                    <Link to='mailto:anh-dev@hotmail.com' target="_blank"><img className="social-icons" src={hotmail} alt="hotmail"/>
                    </Link>
                </li>
                <li>
                    <Link to='https://www.linkedin.com/in/anh-kim-chau/' target="_blank">
                        <img className="social-icons" src={linked} alt="linkedin"/>
                    </Link>
                </li>
            </ul>
            <ul className="nav-content">
                <li><NavLink className='nav-items' to="/"><BsFillPersonLinesFill/><span>About me</span></NavLink></li>
                <li><NavLink className='nav-items' to="/portfolio"><CgWebsite/><span>Portfolio</span></NavLink></li>
                <li><NavLink className='nav-items'><LiaNewspaperSolid/><span>Resume</span></NavLink></li>
                <li><NavLink className='nav-items'><ImBlog/><span>Blog</span></NavLink></li>
                <li><NavLink className='nav-items'><TbMessageStar/><span>Contact</span></NavLink></li>
            </ul>
            <button className="profile-button">Reach me</button>
            <div></div>
        </>
    )
}

