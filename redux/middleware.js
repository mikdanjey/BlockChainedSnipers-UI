import { createLogger } from "redux-logger";

const { NEXT_PUBLIC_NODE_ENV } = process.env;
const middleware = [
  createLogger({
    duration: true,
    timestamp: false,
    collapsed: true,
    colors: {
      title: () => "#139BFE",
      prevState: () => "#1C5FAF",
      action: () => "#149945",
      nextState: () => "#A47104",
      error: () => "#ff0005",
    },
    // predicate: () => NEXT_PUBLIC_NODE_ENV === "development" ? true : false,
    predicate: () => false,
  }),
];

export { middleware };
