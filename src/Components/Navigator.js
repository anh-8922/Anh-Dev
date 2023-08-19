import { NavLink, useNavigate } from "react-router-dom";
//import AddNewRecipes from "../Pages/AddRecipePage";
import '../Styles/components.css';


export default function Navigator() {
    
    return(
        <div style={{
            backgroundColor:'#C7A87E', padding:'1rem 3rem', 
            display:'flex', flexDirection:'row', 
            justifyContent:'flex-end', gap:'1rem',
            borderTopLeftRadius:'0.7rem', borderTopRightRadius:'0.7rem',
            listStyleType:'none'}}>
            <NavLink className="NavItems" to="/">About</NavLink>
            <NavLink className="NavItems" to='/projects'>projects</NavLink>
            <NavLink className="NavItems" to='/experiences'>experiences</NavLink>
            <NavLink className="NavItems" to='/blog'>bLOG</NavLink>
            <NavLink className="NavItems" to='/contact'>coNtAct</NavLink>
        </div>
    )
}

//<NavLink className="NavItems" >Blog</NavLink>
 //           <NavLink className="NavItems" >Login</NavLink>