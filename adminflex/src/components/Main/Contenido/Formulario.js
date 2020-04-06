import React from 'react';

const Formulario = () => {
    return (
        <form action="" className="formulario">
            <div className="campo">
                <label htmlFor="">Nombre Cliente</label>
                <input type="text"/>
            </div>
            <div className="campo">
                <label htmlFor="">Apellido Cliente</label>
                <input type="text"/>
            </div>
            <div className="campo">
                <label htmlFor="">Empresa</label>
                <input type="text"/>
            </div>
            <div className="campo">
                <label htmlFor="">Dirección</label>
                <input type="text"/>
            </div>
            <div className="campo expandir">
                <label htmlFor="">Otra Información</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div className="campo expandir">
                <label htmlFor="">Membresía: </label>
                <div className="opciones">
                    <input type="radio" id="normal" name="contact" value="normal"/>
                    <label htmlFor="">Normal</label>
                    <input type="radio" id="basico" name="contact" value="basico"/>
                    <label htmlFor="">Básico</label>
                    <input type="radio" id="premium" name="contact" value="premium"/>
                    <label htmlFor="">Premium</label>
                    <input type="radio" id="gold" name="contact" value="gold"/>
                    <label htmlFor="">Gold</label>
                </div>
            </div>

            <div className="campo enviar expandir">
                <input type="submit" className="boton" value="Enviar"/>
            </div>
        </form>
    );
}
 
export default Formulario;