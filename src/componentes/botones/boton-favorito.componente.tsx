import { MouseEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { guardarFavoritos } from '../../redux/actions/favoritosActions';
import './boton-favorito.css';

interface BotonFavoritoProps {
    esFavorito: boolean;
    onClick: MouseEventHandler<HTMLImageElement>
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */

// onClick: any este va junto con esFavorito
const BotonFavorito = ({esFavorito, onClick}: BotonFavoritoProps) => {

    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={onClick}/>
    </div>
}

export default BotonFavorito;