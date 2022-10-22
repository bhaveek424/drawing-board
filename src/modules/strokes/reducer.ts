import { RootState } from "../../utils/types";
import { endStroke, SharedAction } from "../sharedActions";

export const reducer = (
  state: RootState["strokes"] = [],
  action: SharedAction
) => {
  switch (action.type) {
    case endStroke.toString(): {
      const { historyIndex, stroke } = action.payload;
      if (!stroke.points.length) {
        return state;
      }
      return [...state.slice(0, state.length - historyIndex), stroke];
    }
    default:
      return state;
  }
};

export const strokesLengthSelector = (state: RootState) => state.strokes.length;

export const strokesSelector = (state: RootState) => state.strokes;
