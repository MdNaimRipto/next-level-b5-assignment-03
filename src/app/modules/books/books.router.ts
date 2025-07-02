import express from "express";
import { BooksController } from "./books.controller";
import zodValidationRequest from "../../../middlewares/zodValidationRequest";
import { BooksValidation } from "./books.validation";

const router = express.Router();

router.post(
  "/uploadBook",
  zodValidationRequest(BooksValidation.booksZodSchema),
  BooksController.uploadBook,
);

router.get("/getAllBooks", BooksController.getAllBooks);

router.get("/getBookById/:bookId", BooksController.getBookById);

router.put("/updateBook/:bookId", BooksController.updateBook);

router.delete("/deleteBook/:bookId", BooksController.deleteBook);

export const BooksRouter = router;
