/*un arreglo que resiva 3 numeros que rrecora con un for y de el promedi*/
function promedio(numeros){
    if (!Array.isArray (numeros) || numeros.length ==0)
        throw new TypeError('nuemros debe ser un array');
    let total = 0;
    for (let i = 0; i <= numeros.length-1; i++)
        total+=numeros[1];
        return total/numeros.length;
}

module.exports={promedio};
