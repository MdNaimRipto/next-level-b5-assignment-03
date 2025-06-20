import { model, Schema, Types } from "mongoose";
import { IBorrow } from "./borrow.interface";

const borrowSchema = new Schema<IBorrow>(
  {
    book: { type: Types.ObjectId, required: true, ref: "Books" },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Must have to borrow at least 1 book"],
    },
    dueDate: { type: Date, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
    strict: true,
  },
);

export const BorrowedBooks = model<IBorrow>("BorrowedBooks", borrowSchema);
