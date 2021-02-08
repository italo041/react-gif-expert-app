import { shallow } from "enzyme"
import React from 'react';
import GifGrid from "../../components/GifGrid";
import '@testing-library/jest-dom';
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Prueba del componente <GifGrid/>', () => {
    
    const category = 'One punch';
  
    test('Debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        });

        let wrapper = shallow( <GifGrid category = { category }/> );
        
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa',
            title: 'Cualquier cosa',
        },
        {
            id: 'ABC',
            url: 'https://localhost/cualquiercosa',
            title: 'Cualquier cosa',
        },
        {
            id: 'ABC',
            url: 'https://localhost/cualquiercosa',
            title: 'Cualquier cosa',
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        let wrapper = shallow( <GifGrid category = { category }/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
   
    })
    
    
})
