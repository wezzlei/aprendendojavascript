//criar funçao encapsulada pedindo o usuario para digitar um numero e o progama deverá imptimir na tela a sequencia fribonacci com o numero de etapas que o usuario digitou

var prompt = require('prompt-sync');
var prompt = prompt();
 console.log('olá por favor digite um numero e a seguir tecle enter.');
 fibonacci();

 function fibonacci()
 {
    var controledowhile = prompt('');
    var n; n1=1;n2=0;i=0

    while(i<controledowhile)
    {
        console.log(n1 + ' ')
        n=n1+n2;
        n2=n1;n1=n;
        i++;
       
    }
    console.log ('Esta é a sequêcia fribonacci para o numero que voce digitou.')
    console.log('\n')
 }