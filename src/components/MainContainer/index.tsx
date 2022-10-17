import InformationContacts from '../Footer';
import SocialNetworks from '../SocialNetworks';
import './styles.sass';

export default function MainContainer() {
    return ( 
        <main id="main-container">   
            <section className='about-container'>
                <h2>Olá! Vou me apresentar rápidamente; </h2>
                <p>Estudo desenvolvimento web com foco principal em frontend. </p> 
                <p>Costumo utilizar JavaScript, HTML, CSS, React e Nodejs em  meus projetos. </p>   
                <p>Atualmente, estou aprofundando meus conhecimentos em React, Nodejs e Typescript.</p>
            </section>
            <div className='social-contacts'>
                    <SocialNetworks/>
            </div>           
        </main>
    )
}