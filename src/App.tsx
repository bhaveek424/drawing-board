import { clearCanvas, setCanvasSize } from "./utils/canvasUtils";
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./utils/types";
import { beginStroke, endStroke, updateStroke } from "./actions";

const WIDTH = 1024;
const HEIGHT = 768;

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext("2d") };
  };

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();
    if (!canvas || !context) {
      return;
    }
    setCanvasSize(canvas, WIDTH, HEIGHT);

    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 5;
    context.strokeStyle = "black";

    clearCanvas(canvas);
  }, []);

  const isDrawing = useSelector<RootState>(
    (state) => !!state.currentStroke.points.length
  );

  const dispatch = useDispatch();

  // Canvas Events
  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;

    dispatch(beginStroke(offsetX, offsetY));
  };
  const endDrawing = () => {
    if (isDrawing) {
      dispatch(endStroke());
    }
  };
  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;

    dispatch(updateStroke(offsetX, offsetY));
  };

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Redux Paint</div>
        <div className="title-bar-controls">
          <button aria-label="Close" />
        </div>
      </div>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
}

export default App;
