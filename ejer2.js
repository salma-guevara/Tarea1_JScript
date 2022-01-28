/*
const persona = ['Sabrina' , 'Pedro' , 'Pablo', 'Juliana' , 'Patricio'];
const familia = ['si','no','no','si','si']
let edad = [25 , 12 , 36 , 23 , 10]



//console.log("persona => " , persona);

for (let indice = 0 ; indice < persona.length ; indice++){

    let choose1 = edad[indice] >= 18;
    let choose2 = familia[indice] === 'si' ;

    if(choose1 && choose2){
        console.log(`${persona[indice]} Puede pasar porque es familia y mayor de edad`)
    }else{
        console.log(`${persona[indice]} No puede pasar porque es menor de edad o no es familia`)
    }

}
console.log("Se terminó el for")
*/
console.log("Ejercicio 2: Invitados selectos: ")
const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];

  for (let indice = 0 ; indice < ejercicio2.length ; indice++){

    let choose1 = ejercicio2[indice]['edad'] >= 18;
    let choose2 = ejercicio2[indice]['esFamiliar'];

    if(choose1 && choose2){
        console.log(`${ejercicio2[indice]['nombre']} Puede pasar porque es familia y mayor de edad`)
    }else{
        console.log(`${ejercicio2[indice]['nombre']} No puede pasar porque es menor de edad o no es familia`)
    }

}
console.log("Diviertanse en la fiesta")