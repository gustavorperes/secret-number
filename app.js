function sorteia(){
    return Math.round(Math.random()*10)
}

function sorteiaNumero(quantidade){
    var sorteados = [];
    var numero = 1;

    while(numero <= quantidade){
        var numeroAleatorio = sorteia();
        
        if(numeroAleatorio !== 0){
            var achou = false;

            for(var sort=0 ; sort < sorteados.length ; sort++){
                if(sorteados[sort] == numeroAleatorio){
                    achou = true;
                    break;
                }
            }

            if(achou == false){
                sorteados.push(numeroAleatorio);
                numero++;
            }
        }
    }
    
    return sorteados;
}

var input = document.querySelector("input");
var x = sorteiaNumero(1);

function verifica(){          
    var achou = false;
    var tentativas = 2;
    input.focus();

    for(var i=0; i < x.length; i++){
        if (input.value < x[i]){
            alert("O numero secreto é maior");
            var achou = true;
            tentativas--;
            console.log(tentativas);
            break;
        }

        if (input.value > x[i]){
            alert("O numero secreto é menor");
            var achou = true;
            tentativas--;
            console.log(tentativas);
            break;
        }

        if (input.value == x[i]){
            alert("Congratulations!");
            var achou = true;
            break;
        }
    }
    if(tentativas == 0){
        alert("O jogo acabou!");
    }
    input.value = "";
    input.focus();
}