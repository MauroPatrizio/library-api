const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
	.then(() => {
		console.log("Conectado a MongoDB");
		app.listen(PORT, () => {
			console.log(`Servidor corriendo en http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		console.error(error.message);
	});
