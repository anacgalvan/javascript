let pessoa = {
    nome: 'Ana',
    sexo: 'F',
    peso: 55,
    emagrecer(p=0){
        console.log('Emagreceu!')
        this.peso -= p
    }
}

pessoa.emagrecer(2)

console.log(`${pessoa.nome} pesa ${pessoa.peso} Kg.`)
