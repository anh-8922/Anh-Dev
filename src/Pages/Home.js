import MainLayout from '../Layout/MainLayout';
import mountain from '../Assets/mountain.jpg';

export default function Home() {
    return(
        <MainLayout>
            <section style={{
                display:'flex', flexDirection:'row', 
                justifyContent:'space-between',
                padding: '3.5rem'}}>
                <div style={{width: '30rem'}}>
                    <p>An enthusiastic and committed 
                        developer who is actively searching for 
                        opportunities to start my career in 
                        Web Design & Development.
                        I am well-versed in programming 
                        languages such as JavaScript and have 
                        a strong command of the MERN stack
                        (MongoDB, Express.js, React, and 
                        Node.js), which allow me to develop 
                        full-fledged web applications. I excel at 
                        tackling challenging problems and 
                        thrive in collaborative environments, 
                        working closely with other developers 
                        to create innovative solutions.
                    </p>
                    <button>My projects</button>
                </div>
                <div style={{
                backgroundImage:`url("${mountain}")`,
                backgroundSize: 'cover',
                width: '20rem',
                height:'25rem' }}></div>
            </section>
        </MainLayout>
            
            
    )
}