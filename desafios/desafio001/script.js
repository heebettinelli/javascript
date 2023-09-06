function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div.res")

    //value-length verifica se o comprimentos esta vazio (neste caso, se a caixa de texto esta vazia, ou seja = 0)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        //quando é mais de 1 elemento, no caso de 2 opcoes do radio. usar getElement"S", no plural pq sao mais de 1 elemento. e a contagem começa do 0. entao tenho 2 opcoes radio, logo 0, 1 elementos...
       var fsex = document.getElementsByName("radsex")
       //a idade vai ser o ano (a data atual)  - (menos) ano digitado pela pessoa 
       var idade = ano - Number(fano.value)
       var genero = ""
       //é a mesma coisa de colocar a tag img no html com id= "foto"
       var img = document.createElement("img")
       img.setAttribute("id", "foto")
       if (fsex[0].checked){
            genero = "Mulher"
            if (idade >=0 && idade <10){
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }

       } else if (fsex[1].checked){
            genero = "Homem"
       }
       //usei style para centralizar o paragrafo do res
       res.style.textAlign = "center"
       res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
       
    }
    
}

