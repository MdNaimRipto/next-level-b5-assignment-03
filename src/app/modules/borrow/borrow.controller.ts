import { Request, Response } from "express";
import catchAsync from "../../../util/catchAsync";
import sendResponse from "../../../util/sendResponse";
import { BorrowService } from "./borrow.service";

// Borrow Book
const borrowBook = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;

  const result = await BorrowService.borrowBook(payload);

  sendResponse(res, {
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

// Get All Borrowed Books
const getBorrowedBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowService.getBorrowedBooks();

  sendResponse(res, {
    success: true,
    message: "Borrowed books summary retrieved successfully",
    data: result,
  });
});

export const BorrowController = {
  borrowBook,
  getBorrowedBooks,
};
