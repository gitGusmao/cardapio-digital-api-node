module.exports = (app) => {
  const productController = app.controllers.productController;

  app.post("/create/product", productController.create);
  app.get("/findProductById/:id", productController.findAllById);
  app.get("/findAllProduct", productController.findAll);
  app.delete("product/:id", productController.deleteProduct);
};
