import { Error } from "mongoose";
import { IBooks } from "./books.interface";
import { Books } from "./books.schema";

const uploadBook = async (payload: IBooks): Promise<IBooks | null> => {
  const result = await Books.create(payload);
  return result;
};

export const BooksService = {
  uploadBook,
};
