import { Request, Response } from "express";
import catchAsync from "../../../util/catchAsync";
import { BooksService } from "./books.service";
import sendResponse from "../../../util/sendResponse";
import { BooksFilterableFields } from "./books.constant";
import pick from "../../../shared/shared";
import { paginationFields } from "../../../constants/pagination.constant";

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
  const filters = pick(req.query, BooksFilterableFields);
  const options = pick(req.query, paginationFields);

  const result = await BooksService.getAllBooks(filters, options);

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
