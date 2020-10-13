import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Navbar } from '../../../components/ui/NavBar';
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from "../../../types/types";

describe ('Pruebas de NavBar.test', ()=> {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    }

    const contextValue = {
        user: {name:'Mariano', logged:true},
        dispatch: jest.fn()
    };

    const handleLogout = jest.fn();

    const wrapper = mount (
        <AuthContext.Provider value={
            contextValue
        }>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach ( ()=> {
        jest.clearAllMocks();
    })

    test('debe de renderizar el objeto', () => {
        // console.log(wrapper.html());
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
        //expect(contextValue.dispatch).toHaveBeenCalled();
    });

    test('debe de renderizar el objeto', () => {
        
        // wrapper.find('button').simulate('click'); 
        wrapper.find('button').prop('onClick')(); 

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type:types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });

});