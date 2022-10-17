import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ilustracao from "../../assets/ilustracao.svg";

export default function Contatos(): JSX.Element {
    return(
        <section className="contatos">
           <Header/>
           <main>
            <div>
                    <h1>Contatos</h1>
                    <p>Você pode entra em contato comigo através das redes abaixo.</p>
                    <p>Ou  me enviando um e-mail.</p>
            </div>
            <div>
                <span> Icone
                    <link rel="stylesheet" href="#" />
                </span>
                <p>nome da rede</p>                  
            </div>
           </main>
           <aside>           
                <img src={ilustracao} alt="ilustração de uma mulher pintando uma tela" />
            </aside>           
           <Footer/>
        </section>
    )
}