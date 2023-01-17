import { Link } from "react-router-dom";

function Navbar() {

    return(
        <header>
            <div className="50w">

            </div>
            <div className="50w">
                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/Venda">Venda</Link>
                        <Link to="/Sobre">Sobre</Link>
                        <Link to="/Contato">Contato</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar