import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => { //se usa history para traer las funciones de navegacicon

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        //history.push('/'); //te lleva a la ruta principal
        // history.replace('/'); //esto hace que no puedas volver atrás la pagina

        const lastPath = localStorage.getItem('lastPath') || '/';


        const user={
            name:'Mariano'
        };
        const action = {
            type: types.login,
            payload: user
        };
        dispatch (action);

        history.replace(lastPath);

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
