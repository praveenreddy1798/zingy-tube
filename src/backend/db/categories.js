import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Music",
    description: "Amazing videos about Music",
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    description: "Amazing videos about Sports",
  },
  {
    _id: uuid(),
    categoryName: "Technology",
    description: "Amazing videos about Technology",
  },
];
