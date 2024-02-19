function Verificar() {
   var data = new Date() 
   var ano = data.getFullYear()
   var fAno = document.getElementById(`txtano`)
   var res = document.getElementById(`res`)

   if (fAno.value.length == 0 || fAno.value > ano) {
    alert(`Erro! Verifique os dados inseridos e tente novamente!`)
   } else {
    var fsex = document.getElementsByName(`radsex`)
    var idade = ano - Number(fAno.value)
    var gen = ``
    var img = document.createElement(`img`)
    img.setAttribute(`id`, `foto`)
    if(fsex[0].checked) {
        gen = `Homem`
        if(idade >= 0 && idade < 10) {
            //criança
            img.setAttribute(`src`, `bebe.jpg`)
        } else if (idade < 30) {
            //jovem
            img.setAttribute(`src`, `jovemhomem.jpg`)
        } else if (idade < 60) {
            //adulto
            img.setAttribute(`src`, `adulto.jpg`)
        } else {
            //idoso
            img.setAttribute(`src`, `idoso.jpg`)
        }
    } else if (fsex[1].checked) {
        gen = `Mulher`
        if(idade >= 0 && idade < 10) {
            //criança
            img.setAttribute(`src`, `bebe.jpg`)
        } else if (idade < 30) {
            //jovem
            img.setAttribute(`src`, `jovemmulher.jpg`)
        } else if (idade < 60) {
            //adulta
            img.setAttribute(`src`, `adulta.jpg`)
        } else {
            //idosa
            img.setAttribute(`src`, `idosa.jpg`)
        }
    }
    res.innerHTML = `Detectamos que você é ${gen}, e tem ${idade} anos.`
    res.appendChild(img)
    }
}

