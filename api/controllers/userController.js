module.exports = (app) => {
  const controller = {};

  const User = require("../model/userSchema");

  controller.create = (req, res) => {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });

    user
      .save()
      .then(() => {
        res.status(201).json({
          message: "Usuário cadastrado com sucesso!",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  };

  controller.findAllById = (req, res) => {
    const { id } = req.params;

    User.findById({ _id: id })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
          message: "Usuário não encontrado na base.",
          success: false,
        });
      });
  };

  controller.findAll = (req, res) => {
    User.find()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  };

  controller.deleteUser = (req, res) => {
    const { id } = req.params;

    User.deleteOne({ _id: id })
      .then((user) => {
        res.status(204);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
          message: "Usuário não encontrado na base.",
          success: false,
        });
      });
  };

  return controller;
};
