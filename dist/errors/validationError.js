"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationError = (error) => {
    return {
        message: "Validation failed",
        error,
        // {
        //   name: error.name,
        //   errors:
        //   {
        //     copies: {
        //       message: error.errors.copies.message,
        //       name: error.errors.copies.name,
        //       properties: {
        //         message: error.errors.copies.message,
        //         type: error.errors.copies.kind,
        //         min: 0,
        //       },
        //       kind: error.errors.copies.kind,
        //       path: error.errors.copies.path,
        //       value: error.errors.copies.value,
        //     },
        //   },
        // },
    };
};
exports.default = validationError;
