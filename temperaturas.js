
// Xela =15, Amatitlan = 22.5
var temps = new Array(15, 22.5, 32, 40.1, 26, 11);
var ciudades = new Array("Xela", "Amatitlan", "Escuintla", "Teculutan", "Coban", "Toto");

//iniciar
let mayor = temps[0];
let posMayor = 0;
// evalua el valor mayor
for (let i = 1; i< temps.length; i++){
    if (mayor < temps[i]){
        mayor = temps[i];
        posMayor = i;
    }
}

console.log("La ciudad mas calurosa es "+ciudades[posMayor]+" con "+mayor);

let menor = temps[0];
let posMenor = 0;

//for (let i=1; i< 6; i++){

for (let i=1; i< temps.length; i++){
    if (menor > temps[i]) {
        menor = temps[i];
        posMenor = i;
    }   
}

console.log("La ciudad mas fria es "+ciudades[posMenor]+ " con "+menor);

// promedio
let suma = 0;

for (let i = 0; i< temps.length; i++){
 suma = suma + temps[i];   
}

let promedio = suma / temps.length;
console.log("El promedio es "+promedio);

for (let i = 0 ; i< temps.length; i++){
    if (temps[i] > promedio){
        console.log(ciudades[i]+": "+temps[i]);
    }
}

