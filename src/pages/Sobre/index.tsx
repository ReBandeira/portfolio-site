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
                    
                    <p>Atuo profissionalmente com desenvolvimento de software desde o início de 2023. Sou graduanda em Engenharia de Software e tenho curiosidade por diversas áreas dentro da tecnologia. </p>
                    <p>Dentre as linguagens e ferramentas que possuo conhecimento e experiência se destacam JavaScript,
                 React, C#, Node.js, SQL e Git</p>
                 <p>Atualmente tenho buscado estudar mais conceitos e melhores práticas aplicaveis na camada de Back End.</p><br />

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
