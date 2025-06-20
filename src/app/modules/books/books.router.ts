import express from "express";
import { BooksController } from "./books.controller";

const router = express.Router();

router.post("/", BooksController.uploadBook);

router.get("/", BooksController.getAllBooks);

router.get("/:bookId", BooksController.getBookById);

router.put("/:bookId", BooksController.updateBook);

router.delete("/:bookId", BooksController.deleteBook);

export const BooksRouter = router;
