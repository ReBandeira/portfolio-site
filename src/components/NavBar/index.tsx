import {Link} from "react-router-dom";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/logo.png";
import "./styles.sass";

export default function NavBar() {

    const [active, setActive] = useState("nav-menu");
    const navToggle = () => {
        active === "nav-menu" ? 
        setActive("nav-menu nav-active") 
        : setActive("nav-menu");
    };

     return(
        <nav className="nav-bar">    
            <div className="logo">
                
            </div>                          
            <ul className={active}>
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
            <div onClick={navToggle} className="nav-toggler">                           
                <BiMenu id="menu-icon"/>                           
            </div>          
            
        </nav>
    )
};
