import NavBar from "../NavBar";
import Nav from "../NavBar";
import "./styles.sass";

export default function Header() {
    return(
        <header className="header" id="header">
            <div className="logo">
                <img src="#" alt="" />
            </div>
            <NavBar/>
        </header>
    )
}