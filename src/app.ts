import express, { Application, Response, Request } from "express";
import cors from "cors";
import httpStatus from "http-status";
import { Routers } from "./app/routers/router";
import pathNotFoundErrorHandler from "./errors/pathNotFoundErrorHandler";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app: Application = express();

// ? Middlewares:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * First Route
app.get("/", async (req: Request, res: Response) => {
  res.status(httpStatus.OK).send({
    message: "Assignment 03 Book Library Server Running Successfully",
    statusCode: httpStatus.OK,
  });
});

//* Main endpoint
app.use("/api", Routers);

//* Global error Handler
app.use(globalErrorHandler);

//* Path Not Found Error Handler
app.use(pathNotFoundErrorHandler);

export default app;
