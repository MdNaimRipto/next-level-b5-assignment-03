import { Types } from "mongoose";
import { IBooks } from "../books/books.interface";

export interface IBorrow {
  book: Types.ObjectId | IBooks;
  quantity: number;
  dueDate: Date;
}
