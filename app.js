//Creamos la función sum que recibe dos parámetros y retorna su suma
function sum(a, b) {
    return a + b;
}
//Damos los valores a sumar
console.log(sum(7, 3)); // 15
//Esta información la vamos a exportar para trabajar con ella desde test
module.exports = { sum };

//Pondremos la conversion de monedas
// Un euro es:
let uneuroes = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function dollarAYen(cantidad) {
        // primero pasamos a euros poniendo la cantidad que queremos dividido 
        // entre lo que cuesta como 1
    const euros = cantidad / uneuroes.USD
        // teniendo ya pasado a euros, lo pasamos a jpy
    const yenes = euros * uneuroes.JPY
    return yenes
}
function euroADollar(cantidad) {
    const dolar = cantidad * uneuroes.USD
    return dolar
}
function yenALibra(cantidad) {
    const euros = cantidad / uneuroes.JPY
    const libras = euros * uneuroes.GBP
    return libras
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, dollarAYen, euroADollar, yenALibra }

