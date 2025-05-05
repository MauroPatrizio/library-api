const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	titulo: String,
	resumen: String,
	genero: String,
	publicacion: Date,
	disponible: Boolean,
});

module.exports = mongoose.model("libros", bookSchema);
