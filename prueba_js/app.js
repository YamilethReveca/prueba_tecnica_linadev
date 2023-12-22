// Ejercicio 1: ¿Todo está ok?
// usando el metodo every verificar si todos los elementos del arreglo están ok ✅,

const checkOk = ['✅', '✅', '❎', '❎', '❎'];

function verificar(arg){

return arg==="✅"

}

//console.log(checkOk.every(verificar))


//Ejercicio 2: Rellena los elementos del array con dinero

const bolsasdinero = ['', '', ''];

const dinero = bolsasdinero.fill('💰')


//for(let i= 0; i<dinero.length; i++){

    //bolsasdinero.push(dinero[i])

    //return bolsasdinero;

//

//console.log(dinero);




//Teniendo en cuenta el sgte arreglo:

const precios = [1045.0, 234, 456.98, 238.98, 3455, 234, 1045.0, 234];






//Ejercicio 3: Deberá realizar el cálculo de : promedio, valor máximo, suma total de los precios, suma de los precios que son menores a 1500 dólares.

// Dado el siguiente objeto:

const personas = [{
    id: 1,
    nombre: 'Lina',
    apellido: 'Guerrero',
    edad: 22,
    estudio: true
},

{
    id: 2,
    nombre: 'Mateo',
    apellido: 'Vlad',
    edad: 25,
    estudio: false
}

]

//1. Devolver los nombres es mayuscula.

let gente= personas.nombre;

console.log(gente);


//2. Cambiar el apellido "Guerrero" por "López".
//3. Insertar el campo "email" en ambos objetos.