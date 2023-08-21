import Anh from '../Assets/Anh.png';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/responsive.css'

export default function HomeTablet() {
    const navigate = useNavigate();
    const navigateToProjects = () => {
        navigate('/projects')
    }
    return(
        <div>
            
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <div className='profile-pic' style={{
                            backgroundImage:`url("${Anh}")`,
                            width:'13rem', height:'13rem',
                            backgroundSize:'cover', 
                            }}>
                    </div>
                    <p id='intro'>✥ An enthusiastic and committed JavaScript
                    Engineer skilled in developing user-friendly, visually appealing, and functional 
                    websites. <br/>✥ Proficient in front-end and back-end development enabling the 
                    creation of comprehensive web applications. <br/>✥ Adept at resolving complex 
                    issues and delivering top-notch projects to clients. <br/>✥ Flourish in collaborative 
                    settings, actively engaging with fellow developers to devise inventive solutions.</p>
                </div>
                <ul className='front-end'>
                    <li><Link className='skill-items'>HTML5</Link></li>
                    <li><Link className='skill-items'>CSS3</Link></li>
                    <li><Link className='skill-items'>JavaScript</Link></li>
                    <li><Link className='skill-items'>React</Link></li>
                    <li><Link className='skill-items'>Bootstrap</Link></li>
                    <li><Link className='skill-items'>Material UI</Link></li>
                    <li><Link className='skill-items'>Tailwind</Link></li>
                    <li><Link className='skill-items'>Headless CMS</Link></li>
                    <li><Link className='skill-items'>RESTful APIs </Link></li>
                </ul>
                <ul className='back-end'>
                    <li><Link className='skill-items'>Node.js</Link></li>
                    <li><Link className='skill-items'>Express</Link></li>
                    <li><Link className='skill-items'>MongoDB</Link></li>
                    <li><Link className='skill-items'>PHP</Link></li>
                </ul>
                <ul className='control-version'>
                    <li><Link className='skill-items'>Git</Link></li>
                    <li><Link className='skill-items'>GitHub</Link></li>
                    <li><Link className='skill-items'>Figma</Link></li>
                    <li><Link className='skill-items'>SEO</Link></li>
                    <li><Link className='skill-items'>Agile Methodologies</Link></li>
                </ul>
                <button className='css-button-retro--sand' onClick={navigateToProjects}>MY PROJECTS</button>
            
        </div>
    )
}

export function HomeMobile() {
    const navigate = useNavigate();
    const navigateToProjects = () => {
        navigate('/projects')
    }
    return(
        <div style={{fontSize:'0.8rem'}}>
            
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <div className='profile-pic' style={{
                            backgroundImage:`url("${Anh}")`,
                            width:'9rem', height:'9rem',
                            backgroundSize:'cover', 
                            }}>
                    </div>    
                </div>
                <p id='intro-mobile'>✥ An enthusiastic and committed JavaScript
                    Engineer skilled in developing user-friendly, visually appealing, and functional 
                    websites. <br/>✥ Proficient in front-end and back-end development enabling the 
                    creation of comprehensive web applications. <br/>✥ Adept at resolving complex 
                    issues and delivering top-notch projects to clients. <br/>✥ Flourish in collaborative 
                    settings, actively engaging with fellow developers to devise inventive solutions.</p>
                <ul className='front-end'>
                    <li><Link className='skill-items'>HTML5</Link></li>
                    <li><Link className='skill-items'>CSS3</Link></li>
                    <li><Link className='skill-items'>JavaScript</Link></li>
                    <li><Link className='skill-items'>React</Link></li>
                    <li><Link className='skill-items'>Bootstrap</Link></li>
                    <li><Link className='skill-items'>Material UI</Link></li>
                    <li><Link className='skill-items'>Tailwind</Link></li>
                    <li><Link className='skill-items'>Headless CMS</Link></li>
                    <li><Link className='skill-items'>RESTful APIs </Link></li>
                </ul>
                <ul className='back-end'>
                    <li><Link className='skill-items'>Node.js</Link></li>
                    <li><Link className='skill-items'>Express</Link></li>
                    <li><Link className='skill-items'>MongoDB</Link></li>
                    <li><Link className='skill-items'>PHP</Link></li>
                </ul>
                <ul className='control-version'>
                    <li><Link className='skill-items'>Git</Link></li>
                    <li><Link className='skill-items'>GitHub</Link></li>
                    <li><Link className='skill-items'>Figma</Link></li>
                    <li><Link className='skill-items'>SEO</Link></li>
                    <li><Link className='skill-items'>Agile Methodologies</Link></li>
                </ul>
                <button className='css-button-retro--sand' onClick={navigateToProjects}>MY PROJECTS</button>
            
        </div>
    )
}