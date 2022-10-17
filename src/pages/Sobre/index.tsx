import { BiArrowToBottom } from "react-icons/bi";
import Footer from "../../components/Footer";

export default function Sobre() {
    return(
        <section className="about">
            <h1 className="about-title">Olá, sou a Renata;</h1>
            <article className="about-text">
                <p>Inicie meus estudos  em tecnologia com foco em desenvolvimento web. Atualmente sou graduanda em Engenharia de Software.</p>
                <p>Tenho conhecimento e prática em  JavaScript, HTML, CSS e algumas bibliotecas de Nodejs.</p>
                <p>Estou aprofundando meus conhecimentos em React, Nodejs, Typescript  e Figma no momento</p>
                <p>Meu currículo segue a disposição no botão abaixo.</p>
            </article>
            <div className="cv">
                <h2>Baixar CV</h2>
                <button type="button" id="download-cv">
                    <BiArrowToBottom id='cv-arrow'/>
                </button>
            </div>
            <Footer/>
        </section>
    )
}