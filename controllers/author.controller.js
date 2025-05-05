const Author = require("../models/Author.model");

getAuthors = async (req, res) => {
	try {
		const authors = await Author.find();
		res.status(200).json(authors);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

getAuthorById = async (req, res) => {
	res.json(res.author);
};

createAuthor = async (req, res) => {
	try {
		const newAuthor = new Author(req.body);
		await newAuthor.save();
		res.status(201).json(newAuthor);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

updateAuthor = async (req, res) => {
	try {
		const author = res.author;
		author.title = req.body.title || author.title;
		author.author = req.body.author || author.author;
		author.genre = req.body.genre || author.genre;
		author.publishedDate = req.body.publishedDate || author.publishedDate;

		const updatedAuthor = await author.save();
		res.json(updatedAuthor);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

deleteAuthor = async (req, res) => {
	try {
		const author = res.author;
		await author.deleteOne({
			_id: author._id,
		});
		res.json({ message: `El autor '${author.title}' fue eliminado` });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getAuthors,
	getAuthorById,
	createAuthor,
	updateAuthor,
	deleteAuthor,
};
