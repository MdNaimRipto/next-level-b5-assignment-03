import { z } from "zod";

const borrowZodSchema = z.object({
  body: z.object({
    book: z.string({
      required_error: "Book ID Is Required",
    }),
    quantity: z.number({
      required_error: "Quantity is Required",
    }),
    dueDate: z.string({
      required_error: "Due Date is Required",
    }),
  }),
});

export const BorrowValidation = {
  borrowZodSchema,
};
