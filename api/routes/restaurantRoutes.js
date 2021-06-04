module.exports = (app) => {
  const restController = app.controllers.restaurantController;

  app.post("/create/restaurant", restController.create);
  app.get("/findAllRestaurant", restController.findAll);
  app.delete("restaurant/:id", restController.deleteRestaurant);
};
