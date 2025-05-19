const express = require("express");
const controllerBook = require("../controllers/bookController");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const books = await controllerBook.getAll();
		res.json(books);
	} catch (error) {
		res.status(500).json({ Mensaje: "Error al obtener", Detalle: error });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const book = await controllerBook.getById(id);

		if (!book) {
			return res.status(404).json({ Mensaje: "Id no encontrado" });
		}

		res.json(book);
	} catch (error) {
		res.status(500).json({ Mensaje: "Error al obtener por id", Detalle: error });
	}
});

router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const book = await controllerBook.postBook(req.body);

		if (!book) {
			return res.json({ Mensaje: "Error al crear" });
		}

		res.json(book);
	} catch (error) {
		res.status(500).json({ Mensaje: "Error al crear", Detalle: error });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const update = req.body;

		const book = await controllerBook.putBook(id, update);

		res.json(book);
	} catch (error) {
		res.status(500).json({ Mensaje: "Error al actualizar", Detalle: error });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const book = await controllerBook.deleteBook(id);

		if (!book) {
			return res.status(404).json({ Mensaje: "Id no encontrado" });
		}

		res.status(200).json({ Mensaje: "Elimnado correctamente" });
	} catch (error) {
		res.status(500).json({ Mensaje: "Error al eliminar", Detalle: error });
	}
});

module.exports = router;
