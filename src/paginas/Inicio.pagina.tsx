import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect } from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from "react-redux";
import { buscarPersonajesThunk} from "../redux/actions/personajesActions";
import { IRootState } from "../redux/store";
import { guardarFavoritos } from "../redux/actions/favoritosActions";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const PaginaInicio = () => {


    const personajes = useSelector(state => state.personajes.personajes);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(buscarPersonajesThunk(''))
    }, [])

    // const handleClean = () => {
    //     dispatch(limpiarBusqueda(''))
    //     console.log("limpio");
        
    // }


    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros />
        <Paginacion/>
        <GrillaPersonajes personajes={personajes}/>
        <Paginacion />
    </div>
}

export default PaginaInicio