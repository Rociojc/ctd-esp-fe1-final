import { useEffect, useState } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import Personaje from "../types/personaje.types";
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from "react-redux";
import { IRootState } from "../redux/store";

interface FavoritosProps {
    favoritos: Personaje[]
}

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const PaginaFavoritos = ({favoritos}: FavoritosProps) => {

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes personajes={favoritos}/>
    </div>
}

export default PaginaFavoritos