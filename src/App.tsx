import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from "react-redux";
import { IRootState } from "./redux/store";
import { useEffect } from "react";
import { guardarFavoritos } from "./redux/actions/favoritosActions";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

function App() {

  const favoritos = useSelector(state => state.favoritos.favoritos)

  return (
      <div className="App">
        <Encabezado />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos favoritos={favoritos}/>} />
          <Route path="detalle" element={<PaginaDetalle />} />
        </Routes>
      </div>
  );
}

export default App;
