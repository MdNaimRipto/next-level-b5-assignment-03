import express from "express";
import { BorrowController } from "./borrow.controller";
import zodValidationRequest from "../../../middlewares/zodValidationRequest";
import { BorrowValidation } from "./borrow.validation";

const router = express.Router();

router.post(
  "/borrowBook",
  zodValidationRequest(BorrowValidation.borrowZodSchema),
  BorrowController.borrowBook,
);

router.get("/getBooksSummary", BorrowController.getBorrowedBooks);

export const BorrowRouter = router;
