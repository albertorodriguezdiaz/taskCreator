import React, { useReducer } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import ClienteAxios from '../../config/axios';

import { FORMULARIO_PROYECTO, 
         OBTENER_PROYECTOS, 
         AGREGAR_PROYECTO,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL,
         FORMULARIO_TAREAS,
         ELIMINAR_PROYECTO
        } from '../../types';


const ProyectoState = props => {

    // const proyectos = [
    //     { id: 1, nombre: 'Tienda virtual' },
    //     { id: 2, nombre: 'Intranet' },
    //     { id: 3, nombre: 'Diseño de sitio Web' },
    //     { id: 4, nombre: 'Marketing' }
    // ]

    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario: false,
        proyecto: null,
        formulariotareas: false
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(proyectoReducer, initialState);

    // Serie de funciones para CRUD
    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    // const obtenerProyectos = () => {
    //     dispatch({
    //         type: OBTENER_PROYECTOS,
    //         payload: proyectos
    //     })
    // }

    const obtenerProyectos = async () => {
        try {
            const resultado = await ClienteAxios.get('/api/proyectos');
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })

        } catch (error) {
            
        }
    }


    // Agregar nuevo proyecto
    // const agregarProyecto = proyecto => {
    //     proyecto.id = uuidv4();

    //     // insertar proyecto en el state
    //     dispatch({
    //         type: AGREGAR_PROYECTO,
    //         payload: proyecto
    //     })
    // }

    const agregarProyecto = async proyecto => {
        try {
            const resultado = await ClienteAxios.post('/api/proyectos', proyecto);

            // insertar proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            });

        } catch (error) {
            console.log(error);
        }
    }

    // Validar el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Seleecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Mostrar formulario de tareas
    const formularioTareas = () =>{
        dispatch({
            type: FORMULARIO_TAREAS,
        })
    }

    // Eliminar proyecto
    const eliminarProyecto = async proyectoId =>{
        try {
            await ClienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })

        } catch (error) {
            
        }
    }




    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                formulariotareas: state.formulariotareas,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                formularioTareas,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;