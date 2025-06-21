"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const pathNotFoundErrorHandler = (req, res) => {
    res.status(http_status_1.default.NOT_FOUND).send({
        success: false,
        message: `Cannot get requested '${req.url}' path`,
        error: {
            statusCode: http_status_1.default.NOT_FOUND,
            message: `Cannot get requested '${req.url}' path`,
        },
    });
};
exports.default = pathNotFoundErrorHandler;
