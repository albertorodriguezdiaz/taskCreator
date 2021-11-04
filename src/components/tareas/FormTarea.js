import React from 'react';

const FormTarea = () => {
    return ( 
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
     );
}
 
export default FormTarea;