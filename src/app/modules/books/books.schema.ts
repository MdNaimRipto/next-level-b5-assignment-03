import { Model, model, Schema } from "mongoose";
import { IBooks, IBooksMethods } from "./books.interface";
import { bookGenreEnums } from "./books.constant";

const booksSchema = new Schema<IBooks, Model<IBooks>, IBooksMethods>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: {
      type: String,
      required: true,
      minlength: 13,
      unique: [true, "Isbn number must have to be unique"],
      validate: {
        validator: function (v: string) {
          return /^[0-9]{13}$/.test(v); // ISBN-13 validation
        },
        message: props => `${props.value} is not a valid 13-digit ISBN!`,
      },
    },
    description: { type: String, required: true },
    genre: {
      type: String,
      enum: {
        values: bookGenreEnums,
        message: "Genre must be one of: " + bookGenreEnums.join(", "),
      },
      required: true,
    },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies must be a positive number"],
    },
    available: { type: Boolean, required: true, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: true,
  },
);

booksSchema.method(
  "decreaseCopies",
  async function (quantity: number): Promise<void> {
    if (this.copies - quantity <= 0) {
      this.copies = 0;
      this.available = false;
    } else {
      this.copies -= quantity;
    }
    await this.save();
  },
);

export const Books = model<IBooks>("Books", booksSchema);
