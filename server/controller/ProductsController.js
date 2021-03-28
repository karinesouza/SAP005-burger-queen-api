
const db = require('../db/models');

const getAllProducts = (req, res) => {
  db.Product.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => res.json({
      message: 'erro ao processar requisição',
    }));
};

const ProductPost = (req, res) => {
  const {
    name, price, flavor, complement, image, type, sub_type,
  } = req.body;
  db.Product.create({
    name,
    price,
    flavor,
    complement,
    image,
    type,
    sub_type,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => res.json({
      message: 'erro ao salvar produto',
    }));
};

const getProductId = (req, res) => {
  db.Product.findAll({ where: { id: req.params.id } })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch(() => res.json({
      message: 'erro ao processar requisição',
    }));
};

const ProductPut = (req, res) => {
  const {
    name, price, flavor, complement, image, type, sub_type,
  } = req.body;
  db.Product.update({
    name,
    price,
    flavor,
    complement,
    image,
    type,
    sub_type,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'produto atualizado',
      });
    })
    .catch(() => {
      res.json({
        message: 'erro ao atualizar produto',
      });
    });
};

const productsDelete = (req, res) => {
  db.Product.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'produto excluído',
      });
    })
    .catch(() => {
      res.json({
        message: 'erro ao excluir produto',
      });
    });
};

module.exports = { getAllProducts, getProductId, ProductPost, ProductPut, productsDelete }