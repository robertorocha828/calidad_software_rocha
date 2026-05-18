const { estadoTemperatura } = require('./estadoTemperatura');

describe('estadoTemperatura',()=>{
    test('Happy path: 45 => Calor', ()=>{
        expect(estadoTemperatura(45)).toBe('Calor')
    })
    test('Happy path: 25 => Templado', ()=>{
        expect(estadoTemperatura(25)).toBe('Templado')
    })
    test('Happy path: 10 => Frio', ()=>{
        expect(estadoTemperatura(10)).toBe('Frio')
    })
    test('Sad path: temperatura no valida', ()=>{
        expect(()=>estadoTemperatura(-51).toThrow('temperatura invalida'))
        expect(()=>estadoTemperatura( ).toThrow('temperatura invalida'))
        expect(()=>estadoTemperatura(61).toThrow('temperatura invalida'))
    })

})