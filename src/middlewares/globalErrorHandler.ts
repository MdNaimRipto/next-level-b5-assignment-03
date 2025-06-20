/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import config from "../config/config";
import ApiError from "../errors/ApiError";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.node_env === "development"
    ? console.log(`GlobalErrorHandler~~`, error)
    : console.error(`GlobalErrorHandler~~`, error);

  let statusCode = 500;
  let message = "Internal Server Error!";

  if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
  } //
  else if (error instanceof Error) {
    message = error?.message;
  }

  res.status(statusCode).send({
    success: false,
    statusCode,
    message,
    stack: config.node_env === "production" ? undefined : error?.stack,
  });
};

export default globalErrorHandler;
