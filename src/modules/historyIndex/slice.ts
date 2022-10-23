import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../utils/types";
import { endStroke } from "../sharedActions";
import { Action, redo, undo } from "./actions";

const initialState: RootState["historyIndex"] = 0;

export const reducer = createSlice({
  name: "historyIndex",
  initialState: 0,
  reducers: {
    undo: (state, action: PayloadAction<number>) => {
      return Math.min(state + 1, action.payload);
    },
    redo: (state) => {
      return Math.max(state - 1, 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, () => {
      return 0;
    });
  },
});

export const historyIndexSelector = (state: RootState) => state.historyIndex;
