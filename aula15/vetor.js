let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//console.log(valores)

/* como mostrar o valores forma 1.
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

como mostrar valores forma 2 mais simplificada.

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

como mostrar os valores usando for e in de uma forma mais simplificada.
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}