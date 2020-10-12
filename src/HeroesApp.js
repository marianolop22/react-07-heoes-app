import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReduccer'
import AppRouter from './routers/AppRouter'


const init = () => {
    return JSON.parse( localStorage.getItem('user')) || {
        logged:false
    }
};

export const HeroesApp = () => {

    const [user, dispach] = useReducer(authReducer, {}, init);

    //esto funciona como un observable, al mosificarse el usuario, ejecuta esta parte de nuevo
    //en vez de borrar el user de local storage, lo pone en vacío con un logged false.
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{
            user,
            dispach
        }}>
            <AppRouter/>
        </AuthContext.Provider>
    )
}
