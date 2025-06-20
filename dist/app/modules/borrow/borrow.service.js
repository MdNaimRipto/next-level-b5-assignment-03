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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowService = void 0;
const books_schema_1 = require("../books/books.schema");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const borrow_schema_1 = require("./borrow.schema");
// Borrow Book
const borrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const currentBookCount = (yield books_schema_1.Books.findOne({
        _id: payload.book,
    }));
    if (!currentBookCount) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Request Book Does't Exists!");
    }
    if (currentBookCount.copies <= 0) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "No copies left to borrow! Try another time.");
    }
    if (currentBookCount.copies - payload.quantity < 0) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `Cannot borrow ${payload.quantity} book copies. Only left ${currentBookCount.copies}`);
    }
    if (currentBookCount.copies < payload.quantity) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `Insufficient copies available. Requested: ${payload.quantity}, Available: ${currentBookCount.copies}`);
    }
    yield currentBookCount.decreaseCopies(payload.quantity);
    const result = yield borrow_schema_1.BorrowedBooks.create(payload);
    return result;
});
// Get Borrowed Books
const getBorrowedBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_schema_1.BorrowedBooks.aggregate([
        {
            $group: {
                _id: "$book",
                totalQuantity: { $sum: 1 },
            },
        },
        {
            $lookup: {
                from: "books",
                localField: "_id",
                foreignField: "_id",
                as: "book",
            },
        },
        {
            $unwind: "$book",
        },
        {
            $project: {
                _id: 0,
                totalQuantity: 1,
                book: {
                    title: "$book.title",
                    isbn: "$book.isbn",
                },
            },
        },
    ]);
    return result;
});
exports.BorrowService = {
    borrowBook,
    getBorrowedBooks,
};
