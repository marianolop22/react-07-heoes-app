import '@testing-library/jest-dom';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe ('pruebas en  PrivateRoute.test', ()=> {

    const props= {
        location: {
            pathname:'/marvel'
        }
    };

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si está autenticado y guardar localstorage', () => {
       
        //el memoryrouter component es un componente que sirte para testear los routes
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={ () => <span>listo</span>}
                    { ...props}
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists()).toBe(true);
        expect (localStorage.setItem).toHaveBeenCalled();
        expect (localStorage.setItem).toHaveBeenCalledWith( 'lastPath', props.location.pathname );
    });

    test('debe de bloquear el componente si no está aautenticado', () => {
       
        //el memoryrouter component es un componente que sirte para testear los routes
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={ () => <span>listo</span>}
                    { ...props}
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists()).toBe(false);

    });




});