const { evaluarNota } = require('./evaluarNota');

describe('evaluarNota',()=>{
    test('Happy path: 10 => Aprobado', ()=>{
        expect(evaluarNota(10)).toBe('Aprobado')
    })
    test('Happy path: 5 => Supletorio', ()=>{
        expect(evaluarNota(5)).toBe('Supletorio')
    })
    test('Happy path: 1 => Reprobado', ()=>{
        expect(evaluarNota(1)).toBe('Reprobado')
    })
    test('Sad path: nota mo valida', ()=>{
        expect(()=>evaluarNota(-1).toThrow('nota invalida'))
        expect(()=>evaluarNota('18').toThrow('nota invalida'))
        expect(()=>evaluarNota(11).toThrow('nota invalida'))
    })

})