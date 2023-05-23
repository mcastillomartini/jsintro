function estudiante(nombre, carnet) {
  // propiedades / atributos
    this.nombre= nombre;  
    this.carnet = carnet;
    this.carrera = "";
    this.grado = "";
    // metodos o comportamientos - funciones
    // metodo asignar carrera que recibe un nombre de carrera y se lo asigna al estudiante
    this.asignarCarrera =   function (nombreCarrera) {
      this.carrera = nombreCarrera;
      };
    //metodo mostrar datos que mostrara a consola los datos del estudiante
    this.mostrarDatos = mostrar;
    //metodo asignar grado
    this.asignarGrado = function (elGrado){
      this.grado = elGrado;
    }
    //desasignar grado
    this.desasignarGrado = function (){
      this.grado = "";
    }
  
  }



  function mostrar(){
    console.log(`Nombre ${this.nombre} Carnet: ${this.carnet} Carrera: ${this.carrera} Grado: ${this.grado}`);
  }
  
  // programa principal
  var e = new estudiante("Edgar", 191977);
  e.mostrarDatos();
  e.asignarCarrera("ingenieria");
  e.mostrarDatos();

  var e2 = new estudiante("Lorena", 7878789);
  e2.mostrarDatos();
  e2.asignarGrado("Quinto Perito");
  console.log(e2.grado);
  e2.mostrarDatos();

  if (e2.carrera  == ""){
    var texto = e2.nombre+" No tiene carrera"
    let x =0;
  }
  let x = 1;
  console.log(texto);
  console.log(x);
  e2.desasignarGrado();
  e2.mostrarDatos();

  //console.log(e.carrera);