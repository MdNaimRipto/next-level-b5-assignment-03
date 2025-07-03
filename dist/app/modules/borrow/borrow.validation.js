"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowValidation = void 0;
const zod_1 = require("zod");
const borrowZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        book: zod_1.z.string({
            required_error: "Book ID Is Required",
        }),
        quantity: zod_1.z.number({
            required_error: "Quantity is Required",
        }),
        dueDate: zod_1.z.string({
            required_error: "Due Date is Required",
        }),
    }),
});
exports.BorrowValidation = {
    borrowZodSchema,
};
