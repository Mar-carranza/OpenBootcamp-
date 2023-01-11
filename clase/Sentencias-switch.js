//Sentencias Switcj
//Siempre poner un caso por defecto
let nota = 8;

switch (nota) {
    case 5:
        console.log('Buen trabajo!, Sobresaliente');
        break;
    case 4:
        console.log('Buena trabajo, pero podrias haberlo hecho mejor');
        break;
    case 3:
        console.log('Has obtenido un insuficiente');
        break;
    case 2:
        console.log('No has aprobado');
        break;
    case 1:
        console.log('No has estudiado');
        break;
    default:
        console.log('Error')
        break;
}