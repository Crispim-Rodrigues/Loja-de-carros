import { Link } from "react-router-dom";
import '../App.css';
import logo from '../images/logo.jpg';
import { useRef, useState } from "react";
function Navbar() {
    const home = useRef(null);
    const venda = useRef(null);
    const sobre = useRef(null);
    const contato = useRef(null);
    const [reset, setReset] = useState(home);
    
    function Page(params) {
        reset.current.style.color = "black";
        params.current.style.color = "#ee4444";
        setTimeout(()=>setReset(params),1)
    }

    return(
        <header>
            <div className="center">
                <div className="w50">
                    <div className="box_image">
                        <img src={logo} alt={logo.name} draggable="false"/>
                    </div>
                </div>
                <div className="w50">
                    <nav>
                        <ul>
                            <li><Link ref={home} onClick={()=>Page(home)} to="/">Home</Link></li>
                            <li><Link ref={venda} onClick={()=>Page(venda)} to="/Venda">Venda</Link></li>
                            <li><Link ref={sobre} onClick={()=>Page(sobre)} to="/Sobre">Sobre</Link></li>
                            <li><Link ref={contato} onClick={()=>Page(contato)} to="/Contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>    
        </header>
    )
}

export default Navbar