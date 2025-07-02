import { z } from "zod";
import { bookGenreEnums } from "./books.constant";

const booksZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title Is Required",
    }),
    author: z.string({
      required_error: "Author Name is Required",
    }),
    genre: z.enum([...bookGenreEnums] as [string, ...string[]], {
      required_error: `Genre must be one of ${bookGenreEnums}`,
    }),
    isbn: z.string({
      required_error: "ISBN Number is Required",
    }),
    description: z.string({
      required_error: "Description is Required",
    }),
    copies: z.number({
      required_error: "Copies Count is Required",
    }),
  }),
});

export const BooksValidation = {
  booksZodSchema,
};
