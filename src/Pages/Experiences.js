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
            <h5>🏗️ 2018: Setting the Foundation 🏗️</h5>
            <p>Fast forward to 2018, a pivotal year where I laid down the solid groundwork. Learning the 
                fundamentals of coding languages and concepts became my daily ritual. With HTML, CSS, and 
                JavaScript, I started building the very foundation upon which I would construct my career. 
                The excitement of seeing my first webpage come to life was unmatched, and it marked the 
                beginning of my journey's ascent.</p>
            <h5>🚀 2019: Diving into the Code 🚀</h5>
            <p>The following year, 2019, was marked by an insatiable desire to delve deeper. My coding prowess 
                evolved from creating static web pages to dynamic, interactive experiences. Lines of code 
                turned into functional applications, and the world of APIs and frameworks beckoned. 
                This period of exploration and experimentation defined my passion for bringing ideas to 
                life through code.</p>
            <h5>🛠️ 2020: Freelance and Skill Refinement 🛠️</h5>
            <p>As 2020 emerged, I sought to refine my skills through real-world challenges. Freelancing 
                became my portal to the professional coding realm. The intricacies of working with clients, 
                understanding project requirements, and delivering solutions forged me into a versatile 
                developer. Each project was an opportunity to not only improve my skills but also to 
                comprehend the human side of coding - how technology translates into value for individuals 
                and businesses.</p>
            <h5>📚 2022: Professional Training and Beyond 📚</h5>
            <p>In 2022, I recognized the significance of professional training. Investing in myself through 
                focused learning propelled my skills to new heights. Courses, workshops, and mentorship 
                allowed me to embrace emerging technologies and industry best practices. The digital world 
                was evolving rapidly, and I was determined to remain at the forefront of innovation.</p>
            <h5>🌟 2023: Mastery of Fullstack 🌟</h5>
            <p>And now, here we are in 2023, a year of mastery. The journey from planting seeds to fullstack 
                mastery has been a rollercoaster of dedication and growth. From crafting elegant front-end 
                interfaces to engineering robust back-end systems, I've embraced the entirety of the 
                development landscape. The exhilaration of orchestrating complete applications is both 
                humbling and empowering - a testament to the progress I've achieved.</p>
            <h5>🔮 Gazing Ahead: The Unwritten Chapters 🔮</h5>
            <p>As I reflect on this journey, I can't help but wonder about the chapters that remain unwritten. 
                The path of a coder is infinite, evolving as technology advances and creative possibilities expand. 
                The heart of this journey lies in continuous learning, embracing change, and using code as a 
                vehicle for innovation and impact.</p>
        </>
    )
}