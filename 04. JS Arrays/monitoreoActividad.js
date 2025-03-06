// <------- Arreglo de actividades sospechozas -----> modificar el valor de ser necesario
var actividadesSospechozas = []

function agregarActividad(descripcion, nivelRiesgo){
    /* TU CODIGO */
    if(descripcion === "" || nivelRiesgo === "") return  "Descripcion o nivel de riesgo no valido"

    if(nivelRiesgo !== "alto" && nivelRiesgo !== "medio" && nivelRiesgo !== "bajo") return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto"

    actividadesSospechozas.push(" Descripcion: " + descripcion + ", Riesgo - " + nivelRiesgo) 
    
    return "Actividad: " + descripcion + " con Nivel de riesgo: " + nivelRiesgo + " fue agregada con exito"

}

function eliminarActividad(indice){
    /* TU CODIGO */
    
    if(typeof indice !== "number") return "El indice no es valido, debe ser un numero"

    if(indice < 0 || indice >= actividadesSospechozas.length) return "El indice no es valido, se encuentra fuera del rango"

    // var nuevoArray = []
    //     for (var i = 0; i < actividadesSospechozas.length; i++) {
    //         if(indice !== i) nuevoArray.push(actividadesSospechozas[i])
    //     }
    //     actividadesSospechozas = nuevoArray

    actividadesSospechozas.splice(indice, 1)

        return "Actividad eliminada con exito"
}

function filtrarActividadesPorRiesgo(nivelRiesgo){
    /* TU CODIGO */
    
    if(nivelRiesgo === "" ) return  "Nivel de riesgo no valido" 

    if(nivelRiesgo !== "alto" && nivelRiesgo !== "medio" && nivelRiesgo !== "bajo") return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto"

    var nuevoArray = actividadesSospechozas.filter( function( ele ){
        if(ele.includes(nivelRiesgo)) return ele
    })

     if(nuevoArray.length === 0 ) return "No hay actividades con este nivel de riesgo"
     
    return nuevoArray

}

function generarReporteDeActividades(){
    /* TU CODIGO */

    "Id: 0, Description: 'descripcion', Riesgo - 'nivelRiesgo' "
    
    var nuevoArray = actividadesSospechozas.map(function(ele, indice){
        return "id:" + indice + " " + ele
    })

    if(nuevoArray.length === 0) return "No hay actividades para mostrar"

    return nuevoArray
}

// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades
}




