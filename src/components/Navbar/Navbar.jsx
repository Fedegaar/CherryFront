import React from 'react'
import CherryLogo from '../../images/CherryLogo.png'
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.navMain}>
            <ul className={style.navLinks}>
                <li className={style.navLogo}><a href="/home"><img src={CherryLogo} alt="Cherry Logo" height="25px" width="25px"/></a></li>
                <li className={style.Link}><a href="/catalog">Catalogo</a></li>
                <li className={style.Link}><a href="/services">Servicios</a></li>
                <li className={style.Link}>Articulo 3</li>
            </ul>
        </nav>

    )
}

export default Navbar
