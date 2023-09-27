import './components.css';
import html from '../Assets/skills/html.png';
import css from '../Assets/skills/css.png';
import javascript from '../Assets/skills/javascript.png';
import react from '../Assets/skills/react.png';
import typescript from '../Assets/skills/typescript.png';
import jest from '../Assets/skills/jest.png';
import nodejs from '../Assets/skills/nodejs.png';
import mongodb from '../Assets/skills/mongodb.png';
import express from '../Assets/skills/express.png';
import npm from '../Assets/skills/npm.png';
import bootstrap from '../Assets/skills/bootstrap.png';
import tailwind from '../Assets/skills/tailwind.png';
import api from '../Assets/skills/api.png';
import contentful from '../Assets/skills/contentful.png';
import wordpress from '../Assets/skills/wordpress.png';
import wix from '../Assets/skills/wix.png';
import hubspot from '../Assets/skills/hubspot.png';
import git from '../Assets/skills/gith.png';
import gitrepo from '../Assets/skills/gitrepo.png';
import seo from '../Assets/skills/seo.png';
import design from '../Assets/skills/design.png';

export default function SkillSets() {
    const skillStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        listStyleType:'none',
        gap:'1rem',
        padding:'0'
    }
    
    return(
        <ul style={skillStyle}>
            <li className="skill-sets" >
                <div className='skill-img'>
                    <img src={html} alt="HTML5"/>
                    <img src={css} alt="CSS3"/>
                    <img src={javascript} alt="JavaScript"/>
                    <img src={typescript} alt="TypeScript"/>
                    <img src={react} alt="React.js"/>
                </div>
                <h5>Frontend Development</h5>
                <p>HTML5, CSS3, JavaScript/ES6, TypeScript, React, Jest</p>
            </li>
            <li className="skill-sets" >
                <div className='skill-img'>
                    <img src={nodejs} alt="Node.js"/>
                    <img src={mongodb} alt="MongoDB"/>
                    <img src={express} alt="Express.js"/>
                </div>
                <h5>Backend Development</h5>
                <p>Node.js, MongoDB, Express.js</p>
            </li>
            <li className="skill-sets" >
                <div className='skill-img'>
                    <img src={bootstrap} alt="Bootstrap"/>
                    <img src={tailwind} alt="TailwindCSS"/>
                </div>
                <h5>UI Libraries</h5>
                <p>Bootstrap, MUI, TailwindCSS</p>
            </li>
            <li className="skill-sets" >
                <div className='skill-img'>
                    <img src={api} alt="APIs Intergration"/>
                </div>
                <h5>API Integration</h5>
                <p>RESTful APIs</p>
            </li>
            <li className="skill-sets" >
                <div className='skill-img'>
                    <img src={contentful} alt="Contentful"/>
                    <img src={wix} alt="Wix"/>
                    <img src={wordpress} alt="Wordpress"/>
                    <img src={hubspot} alt="Hubspot"/>
                </div>
                <h5>CMS</h5>
                <p>Contentful, Wix, FireCMS, Wordpress, Hubspot</p>
            </li>
            <li className="skill-sets" >
                <div className='skill-img'>
                    <img src={git} alt="GitHub"/>
                    <img src={gitrepo} alt="Git"/>
                    <img src={seo} alt="SEO"/>
                    <img src={npm} alt="npm"/>
                    <img src={jest} alt="Jest-React-Testing"/>
                    <img src={design} alt="UX/UI"/>
                </div>
                <h5>Others</h5>
                <p>Version control (Git), UX/UI Design, Agiles Methodologies, SEO Optimisation</p>
            </li>
        </ul>
    )
}