import MainLayout from '../Layout/MainLayout';
import Carousel from 'react-bootstrap/Carousel';
import settlershub from '../Assets/settlershub.png';
import heartymeal from '../Assets/heartymeal.jpg';
import justip from '../Assets/justip.jpg';
import '../Styles/components.css';
import { Link } from 'react-router-dom';

export default function Project() {
    return(
        <MainLayout>
            <div style={{padding:'2rem 0 0 0'}}>
                <Carousel>
                    <Carousel.Item>
                        <div className='cars-items' style={{backgroundImage: `url("${settlershub}")`}}>
                            <a href='https://client-sh.vercel.app/' target='_blank'
                                className='css-button-retro--sand' 
                                style={{margin:'0 0 3rem 16rem', textAlign:'center', textDecoration:'none'}}>Read more</a>
                        </div>
                        
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='cars-items' style={{backgroundImage: `url("${heartymeal}")`}}>
                            <a href='https://hearty-meal.vercel.app/' target='_blank'
                                className='css-button-retro--sand' 
                                style={{margin:'0 0 3rem 16rem', textAlign:'center', textDecoration:'none'}}>Read more</a>
                        </div>
                  
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='cars-items' style={{backgroundImage: `url("${justip}")`}}>
                            <a href='https://your-ip-generator.vercel.app/' target='_blank'
                                className='css-button-retro--sand' 
                                style={{margin:'0 0 3rem 16rem', textAlign:'center', textDecoration:'none'}}>Read more</a>
                        </div>
                     
                    </Carousel.Item>
                </Carousel>
            </div>
        </MainLayout>            
    )
}

export function MyProjects() {
    return(
        <MainLayout>
         <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', margin:'2rem', gap: '2rem'}}>
                <figure className='card-img' style={{backgroundImage: `url("${settlershub}")`}}>
                    <div className='card-info'>
                        <h5>website title</h5>
                        <Link>Read more</Link>
                    </div>
                </figure>
                <figure className='card-img' style={{backgroundImage: `url("${settlershub}")`}}>
                    <div className='card-info'>
                        <h5>website title</h5>
                        <Link>Read more</Link>
                    </div>
                </figure>
                <figure className='card-img' style={{backgroundImage: `url("${settlershub}")`}}>
                    <div className='card-info'>
                        <h5>website title</h5>
                        <Link>Read more</Link>
                    </div>
                </figure>
                <figure className='card-img' style={{backgroundImage: `url("${settlershub}")`}}>
                    <div className='card-info'>
                        <h5>website title</h5>
                        <Link>Read more</Link>
                    </div>
                </figure>
               
           
         </div>
        </MainLayout>
    )
}