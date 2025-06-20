"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksRouter = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.post("/", books_controller_1.BooksController.uploadBook);
router.get("/", books_controller_1.BooksController.getAllBooks);
router.get("/:bookId", books_controller_1.BooksController.getBookById);
router.put("/:bookId", books_controller_1.BooksController.updateBook);
router.delete("/:bookId", books_controller_1.BooksController.deleteBook);
exports.BooksRouter = router;
