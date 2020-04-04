import React from 'react';
import logo from './../../logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="nombre-sitio">
                <div className="escritorio-logo">
                    <h1 className="escritorio"> 
                        <span>AdminFlex</span>
                    </h1>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <h1 className="movil">AF</h1>
            </div>
            <div className="barra">
                <div className="menu-izquierdo">
                    <i className="fas fa-arrow-left"></i>
                    <i className="fas fa-arrow-right"></i>
                </div>
                <div className="menu-derecho">
                    <div className="mensaje caja">
                        <a href="/">
                            <i className="fas fa-comment-alt"></i>
                            Mensajes
                            <span>20</span>
                        </a>
                    </div>
                    <div className="alertas caja">
                        <a href="/">
                            <i className="fas fa-bell"></i>
                            Alertas
                            <span>10</span>
                        </a>
                    </div>
                    <div className="cerrar caja">
                        <a href="/">
                            Cerrar Sesión
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;