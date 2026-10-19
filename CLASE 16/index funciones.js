//Funciones
//conjunto de instrcciones, que realiza una funcion especifica (sumar, restar) devuelve un resultado
//No simepre se puedde introducir datos y no simepre devuelve algo
//identificador= palabra para identificar 

//Funciones de declaracion
function suma(a, b){
    //console.log(2 + 3)
    return a + b
}

//invocar, llamar, ejecutar
let resultado = suma(10, 5)
console.log(resultado)

//Funcion flecha
//la funcion flecha adquiere el ambito donde fue declarada(this=trae el objeto declarado en ese ambito)
const suma =(a, b) => {
    return a + b
}
let resultado2 = suma(10, 3)
console.log (resultado2)

//Callbacks
const a = (callbacks)=>{
    console.log("se ejecuto la funcion a")
    callbacks()
}

const b = () => {
    console.log("Se ejecuto la funcion b")
}

const c = () => {
    console.log("Se ejecuto la funcion c")
}

a(b)

a(b)