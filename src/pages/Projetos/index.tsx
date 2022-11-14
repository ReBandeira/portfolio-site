import Footer from "../../components/Footer";
import Header from "../../components/Header";
import construcao from "../../assets/construcao.svg";
import "./styles.sass";

const projetos = [
    {nome: "projeto1", titulo: "Em Construção", descricao: "Em fase de finalização. Mais detalhes em breve", img: construcao, link: "#"},
    {nome: "projeto2", titulo: "Em Construção", descricao: "Passando por refatoração. Mais detalhes em breve", img: construcao, link: "#"},
    {nome: "projeto3", titulo: "Em Construção", descricao: "Em desenvolvimento. Mais detalhes em breve", img: construcao, link: "#"},
];

export default function Projetos() {
    return(
        <section className="projetos">
            <Header/>
            <main>
                <h1>Estes são alguns dos projetos que tenho trabalhado; </h1>
                <h2>Em breve atualizações!</h2>
                <div className="cards-projetos">
                    {projetos.map((projeto, index) => (
                         <div className="card-projeto" key={projeto.nome}>
                         <div className="card-projeto-img">
                             <img src={projeto.img} alt="ilustração de uma tela com código HTML sendo pintanda." />
                             <span>
                                 <link rel="stylesheet" href={projeto.link} />
                             </span>
                         </div>          
                     
                         <div className="card-projeto-info">
                             <h4>{projeto.titulo}</h4>
                             <p>{projeto.descricao}</p>
                         </div> 
                     </div>
 
                    ))}
            
                   
                </div>
            </main>            
           <Footer/>             
        </section>
    )
}