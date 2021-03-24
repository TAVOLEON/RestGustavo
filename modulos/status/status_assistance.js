//aqui va el metodo para listar invitados
const dbCon = require("../Configuracion/Config");

function statusAsistencia(req,res,next){
    dbCon.any('SELECT * FROM guest')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"ESTADO DE ASISTENCIA ok"
        })
    })
}


module.exports= {
    statusAsistencia: statusAsistencia
}