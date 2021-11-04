import React, {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario } = proyectosContext;

    // state para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: '',
    });

    // Extraer nombre de proyecto
    const {nombre} = proyecto;

    // Lee los contenidos del input
    const onChangeProyecto = (e) =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario envia un proyecto
    // const onSubmitProyecto = e => {
    //     e.preventDefault();

    //     // Validar el proyecto

    //     // Agregar al state

    //     // Borrar el form
    // }

    const onClickForm = () =>{
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickForm}
            >Nuevo Proyecto
            </button>

            { formulario ? 
                (
                    <form
                        className="formulario-nuevo-proyecto"
                    >
                        <input 
                            type="text" 
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                    <input
                        type="submit"
                        className="btn btn-block btn-primario"
                        value="Agregar Proyecto"
                    />
                    
                    
                    </form>
                )
            : null
            }
        </Fragment>
     );
}
 
export default NuevoProyecto;