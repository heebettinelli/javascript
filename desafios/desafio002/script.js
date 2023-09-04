function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = "assets/bomdia.jpeg"
        document.body.style.background = "#e2cd9f"
    }
    else if (hora >=12 && hora <= 18) {
        img.src = "assets/boatarde.jpeg" 
        document.body.style.background = "#b5733a"
    }
    else {
        img.src = "assets/boanoite.jpeg"
        document.body.style.background = "#1868b8"
    }

} 



