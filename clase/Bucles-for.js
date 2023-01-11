// Bucles for
/*
for (inicializacion; condicion; actualizacion) {

}
*/

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];

for (let i = 0;  i < lista.length; i++) {
    console.log(lista[i] *2)
}

//Estructura for..of
for (let valor of lista) {
    console.log(valor)
}

//Estructura forEach

lista.forEach(valor => {
    console.log(valor)
})

//Estructura For..in

let persona = {
    nombre: 'Maria',
    apellido: 'Carranza',
    edad: 34,
    isDev: true
}

console.log(persona.nombre);


let prop = 'edad';
console.log(persona[prop]);

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}