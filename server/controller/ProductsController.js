/* eslint-disable camelcase */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
const db = require("../db/models");

const getAllProducts = (req, res) => {
  db.Products.findAll()
    .then((result) => {
      res.status(200).json(result);
      // eslint-disable-next-line no-undef
      connection.end();
    })
    .catch(() =>
      res.json({
        message: "Deu ruim!",
      }));
};

const getProductId = (req, res) => {
  db.Products.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: "Deu ruim!",
      }));
};

const ProductPost = (req, res) => {
  const {
    name, price, flavor, complement, image, type, sub_type,
  } = req.body;
  db.Products.create({
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
    .catch(() =>
      res.json({
        message: "Deu ruim!",
      }));
};

const ProductPut = (req, res) => {
  const {
    name, price, flavor, complement, image, type, sub_type,
  } = req.body;
  db.Products.update(
    {
      name,
      price,
      flavor,
      complement,
      image,
      type,
      sub_type,
    },
    { where: { id: req.params.id } },
  )
    .then(() => {
      res.status(200).json({
        message: "Dados atualizados!",
      });
    })
    .catch(() => {
      res.json({
        message: "Deu ruim!",
      });
    });
};

const productsDelete = (req, res) => {
  db.Products.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'Deletado!',
      });
    })
    .catch(() => res.status(400).json({
      message: 'Deu ruim!',
    }));
};
module.exports = {
  getAllProducts, getProductId, ProductPost, ProductPut, productsDelete,
};
