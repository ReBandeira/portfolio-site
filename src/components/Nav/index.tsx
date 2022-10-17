import NavLink from "../NavLink";

interface Navprops {
    id?: string;
}

export default function Nav() {
    return(
        <nav className="nav-bar">
            <NavLink texto="Sobre" redirect="/sobre"/>
            <NavLink texto="Projetos" redirect="/projetos"/>
            <NavLink texto="Contato"  redirect="/contato"/>
        </nav>
    )
};