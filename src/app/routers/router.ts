import express from "express";
import { BooksRouter } from "../modules/books/books.router";
import { BorrowRouter } from "../modules/borrow/borrow.router";

const router = express.Router();

const routes = [
  {
    path: "/books",
    route: BooksRouter,
  },
  {
    path: "/borrow",
    route: BorrowRouter,
  },
];

routes.map(r => router.use(r.path, r.route));

export const Routers = router;
