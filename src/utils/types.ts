export type RootState = {
  currentStroke: Stroke;
  strokes: Stroke[];
};

export type Stroke = {
  points: Point[];
  color: string;
};

export type Point = {
  x: number;
  y: number;
};
