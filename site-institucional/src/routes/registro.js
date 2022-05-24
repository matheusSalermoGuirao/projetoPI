var express = require("express");
var router = express.Router();

var registroController = require('../controllers/registroController');

router.get('/obterDados/:fkEntrega', function (request, response) {
  registroController.listarPorFarmaceutica(request, response);
})

router.get('/obterDados/limite/:fkEntrega&:limite', function (request, response) {
  registroController.cadastrarMedicamento(request, response);
});



module.exports = router;