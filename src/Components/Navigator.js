import { NavLink, useNavigate } from "react-router-dom";
//import AddNewRecipes from "../Pages/AddRecipePage";
import '../Styles/components.css';


export default function Navigator() {
    
    return(
        <ul className='navigator-bar' style={{
            backgroundColor:'#C7A87E', padding:'1rem 3rem', 
            display:'flex', flexDirection:'row', 
            justifyContent:'flex-end', gap:'1rem',
            borderTopLeftRadius:'0.7rem', borderTopRightRadius:'0.7rem',
            listStyleType:'none'}}>
            <li><NavLink className="NavItems" to="/">Profile</NavLink></li>
            <li><NavLink className="NavItems" to='/projects'>Projects</NavLink></li>
            <li><NavLink className="NavItems" to='/experiences'>Experiences</NavLink></li>
            <li><NavLink className="NavItems" to='/blog'>Blog</NavLink></li>
            <li><NavLink className="NavItems" to='/contact'>Contact</NavLink></li>
        </ul>
    )
}

//<NavLink className="NavItems" >Blog</NavLink>
 //           <NavLink className="NavItems" >Login</NavLink>