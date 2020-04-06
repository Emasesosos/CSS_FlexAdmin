import React, { useState } from 'react';
import logo from './../../logo.svg';

const Header = () => {

    const [flecha, guardarFlecha] = useState({
        currentArrow: 'fa-arrow-left'
    });

    const onClick = (e) => {
        // console.log('Click en las Flechas');
        const claseMenu = e.target.classList;
        // console.log('claseMenu: ', claseMenu);
        
        // Crear variables que seleccionen las flechas y la página
        const contenedor = document.querySelector('.pagina');
        // console.log(contenedor);

        if(claseMenu.contains('fa-arrow-left')) {
            // console.log('Cierra el Menú');
            guardarFlecha({
                currentArrow: 'fa-arrow-right'
            });
            contenedor.classList.add('no-menu');
        } else {
            // console.log('Abre el Menú');
            guardarFlecha({
                currentArrow: 'fa-arrow-left'
            });
            contenedor.classList.remove('no-menu');
        }
    }

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
                    <i 
                        className={`fas ${flecha.currentArrow}`} 
                        onClick={onClick} 
                    ></i>
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