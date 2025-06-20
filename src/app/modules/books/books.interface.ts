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

export interface IBookFilter {
  filter?: string;
  sort?: "asc" | "desc";
  limit?: number;
}
