import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import { 
        TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA
} from '../../types';


const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3 },
        ],
        tareasproyecto: null, 
        errortarea: false
    }

    // Crear dispatch y state
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    // Crear las funciones


    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }


    return(
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}
 
export default TareaState;