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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const books_schema_1 = require("./books.schema");
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
// upload book
const uploadBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_schema_1.Books.create(payload);
    return result;
});
// get all books
const getAllBooks = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const filterData = __rest(filters, []);
    const andConditions = [];
    //
    if (Object.keys(filterData).length) {
        const filterConditions = [];
        Object.entries(filterData).forEach(([field, value]) => {
            filterConditions.push({ [field]: value });
        });
        andConditions.push({
            $and: filterConditions,
        });
    }
    //
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelpers_1.calculatePaginationFunction)(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    //
    const checkAndCondition = (andConditions === null || andConditions === void 0 ? void 0 : andConditions.length) > 0 ? { $and: andConditions } : {};
    const query = Object.assign({}, checkAndCondition);
    const books = yield books_schema_1.Books.find(query)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield books_schema_1.Books.countDocuments({});
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: books,
    };
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
