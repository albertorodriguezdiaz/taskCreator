import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario: true
            }
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload
            }
        default:
            return state;
    }   
}