import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import { 
        TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINAR_TAREA,
        ESTADO_TAREA,
        TAREA_ACTUAL,
        ACTUALIZAR_TAREA
} from '../../types';


const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 7, nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3 },
            { id: 8, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 10, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 11, nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3 },
        ],
        tareasproyecto: null, 
        errortarea: false,
        tareaseleccionada: null
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
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // Cambiar el estdo de la tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }


    // Editar o modificar tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }


    return(
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}
 
export default TareaState;