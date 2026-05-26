/*un arreglo que resiva 3 numeros que rrecora con un for y de el promedi*/
function esPar(numeros){
    if (!Array.isArray (numeros) || numeros.length ==0)
        throw new TypeError('nuemros debe ser un array');
    let contador = 0;
    for (let i = 0; i <= numeros.length-1; i++){
        if (numeros [i]%2==0){
            contador++;
        }
    }
    return contador;    
}
module.exports={esPar};
