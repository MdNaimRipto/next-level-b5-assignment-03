"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRouter = void 0;
const express_1 = __importDefault(require("express"));
const borrow_controller_1 = require("./borrow.controller");
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const borrow_validation_1 = require("./borrow.validation");
const router = express_1.default.Router();
router.post("/borrowBook", (0, zodValidationRequest_1.default)(borrow_validation_1.BorrowValidation.borrowZodSchema), borrow_controller_1.BorrowController.borrowBook);
router.get("/getBooksSummary", borrow_controller_1.BorrowController.getBorrowedBooks);
exports.BorrowRouter = router;
