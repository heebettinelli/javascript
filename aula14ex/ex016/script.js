function count() {
    var inicio = document.querySelector("input#txti")
    var fim = document.querySelector("input#txtf")
    var passo = document.querySelector("input#txtp")
    var res = document.querySelector("div#res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam dados!")
    } else {
        var inicioNumero = Number(inicio.value)
        var fimNumero = Number(fim.value)
        var passoNumero = Number(passo.value)
        //c é = numero atual 
        for(var c = inicioNumero; c <= fimNumero; c += passoNumero) {
            res.innerHTML += `${c}`
        }
    }
}





