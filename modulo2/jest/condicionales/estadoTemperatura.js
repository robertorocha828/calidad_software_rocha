function estadoTemperatura(temperatura){
    if(!Number.isInteger(temperatura || temperatura < 50 || temperatura > 60 || temperatura === NaN))
        throw new TypeError('temperatura invalida');
    estado = "Frio";
    if(temperatura>=30){
        estado = "Calor"
    }else if (temperatura>=15) {
        estado = "Templado"
    }
    return estado;
}
module.exports={ estadoTemperatura};