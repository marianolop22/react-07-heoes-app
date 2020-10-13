import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { SearchScreen } from '../../components/search/SearchScreen';
import { MemoryRouter, Route, Router } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

describe ('Prueba de SearchScreen.test', ()=> {

    const historyMock = {
        push: jest.fn(),
    }

    const contextValue = {
        user: {name:'Mariano', logged:true},
        dispatch: jest.fn()
    };

    const wrapper = mount (
        <MemoryRouter initialEntries={['/search']}>
            <Route 
                path="/search"
                component={ (props) => <SearchScreen history={historyMock} />}
            />
        </MemoryRouter>
    );

    test('debe de renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
    });

    test('debe de mostrar a batman y y el input con el valor del query sting', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route 
                    path="/search"
                    component={ (props) => <SearchScreen history={historyMock} />}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('HeroCard').exists()).toBe(true);
    })
    
    test('debe de mostrar un error con hero que no existe', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/search?q=123']}>
                <Route 
                    path="/search"
                    component={ (props) => <SearchScreen history={historyMock} />}
                />
            </MemoryRouter>
        );

        expect( wrapper.find('.alert-danger').text().trim() ).toBe(`No heros with 123`);
    })


    test('debe de llamar el push del history', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/search']}>
                <Route 
                    path="/search"
                    component={ (props) => <SearchScreen history={historyMock} />}
                />
            </MemoryRouter>
        );

        //esto es para cambiar la caja de texto de un componente
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText', //nombre del input
                value: 'batman!!!'
            }
        })

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect(wrapper).toMatchSnapshot();
        expect(historyMock.push).toHaveBeenCalledWith(`?q=batman!!!`);




    })







});