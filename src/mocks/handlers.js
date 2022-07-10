import { rest } from "msw";
import { cars } from "./fixtures.js";

export const handlers = [
  rest.get("/cars", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cars));
  }),
];
