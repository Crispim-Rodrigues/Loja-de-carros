import "../../App.css";
function Formulario() {
    return(
        <section className="destaques_main">
            <div className="destaques_title">
            <div></div>
            <h2>Entre em contato</h2>
            <div></div>
            </div>
            <div className="formulario_box">
                <form>
                    <input type="text" placeholder="nome" />
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="telefone" />
                    <textarea></textarea>
                    <input type="submit" value="ENVIAR" />
                </form>
            </div>
        </section>
    )
}

export default Formulario