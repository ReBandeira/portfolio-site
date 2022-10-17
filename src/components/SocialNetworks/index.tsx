import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './styles.sass';

const socialNetworks = [
    {name: 'linkedin', link: 'https://www.linkedin.com/in/renata-bandeira/', icon: <FaLinkedinIn/>},
    {name: 'github', link: 'https://github.com/ReBandeira', icon: <FaGithub/>}
];

export default function SocialNetworks() {
    return (        
        <section id='social-networks'>
            <h4>Para mais Informações e vizualizar os projetos que ando fazendo, acesse meu LinkedIn e GitHub  </h4>
            <div className='social-btns'>
                {socialNetworks.map((network) => (
                    <a href={network.link} className='social-btn' id={network.name} key={network.name} target="_blank">
                        {network.icon}
                    </a>                
                ))}
             </div>
        </section>
    );
};
 
