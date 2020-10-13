import '@testing-library/jest-dom';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe ('Pruebas en  authReducer', ()=> {

    test('debe de retornar el estado por defecto', () => {

        const initialState={
            logged:false
        }
        const state = authReducer(initialState,{});
        expect( state).toEqual(initialState);

    });

    test('debe de autenticar y colocar el nombre del estado', () => {
        const initialState={
            name: 'Mariano',
            logged: true
        }
        const action = {
            type: types.login,
            payload: { name: 'Mariano' }
        };
        const state = authReducer(initialState, action);
        expect(state).toEqual({ name: 'Mariano', logged: true });
    });

    test('debe de borrar el name del usuario y logg=false', () => {

        const action = {
            type: types.logout
        };
        const state = authReducer({}, action);
        expect(state).toEqual({ logged: false });
    });

});