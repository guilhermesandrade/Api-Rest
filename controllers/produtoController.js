const Produto = require('../models/Produto');

// Listar todos
exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({ message: 'Erro interno ao listar produtos' });
  }
};

// Listar por ID ou Nome
exports.getProduto = async (req, res) => {
  try {
    const { id, nome } = req.query;
    let produto;

    if (id) {
      produto = await Produto.findById(id);
    } else if (nome) {
      produto = await Produto.findOne({ nome });
    } else {
      return res.status(400).json({ message: 'ID ou nome são necessários' });
    }

    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ message: 'Erro interno ao buscar produto' });
  }
};

// Cadastrar
exports.createProduto = async (req, res) => {
  try {
    const produto = new Produto(req.body);
    await produto.save();
    res.status(201).json(produto);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ message: 'Erro interno ao criar produto' });
  }
};

// Atualizar
exports.updateProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByIdAndUpdate(id, req.body, { new: true });
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ message: 'Erro interno ao atualizar produto' });
  }
};

// Deletar
exports.deleteProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByIdAndDelete(id);
    if (produto) {
      res.json({ message: 'Produto deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    res.status(500).json({ message: 'Erro interno ao deletar produto' });
  }
};
