import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ilustracao from "../../assets/ilustracao.svg";
import SocialNetworks from "../../components/SocialNetworks";
import "./styles.sass";

export default function Sobre(): JSX.Element {
    return(
        <section className="about" id="section-about">
            <NavBar/>
            <main className="about-conteudo">
                <h1 className="about-title">Olá, sou a Renata;</h1>
                <article className="about-text">
                    <p>Iniciei meus estudos  em tecnologia com foco em desenvolvimento web. Atualmente sou graduanda em Engenharia de Software.</p>
                    <p>Tenho conhecimento e prática em  JavaScript, HTML, CSS e algumas bibliotecas de Nodejs.</p>
                    <p>Estou aprofundando meus conhecimentos em React, Nodejs, Typescript  e Figma no momento.</p>
                    <p>Estou disponível para contato através das redes abaixo.</p>
                </article>                
            </main>   
            <aside className="aside">
             <img  className="img-sobre" src={ilustracao} alt="ilustração de uma mulher pintando uma tela" />
            </aside>
            
            <SocialNetworks/>         
            <Footer/>
        </section>
    )
}
/***
 * <div className="cv">
                    <h2>Abrir CV</h2>
                    <button type="button" id="download-cv">
                        <a href={CVRenataBandeira}><BiArrowToBottom id='cv-arrow'/></a>
                        
                    </button>
                </div>
 * 
 */