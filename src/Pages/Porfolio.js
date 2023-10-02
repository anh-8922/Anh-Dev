import MainLayout from "../Layout/MainLayout";
import ProjectCard from "../Components/ProjectCard";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
    const portfolioHeaderStyle = {
        paddingBottom: '2rem',
    }

    const navigate = useNavigate();
    const toMyContact = () => {
        navigate('/contact');
    }
    return(
        <MainLayout>
            <div style={portfolioHeaderStyle}>
                <h1 style={{fontFamily: 'La Belle Aurore', fontSize:'4rem'}}>Portfolio</h1>
                <p>Welcome to my web development portfolio! I'm passionate about creating 
                    stunning and functional websites that leave a lasting impression. 
                    With a keen eye for design and a commitment to delivering exceptional 
                    user experiences, I've had the privilege of working on a diverse range 
                    of web projects. Browse through my portfolio to explore a collection of 
                    websites I've crafted, each with its unique challenges and solutions. 
                    Whether you're seeking a modern and visually appealing website or a robust 
                    web application, I'm ready to turn your digital ideas into reality.
                </p>
                <button className="profile-button" onClick={toMyContact}>Contact</button>
                <div className="session-title">MY PROJECTS</div>
            </div>
            <ProjectCard/>
        </MainLayout>
    )
}