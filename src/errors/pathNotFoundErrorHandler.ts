import { Request, Response } from "express";
import httpStatus from "http-status";

const pathNotFoundErrorHandler = (req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).send({
    success: false,
    statusCode: httpStatus.NOT_FOUND,
    message: `Cannot get requested '${req.url}' path`,
  });
};

export default pathNotFoundErrorHandler;
