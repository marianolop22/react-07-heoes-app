import '@testing-library/jest-dom';
import React from 'react';
import { mount, shallow } from 'enzyme';
import AppRouter from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe ('Pruebas de AppRouter', ()=> {

    const contextValue = {
        user: {logged:false},
        dispatch: jest.fn()
    };


    test('debe de renderizar el login si no está autenticado', () => {
        const wrapper = mount (
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de renderizar el componente de marvel si está  autenticado', () => {

        const contextValue = {
            user: {logged:true, name:'Mariano'},
            dispatch: jest.fn()
        };

        const wrapper = mount (
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        
        expect( wrapper.find('.navbar').exists()).toBe(true);

    });






});