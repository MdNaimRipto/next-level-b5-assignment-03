/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import config from "../config/config";
import ApiError from "../errors/ApiError";
import validationError from "../errors/validationError";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.node_env === "development"
    ? console.log(`GlobalErrorHandler~~`, error)
    : console.error(`GlobalErrorHandler~~`, error);

  let statusCode = 500;
  let message = "Internal Server Error!";

  if (error?.name === "ValidationError") {
    const simplifiedError = validationError(error);
    statusCode = 400;
    message = simplifiedError.message;
    error = simplifiedError.error;
  } //
  else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    error = {
      message: error.message,
      statusCode: error.statusCode,
    };
  } //
  else if (error instanceof Error) {
    message = error?.message;
    console.log({ error });
  }

  res.status(statusCode).send({
    success: false,
    message,
    error,
  });
};

export default globalErrorHandler;
