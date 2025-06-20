import express from "express";
import { BooksController } from "./books.controller";

const router = express.Router();

router.post("/", BooksController.uploadBook);

export const BooksRouter = router;
