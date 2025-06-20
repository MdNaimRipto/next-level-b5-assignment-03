import mongoose from "mongoose";

export type IGenericErrorResponse = {
  message: string;
  error: any;
};

const validationError = (
  error: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  return {
    message: "Validation failed",
    error: {
      name: error.name,
      errors: {
        copies: {
          message: error.errors.copies.message,
          name: error.errors.copies.name,
          properties: {
            message: error.errors.copies.message,
            type: error.errors.copies.kind,
            min: 0,
          },
          kind: error.errors.copies.kind,
          path: error.errors.copies.path,
          value: error.errors.copies.value,
        },
      },
    },
  };
};

export default validationError;
