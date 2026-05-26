const { esPar } = require('./esPar');

describe('promedio',()=>{
    test('Happy path: n=[5,5,5]=>5', ()=>{
        expect(esPar([5,5,5])).toBe(0);
    })
    test('Happy path: n=[6,6,6]=>6', ()=>{
        expect(esPar([6,6,6])).toBe(3);
    })
    test('Sad path: n invalido', ()=>{
        expect(()=>esPar(0).toThrow('Arreglo no valido'))
        expect(()=>esPar([]).toThrow('Arreglo no valido'))
    })

})