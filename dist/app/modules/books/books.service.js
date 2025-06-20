"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const books_schema_1 = require("./books.schema");
// upload book
const uploadBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_schema_1.Books.create(payload);
    return result;
});
// get all books
const getAllBooks = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { filter, limit, sort } = options;
    const result = yield books_schema_1.Books.find(filter ? { genre: filter } : {})
        .sort(sort && sort === "asc" ? { createdAt: 1 } : { createdAt: -1 })
        .limit(limit ? limit : 10);
    return result;
});
// get book by id
const getBookById = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_schema_1.Books.findOne({ _id: bookId });
    return result;
});
// update book
const updateBook = (payload, bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_schema_1.Books.findOneAndUpdate({ _id: bookId }, payload, {
        new: true,
    });
    return result;
});
// delete book
const deleteBook = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield books_schema_1.Books.findOneAndDelete({ _id: bookId }, {
        new: true,
    });
    return null;
});
exports.BooksService = {
    uploadBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
};
