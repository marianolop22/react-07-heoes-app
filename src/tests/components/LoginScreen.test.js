import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../components/login/LoginScreen';
import { MemoryRouter, Route, Router } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from "../../types/types";
import { act } from 'react-dom/test-utils';

describe ('Pruebas de LoginScreen.test', ()=> {

    const historyMock = {
        replace: jest.fn()
    }

    const contextValue = {
        user: { logged:false},
        dispatch: jest.fn()
    };

    const wrapper = mount (
        <AuthContext.Provider value={
            contextValue
        }>
            <LoginScreen history={historyMock}/>
        </AuthContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    });


    test('Debe de realizar el dispach y la nvegacion', () => {

        const user={
            name:'Mariano'
        };
        const action = {
            type: types.login,
            payload: user
        };

        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        
        expect( contextValue.dispatch ).toHaveBeenCalledWith(action);
        expect( historyMock.replace ).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect( historyMock.replace ).toHaveBeenCalledWith('/dc');
    });

});