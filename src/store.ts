import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { logger } from "redux-logger";
import { reducer as historyIndex } from "./modules/historyIndex/reducer";
import { reducer as currentStroke } from "./modules/currentStroke/reducer";
import { reducer as strokes } from "./modules/strokes/reducer";

export const store = createStore(
  combineReducers({
    historyIndex,
    currentStroke,
    strokes,
  }),
  composeWithDevTools(applyMiddleware(logger))
);
