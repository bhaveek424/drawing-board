import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { logger } from "redux-logger";
import { reducer as historyIndex } from "./modules/historyIndex/reducer";
import { reducer as currentStroke } from "./modules/currentStroke/reducer";
import { reducer as strokes } from "./modules/strokes/reducer";

export const store = configureStore({
  reducer: {
    historyIndex,
    currentStroke,
    strokes,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
