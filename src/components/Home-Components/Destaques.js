import "../../App.css";
import carro from '../../images/carro1.jpg'
function Destaques() {
    const car = []

    for(var i = 0; i < 3; i++){
        car.push(
    
            <div key={i} className="singlecar">
                <img src={carro} alt=""/>
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing vitae dolorem voluptas a </p>
                <a href="/#">Mais detalhes</a>
            </div>

        )     
    }

    console.log(car[0]);
    return(
        <section className="destaques_main">
            <div className="destaques_title">
            <div></div>
            <h2>VEÍCULOS EM DESTAQUE</h2>
            <div></div>
            </div>
            <div className="destaques_boxes">
                {car}
            </div>
        </section>
    )
}

export default Destaques