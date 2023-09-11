let num = [5,8,9,3]

// forma para acrescentar um elemento e valor a u a array ja sabendo o indice que eu quero colocar:
num[3] = 6
//forma mais pratica de adicionar elemento e valor a uma array sem sem preocupar com o indice:
// (o numero que quero adc a array vai dentro dos parenteses no num.push)
console.log(`O Primeiro elemento da array é ${num[0]}`)
num.push(2)
console.log(`Os elementos da array são ${num}`)
// posso saber o comprimento de uma array é usando o atributo length
//num.length 
console.log(`Essa array tem ${num.length} posições`)
//num.sort() coloca os elementos em ordem crescente
num.sort()
