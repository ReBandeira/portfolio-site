import Footer from "../../components/Footer";
import ilustracao from "../../assets/ilustracao.svg";
import SocialNetworks from "../../components/SocialNetworks";
import "./styles.sass";
import NavBar from "../../components/NavBar";

export default function Contatos(): JSX.Element {
    return(
        <section className="contatos">
           <NavBar/>
           <main>
            <div className="info-contatos">
                <h1>Contatos</h1>
                <p>Você pode entrar em contato comigo através das redes abaixo, ou me enviando um e-mail.</p>   
            </div>
            <img  className="img-contatos" src={ilustracao} alt="ilustração de uma mulher pintando uma tela" />
           </main>  
           <SocialNetworks/>
           <Footer/>
        </section>
    )
}