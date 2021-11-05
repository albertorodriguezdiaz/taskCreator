import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {  

    // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Si no hay proyectos seleecionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array Desestructuracion para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataforma de pago', estado: false },
        { nombre: 'Elegir Hosting', estado: true }
    ];


    // Eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }
    
    return ( 
        <Fragment>
            <h2>Proyecto: <span>{ proyectoActual.nombre }</span></h2>
            <ul className="listado-tareas">
                {
                tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    :  tareasProyecto.map( tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button 
                type="button" className="btn btn-eliminar"
                onClick={onClickEliminar}
                >Eliminar Proyecto &times;
            </button>
        </Fragment>
            
     );
}
 
export default ListadoTareas;