const express = require("express");
const controllerAuthor = require("../controllers/authorController");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const books = await controllerAuthor.getAll();
		res.json(books);
	} catch (error) {
		res.status(500).json({ Mensaje: "Error en el get", Detalle: error });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const book = await controllerAuthor.getById(id);

		if (!book) {
			return res.status(404).json({ Mensaje: "Id no encontrado" });
		}

		res.json(book);
	} catch (error) {
		res.status(500).json({ Mensaje: "Error en el getById", Detalle: error });
	}
});

router.post("/", async (req, res) => {
	try {
		const book = await controllerAuthor.postAuthor(req.body);

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

		const book = await controllerAuthor.putAuthor(id, update);

		res.json(book);
	} catch (error) {
		res.status(500).json({ Mensaje: "Error al actualizar", Detalle: error });
	}
});

router.put("/:id/addBook/:bookId", async (req, res) => {
	try {
		const idAutor = req.params.id;

		const idBook = req.params.bookId;

		const autor = await controllerAuthor.addLibro(idAutor, idBook);

		res.json({ Mensaje: "Libro añadido" });
	} catch (error) {
		res.status(500).json({ Mensaje: "Error al actualizar", Detalle: error });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const book = await controllerAuthor.deletAuthor(id);

		if (!book) {
			return res.status(404).json({ Mensaje: "Id no encontrado" });
		}

		res.status(200).json({ Mensaje: "Elimnado correctamente" });
	} catch (error) {
		res.status(500).json({ Mensaje: "Error al eliminar", Detalle: error });
	}
});

module.exports = router;
