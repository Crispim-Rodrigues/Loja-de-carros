import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Venda from './pages/Venda';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Venda' element={<Venda/>}/>
        <Route exact path='/Sobre' element={<Sobre/>}/>
        <Route exact path='/Contato' element={<Contato/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
