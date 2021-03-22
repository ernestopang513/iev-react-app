import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../styles/img/logo2.jpeg'

export const Header = () => {
    return (
        <header className = 'header__hero'>
            
            <div className = 'generales__contenedor generales__allVier'>

                <div className = 'header__separacion-flex'>

                    <div className = 'header__barra'>

                        <Link
                            to = '/'
                            className= 'generales__casiLogo'
                        >
                            Instituto <span>Educativo</span> Vista Hermosa
                        </Link>

                        <nav className = 'header__navegacion'>

                            <input className="header__oculta" type="checkbox" id="menu"/>
                            <label className="header__oculta"  htmlFor ="menu"><i className="fas fa-bars"></i></label>
                            
                            <ul className="header__link-flex">
                                <li><Link className = 'link' to="/aboutUs">Nosotros</Link></li>

                                <li><Link className = 'link' to="/aboutUs">Certificaciones</Link></li>

                                <li><Link className = 'link' to="/aboutUs">Cursos</Link></li>

                                <li><Link className = 'link' to="/aboutUs">Testimoniales</Link></li>
                            </ul>
                        </nav>

                    </div>

                    <div className="header__inferior-header">
                        <Link to = '/'><img className="header__logo-medidas" src={logo} alt="logo"/></Link>

                        <h1 className="header__mision">
                            Solución <span className="azul">rápida</span> y <span className="rojo">eficaz</span> a tus problemas de educación
                        </h1>
                        <p className="header__informacion">Antes <span>conamat</span> cuajimalpa</p>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}
