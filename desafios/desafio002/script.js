function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        //BOM DIA 
        img.src = "bomdia.jpeg"
    }
} else if(hora >= 12 && < 18) {
    //BOA TARDE
    img.src = "boatarde.jpeg"
}
else {
    //BOA NOITE
    img.src = "boanoite.avif"
}
