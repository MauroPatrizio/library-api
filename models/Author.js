const mongoose = require("mongoose");

const autorsSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	bio: {
		type: String,
		required: false,
	},
	fechaNacimiento: {
		type: Date,
		required: true,
	},
	nacionalidad: {
		type: String,
		required: true,
	},
	libros: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Libros",
		},
	],
});

module.exports = mongoose.model("Autors", autorsSchema);
