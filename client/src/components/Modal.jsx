import React from 'react'

const Modal = ({ children }) => {
    return (
            <div className='modal'>
                <div className='contenido'>
                    <h1>Asignar ayuda</h1>
                    <label >Numero de placa</label>
                    <input type="text" />
                    <label >Numero de patrulla</label>
                    <input type="text" />
                    <button className='cerrar'>cerrar</button>
                    <button>continuar</button>
                    {children}
                </div>
            </div>
    )
}

export default Modal