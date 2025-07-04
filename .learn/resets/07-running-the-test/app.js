//Creamos la función sum que recibe dos parámetros y retorna su suma
function sum(a, b) {
    return a + b;
}
//Damos los valores a sumar
console.log(sum(7,3)); // 15
//Esta información la vamos a exportar para trabajar con ella desde test
module.exports = {sum};