function tabuada() {
    var num = document.getElementById("txtn")
    var tab = document.querySelector("select#seltab")
    if (num.value.length == 0) {
        window.alert("Por favor, digite um número!")
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ``
        while (c<= 10){
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

//posso fazer esse ex usando while ou for
//for ( c=1; c<=10 ; c++ ){
    //var item = document.createElement("option")
        //item.text = `${n} x ${c} = ${n*c}`
        //item.value = `tab${c}`
        //tab.appendChild(item)
//}
