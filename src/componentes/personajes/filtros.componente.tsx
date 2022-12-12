import { useDispatch } from 'react-redux';
import { buscarPersonajesThunk } from '../../redux/actions/personajesActions';
import './filtros.css';

const Filtros = () => {

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch<any>(buscarPersonajesThunk(e.target.value));
    };

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input
            type="text"
            placeholder="Rick, Morty, Beth, Alien, ...etc"
            name="nombre"
            onChange={handleChange}
        />
    </div>
}

export default Filtros;