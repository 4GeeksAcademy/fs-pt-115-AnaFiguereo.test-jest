//importar la función sum del archivo app.js
const { sum } = require('./app');
//usamos el test
test('Suma de 14 y 9 debe ser 23', () => {
    //damos la información a sum
    let suma =sum(14, 9);
    //indicamos que la suma debe ser 23
    expect(suma).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { euroADollar } = require('./app.js');
    expect(euroADollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("Un dolar debe ser 146.26 yenes", function() {
     const { dollarAYen } = require('./app.js');
    expect(dollarAYen(3.5)).toBe(511.91); 
} )
test("Un yen debe ser 0.005 libras", function() {
     const { yenALibra } = require('./app.js');
    expect(yenALibra(3.5)).toBe(0.019); 
} )