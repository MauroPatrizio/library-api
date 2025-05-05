const express = require("express");
const router = express.Router();
const authorController = require("../controllers/author.controller");

router.post("/authors", authorController.createAuthor);
router.get("/books/:id");
router.get("/books");
router.put("/books/:id");
router.delete("/books/:id");

module.exports = router;
