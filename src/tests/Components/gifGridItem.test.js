import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../Components/GifGridItem';

describe('Pruebas den GifGriditem', ()=>{

    const title = 'un titulo';
    const url = 'https:localhost/algo.jpg';

    test('should show correctly the component ', () => {
        const wrapper = shallow( <GifGridItem 
            title={ title } 
            url={ url } />)
        expect( wrapper ).toMatchSnapshot();
    })
    
})