const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/produtos', produtoController.getAllProdutos);
router.get('/produto', produtoController.getProduto);
router.post('/produtos', produtoController.createProduto);
router.put('/produtos/:id', produtoController.updateProduto);
router.delete('/produtos/:id', produtoController.deleteProduto);

module.exports = router;
