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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const catchAsync_1 = __importDefault(require("../../../util/catchAsync"));
const books_service_1 = require("./books.service");
const sendResponse_1 = __importDefault(require("../../../util/sendResponse"));
const books_constant_1 = require("./books.constant");
const shared_1 = __importDefault(require("../../../shared/shared"));
const pagination_constant_1 = require("../../../constants/pagination.constant");
// Upload Book
const uploadBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = __rest(req.body, []);
    const result = yield books_service_1.BooksService.uploadBook(payload);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Book created successfully",
        data: result,
    });
}));
// Get All Books
const getAllBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, shared_1.default)(req.query, books_constant_1.BooksFilterableFields);
    const options = (0, shared_1.default)(req.query, pagination_constant_1.paginationFields);
    const result = yield books_service_1.BooksService.getAllBooks(filters, options);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Books retrieved successfully",
        data: result,
    });
}));
// Get Book by ID
const getBookById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield books_service_1.BooksService.getBookById(bookId);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Book retrieved successfully",
        data: result,
    });
}));
// Update Book
const updateBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = __rest(req.body, []);
    const { bookId } = req.params;
    const result = yield books_service_1.BooksService.updateBook(payload, bookId);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Book updated successfully",
        data: result,
    });
}));
// Delete Book
const deleteBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield books_service_1.BooksService.deleteBook(bookId);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Book deleted successfully",
        data: result,
    });
}));
exports.BooksController = {
    uploadBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
};
