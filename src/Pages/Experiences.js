import MainLayout from '../Layout/MainLayout';
import '../Styles/components.css';
import milestone from '../Assets/milestone.jpg';
import { Link, useNavigate} from 'react-router-dom';

export default function Journey() {
    
    return(
        <MainLayout>
            <div style={{display:'flex', flexDirection:'row', margin:'3rem', justifyContent:'space-between'}}>
                <div style={{width:'55%'}}><TimelineStory/></div>
                <a href='https://i.postimg.cc/B3MMNmkL/timeline.jpg' target='_blank' 
                    style={{
                    backgroundImage: `url("${milestone}")`, 
                    width: '40%', height:'70rem', 
                    backgroundSize:'cover',
                    borderRadius:'0.5rem'}}></a>
            </div>
        </MainLayout>
    )
}

function TimelineStory() {
    return(
        <>
            <h3>Coding Chronicles: From Seeds Planted to Fullstack Mastery</h3>
            <p>During my time at university, my interest in Information Technology
                 took root. Cast back to the year 2007 – a time of flip phones, MySpace, and the dawn 
                 of a digital revolution. It was during this transformative era that I took my first 
                 steps on a path that would shape my future in ways I could never have imagined.<br/>
                 After leaving university in 2010, I embarked on a different career trajectory, 
                 venturing into the realm of retail and teaching. Despite the shift, my passion for 
                 Information Technology remained steadfast. The allure of technology's ever-evolving 
                 landscape continued to beckon me. It was clear that my heart belonged to the digital world.<br/>
                 In 2016, a decision that would mark a turning point in my journey was made. 
                 I chose to rekindle my connection with my true passion and reenter the realm of 
                 Information Technology. With unwavering determination, I set forth on a new path: 
                 the path of web development. Armed with the knowledge and experiences amassed over 
                 the years, I embraced this fresh chapter with enthusiasm, ready to embrace challenges 
                 and harness my skills to create digital wonders.

            </p>
            <h5>🌱 2016: Planting the Seeds - My Journey Begins 🌱</h5>
            <p>This is when my journey as a web developer commenced. Armed with an insatiable hunger to 
                learn and explore, I began nurturing the seeds of coding. Back then, I could only imagine 
                the incredible growth that awaited me in the digital realm.</p>
        </>
    )
}