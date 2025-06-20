"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const express_1 = __importDefault(require("express"));
const books_router_1 = require("../modules/books/books.router");
const borrow_router_1 = require("../modules/borrow/borrow.router");
const router = express_1.default.Router();
const routes = [
    {
        path: "/books",
        route: books_router_1.BooksRouter,
    },
    {
        path: "/borrow",
        route: borrow_router_1.BorrowRouter,
    },
];
routes.map(r => router.use(r.path, r.route));
exports.Routers = router;
