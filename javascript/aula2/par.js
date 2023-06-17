var prompt = require("prompt-sync");
var prompt = prompt();

var num = prompt("digite um numero: ");

if(num % 2 == 0)
{
    console.log('Numero'+' '+ num+' '+ 'Digitado é Par.');
}

else

{
    console.log('Numero'+' '+ num+' '+ 'Digitado é Impar.');
}