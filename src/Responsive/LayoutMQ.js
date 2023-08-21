import '../Styles/responsive.css';
import FooterMQ from './FooterMQ';

export default function LayoutMQ({children}) {
    return(
        <div className="tablet-body">
            
            <div style={{
                backgroundColor: '#e6e6d6', height:'100vh', padding: '3rem',
                borderBottomLeftRadius:'0.7rem', borderBottomRightRadius:'0.7rem'}}> 
                {children}
            </div>
            <FooterMQ/>
        </div>
    )
}