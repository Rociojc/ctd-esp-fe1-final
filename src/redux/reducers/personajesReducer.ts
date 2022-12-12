import {Reducer} from "@reduxjs/toolkit";
import Personaje from "../../types/personaje.types";
import { PersonajesAction } from "../actions/personajesActions";


export interface PersonajesState {
    busqueda: string;
    status: "LOADING" | "COMPLETED",
    personajes: Personaje[],
    error: string | null
}

const initialStateInput: PersonajesState = {
    busqueda: '',
    status: 'LOADING',
    personajes: [],
    error: null
}

export const personajesReducer: Reducer<PersonajesState, PersonajesAction> = (state = initialStateInput, action): PersonajesState => {
    switch(action.type){
        case "BUSCAR_PERSONAJES":
            return {
                ...state,
                busqueda: action.name,
                error: null
            }
        case "BUSCAR_PERSONAJES_SUCCESS":
            return {
                ...state,
                status: 'COMPLETED',
                personajes: action.personajes
            }
        case "BUSCAR_PERSONAJES_ERROR":
            return {
                ...state,
                status: 'COMPLETED',
                error: action.mensaje
            }
        default:
            return state;
    }
}