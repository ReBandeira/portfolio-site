import { BiArrowToBottom } from "react-icons/bi";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CVRenataBandeira from "../../assets/CVRenataBandeira.pdf";
import "./styles.sass";

export default function Sobre(): JSX.Element {
    return(
        <section className="about">
            <Header/>
            <main className="about-conteudo">
                <h1 className="about-title">Olá, sou a Renata;</h1>
                <article className="about-text">
                    <p>Inicie meus estudos  em tecnologia com foco em desenvolvimento web. Atualmente sou graduanda em Engenharia de Software.</p>
                    <p>Tenho conhecimento e prática em  JavaScript, HTML, CSS e algumas bibliotecas de Nodejs.</p>
                    <p>Estou aprofundando meus conhecimentos em React, Nodejs, Typescript  e Figma no momento.</p>
                    <p>Meu currículo segue a disposição no botão abaixo.</p>
                </article>
                <div className="cv">
                    <h2>Abrir CV</h2>
                    <button type="button" id="download-cv">
                        <a href={CVRenataBandeira}><BiArrowToBottom id='cv-arrow'/></a>
                        
                    </button>
                </div>
            </main>            
            <Footer/>
        </section>
    )
}