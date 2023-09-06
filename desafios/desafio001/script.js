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
                img.setAttribute("src", "assets/crianca-fem.jpg")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "assets/jovem-fem.jpg")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "assets/adulto-fem.jpg")
            } else if (idade <= 100) {
                //idoso
                img.setAttribute("src", "assets/idoso-fem.jpg")
            } else {
                img.setAttribute("src", "assets/rip.jpg")
            }

       } else if (fsex[1].checked){
            genero = "Homem"
            if (idade >=0 && idade <10){
                img.setAttribute("src", "assets/crianca-masc.jpg")
            } else if (idade < 21){
                img.setAttribute("src","assets/jovem-masc.jpg")
            } else if (idade < 50){
                img.setAttribute("src", "assets/adulto-masc.jpg")
            } else if (idade <= 100) {
                img.setAttribute("src","assets/idoso-masc.jpg")
            } else {
                img.setAttribute("src" , "assets/rip.jpg")
            }
       }
       //usei style para centralizar o paragrafo do res
       res.style.textAlign = "center"
       res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
       //eu vou adicionar um elementos
       res.appendChild(img)
       
    }
    
}

