import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch(action.type){
        case MOSTRAR_ALERTA:
            return{
                alerta: action.payload
            }
        case OCULTAR_ALERTA:
            return{
                alerta: null
            }
        default:
            return state;
    }   
}