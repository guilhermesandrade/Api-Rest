const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  cor: String,
  peso: Number,
  tipo: String,
  preco: Number,
  dataCadastro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Produto', produtoSchema);
