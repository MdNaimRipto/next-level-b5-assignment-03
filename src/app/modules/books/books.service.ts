import { IBookFilter, IBooks } from "./books.interface";
import { Books } from "./books.schema";

// upload book
const uploadBook = async (payload: IBooks): Promise<IBooks | null> => {
  const result = await Books.create(payload);
  return result;
};

// get all books
const getAllBooks = async (options: IBookFilter): Promise<IBooks[]> => {
  const { filter, limit, sort } = options;

  const result = await Books.find(filter ? { genre: filter } : {})
    .sort(sort && sort === "asc" ? { createdAt: 1 } : { createdAt: -1 })
    .limit(limit ? limit : 10);
  return result;
};

// get all books
const getBookById = async (bookId: string): Promise<IBooks | null> => {
  const result = await Books.findOne({ _id: bookId });
  return result;
};

const updateBook = async (
  payload: Partial<IBooks>,
  bookId: string,
): Promise<IBooks | null> => {
  const result = await Books.findOneAndUpdate({ _id: bookId }, payload, {
    new: true,
  });

  return result;
};

const deleteBook = async (bookId: string): Promise<null> => {
  await Books.findOneAndDelete(
    { _id: bookId },
    {
      new: true,
    },
  );

  return null;
};

export const BooksService = {
  uploadBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
