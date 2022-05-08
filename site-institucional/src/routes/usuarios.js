var express = require('express');
var router = express.Router();

var usuarioController = require('../controllers/usuarioController');

router.post('/cadastrar', function (request, response) {
  usuarioController.cadastrar(request, response);
});

router.post('/autenticar', function (request, response) {
  usuarioController.entrar(request, response)
});

router.post('/listarPorCliente', function (request, response) {
  usuarioController.listarPorCliente(request, response)
});

module.exports = router;