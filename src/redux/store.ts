import { composeWithDevTools } from "@redux-devtools/extension";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { favoritosReducer } from "./reducers/favoritosReducer";
import { personajesReducer } from "./reducers/personajesReducer";


const rootReducer = combineReducers({
    personajes: personajesReducer,
    favoritos: favoritosReducer
})

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));