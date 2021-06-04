module.exports = (app) => {
  const controller = {};

  const Restaurant = require("../model/restaurantSchema");

  controller.create = (req, res) => {
    const rest = new Restaurant(req.body);

    rest
      .save()
      .then(() => {
        res.status(201).json({
          message: "Restaurante cadastrado com sucesso!",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  };

  controller.findAll = (req, res) => {
    Restaurant.find()
      .then((rest) => {
        res.status(200).json(rest);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  };

  controller.deleteRestaurant = (req, res) => {
    const { id } = req.params;

    Restaurant.deleteOne({ _id: id })
      .then((rest) => {
        res.status(204);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
          message: "Restaurant não encontrado na base.",
          success: false,
        });
      });
  };

  return controller;
};
