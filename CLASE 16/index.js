//Operaciones con Arrconays
const numeros = [5,10,8,16,5,18]
const numerosMasUno = []

//ForEach
numeros.forEach((num, /*indice, arrgeglo*/)=>{

    numerosMasUno.push(num + 1)
})

console.log(numerosMasUno)

//Map
//devolver un nuevo arreglo, con la misma cantidad de elementos que el arreglo original, pero con los elementos modificados
const numero2 = [5,10,8,16,5,18]

const NumeroMasDos = numero2.map((numero2) => {
    return numero2 + 2
})

console.log(NumeroMasDos)

//Filter
//devolver un nuevo arreglo, con la misma cantidad de elementos que el arreglo original, pero con los elementos modificados
const numero3 = [5,10,8,16,5,18]

//Find
//devolver un nuevo arreglo, con la misma cantidad de elementos que el arreglo original, pero con los elementos modificados
