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
exports.Books = void 0;
const mongoose_1 = require("mongoose");
const books_constant_1 = require("./books.constant");
const booksSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: {
        type: String,
        required: true,
        minlength: 13,
        unique: [true, "Isbn number must have to be unique"],
        validate: {
            validator: function (v) {
                return /^[0-9]{13}$/.test(v); // ISBN-13 validation
            },
            message: props => `${props.value} is not a valid 13-digit ISBN!`,
        },
    },
    description: { type: String, required: true },
    genre: {
        type: String,
        enum: {
            values: books_constant_1.bookGenreEnums,
            message: "Genre must be one of: " + books_constant_1.bookGenreEnums.join(", "),
        },
        required: true,
    },
    copies: {
        type: Number,
        required: true,
        min: [0, "Copies must be a positive number"],
    },
    available: { type: Boolean, required: true, default: true },
}, {
    timestamps: true,
    versionKey: false,
    strict: true,
});
booksSchema.method("decreaseCopies", function (quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.copies - quantity <= 0) {
            this.copies = 0;
            this.available = false;
        }
        else {
            this.copies -= quantity;
        }
        yield this.save();
    });
});
exports.Books = (0, mongoose_1.model)("Books", booksSchema);
