const { sumaMayor100 } = require('./sumaMayor100');

describe('promedio',()=>{
    test('Happy path: n=[5,5,5]=>5', ()=>{
        expect(sumaMayor100([5,5,5])).toBe(0);
    })
    test('Happy path: n=[6,6,6]=>6', ()=>{
        expect(sumaMayor100([6,6,6])).toBe(3);
    })
    test('Sad path: n invalido', ()=>{
        expect(()=>sumaMayor100(0).toThrow('Arreglo no valido'))
        expect(()=>sumaMayor100([]).toThrow('Arreglo no valido'))
    })

})