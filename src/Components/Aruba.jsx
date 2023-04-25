import Styles from "./aruba.module.css"
import logo from "../imagens/viagens.jpg" 

function Aruba(){

    return(
        
        <section id={Styles.section_aruba}>
            <div className={Styles.div_aruba}>
                <h1>Venha explorar esse lugar incrível Aruba!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem ab vitae illo iste aliquid neque sequi, dolore quam suscipit labore. Facilis facere doloremque sit consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur repellat itaque animi at debitis! Lorem ipsum dolor, sit amet consectetur</p>
                <img src={logo} alt="logo" />
            </div>
        </section>

    )
}

export default Aruba