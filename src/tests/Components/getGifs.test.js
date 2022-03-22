import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs fetch', () => {

    test('should ', async() => {
        const gifs = await getGifs('Rick and morty');

        expect( gifs.length ).toBe( 10 );
    })
    
    
})
