console.log("Bom dia!");
var prompt = require("prompt-sync");
var prompt = prompt();

do{
var nota1=prompt('digite a primeira nota.');
var nota2=prompt('\ndigite a segunda nota.');
var nota3=prompt('\ndigite a terceira nota.');
}
while(nota1<0 || nota1>10 ||nota2<0 || nota2>10 ||nota3<0 || nota3>10)

{
var media=(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;

if(media>=6)
{
    console.log('\n Você tem média'+' '+ media+' '+ 'e está aprovado.');
}

else

{
    console.log('\nVocê tem média'+' '+ media+' '+ 'e está reprovado.');
}
}