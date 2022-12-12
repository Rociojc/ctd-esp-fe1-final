import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { eliminarFavorito, guardarFavoritos } from "../../redux/actions/favoritosActions";
import { IRootState } from "../../redux/store";
import Personaje from "../../types/personaje.types";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

interface TarjetaPersonajeProps {
  personaje: Personaje;
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
const TarjetaPersonaje = ({ personaje }: TarjetaPersonajeProps) => {
  const dispatch = useDispatch();

  const favoritos = useSelector((state) => state.favoritos.favoritos);

  const esfavorito = favoritos.find((favorito) => favorito.id == personaje.id) != null;

  const handleClick = () => {
    if (esfavorito) {
      // dispatch(guardarFavoritos(personaje))
      dispatch(eliminarFavorito(favoritos.filter(favorito=> favorito.id!=personaje.id)));
    } else {
      //Me traigo los favoritos del store y agrego el nuevo que esta en personaje
      dispatch(guardarFavoritos([...favoritos, personaje]));
    }
  };

  return (
    <div className="tarjeta-personaje1">
      <img src={personaje.image} alt="Rick Sanchez" />
      <div className="tarjeta-personaje-body">
        <span>{personaje.name}</span>
        <BotonFavorito esFavorito={esfavorito} onClick={handleClick} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
