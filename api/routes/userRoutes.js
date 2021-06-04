module.exports = (app) => {
  const userController = app.controllers.userController;

  app.post("/create/user", userController.create);
  app.get("/findUserById/:id", userController.findAllById);
  app.get("/findAllUser", userController.findAll);
  app.delete("user/:id", userController.deleteUser);
};
