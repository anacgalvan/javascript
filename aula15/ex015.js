//ARRAYS

/* let num = [5, 8, 2, 9, 3]
num.push(1)


console.log(`O vetor tem ${num.length} posições.`)
console.log(`O terceiro valor do vetor é ${num[3]}.`)
console.log(`A ordem crescente do vetor é ${num.sort()}.`)

----------

let valores = [8, 1, 7, 4, 2, 9]
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


let val = [4, 6, 7, 13]
for(let posi in val) {
    console.log(`A posição ${posi} tem o valor ${val[posi]}`)
}

let pos = val.indexOf(6)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
