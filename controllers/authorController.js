const Autors = require("../models/Author");
const Book = require("../models/Book");

const getAll = async () => {
	try {
		return await Autors.find();
	} catch (err) {
		console.error(err);
	}
};

const getById = async (id) => {
	try {
		return await Autors.findById(id);
	} catch (error) {
		console.error(error);
	}
};

const postAuthor = async (body) => {
	try {
		return await Autors.create(body);
	} catch (error) {
		console.error(error);
	}
};

const putAuthor = async (id, update) => {
	try {
		const newAuthor = await Autors.findByIdAndUpdate(id, update, { new: true });

		newAuthor.save();

		return newAuthor;
	} catch (error) {
		console.error(error);
	}
};

const addLibro = async (idAutor, idBook) => {
	try {
		const autor = await Autors.findById(idAutor);
		const libro = await Book.findById(idBook);

		if (autor.libros.includes(libro._id)) {
			return res.json({ Mensaje: "El libro ya esta añadido al autor" });
		}

		if (!libro) {
			return res.status(404).json({ Mensaje: "El libro no existe" });
		}

		if (!autor) {
			return res.status(404).json({ Mensaje: "El autor no existe" });
		}

		autor.libros.push(libro._id);

		await autor.save();

		return autor;
	} catch (error) {
		console.error(error);
	}
};

const deleteAuthor = async (id) => {
	try {
		return await Autors.findByIdAndDelete(id);
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	getAll,
	getById,
	postAuthor,
	putAuthor,
	deleteAuthor,
	addLibro,
};
