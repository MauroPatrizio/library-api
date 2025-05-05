const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
	nombre: String,
	fechaNacimiento: Date,
	nacionalidad: String,
	libros: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

module.exports = mongoose.model("Author", authorSchema);
