
const { crearAlumno } = require('./alumno');

describe('toEqual crear alumno',()=>{
    test('Happy path: primitivos con toBe',()=>{
        expect(crearAlumno('Ana',20)).toEqual(
            {nombre: 'Ana', edad: 20}
        );
    })
   
    test('Sad path: lanzar error datos inválidos', ()=>{
        expect(()=>crearAlumno('',20)).toThrow('Nombre inválido');
        expect(()=>crearAlumno('Maria',-20)).toThrow('Edad inválida');
    })
   
})