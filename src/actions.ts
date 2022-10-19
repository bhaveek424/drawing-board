import { Point } from "./utils/types";

export const BEGIN_STROKE = "BEGIN_STROKE";
export const UPDATE_STROKE = "UPDATE_STROKE";
export const END_STROKE = "END_STROKE";

// defining the Action type
export type Action =
  | {
      type: typeof BEGIN_STROKE;
      payload: Point;
    }
  | {
      type: typeof UPDATE_STROKE;
      payload: Point;
    }
  | {
      type: typeof END_STROKE;
    };

// defining action creators for each action

export const beginStroke = (x: number, y: number) => {
  return {
    type: BEGIN_STROKE,
    payload: { x, y },
  };
};

export const updateStroke = (x: number, y: number) => {
  return {
    type: UPDATE_STROKE,
    payload: { x, y },
  };
};

export const endStroke = () => {
  return { type: END_STROKE };
};
