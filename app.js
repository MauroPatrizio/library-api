const mongoose = require("mongoose");
const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("Conectado con MongoDB"))
	.catch((err) => console.log("Error al conectar con MongoDB", err));

app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
