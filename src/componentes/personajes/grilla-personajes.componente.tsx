import Personaje from '../../types/personaje.types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';


interface GrillaPersonajesProps {
     personajes: Personaje[]
}

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */



const GrillaPersonajes = ({personajes}: GrillaPersonajesProps) => {
    
    if(!personajes || personajes.length === 0) return <></>;

    return <div className="grilla-personajes">
        {
            personajes.map((personaje) => 
                <TarjetaPersonaje
                    key={personaje.id}
                    personaje={personaje}
                />
            )
        }
    </div>
}
 
export default GrillaPersonajes;