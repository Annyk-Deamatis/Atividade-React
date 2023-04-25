import {Link} from 'react-router-dom'

import Styles from "./header.module.css"
import logo from "../imagens/viagens.jpg"
import lupa from "../imagens/lupa.png"

function Header(){

    return(
            <header id={Styles.header}>
                <div className={Styles.logo}>
                    <Link to='/' ><img src={logo} alt="logo"/></Link>
                </div>

                <div id={Styles.links}>
                    <p><Link to='/' > Home </Link></p>
                    <p><Link to='/GrandCanyon' > Grand Canyon</Link></p>
                    <p><Link to='/Escocia' > Escócia</Link></p>
                    <p><Link to='/Muralha' > Muralhas da China</Link></p>
                    <p><Link to='/Aruba' > Aruba </Link></p>
                </div>

                <div id={Styles.pesquisa}>
                    <p></p>
                    <img src={lupa} alt="lupa" />
                </div>
            </header>
    
    )
}

export default Header;