import Styles from "./escocia.module.css"
import logo from "../imagens/viagens.jpg" 

function Escocia(){

    return(
        
        <section id={Styles.section_escocia}>
            <div className={Styles.div_escocia}>
                <h1>Venha explorar esse lugar incrível Escócia!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem ab vitae illo iste aliquid neque sequi, dolore quam suscipit labore. Facilis facere doloremque impedit ratione cumque repellat sit consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur repellat itaque animi at debitis!</p>
                <img src={logo} alt="logo" />
            </div>
        </section>

    )
}

export default Escocia