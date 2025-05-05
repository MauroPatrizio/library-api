const Book = require("../models/book.model");

getBooks = async (req, res) => {
	try {
		const books = await Book.find();
		res.status(200).json(books);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

getBookById = async (req, res) => {
	res.json(res.book);
};

createBook = async (req, res) => {
	try {
		const newBook = new Book(req.body);
		await newBook.save();
		res.status(201).json(newBook);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

updateBook = async (req, res) => {
	try {
		const book = res.book;
		book.title = req.body.title || book.title;
		book.author = req.body.author || book.author;
		book.genre = req.body.genre || book.genre;
		book.publishedDate = req.body.publishedDate || book.publishedDate;

		const updatedBook = await book.save();
		res.json(updatedBook);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

deleteBook = async (req, res) => {
	try {
		const book = res.book;
		await book.deleteOne({
			_id: book._id,
		});
		res.json({ message: `El libro '${book.title}' fue eliminado` });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getBooks,
	getBookById,
	createBook,
	updateBook,
	deleteBook,
};
