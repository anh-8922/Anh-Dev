import MainLayout from "../Layout/MainLayout";
import SkillSets from "../Components/SkillSet";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    const toMyProject = () => {
        navigate('/portfolio');
    }

    return(
        <MainLayout>
            <h1 style={{fontFamily:'La Belle Aurore', fontSize:'4rem'}}>Anh Chau</h1>
            <h3>&lt;Web Developer /&gt; Navigate the Digital Frontier</h3>
            <p style={{textAlign:'justify'}}>Passionate about the art of web creation, I am driven by the pursuit of crafting immersive 
                online experiences. My expertise extends across the entire web development spectrum, 
                spanning from the aesthetic finesse of front-end design to the technical mastery of back-end 
                development. With a natural talent for unraveling complex challenges, I take pride in 
                consistently delivering top-tier projects that seamlessly align with the unique needs and 
                aspirations of my clients.
            </p>
            <div style={{display:'flex', flexDirection:'row', margin: '2rem 0', gap:'1rem'}}>
                <button className="profile-button" onClick={toMyProject}>Projects</button>
                <a target='_blank' href="https://drive.google.com/file/d/1Q4Nb8rUf2y_7hzK5ghxKFW0e76JFTccm/view?usp=sharing">
                    <button className="profile-button" >Resume</button>
                </a>
            </div>
            <div className="session-title">I'm skilled in:</div>
            <SkillSets/>
        </MainLayout>
    )
}