module.exports = (app) => {
  const controller = {};

  const Product = require("../model/productSchema");

  controller.create = (req, res) => {
    const product = new Product(req.body);

    product
      .save()
      .then(() => {
        res.status(201).json({
          message: "Produto cadastrado com sucesso!",
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

    Product.findById({ _id: id })
      .then((prod) => {
        res.status(200).json(prod);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
          message: "Produto não encontrado na base.",
          success: false,
        });
      });
  };

  controller.findAll = (req, res) => {
    Product.find()
      .then((prod) => {
        res.status(200).json(prod);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  };

  controller.deleteProduct = (req, res) => {
    const { id } = req.params;

    Product.deleteOne({ _id: id })
      .then((prod) => {
        res.status(204);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
          message: "Produto não encontrado na base.",
          success: false,
        });
      });
  };

  return controller;
};
