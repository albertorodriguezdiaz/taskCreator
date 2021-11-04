import React, {useContext, Fragment} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    // Obtener el state del form
    const proyectosContext = useContext(proyectoContext);
    const { formulariotareas } = proyectosContext;

    return ( 

        <Fragment>

            {
                formulariotareas
                ?
                    (
                    <div className="formulario">
                        <form>
                            <div className="contenedor-input">
                                <input 
                                    type="text" 
                                    className="input-text"
                                    placeholder="Nombre Tarea..."
                                    name="nombre"
                                />
                            </div>
                            <div className="contenedor-input">
                                <input 
                                    type="text" 
                                    className="btn btn-primario btn-submit btn-block text-center"
                                    value="Agregar Tarea"
                                />
                            </div>
                        </form>
                    </div>
                    )
                : null
            }
        </Fragment>

     );
}
 
export default FormTarea;