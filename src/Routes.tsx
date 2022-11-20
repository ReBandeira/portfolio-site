import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
import Sobre from "./pages/Sobre";

export default function Routes(): JSX.Element {

    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/" element={<Home/>} />
                <Route path="/projetos" element={<Projetos/>} />
             </WrapperRoutes>
        </BrowserRouter>

    );
};

/**
 * <Route path="/sobre" element={<Sobre/>} />
 *  <Route path="/contatos" element={<Contatos/>} />
 */