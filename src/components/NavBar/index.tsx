import {Link} from "react-router-dom";
import "./styles.sass";
import { BiMenu } from "react-icons/bi";

export default function NavBar() {
    return(
        <nav className="nav-bar">
            <input id="menu-hamburguer" type="checkbox" />
            <span className="hamburguer">
                <label htmlFor="menu-hamburguer">
                    <BiMenu id="menu-icon"/>
                </label>
            
            </span>            
            <ul className="lista">
                <li>
                    <Link className="link-menu" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link-menu" to="/sobre">Sobre</Link>  
                </li>
                <li>
                    <Link className="link-menu" to="/projetos">Projetos</Link>
                </li>
                <li>
                    <Link className="link-menu" to="/contatos">Contatos</Link>
                </li>

            </ul>
           
            
        </nav>
    )
};
