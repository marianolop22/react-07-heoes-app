import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../components/heros/HeroScreen';
import { MemoryRouter, Route, Router } from 'react-router-dom';

describe ('Pruebas de HeroScreen.test', ()=> {

    const historyMock = {
        push: jest.fn(),
        // location: { heroeId: 'marvel-spider'},
        goBack: jest.fn(),
        length: 10
    }

    
    test('debe de mostrar el componente redirect si no hay argumentos en el url', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/hero']}> {/*esto sirve para mandar una url */}
                <HeroScreen history={historyMock}/>
            </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBe(true); //como no hay parametro en la url, pasa de largo
    });

    test('debe de mostrar el componente si el parametros existe', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/hero/marvel-spider']}> {/*esto sirve para mandar una url */}
                <Route path="/hero/:heroeId" component={HeroScreen}/> {/*acá generamos una rutra*/}
            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBe(true);        
    });

    test('debe de ejecutar el history.push', () => {

        const historyMock = {
            push: jest.fn(),
            goBack: jest.fn(),
            length: 1
        }

        const wrapper = mount (
            <MemoryRouter initialEntries={['/hero/marvel-spider']}> {/*esto sirve para mandar una url */}
                <Route 
                    path="/hero/:heroeId"
                    component={ (props) => <HeroScreen history={historyMock} />}/> {/*acá generamos una rutra*/}
            </MemoryRouter>
        );
        
        wrapper.find('button').prop('onClick')();
        expect( historyMock.push ).toHaveBeenCalledWith('/');
    });

    test('debe de ejecutar el history.goback', () => {

        const wrapper = mount (
            <MemoryRouter initialEntries={['/hero/marvel-spider']}> {/*esto sirve para mandar una url */}
                <Route 
                    path="/hero/:heroeId"
                    component={ (props) => <HeroScreen history={historyMock} />}/> {/*acá generamos una rutra*/}
            </MemoryRouter>
        );
        
        wrapper.find('button').prop('onClick')();
        expect( historyMock.goBack ).toHaveBeenCalled();
    });

    test('debe de llamar al redirect', () => {

        const wrapper = mount (
            <MemoryRouter initialEntries={['/hero/marvel-spider123456']}> {/*esto sirve para mandar una url */}
                <Route 
                    path="/hero/:heroeId"
                    component={ () => <HeroScreen history={historyMock} />}/> {/*acá generamos una rutra*/}
            </MemoryRouter>
        );
        
        expect(wrapper.text().trim()).toBe('');
    });

});