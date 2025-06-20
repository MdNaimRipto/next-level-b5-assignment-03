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
    message: "Reservation Booked Successfully",
    data: result,
  });
});

export const BooksController = {
  uploadBook,
};
