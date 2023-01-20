import Banner from "../components/Home-Components/Banner";
import Destaques from "../components/Home-Components/Destaques";
import Formulario from "../components/Home-Components/Formulario";
import Depoimentos from "../components/Home-Components/Depoimentos";

function Home() 
{
    return(
        <main>
            <Banner/>
            <Destaques/>
            <Depoimentos/>
            <Formulario/>
            
        </main>
    )    
}

export default Home