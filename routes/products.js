const express = require("express");

const productsRouter = express.Router();
const productsController = require("../controllers/productsController");

productsRouter
  .route("/")
  .get(productsController.productHome);

productsRouter
  .route("/:id")
  .get((req, res) => {
    res.send(`Request: GET /products/${req.params["id"]}`);
  })
  .post(productsController.updateProduct)
  .delete((req, res) => {
    res.send(`Request: DELETE /products/${req.params["id"]}`);
  });

module.exports = productsRouter;
