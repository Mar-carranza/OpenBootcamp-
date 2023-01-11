//- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let f = 10;
let n = f-1;


while(true){
    f *= n;
    n--;
    if (n <= 1) break;
}
console.log(f);
