import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';


/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch(action.type){

        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasproyecto: action.payload
                // tareasproyecto: state.tareasproyecto.filter( 
                //     tarea => tarea.proyectoId === action.payload
                // )
            }

        case AGREGAR_TAREA:
            return{
                ...state,
                tareasproyecto: [action.payload, ...state.tareasproyecto],
                errortarea: false
            }

        case VALIDAR_TAREA:
            return{
                ...state,
                errortarea: true
            }

        case ELIMINAR_TAREA:
            return{
                ...state,
                tareasproyecto: state.tareasproyecto.filter( tarea => tarea._id !== action.payload )
            }

        case TAREA_ACTUAL:
            return{
                ...state,
                tareaseleccionada: action.payload                
            }

        case ACTUALIZAR_TAREA:
            return{
                ...state,
                tareasproyecto: state.tareasproyecto.map(
                    tarea => tarea._id === action.payload._id ? action.payload : tarea )            
            }

        default:
            return state;
    }
}