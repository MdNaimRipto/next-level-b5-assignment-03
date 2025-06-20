"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const validationError_1 = __importDefault(require("../errors/validationError"));
const globalErrorHandler = (error, req, res, next) => {
    config_1.default.node_env === "development"
        ? console.log(`GlobalErrorHandler~~`, error)
        : console.error(`GlobalErrorHandler~~`, error);
    let statusCode = 500;
    let message = "Internal Server Error!";
    if ((error === null || error === void 0 ? void 0 : error.name) === "ValidationError") {
        const simplifiedError = (0, validationError_1.default)(error);
        statusCode = 400;
        message = simplifiedError.message;
        error = simplifiedError.error;
    } //
    else if (error instanceof ApiError_1.default) {
        statusCode = error === null || error === void 0 ? void 0 : error.statusCode;
        message = error === null || error === void 0 ? void 0 : error.message;
        error = {
            message: error.message,
            statusCode: error.statusCode,
        };
    } //
    else if (error instanceof Error) {
        message = error === null || error === void 0 ? void 0 : error.message;
        console.log({ error });
    }
    res.status(statusCode).send({
        success: false,
        message,
        error,
    });
};
exports.default = globalErrorHandler;
