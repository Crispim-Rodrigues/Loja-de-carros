import { Link } from "react-router-dom";
import '../App.css';
import logo from '../images/logo.jpg';
import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
    const home = useRef([]);
    const venda = useRef([]);
    const sobre = useRef([]);
    const contato = useRef([]);
    const [reset, setReset] = useState(home);
    const nav = useRef();

    function Nav() {
        nav.current.classList.toggle("active-nav");
    }
    
    function Page(params) {

        // reset.current.style.color = "black";
        reset.current.map(el => el.style.color = "black")
        // params.current.style.color = "#ee4444";
        params.current.map(el => el.style.color = "#ee4444")
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
                    <nav className="nav-desktop">
                        <ul>
                            <li><Link ref={Link => home.current[0] = Link} onClick={()=>Page(home)} to="/">Home</Link></li>
                            <li><Link ref={Link => venda.current[0] = Link} onClick={()=>Page(venda)} to="/Venda">Venda</Link></li>
                            <li><Link ref={Link => sobre.current[0] = Link} onClick={()=>Page(sobre)} to="/Sobre">Sobre</Link></li>
                            <li><Link ref={Link => contato.current[0] = Link} onClick={()=>Page(contato)} to="/Contato">Contato</Link></li>
                        </ul>
                    </nav>
                    <div className="menu-mobile">
                        <GiHamburgerMenu onClick={e=> Nav()} className="GiHamburgerMenu"/>
                        <nav className="nav-mobile" ref={nav}>
                            
                            <ul>
                                <li><Link ref={Link => home.current[1] = Link} name='oi' onClick={()=>Page(home)} to="/">Home</Link></li>
                                <li><Link ref={Link => venda.current[1] = Link} onClick={()=>Page(venda)} to="/Venda">Venda</Link></li>
                                <li><Link ref={Link => sobre.current[1] = Link} onClick={()=>Page(sobre)} to="/Sobre">Sobre</Link></li>
                                <li><Link ref={Link => contato.current[1] = Link} onClick={()=>Page(contato)} to="/Contato">Contato</Link></li>
                            </ul> 
                        </nav>
                    </div>
                </div>
            </div>    
        </header>
    )
}

export default Navbar