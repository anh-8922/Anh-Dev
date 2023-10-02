import projectsData from "../Data/ProjectData"

export default function ProjectCard() {
    const projectListStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
        gap: '2rem'
    }

    return(
        <div style={projectListStyle}>
            {projectsData.map((project) => (
                <div key={project.id} className="projects-card">
                    <img src={project.imageUrl} className="projects-img"/>
                    <div style={{padding:'1rem 0'}}>
                        <h6 style={{fontWeight:'bold'}}>{project.name}</h6>
                        
                        <p>Date: {project.date}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button className="profile-button">View</button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        
    )
}