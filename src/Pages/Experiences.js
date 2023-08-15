import MainLayout from '../Layout/MainLayout';
import '../Styles/components.css';
import milestone from '../Assets/milestone.png';
import { Link } from 'react-router-dom';

export default function Experiences() {
    return(
        <MainLayout>
            <div style={{display:'flex', flexDirection:'row', margin:'2rem'}}>
                <div style={{width:'40%'}}>test</div>
                <div style={{
                    backgroundImage: `url("${milestone}")`, 
                    width: '50rem', height:'35rem', 
                    backgroundSize:'cover',
                    borderRadius:'0.5rem'}}></div>
            </div>
        </MainLayout>
    )
}