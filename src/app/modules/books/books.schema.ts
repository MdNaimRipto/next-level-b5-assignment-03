import { model, Schema } from "mongoose";
import { IBooks } from "./books.interface";
import { bookGenreEnums } from "./books.constant";

const booksSchema = new Schema<IBooks>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, enum: bookGenreEnums, required: true },
  copies: {
    type: Number,
    required: true,
    min: [0, "Copies must be a positive number"],
  },
  available: { type: Boolean, required: true, default: true },
});

export const Books = model<IBooks>("Books", booksSchema);
