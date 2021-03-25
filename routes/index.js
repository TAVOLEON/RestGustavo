var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//aqui definimos el endpoint (la url para acceder al recurso listarInvitados)
const invitados= require("../modulos/invitados/guest");
router.get('/v1/guest', invitados.listaInvitados);
router.post('/v1/guest', invitados.registrarInvitado);
router.delete("/v1/guest/:id", invitados.eliminarInvitado);
router.put("/v1/guest", invitados.editarInvitados);
module.exports = router;
//

const status= require("../modulos/status/status_assistance");
router.get('/v1/status', status.statusAsistencia)
module.exports = router;

//METODOS PARA ORGANIZADOR

const organizador= require("../modulos/organizador/organizer");
router.get("/v1/organizer", organizador.listarOrganizadores);
router.post('/v1/organizer', organizador.registrarOrganizador);
router.delete("/v1/organizer/:id", organizador.eliminarOrganizador);
router.put("/v1/organizer", organizador.editarOrganizador);
module.exports = router;
