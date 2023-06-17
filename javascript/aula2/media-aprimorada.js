//faça um progama que solicite 3 notas de 0 a 10e diz se o aluno esta reprovado ou aprovado:
//sendo aprovado media>=6 e reprovado media <6
// as notas posiiveis sao entre 0 e 10

console.log("Bom dia!");
var prompt = require("prompt-sync");
var prompt = prompt();


   

do
    { 
     var nota1=prompt('digite a primeira nota. ');
    }while(nota1<0 || nota1>10)

do
   {
     var nota2=prompt('digite a segunda nota. ');
   } while(nota2<0 || nota2>10) 

do
  {
    var nota3=prompt('digite a terceira nota. ');
  }while(nota3<0 || nota3>10)

  {
   var media=(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;

if(media>=6)
   {
    console.log('\n Você tem média'+' '+ media +' '+ 'e está aprovado.');
   }

else
  {
    console.log('\nVocê tem média'+' '+ media +' '+ 'e está reprovado.');
  }
}