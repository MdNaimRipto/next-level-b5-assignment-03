"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowedBooks = void 0;
const mongoose_1 = require("mongoose");
const borrowSchema = new mongoose_1.Schema({
    book: { type: mongoose_1.Types.ObjectId, required: true, ref: "Books" },
    quantity: {
        type: Number,
        required: true,
        min: [1, "Must have to borrow at least 1 book"],
    },
    dueDate: { type: Date, required: true },
}, {
    versionKey: false,
    timestamps: true,
    strict: true,
});
exports.BorrowedBooks = (0, mongoose_1.model)("BorrowedBooks", borrowSchema);
