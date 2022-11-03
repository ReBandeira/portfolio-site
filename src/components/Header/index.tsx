import Nav from "../Nav";
import "./styles.sass";

export default function Header() {
    return(
        <header className="header" id="header">
            <div className="header-logo">logo</div>
            <Nav/>
        </header>
    )
}