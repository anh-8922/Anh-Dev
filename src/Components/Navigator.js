import { NavLink, useNavigate } from "react-router-dom";
//import AddNewRecipes from "../Pages/AddRecipePage";
import { useState } from "react";
import '../Styles/components.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {RiMenuUnfoldFill} from 'react-icons/ri';
import {RiProfileLine} from 'react-icons/ri';
import {MdOutlineCollectionsBookmark} from 'react-icons/md';
import {GiBlackBook} from 'react-icons/gi';
import {AiOutlineMail} from 'react-icons/ai';

export default function Navigator() {
    const [slide, setSlide] = useState(true);
    return(
        <div style={{}}
            className={slide ? 'side-bar' : 'side-bar-XL'}>
            <button className="sb-button" onClick = {() => setSlide(!slide)}>
                <RiMenuUnfoldFill/>
            </button>
           
                <NavLink className="NavItems" to="/"><RiProfileLine/>{slide?"":<span className='items-extended'>About</span>}</NavLink>
                <NavLink className="NavItems" to='/projects'><MdOutlineCollectionsBookmark/>{slide?"":<span className='items-extended'>Projects</span>}</NavLink>
                <NavLink className="NavItems" to='/journey'><GiBlackBook/>{slide?"":<span className='items-extended'>Projects</span>}</NavLink>
                <NavLink className="NavItems" to='/contact'><AiOutlineMail/>{slide?"":<span className='items-extended'>Contact</span>}</NavLink>
                          
            
           
               
            

            
        </div>
    )
}

//<NavLink className="NavItems" >Blog</NavLink>
 //           <NavLink className="NavItems" >Login</NavLink>
 //<NavLink className="NavItems" to='/blog'>bLoG</NavLink>
 //<NavLink className="NavItems" >eXpeRieNce</NavLink>

