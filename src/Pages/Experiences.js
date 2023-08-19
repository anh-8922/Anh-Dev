import MainLayout from '../Layout/MainLayout';
import '../Styles/components.css';
import milestone from '../Assets/milestone.jpg';
import { Link } from 'react-router-dom';

export default function Experiences() {
    return(
        <MainLayout>
            <div style={{display:'flex', flexDirection:'row', margin:'2rem', justifyContent:'space-between'}}>
                <div style={{width:'40%'}}>test</div>
                <div style={{
                    backgroundImage: `url("${milestone}")`, 
                    width: '37%', height:'66rem', 
                    backgroundSize:'cover',
                    borderRadius:'0.5rem'}}></div>
            </div>
        </MainLayout>
    )
}