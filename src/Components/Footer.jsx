import Styles from "./footer.module.css"
import instagram from "../imagens/insta.png"
import facebook from "../imagens/facebook.png"
import tiktok from "../imagens/tiktok.png"
import whats from "../imagens/whats.png"


function Footer() {
    return(

        <footer id={Styles.footer}>
                <h3>Siga-nos em nossas redes sociais</h3>

                <div>
                    <img src={instagram} alt="insta" />
                    <img src={facebook} alt="face" />
                    <img src={tiktok} alt="tiktok" />
                    <img src={whats} alt="whats" />
                </div>

                <h3>Telefone de contato: (11)9555-3355</h3>
            </footer>

    )
}

export default Footer