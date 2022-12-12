import {Reducer} from "@reduxjs/toolkit";
import Personaje from "../../types/personaje.types";
import { FavoritosAction } from "../actions/favoritosActions";

export interface FavoritosState {
    favoritos: Personaje[]
}

const initialState: FavoritosState = {
    favoritos: []
}

export const favoritosReducer: Reducer<FavoritosState, FavoritosAction> = (state = initialState, action): FavoritosState => {
    console.log();
    
    switch(action.type){
        case "GUARDAR_FAVORITO":
            return{
                ...state,
                favoritos: action.payload
            }
        case "ELIMINAR_FAVORITO":
            return{
                ...state,
                favoritos: action.payload
            }
        default:
            return state
    }
}