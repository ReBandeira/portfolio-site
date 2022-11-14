import {Link} from "react-router-dom";
import "./styles.sass";

interface LinkProps {
    texto: string;
    redirect: string;
};

export default function NavLink(props: LinkProps) {
    return(
            <Link className="link-menu" to={props.redirect}>{props.texto}</Link>
       
    )
}