import React from 'react';
import usuario from './../../../img/usuario.svg';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="usuario">
                <img src={usuario} alt="usuario"/>
                <p>Bienvenid@: <span>Admin</span></p>
            </div>
            <div className="buscador">
                <input type="text" placeholder="Buscar..."/>
            </div>
            <div className="menu-admin">
                <h2>Menú de Administración</h2>
                <ul className="menu">
                    <li>
                        <a href="/">
                            <i className="fas fa-address-book"></i>
                            Clientes
                        </a>
                        <ul>
                            <li>
                                <a href="/">
                                    <i className="fas fa-list"></i>
                                    Ver Todos
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fas fa-plus"></i>
                                    Agregar Nuevo
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fas fa-chart-line"></i>
                            Ventas
                        </a>
                        <ul>
                            <li>
                                <a href="/">
                                    <i className="fas fa-list"></i>
                                    Ver Todos
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fas fa-plus"></i>
                                    Agregar Nuevo
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fas fa-box"></i>
                            Inventario
                        </a>
                        <ul>
                            <li>
                                <a href="/">
                                    <i className="fas fa-list"></i>
                                    Ver Todos
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fas fa-plus"></i>
                                    Agregar Nuevo
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fas fa-file-alt"></i>
                            Facturas
                        </a>
                        <ul>
                            <li>
                                <a href="/">
                                    <i className="fas fa-list"></i>
                                    Ver Todos
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fas fa-plus"></i>
                                    Agregar Nuevo
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fas fa-calendar-alt"></i>
                            Calendario
                        </a>
                        <ul>
                            <li>
                                <a href="/">
                                    <i className="fas fa-list"></i>
                                    Ver Todos
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fas fa-plus"></i>
                                    Agregar Nuevo
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fas fa-pencil-alt"></i>
                            Editar Perfil
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
 
export default Sidebar;