const { promedio } = require('./promedio');

describe('promedio',()=>{
    test('Happy path: n=[5,5,5]=>5', ()=>{
        expect(promedio([5,5,5])).toBe(5);
    })
    test('Happy path: n=[6,6,6]=>6', ()=>{
        expect(promedio([6,6,6])).toBe(6);
    })
    test('Sad path: n invalido', ()=>{
        expect(()=>estadoTemperatura(0).toThrow('Arreglo no valido'))
        expect(()=>estadoTemperatura([]).toThrow('Arreglo no valido'))
    })

})