function carregar() {
    var msg = document.getElementById(`msg`)
    var img = document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#f4d9cc'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#ffb3ab'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#828997'
    }
}

