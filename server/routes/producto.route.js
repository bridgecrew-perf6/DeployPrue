const ProductoController = require("../controllers/producto.controller");

module.exports = (app) => 
{
    app.post("/api/productos", ProductoController.create_product);
    app.get("/api/productos", ProductoController.get_all);
    app.get("/api/productos/:id", ProductoController.get_produdct);
    app.put("/api/productos/:id", ProductoController.update_product);
    app.delete("/api/productos/:id", ProductoController.delete_product);
}