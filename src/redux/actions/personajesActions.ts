import {Action, ActionCreator, ThunkAction} from "@reduxjs/toolkit";
import { buscarPersonajesAPI } from "../../services/personaje.services";
import Personaje from "../../types/personaje.types";
import { IRootState } from "../store";

export interface BuscarPersonajesAction extends Action {
    type: "BUSCAR_PERSONAJES",
    name: string
}

export interface BuscarPersonajesSuccessAction extends Action {
    type: "BUSCAR_PERSONAJES_SUCCESS",
    personajes: Personaje[]
}

export interface BuscarPersonajesErrorAction extends Action {
    type: "BUSCAR_PERSONAJES_ERROR",
    mensaje: string
}

export interface LimpiarBusquedaAction extends Action {
    type: "LIMPIAR_BUSQUEDA",
    name: ''
}

export const buscarPersonajes:ActionCreator<BuscarPersonajesAction> = (name: '') => {
    return {
        type: "BUSCAR_PERSONAJES",
        name
    }
}

export const buscarPersonajesSuccess:ActionCreator<BuscarPersonajesSuccessAction> = (personajes: Personaje[]) => {
    return {
        type: "BUSCAR_PERSONAJES_SUCCESS",
        personajes
    }
}

export const buscarPersonajesError:ActionCreator<BuscarPersonajesErrorAction> = (mensaje: string) => {
    return {
        type: "BUSCAR_PERSONAJES_ERROR",
        mensaje
    }
}

export type PersonajesAction =
    | ReturnType<typeof buscarPersonajes>
    | ReturnType<typeof buscarPersonajesSuccess>
    | ReturnType<typeof buscarPersonajesError>


export interface BuscarPersonajesThunk extends ThunkAction<void, IRootState, unknown, PersonajesAction>{}

export const buscarPersonajesThunk = (name: string):BuscarPersonajesThunk => {
    return async (dispatch, getState) => {
        dispatch(buscarPersonajes(name))
        try {
            const response = await buscarPersonajesAPI(name)
            dispatch(buscarPersonajesSuccess(response))
        } catch (error) {
            dispatch(buscarPersonajesError(error))
        }
    }
}