import Waves from '../../components/Waves';
import perfil from '../../assets/fotoPerfil.png';
import { BiArrowToBottom } from 'react-icons/bi';
import './styles.sass';
import Sobre from '../Sobre';


export default function Home() {    
    
    const scrollTo = () => {
        const sectionAbout = document.getElementById('section-about');
        if(sectionAbout !== null) {
            sectionAbout.scrollIntoView({behavior: 'smooth'})
        }        
    }

    const handleClick = () => {
        scrollTo();    
    }

    return (
        <div className='home'>
            <header className='header-home'>
                <div className='avatar'>
                    <img src={perfil} className='foto-perfil' alt="foto frontal de uma mulher"/>
                </div>
                <div className='card'>
                    <h1 className='card-title'>Renata Bandeira</h1>
                    <h2 className='card-sub-title'>Desenvolvedora Frontend</h2>
                    <div className='card-button'>
                        <button className='card-icon' title='button' onClick={handleClick}>
                            <BiArrowToBottom id='arrow'/>
                        </button>
                        <p id='text'>Clique para mais informações!</p>
                    </div>                
                </div> 
                <div className='waves-container'>
                    <Waves/> 
                </div>
                   
            </header>
            <section  id='section-about' className='section-about'>
                <Sobre/>                           
            </section>            
        </div>
        
    )
}