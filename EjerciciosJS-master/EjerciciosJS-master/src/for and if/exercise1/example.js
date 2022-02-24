console.log("Inicio");

console.log("Operación de módulo (resto de una división):");
console.log("13%10:", 13%10);

console.log("Par/impar");
console.log("33:", 33%2);
console.log("32:", 32%2);

console.log("Añadir elementos a array");
const number = 33;
const numbers = [];
numbers.push(number);
numbers.push(41);
console.log("numbers:", numbers);

console.log("Operadores condicionales:");
console.log("33 > 34:", 33 > 34);
console.log("33 < 34:", 33 < 34);
console.log("33 > 33:", 33 > 33);
console.log("33 >= 33:", 33 >= 33);
console.log("33 === 33:", 33 === 33);
console.log("'33' === 33:", "33" === 33);

console.log("Bifurcación lógica");
const n1 = 44;
const n2 = 55;
if (n1 >= n2) {
    console.log("n1-n2:", n1-n2)
}
if (n1 < n2) {
    console.log("n2-n1:", n2-n1)
}

if (n1 >= n2) {
    console.log("n1-n2:", n1-n2)
} else {
    console.log("n2-n1:", n2-n1)
}
