// Restaurar estado del cartel al cargar la página
window.onload = function() {
  if (localStorage.getItem("cartelActivo") === "true") {
    const cartel = document.getElementById('cartel-en-construccion');
    if (cartel) {
      cartel.classList.add('mostrar');
    } else {
      console.error("Elemento del cartel no encontrado al cargar la página");
    }
  }
};

// Activar el cartel con contraseña
function activarCartel() {
  let password = prompt("Introduce la contraseña:");
  if (password === "Ainhoa2005!!") { // Cambia esta contraseña por la que desees
    const cartel = document.getElementById('cartel-en-construccion');
    if (cartel) {
      cartel.classList.add('mostrar');
      localStorage.setItem("cartelActivo", "true");
      console.log("Cartel activado");
    } else {
      console.error("El elemento del cartel no se encontró al activar");
    }
  } else {
    alert("Contraseña incorrecta");
  }
}

// Desactivar el cartel con contraseña
function desactivarCartel() {
  let password = prompt("Introduce la contraseña:");
  if (password === "Ainhoa2005!!") { // Debe coincidir con la contraseña para activar
    const cartel = document.getElementById('cartel-en-construccion');
    if (cartel) {
      cartel.classList.remove('mostrar');
      localStorage.setItem("cartelActivo", "false");
      console.log("Cartel desactivado");
    } else {
      console.error("El elemento del cartel no se encontró al desactivar");
    }
  } else {
    alert("Contraseña incorrecta");
  }
}
