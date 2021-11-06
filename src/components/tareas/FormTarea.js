import React, {useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { v4 as uuidv4 } from 'uuid';

const FormTarea = () => {

    // Obtener el state del form
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {errortarea, agregarTarea, validarTarea, obtenerTareas} = tareasContext;


    // State del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    // Extraer el nombre del proyecto
    const {nombre} = tarea;

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    // Aray dstructuring para extraer el proyecto actual
    const [proyectoActual] =  proyecto;
    

    // Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitTarea = e => {
        e.preventDefault();

        // Validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        // Pasar la validacion

        // Agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        tarea.id = uuidv4();
        agregarTarea(tarea);


        // Obtener y filtrar las tareas del proyecto
        obtenerTareas(proyectoActual.id);

        // Reiniciar el form
        guardarTarea({
            nombre: ''
        })

    }

    return ( 

  
        <div className="formulario">

            <form
                onSubmit={onSubmitTarea}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block text-center"
                        value="Agregar Tarea"
                    />
                </div>
            </form>

            { errortarea 
                ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> 
                : null
            }

        </div>


     );
}
 
export default FormTarea;