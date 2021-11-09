import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const NuevaCuenta = (props) => {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    // en caso de que el usuario se haya autenticado o registrado o sea un registr duplicado
    useEffect( () =>{
        if (autenticado) {
            props.history.push('/proyectos');
        }
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
    },[mensaje, autenticado, props.history])

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
        if( nombre.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmarpassword.trim() === ''){
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            }

        // Password minimo de 6 caracteres
        if (password.length < 6) {
            mostrarAlerta('El password debe ser minimo de 6 caracteres', 'alerta-error');
            return;
        }

        // Validar contraseñas iguales
        if (password !== confirmarpassword) {
            mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            return;
        }

        // Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        })
    }



    return ( 
        <div className="form-usuario">
            { alerta 
                    ? (
                        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
                      )
                    : null
            }
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