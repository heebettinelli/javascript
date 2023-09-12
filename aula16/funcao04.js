function fatorial(n){
    let fat = 1
    for(let c = n;c > 1; c-- ){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

// (cinco fatorial) 5! = 5x 4x 3x 2x 1 = 120


