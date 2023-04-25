import Styles from "./home.module.css"
import mala from "../imagens/mala.jpg"  


function Home(){

    return(
        
        <section id={Styles.section_home}>
            <div className={Styles.img_home}>
                <img src={mala} alt="mala" />
            </div>
            <div className={Styles.texto_home}>
                <h1>Encontre aqui a viagem dos seus sonhos!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem ab vitae illo iste aliquid neque sequi, dolore quam suscipit labore. Facilis facere doloremque impedit ratione cumque repellat sit consequuntur.</p>
            </div>
        </section>

    )
}

export default Home