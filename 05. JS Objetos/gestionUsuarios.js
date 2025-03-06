// <----- NO TOCAR ------->
const { perfiles } = require("../build/js/perfiles.js")

var asistente = {
    verPerfiles: function(opcion){
        /* TU CODIGO */
        if(opcion === "todo") return perfiles
        if(opcion === "nombre") return perfiles.map( function(perfil){
            return perfil.usuario
        })

        if(opcion === "nivel") return perfiles.map( perfil => perfil.nivel_de_autorizacion)
        if(opcion === "codigo") return perfiles.map( perfil => perfil[opcion])
        if(opcion === "antiguedad") return perfiles.map( perfil => perfil[opcion])

    },

    verPerfilesPorAntiguedad: function(){
        /* TU CODIGO */
        var usuariosAntiguedadOrdenados = []

        for (let i = 0; i < perfiles.length; i++) {
            usuariosAntiguedadOrdenados.push(perfiles[i])
        }

        usuariosAntiguedadOrdenados.sort( function(objeto1, objeto2){
            return objeto2.antiguedad - objeto1.antiguedad
        })

        return usuariosAntiguedadOrdenados
    },

    verAdministradores: function(){
        /* TU CODIGO */
        var perfilAdmin = perfiles.filter(function(perfil){
            if(perfil.nivel_de_autorizacion === "admin") return perfil
        })

        return perfilAdmin
    },

    modificarAcceso: function(usuario, codigo){
        /* TU CODIGO */
       var perfilValidado = perfiles.find(function(perfil){
            if(perfil.usuario === usuario) return true
       } )
       if(!perfilValidado) return "usuario no encontrado"
       if(codigo.length !== 4 || isNaN(codigo)) return "codigo de acceso invalido, debe contener solo 4 numeros"

       perfilValidado.codigo = codigo 
       return "codigo de acceso modificado"

    }
}

// <----- NO TOCAR ------->
module.exports = {
    asistente
}

