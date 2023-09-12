// funcao RECURSIVA é quando uma funcao retorna ELA MESMA:

function fatorial(n){
    if(n ==1){
        return  1
    } else {
        return n* fatorial(n - 1)
    } 
}

//que é a mesma coisa que:

// ! = indica que um numero é fatorial(n!) 
//ou seja é a multiplicação de n por seus antecessores maiores ou iguais a 1.
/*
5! = 5x 4x 3x 2x 1 = 120
ou
5! = 5 x 4!
n! = n x (n-1)!
1! = 1
*/