import {Action, ActionCreator} from "@reduxjs/toolkit";
import Personaje from "../../types/personaje.types";

export interface GuardarFavoritosAction extends Action {
    type: "GUARDAR_FAVORITO",
    payload: Personaje[]
}

export interface ElininarFavoritosAction extends Action {
    type: "ELIMINAR_FAVORITO",
    payload: Personaje[]
}

export const guardarFavoritos:ActionCreator<GuardarFavoritosAction> = (favoritos: Personaje[]) => {
    return {
        type: "GUARDAR_FAVORITO",
        payload: favoritos
    }
}

export const eliminarFavorito:ActionCreator<ElininarFavoritosAction> = (favoritos: Personaje[]) => {
    return {
        type: "ELIMINAR_FAVORITO",
        payload: favoritos
    }
}

export type FavoritosAction =
    | ReturnType<typeof guardarFavoritos>
    | ReturnType<typeof eliminarFavorito>