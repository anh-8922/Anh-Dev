import Navigator from "./Navigator";
import './layout.css'

export default function MainLayout({children}) {
    const layoutStyle = {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh'
    }

    return(
        <div style={layoutStyle}>
            <div className="navigator"><Navigator/></div>
            <div className="main-content">{children}</div>
        </div>
    )
   
}