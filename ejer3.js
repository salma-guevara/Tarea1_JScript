let x1=0;
let x2=1;
console.log("Ejercicio 3: Primeros 50 números de la suceción de Fibonacci. ")
console.log(`${x2}`)
for (let indice = 0 ; indice < 49 ; indice++){
    let x3=x1+x2;
    console.log(`${x3}`);
    x1=x2;
    x2=x3;

}