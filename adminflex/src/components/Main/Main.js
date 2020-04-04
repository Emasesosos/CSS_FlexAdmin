import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Contenido from './Contenido/Contenido';

const Main = () => {
    return (
        <main className="contenedor-principal">
            <Sidebar/>
            <Contenido/>
        </main>
    );
}
 
export default Main;