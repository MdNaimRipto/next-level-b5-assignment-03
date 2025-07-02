import { SortOrder } from "mongoose";
import {
  IGenericPaginationResponse,
  IPaginationOptions,
} from "../../../interface/pagination";
import { IBookFilters, IBooks } from "./books.interface";
import { Books } from "./books.schema";
import { calculatePaginationFunction } from "../../../helpers/paginationHelpers";

// upload book
const uploadBook = async (payload: IBooks): Promise<IBooks | null> => {
  const result = await Books.create(payload);
  return result;
};

// get all books
const getAllBooks = async (
  filters: IBookFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IBooks[]>> => {
  const { ...filterData } = filters;

  const andConditions: string | any[] = [];

  //
  if (Object.keys(filterData).length) {
    const filterConditions: { [x: string]: string }[] = [];

    Object.entries(filterData).forEach(([field, value]) => {
      filterConditions.push({ [field]: value });
    });

    andConditions.push({
      $and: filterConditions,
    });
  }
  //

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const query = {
    ...checkAndCondition,
  };

  const books = await Books.find(query)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Books.countDocuments({});

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: books,
  };
};

// get book by id
const getBookById = async (bookId: string): Promise<IBooks | null> => {
  const result = await Books.findOne({ _id: bookId });
  return result;
};

// update book
const updateBook = async (
  payload: Partial<IBooks>,
  bookId: string,
): Promise<IBooks | null> => {
  const result = await Books.findOneAndUpdate({ _id: bookId }, payload, {
    new: true,
  });

  return result;
};

// delete book
const deleteBook = async (bookId: string): Promise<null> => {
  await Books.findOneAndDelete(
    { _id: bookId },
    {
      new: true,
    },
  );

  return null;
};

export const BooksService = {
  uploadBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
