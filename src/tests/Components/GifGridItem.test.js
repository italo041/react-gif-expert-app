import React from 'react';
import GifGridItem from "../../components/GifGridItem"
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
 


describe('Prueba de <GifGridItem />', () => {

    const title = 'One punch';
    const url = 'https://prueba.com';
    const wrapper = shallow( <GifGridItem title={ title } url= { url }/> );
    
    test('Debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('Debe de tener la imagen igual al url y al de los props', () => {
        
        const img = wrapper.find('img');
        // console.log(img.props());
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })

    test('Debe de tener la clase animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        
        expect( div.hasClass('animate__fadeIn') ).toBe( true );

    })
    
    
    
    
})
