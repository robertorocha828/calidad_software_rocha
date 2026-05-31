function sumaMayor100(numeros){
    if (!Array.isArray(numeros) || numeros.length == 0)
        throw new TypeError('nuemros debe ser un array'); 
    let suma = 0;
    let contador = 0; 
    for (let i = 0; i <= numeros.length - 1; i++) {
        suma += numeros[i]; 
        contador++;               
        if (suma > 100) {   
            break;
        }
    }
    return contador;   
}
module.exports = { sumaMayor100 };