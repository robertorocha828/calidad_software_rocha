const { puedeConducir } = require('./puedeConducir');

describe('puedeConducir',()=>{
	test('Happy path: 20 => si',()=>{
		expect(puedeConducir(20)).toBe('si');
	})
	test('Happy path: 16  => No',()=>{
		expect(puedeConducir(16)).toBe('no');
	})
	test('Sad path: n debe ser entero es par0',()=>{
		expect(()=>puedeConducir(-1)).toThrow('edad invalida')
		expect(()=>puedeConducir('18')).toThrow('edad invalida')
	})

})