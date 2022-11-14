import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import './styles.sass';

const socialNetworks = [
    {name: 'Linkedin', id: 'linkedin', link: 'https://www.linkedin.com/in/renata-bandeira/', icon: <FaLinkedinIn/>},
    {name: 'GitHub', id: 'github', link: 'https://github.com/ReBandeira', icon: <FaGithub/>},
    {name: 'e-mail', id: 'email', link: 'mailto:renatabandeiradasilva@gmail.com?subject=Questions', icon: <FaRegEnvelope/>}
];

export default function SocialNetworks() {
    return (        
        <div id='social-networks'>
            {socialNetworks.map((network) => (
                <div className='social-btns'>                
                    <a href={network.link} className='social-btn' id={network.id} key={network.id} target="_blank">
                        {network.icon}
                    </a>  
                    <h4>{network.name}</h4> 
                </div>             
            ))}
             
        </div>
    );
};
 
