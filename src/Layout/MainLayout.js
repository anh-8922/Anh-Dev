import Navigator from "../Components/Navigator";
import '../Styles/layout.css';

export default function Layout({children}) {
    return(
        <div className="mainbody">
            <Navigator/>
            <div style={{
                backgroundColor: '#e6e6d6', height: 'max-content',
                borderBottomLeftRadius:'0.7rem', borderBottomRightRadius:'0.7rem'}}> 
                {children}
            </div>
          
        </div>
    )
}