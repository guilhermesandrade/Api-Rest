const Produto = require('../models/Produto');

// Listar todos
exports.getAllProdutos = async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
};

// Listar por ID ou Nome
exports.getProduto = async (req, res) => {
  const { id, nome } = req.query;
  let produto;

  if (id) {
    produto = await Produto.findById(id);
  } else if (nome) {
    produto = await Produto.findOne({ nome });
  }

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
};

// Cadastrar
exports.createProduto = async (req, res) => {
  const produto = new Produto(req.body);
  await produto.save();
  res.status(201).json(produto);
};

// Atualizar
exports.updateProduto = async (req, res) => {
  const { id } = req.params;
  const produto = await Produto.findByIdAndUpdate(id, req.body, { new: true });
  res.json(produto);
};

// Deletar
exports.deleteProduto = async (req, res) => {
  const { id } = req.params;
  await Produto.findByIdAndDelete(id);
  res.json({ message: 'Produto deletado com sucesso' });
};
