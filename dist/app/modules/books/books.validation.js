"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksValidation = void 0;
const zod_1 = require("zod");
const books_constant_1 = require("./books.constant");
const booksZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title Is Required",
        }),
        author: zod_1.z.string({
            required_error: "Author Name is Required",
        }),
        genre: zod_1.z.enum([...books_constant_1.bookGenreEnums], {
            required_error: `Genre must be one of ${books_constant_1.bookGenreEnums}`,
        }),
        isbn: zod_1.z.string({
            required_error: "ISBN Number is Required",
        }),
        description: zod_1.z.string({
            required_error: "Description is Required",
        }),
        copies: zod_1.z.number({
            required_error: "Copies Count is Required",
        }),
    }),
});
exports.BooksValidation = {
    booksZodSchema,
};
