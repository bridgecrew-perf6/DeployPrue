const mongoose = require("mongoose");

const EsquemaProducto = new mongoose.Schema(
    {
        nombre :{
            type: String,
            required : [true, "Nombre obligatorio"],
            minlength: [2, "Nombre de tener al menos 2 caracteres."]
        },
        precio: Number,
        descripcion : {
            type: String,
            required:[true, "Descripcion obligatoria"],
            minlength: [5, "Descripcion de tener al menos 5 caracteres."]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Producto = mongoose.model("productos", EsquemaProducto);

module.exports = Producto;