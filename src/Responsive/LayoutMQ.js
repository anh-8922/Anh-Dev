import '../Styles/responsive.css';
import FooterMQ from './FooterMQ';
import { FooterMobile } from './FooterMQ';
import MediaQuery from 'react-responsive';

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

export function LayoutMobile({children}) {
    return(
        <MediaQuery minWidth={200} maxWidth={599}>
            <div className="tablet-body">
                <div style={{
                    backgroundColor: '#e6e6d6', height:'120vh', padding: '3rem',
                    }}> 
                    {children}
                </div>
            <FooterMobile/>
            </div>
        </MediaQuery>
        
    )
}