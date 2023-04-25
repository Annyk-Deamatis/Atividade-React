import Styles from "./muralha.module.css"
import logo from "../imagens/viagens.jpg" 

function Muralha(){

    return(
        
        <section id={Styles.section_muralha}>
            <div className={Styles.div_muralha}>
                <h1>Venha explorar esse lugar incrível Muralha da China!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem ab vitae illo iste aliquid neque sequi, dolore quam suscipit labore. Facilis facere doloremque sit consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur repellat itaque animi at debitis! Lorem ipsum dolor, sit amet consectetur</p>
                <img src={logo} alt="logo" />
            </div>
        </section>

    )
}

export default Muralha