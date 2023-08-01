import { NavLink, useNavigate } from "react-router-dom";
//import AddNewRecipes from "../Pages/AddRecipePage";
import '../Styles/component.css';


export default function Navigator() {
    
    return(
        <div style={{
            backgroundColor:'#C7A87E', padding:'1rem', 
            display:'flex', flexDirection:'row', 
            justifyContent:'flex-end', gap:'1rem'}}>
            <NavLink className="NavItems" to="/">Profile</NavLink>
            <NavLink className="NavItems" >Projects</NavLink>
            <NavLink className="NavItems">Qualifications</NavLink>
            <NavLink className="NavItems">Blog</NavLink>
            <NavLink className="NavItems">Contact</NavLink>
        </div>
    )
}

//<NavLink className="NavItems" >Blog</NavLink>
 //           <NavLink className="NavItems" >Login</NavLink>