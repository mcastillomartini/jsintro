


// Función para obtener los usuarios del localStorage
function obtenerUsuarios() {
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios;
  }
  
  // Función para guardar los usuarios en el localStorage
  function guardarUsuarios(usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
  
  // Función para agregar un nuevo usuario
  function agregarUsuario(nombre, email, password) {
    // llenar el array con lo que ya esta en el localstorage
    var usuarios = obtenerUsuarios();

    var nuevoUsuario = {
      nombre: nombre,
      email: email,
      password: password
    };

    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios); // guardar al localstorage
  }
  
  // Función para actualizar un usuario existente
  function actualizarUsuario(email, nuevoNombre, nuevaContraseña) {
    var usuarios = obtenerUsuarios();
    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email === email) { // email es unico
        usuarios[i].nombre = nuevoNombre;
        usuarios[i].password = nuevaContraseña;
        break;
      }
    }
    guardarUsuarios(usuarios); //atualizar el localstorage
  }
  
  // Función para eliminar un usuario
  function eliminarUsuario(email) {
    var usuarios = obtenerUsuarios(); // obtener del localstorage
    usuarios = usuarios.filter(function(usuario) {
      return usuario.email !== email;
    });
    guardarUsuarios(usuarios); // guardo en el localstorage
  }
  
  // Función para obtener un usuario por su email
  function obtenerUsuarioPorEmail(email) {
    var usuarios = obtenerUsuarios();
    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email === email) {
        return usuarios[i];
      }
    }
    return null;
  }

  // Función para listar todos los usuarios
function listarUsuarios() {
  // Obtener el elemento <ul> del DOM
  var ul = document.getElementById("misUsuarios");
  //eliminar todos
  while (ul.firstChild != null) {
    ul.removeChild(ul.firstChild);
  }
  //volver a llenar
  var usuarios = obtenerUsuarios(); // obtengo del localstorage
  usuarios.forEach(function(usuario) {
    console.log("Nombre: " + usuario.nombre);
    console.log("Email: " + usuario.email);
    console.log("Contraseña: " + usuario.password);
    console.log("--------------------");
    var li = document.createElement("li");
    li.textContent = usuario.nombre+" - "+usuario.email;
    ul.appendChild(li);
  });

}

// es la usada por el boton
function guardarDatos(){
  agregarUsuario(document.getElementById("nombre").value,
                  document.getElementById("email").value,
                  document.getElementById("password").value);
  listarUsuarios();
}

  
 