import { createStore,applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./user/reducer";
const logger = createLogger();
const middleWare = [logger]
export const store = createStore(reducer,applyMiddleware(...middleWare));