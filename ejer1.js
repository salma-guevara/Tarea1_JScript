/* let ejercicio1 = new Array(20);
for (var i = 0 ; i < ejercicio1.length; i++){
    ejercicio1[i] =  Math.round(Math.random()*100+1);
}
console.log(ejercicio1);
*/
console.log("Ejercicio 1: Números primos: ")
const ejercicio1 = [3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29, 19, 88, 456, 13, 23, 24];
// Primero entra aquí y luego llama a la función
for (let indice = 0 ; indice < ejercicio1.length ; indice++){
    choose = isPrime(ejercicio1[indice]);

    if(choose){
        console.log(`${ejercicio1[indice]} ES primo`)
    }else{
        console.log(`${ejercicio1[indice]} NO es primo`)
    }

}

// La función:
function isPrime(valEvaluado){
	for (let i = 2; i < valEvaluado; i++) {
		if (valEvaluado % i == 0) {
			return false;	
        }
    }
    return true;
}