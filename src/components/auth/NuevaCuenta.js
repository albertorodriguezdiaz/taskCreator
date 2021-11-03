import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NuevaCuenta = () => {
    

    // State para iniciar Sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmarpassword: ''
    });

    // Extraer de usuario
    const {nombre, email, password, confirmarpassword} = usuario;

    const onChange = (e) =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuarip quiera iniciar session
    const onSubmit = (e) =>{
        e.preventDefault();

        // Validar que no haya campos vacios

        // Password minimo de 6 caracteres

        // Validar contraseñas iguales

        // Pasarlo al action
    }



    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear nueva cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Contraseña"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmarpassword">Confirmar Contraseña</label>
                        <input 
                            type="password"
                            id="confirmarpassword"
                            name="confirmarpassword"
                            placeholder="Tu Contraseña Nuevamente"
                            value={confirmarpassword}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>

                </form>

                <Link to={'/'}  className="enlace-cuenta text-center">
                    Volver a iniciar sesión
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;