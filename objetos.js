// persona
let nombre = "Marco Antonio";
let edad = 25;
let estatura = 1.60; 
console.log(nombre);

// persona 2
let nombre2= "Luisa Maria";
let edad2 = 15;
let estatura2 = 1.55;
console.log(nombre2);

// objeto estudiante - por que ya tiene valores
var estudiante = {
    nombre: "Luisa Maria",
    edad: 15,
    estatura: 1.55
}
//acceso
console.log(estudiante.nombre+" edad: "+estudiante.edad);
console.log(estudiante['nombre'] + " edad: "+estudiante['edad']);


// objeto para el departamento de Alta Verapaz, en un libro de geografia
var altaverapaz= {
    region: "norte",
    municipios: "Cobán, Santa Cruz Verapaz, San Cristobal Verapaz, Tactic, Chisec, Tamahu, Tucuru, Senahu, San Juan Chamelco, San Pedro Carcha, Panzos, Lanquin, Fray Bartolomé de las Casas, Santa Catalina La Tinta, Raxruha",
    cabecera: "Cobán",
    cantidadHabitantes: 1328668,
    gentilicio: "cobaneros",
    nombre: "Alta Verapaz"
}

console.log(altaverapaz.gentilicio);
let habitantesActual = altaverapaz.cantidadHabitantes+1;
altaverapaz.gentilicio = "altaverapacense";

console.log("Cantidad de habitantes "+habitantesActual);
console.log(altaverapaz.gentilicio);

// crear un tipo de objeto = clase
function departamento(region, municipios, cabecera, gentilicio, nombre){
    this.region = region;
    this.municipios = municipios;
    this.cabecera = cabecera;
    this.gentilicio = gentilicio;
    this.nombre = nombre;
}

// objeto de tipo departamento, que represente Huehuetenango
var huehue = new departamento("Noroccidental", "Huehuetenango, Santa Eulalia, Jacaltenango, Chiantla ...",
                            "Huehuetenango", "Huehueteco","Huehuetenango");
var escuintla = new departamento("Central Sur", "Santa Lucia Cotz ...", "Escuintla",
                                "Escuintlecto", "Escuintla");      

console.log("Regiones: ");                                
console.log(huehue.nombre+" - "+huehue.region);
console.log(escuintla.nombre+" - "+escuintla.region);

function cancion(genero, nombre, autor){
    this.genero = genero;
    this.nombre = nombre;
    this.autor = autor;
}

var cancion1 = new cancion("trova", "Ojalá", "Silvio Rodriguez");
console.log(cancion1.autor);

function planta(tipo, precio, calidad){
    this.tipo = tipo;
    this.precio = precio;
    this.calidad = calidad;
}

var hortensia = new planta("Hortensia", 10.00, "Bueno con el clima");
console.log(hortensia.tipo);














