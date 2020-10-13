import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';

describe ('PRuebas sobre DashBoardRoutes.test', ()=> {

    const contextValue = {
        user: {name:'Mariano', logged:false},
        dispatch: jest.fn()
    };

    test('debe de mostrarse correctamente', () => {

        const wrapper = mount (
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);

    });

});