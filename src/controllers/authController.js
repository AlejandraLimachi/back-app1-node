import * as models from "./../models"


/**
 * Permite autenticarme
 * @param {*} req petición cliente
 * @param {*} res respuesta servidor
 */

//funcion anonima
export const ingresar = function(req, res){
    res.json({mensaje: "Bienvendido user", error: true});
}

/**
 * Registro de un nuevo Usuario
 * @param {*} req 
 * @param {*} res 
 */
 export const registroUsuario = function (req, res){
    console.log(req.body);

    models.Usuario.create(req.body).then((user) => {
        res.json({mensaje: "Usuario Registrado", error: false})
    }).catch(error => {
        console.log(error);
        res.json({mensaje: "Error al registrar el usuario", error: true});
    })
    
}