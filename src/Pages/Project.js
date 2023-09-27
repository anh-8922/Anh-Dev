import MainLayout from '../Layout/MainLayout';
import Carousel from 'react-bootstrap/Carousel';
import settlershub from '../Assets/settlershub.jpeg';
import heartymeal from '../Assets/heartymeal.jpeg';
import todolist from '../Assets/todolist.jpeg';
import justip from '../Assets/justip.jpeg';

import { Link } from 'react-router-dom';

export function MyProjects() {
    return(
        <MainLayout>
         <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', margin:'2rem', gap: '2rem'}}>
                <figure className='card-img' style={{backgroundImage: `url("${settlershub}")`}}>
                    <div className='card-info'>
                        <h5>Settlers Hub</h5>
                        <Link className='open-link' target='_blank' to={'https://client-sh.vercel.app/'}>Read more</Link>
                    </div>
                </figure>
                <figure className='card-img' style={{backgroundImage: `url("${heartymeal}")`}}>
                    <div className='card-info'>
                        <h5>Hearty Meal</h5>
                        <Link className='open-link' target='_blank' to={'https://hearty-meal.vercel.app/'}>Read more</Link>
                    </div>
                </figure>
                <figure className='card-img' style={{backgroundImage: `url("${justip}")`}}>
                    <div className='card-info'>
                        <h5>Just IP</h5>
                        <Link className='open-link' target='_blank' to={'https://your-ip-generator.vercel.app/'}>Read more</Link>
                    </div>
                </figure>
                <figure className='card-img' style={{backgroundImage: `url("${todolist}")`}}>
                    <div className='card-info'>
                        <h5>Lista</h5>
                        <Link className='open-link' target='_blank' to={'https://to-do-list-phi-flax.vercel.app/'}>Read more</Link>
                    </div>
                </figure>
               
           
         </div>
        </MainLayout>
    )
}