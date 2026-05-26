const { sumaHata } = require('./sumaHasta');

describe('suma Hasta ',()=>{
    test('Happy path: n=5=>15', ()=>{
        expect(sumaHata(5)).toBe(15);
    })
    test('Happy path: n=1=>1', ()=>{
        expect(sumaHata(1)).toBe(1);
    })
    test('Sad path: n invalido', ()=>{
        expect(()=>estadoTemperatura(0).toThrow('n debe ser entero'))
        expect(()=>estadoTemperatura(2.6).toThrow('n debe ser entero'))
        expect(()=>estadoTemperatura('10').toThrow('n debe ser entero'))
    })

})