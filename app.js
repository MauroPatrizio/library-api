const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/api", require("./routes/libros"));
app.use("/api", require("./routes/autors"));

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("Conectado a MongoDB");
		app.listen(PORT, () => {
			console.log(`Servidor corriendo en http://localhost:${PORT} `);
		});
	})
	.catch((error) => {
		console.error(error.message);
	});
