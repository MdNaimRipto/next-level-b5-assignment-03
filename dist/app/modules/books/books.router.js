"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksRouter = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const books_validation_1 = require("./books.validation");
const router = express_1.default.Router();
router.post("/uploadBook", (0, zodValidationRequest_1.default)(books_validation_1.BooksValidation.booksZodSchema), books_controller_1.BooksController.uploadBook);
router.get("/getAllBooks", books_controller_1.BooksController.getAllBooks);
router.get("/getBookById/:bookId", books_controller_1.BooksController.getBookById);
router.put("/updateBook/:bookId", books_controller_1.BooksController.updateBook);
router.delete("/deleteBook/:bookId", books_controller_1.BooksController.deleteBook);
exports.BooksRouter = router;
