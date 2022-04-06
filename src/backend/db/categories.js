import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    id: uuid(),
    categoryName: "Music",
    description: "Amazing videos about Music",
  },
  {
    id: uuid(),
    categoryName: "Sports",
    description: "Amazing videos about Sports",
  },
  {
    id: uuid(),
    categoryName: "Technology",
    description: "Amazing videos about Technology",
  },
];
