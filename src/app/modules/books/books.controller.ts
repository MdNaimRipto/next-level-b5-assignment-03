import { Request, Response } from "express";
import catchAsync from "../../../util/catchAsync";
import { BooksService } from "./books.service";
import sendResponse from "../../../util/sendResponse";

// Upload Book
const uploadBook = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;

  const result = await BooksService.uploadBook(payload);

  sendResponse(res, {
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

// Get All Books
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const { filter, sort, limit } = req.query;

  const result = await BooksService.getAllBooks({
    filter: filter as any,
    limit: limit as any,
    sort: sort as any,
  });

  sendResponse(res, {
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

// Get Book by ID
const getBookById = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  const result = await BooksService.getBookById(bookId);

  sendResponse(res, {
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});

// Update Book
const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;
  const { bookId } = req.params;

  const result = await BooksService.updateBook(payload, bookId);

  sendResponse(res, {
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

// Delete Book
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  const result = await BooksService.deleteBook(bookId);

  sendResponse(res, {
    success: true,
    message: "Book deleted successfully",
    data: result,
  });
});

export const BooksController = {
  uploadBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
