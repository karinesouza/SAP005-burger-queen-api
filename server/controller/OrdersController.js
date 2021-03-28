const db = require('../db/models');

const getAllOrders = (req, res) => {
  // const { user_id } = req.params;

  // const user = db.Users.findByPk(user_id, {
  //   include: { association: 'users' },
  // });

  db.Order.findAll()
    .then((result) => {
      // res.status(200).json(user.users);
      res.status(200).json(result);
    })
    .catch(() => res.json({
      message: 'erro ao processar requisição',
    }));
};

const orderPost = (req, res) => {
  // const { user_id } = req.params;
  const {
    user_id, client_name, table, status, processedAt,
  } = req.body;

  // const user = db.Users.findByPk(user_id);

  // if (!user) {
  //   return res.status(400).json({ error: 'User not found' });
  // }

  db.Order.create({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => res.json({
      message: 'erro ao salvar ordem',
    }));
};

const getOrderId = (req, res) => {
  db.Order.findAll({ where: { id: req.params.id } })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch(() => res.json({
      message: 'erro ao processar requisição',
    }));
};

const orderPut = (req, res) => {
  const {
    user_id, client_name, table, status, processedAt,
  } = req.body;
  db.Order.update({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'ordem atualizada',
      });
    })
    .catch(() => {
      res.json({
        message: 'erro ao atualizar ordem',
      });
    });
};

const orderDelete = (req, res) => {
  db.Order.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'ordem excluída',
      });
    })
    .catch(() => {
      res.json({
        message: 'erro ao excluir ordem',
      });
    });
};



module.exports = { getAllOrders, getOrderId , orderPost, orderPut, orderDelete}