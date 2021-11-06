import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoTareas = () => {  

    // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {tareasproyecto} = tareasContext;

    // Si no hay proyectos seleecionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array Desestructuracion para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // const tareasProyecto = [];


    // Eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }
    
    return ( 
        <Fragment>
            <h2>Proyecto: <span>{ proyectoActual.nombre }</span></h2>
            <ul className="listado-tareas">
                {
                tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    :  <TransitionGroup>
                        {
                            tareasproyecto.map( tarea => (
                                <CSSTransition
                                    key={tarea.id}
                                    timeout={500}
                                    classNames="tarea"
                                >
                                    <Tarea                                         
                                        tarea={tarea}
                                    />
                                </CSSTransition>
                            ))
                        }
                       </TransitionGroup>
                    
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