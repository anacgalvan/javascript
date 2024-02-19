function Contar() {
    let inicio = document.getElementById(`txti`)
    let fim = document.getElementById(`txtf`)
    let passo = document.getElementById(`txtp`)
    let res = document.getElementById(`res`)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            res.innerHTML = `Impossível contar.`
            window.alert(`[ERRO] Faltam dados!`)
    } else {
        res.innerHTML = `Contando... <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p <= 0) {
            alert(`Passo inválido, considerando Passo 1`)
            p = 1
        }

        if(i < f) {
            //Contagem Crescente
            for(let c = i; c <= f; c+=p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        } else {
            //Contagem Descrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F3C1}`        
    }
}

