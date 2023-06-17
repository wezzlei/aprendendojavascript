//criar progama com um menu a ser executado enquanto a opção digitada  for diferente de 3
//opção 3: finalizar progama
//opção 2;peça para digitar um numero e diga se é par ou impar
//opção1: digite 2 numeros e diga o resultado da potenciação do primeiro elevado ao segundo
console.log("Bom dia!");
var prompt = require("prompt-sync");
var prompt = prompt();

do {
    var opcao = prompt('\nOlá,por favor escolha:\n 1 para executar a primeira opçao e tecle enter.\n 2 para executar segunda opçao e tecle enter.\n 3 para finalizar progama e tecle enter .\n');
   
    if(opcao==1)
      {
        var num1=prompt('Digite primeiro numero e tecle enter.  ');
        var num2=prompt('\nDigite segundo numero e tecle enter.  ');
        var potencia = (parseFloat(num1)**parseFloat(num2));
        console.log('\nO número que você digito primeiro elevado ao segundo é '+potencia +'.');
      }

    else if(opcao==2)
    {
           var num=prompt('Digite um numero qualquer e tecle enter.  ');
          if(num%2==0)
           {
            console.log('O numero ' + num +  ' que você digitou é par.');
           }

          else
           {
           console.log('\nO numero ' + num +  ' que você digitou é impar.');
           }

    }
}while(opcao!=3)
