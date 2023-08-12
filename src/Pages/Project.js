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
                            <a href='https://settlers-hub-client.vercel.app/' target='_blank'
                                className='css-button-retro--sand' 
                                style={{margin:'0 0 3rem 16rem', textAlign:'center', textDecoration:'none'}}>Read more</a>
                        </div>
                        <div style={{backgroundColor:'grey', textAlign:'center'}}>
                            adsafa
                        </div>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='cars-items' style={{backgroundImage: `url("${heartymeal}")`}}>
                            <a href='https://hearty-meal.vercel.app/' target='_blank'
                                className='css-button-retro--sand' 
                                style={{margin:'0 0 3rem 16rem', textAlign:'center', textDecoration:'none'}}>Read more</a>
                        </div>
                        <div style={{backgroundColor:'grey'}}>fsdgfsdfdsf</div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='cars-items' style={{backgroundImage: `url("${justip}")`}}>
                            <a href='https://your-ip-generator.vercel.app/' target='_blank'
                                className='css-button-retro--sand' 
                                style={{margin:'0 0 3rem 16rem', textAlign:'center', textDecoration:'none'}}>Read more</a>
                        </div>
                        <div style={{backgroundColor:'grey'}}>fsdgfsdfdsf</div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </MainLayout>            
    )
}