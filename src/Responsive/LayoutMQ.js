import '../Styles/responsive.css';
import FooterMQ from './FooterMQ';

export default function LayoutMQ({children}) {
    return(
        <div className="tablet-body">
            
            <div style={{
                backgroundColor: '#e6e6d6', height:'120vh', padding: '3rem',
                }}> 
                {children}
            </div>
            <FooterMQ/>
        </div>
    )
}