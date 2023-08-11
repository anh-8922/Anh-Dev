import MainLayout from '../Layout/MainLayout';
import Carousel from 'react-bootstrap/Carousel';
import settlershub from '../Assets/settlershub.png';
import heartymeal from '../Assets/heartymeal.jpg';
import justip from '../Assets/justip.jpg';
import '../Styles/components.css'

export default function Project() {
    return(
        <MainLayout>
            <div style={{padding:'2rem 0 0 0'}}>
                <Carousel>
                    <Carousel.Item>
                        <div className='cars-items' style={{backgroundImage: `url("${settlershub}")`}}></div>
                        <div style={{backgroundColor:'grey'}}>fsdgfsdfdsf</div>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='cars-items' style={{backgroundImage: `url("${heartymeal}")`}}></div>
                        <div style={{backgroundColor:'grey'}}>fsdgfsdfdsf</div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='cars-items' style={{backgroundImage: `url("${justip}")`}}></div>
                        <div style={{backgroundColor:'grey'}}>fsdgfsdfdsf</div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </MainLayout>            
    )
}