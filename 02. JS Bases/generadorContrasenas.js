function checkLongitud(longitud) {
  /* TU CODIGO */
  if (longitud === "" ) return "debe ingresar la longitud"
   if (typeof longitud !== "string") return "La longitud recibida no es valida"
   if (longitud < 3  ) return "La longitud debe ser mayor o igual a 3"
   if (longitud > 10) return "La longitud debe ser menor o igual a 10"
   return longitud
}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas ) {
  /* TU CODIGO */
  var letras = "abcdefghijklmnñopqrstuvwxyz";

  var numeros = "0123456789";

  var especiales =  "°|!%&/=?'¡¿*-+<@().,>";

  var letrasMayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

  var caracteresDisponibles = letras;

  if (incluirEspeciales === true) caracteresDisponibles += especiales

  if (incluirNumeros) caracteresDisponibles += numeros

  if (incluirMayusculas) caracteresDisponibles += mayusculas

  var contrasena = "";

  for(var i = 0; i < longitud; i++ ){
        var numeroAleatorio = Math.random()
        var multilicacion = numeroAleatorio * caracteresDisponibles.length  
        var sinDecimales = Math.floor(multilicacion) 
        var caracter = caracteresDisponibles.charAt(sinDecimales)
        contrasena += caracter
  } 

   return "Contraseña generada: " + contrasena
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
