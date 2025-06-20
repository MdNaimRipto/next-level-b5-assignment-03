import { Books } from "../books/books.schema";
import { IBorrow } from "./borrow.interface";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IBooksDocument } from "../books/books.interface";
import { BorrowedBooks } from "./borrow.schema";

// Borrow Book
const borrowBook = async (payload: IBorrow): Promise<IBorrow> => {
  const currentBookCount = (await Books.findOne({
    _id: payload.book,
  })) as IBooksDocument;
  if (!currentBookCount) {
    throw new ApiError(httpStatus.NOT_FOUND, "Request Book Does't Exists!");
  }

  if (currentBookCount.copies <= 0) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "No copies left to borrow! Try another time.",
    );
  }

  if (currentBookCount.copies - payload.quantity < 0) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Cannot borrow ${payload.quantity} book copies. Only left ${currentBookCount.copies}`,
    );
  }

  if (currentBookCount.copies < payload.quantity) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Insufficient copies available. Requested: ${payload.quantity}, Available: ${currentBookCount.copies}`,
    );
  }

  await currentBookCount.decreaseCopies(payload.quantity);

  const result = await BorrowedBooks.create(payload);
  return result;
};

// Get Borrowed Books
const getBorrowedBooks = async () => {
  const result = await BorrowedBooks.aggregate([
    {
      $group: {
        _id: "$book",
        totalQuantity: { $sum: 1 },
      },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "book",
      },
    },
    {
      $unwind: "$book",
    },
    {
      $project: {
        _id: 0,
        totalQuantity: 1,
        book: {
          title: "$book.title",
          isbn: "$book.isbn",
        },
      },
    },
  ]);

  return result;
};

export const BorrowService = {
  borrowBook,
  getBorrowedBooks,
};
