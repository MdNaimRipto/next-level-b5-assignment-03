import { Document } from "mongoose";

export type BookGenreEnums =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";

export interface IBooks {
  title: string;
  author: string;
  genre: BookGenreEnums;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

export interface IBookFilters {
  genre?: string;
}

export interface IBooksDocument extends IBooks, IBooksMethods, Document {}

export interface IBooksMethods {
  decreaseCopies(quantity: number): Promise<void>;
}
