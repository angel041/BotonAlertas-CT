import React from 'react'
import '../css/listaDeAlertas.css'
const DIV_MODAL_STYLE = {
    position : 'fixed',
    width: '40%',
    height: '25%',
    top: '50%',
    left: '50%',
    transform : 'translate(-50%,-50%)',
    backgroundColor: '#FFE5BA',
    padding: '50px',
    zIndex: 1000,
    borderRadius: '10px',
}
const DIV_OVERLAY_STYLE = {
    position : 'fixed',
    top : 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor : 'rgba(0,0,0,.7)',
    zIndex : 1000
}
const BotonX = {
    position : 'absolute',
    top : 0,
    right: '10px',
    with:'150px',
    height: '50px',
    backgroundColor: '#FFE5BA',
    zIndex : 1000,
    border: 'none',
}
const LetraP = {
    position : 'absolute',
    top : 0,
    right: 0,
    with:'150px',
    backgroundColor: '#FFE5BA',
    zIndex : 1000,
    fontSize:' 40px',
}
export default function Modal3({children, open, close}) {
    if(!open) return null
    return (
        <>
            <div style = {DIV_OVERLAY_STYLE} />
            <div style={DIV_MODAL_STYLE}>
                <div>
                    <button style={BotonX} onClick={close}><p style={LetraP}>X</p></button></div>
                {children}
            </div>
        </>
    )
}