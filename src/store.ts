import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { logger } from "redux-logger";
import historyIndex from "./modules/historyIndex/slice";
import { currentStroke } from "./modules/currentStroke/slice";
import strokes from "./modules/strokes/slice";

export const store = configureStore({
  reducer: {
    historyIndex,
    currentStroke,
    strokes,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
