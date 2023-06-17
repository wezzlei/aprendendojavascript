console.log("Bom dia!");
var prompt = require("prompt-sync");
var prompt = prompt();

console.log("hello");
var num = prompt("digite um numero: ");
console.log(num);

var num2 = prompt("digite outro numero numero: ");
console.log(num2);

console.log('A soma dos dois numeros é:'+(parseInt(num2) + parseInt(num)));

var nome = prompt("digite seu nome: ");
console.log(nome);

var sobrenome = prompt("digite seu sobrenome: ");
console.log( nome + ' ' + sobrenome + '.');