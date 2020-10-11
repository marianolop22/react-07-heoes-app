import React from 'react'

export const LoginScreen = ({history}) => { //se usa history para traer las funciones de navegacicon

    const handleLogin = () => {
        //history.push('/'); //te lleva a la ruta principal
        history.replace('/'); //esto hace que no puedas volver atrás la pagina

    };

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={handleLogin}
            >Login</button>         
        </div>
    )
}
