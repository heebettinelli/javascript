function count() {
    var inicio = document.querySelector("input#txti")
    var fim = document.querySelector("input#txtf")
    var passo = document.querySelector("input#txtp")
    var res = document.querySelector("div#res")
    

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar!`
        
    } else {
        //eu declarei novas var referindo as antigas pq eu preciso transformar os valores dentro do imput em numero, pq tudo que estiver dentro do input é ma string por default. por isso tenho q transfornar em number.
        res.innerHTML = `Contando...<br>`
        var inicioNumero = Number(inicio.value)
        var fimNumero = Number(fim.value)
        var passoNumero = Number(passo.value)
        if (passoNumero <= 0) {
            window.alert("Passo Inválido! Considerando PASSO 1.")
            passoNumero = 1
        }
        
        if (inicioNumero < fimNumero) {
            //contagem crescente
            for( var c = inicioNumero; c <= fimNumero; c += passoNumero) {
                res.innerHTML += `${c} \u{1F449}`
                //c é = numero atual 
            }
        } else {
            //contagem regressiva
            for(var c = inicioNumero; c >= fimNumero; c -= passoNumero) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}





