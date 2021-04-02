/* eslint-disable object-curly-spacing */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
const db = require('../db/models');

const getAllOrders = (req, res) => {
  db.Orders.findAll()
    .then((result) => {
      // res.status(200).json(user.users);
      res.status(200).json(result);
    })
    .catch(() => res.json({
      message: 'Erro',
    }));
};

const orderPost = (req, res) => {
  const {
    user_id, client_name, table, status, 
  } = req.body;
 db.Orders.create({
    user_id,
    client_name,
    table,
    status,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => res.json({
      message: 'Erro',
    }));
};

const getOrderId = (req, res) => {
  db.Orders.findAll({ where: { id: req.params.id } })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch(() => res.json({
      message: 'Erro',
    }));
};

const orderPut = (req, res) => {
  const {
    user_id, client_name, table, status,
  } = req.body;
  db.Orders.update({
    user_id,
    client_name,
    table,
    status,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'Atualizada!',
      });
    })
    .catch(() => res.json({
      message: 'Erro',
    }));
};

const orderDelete = (req, res) => {
  db.Orders.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'Excluida!',
      });
    })
    .catch(() => res.json({
      message: 'Erro',
    }));
};

module.exports = { getAllOrders, getOrderId, orderPost, orderPut, orderDelete};
