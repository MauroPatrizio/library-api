const Book = require("../models/Book");

const getAll = async () => {
	try {
		return await Book.find();
	} catch (err) {
		console.error(err);
	}
};

const getById = async (id) => {
	try {
		return await Book.findById(id);
	} catch (error) {
		console.error(error);
	}
};

const postBook = async (body) => {
	try {
		if (!body.author || body.author.length === 0) {
			return { Mensaje: "El libro debe tener un autor" };
		}

		return await Book.create(body);
	} catch (error) {
		console.error(error);
	}
};

const putBook = async (id, update) => {
	try {
		const newBook = await Book.findByIdAndUpdate(id, update, { new: true });

		newBook.save();

		return newBook;
	} catch (error) {
		console.error(error);
	}
};

const deleteBook = async (idBook) => {
	try {
		const autorDelLibro = await Autors.find({ libros: idBook });

		if (autorDelLibro.length > 0) {
			return {
				Mensaje: "El libro esta asignado a un autor, no se puede eliminar",
			};
		}

		return await Book.findByIdAndDelete(idBook);
	} catch (error) {
		console.error(error);
	}
};

module.exports = { getAll, getById, postBook, putBook, deleteBook };
