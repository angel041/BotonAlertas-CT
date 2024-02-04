import React from "react";
import '../css/Error404.css';
import efecto1 from '../media/Vector 5.png';
import I404 from '../media/404-removebg-preview.png'
export default function Error404(){
    
    return(
        <>
        <img src={efecto1} className="efecto1" />
        <img src={I404} className="efecto2" />

        
        <div className="Anuncio">
            
            <p>Página no encontrada :(</p>
        </div>
        

        </>
    );
}