import MainLayout from "../Layout/MainLayout";
import SkillSets from "../Components/SkillSet";

export default function HomePage() {
    return(
        <MainLayout>
            <h1 style={{fontFamily:'La Belle Aurore', fontSize:'4rem'}}>Anh Chau</h1>
            <h3>Web Developer | Navigate the Digital Frontier</h3>
            <p>I'm a web enthusiast who loves crafting user-friendly, visually captivating, and fully functional websites.
            My proficiency covers both front-end and back-end development, allowing me to build complete web applications. 
            I have a knack for tackling intricate problems and consistently delivering high-quality projects that meet 
            clients' requirements. 
            </p>
            <div style={{display:'flex', flexDirection:'row', margin: '2rem 0', gap:'1rem'}}>
                <button className="profile-button">Projects</button>
                <button className="profile-button">Resume</button>
            </div>
            <div className="session-title">I'm skilled in:</div>
            <SkillSets/>
        </MainLayout>
    )
}