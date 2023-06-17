var prompt = require("prompt-sync");
var prompt = prompt();

do
{
var numero=prompt('digite um numero de 1 a 10.');
}
while(numero<0 || numero>10)

console.log('você digitou um numero invalido')