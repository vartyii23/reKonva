import Konva from 'konva';
import { Stage, Layer, Rect, Circle, RegularPolygon, Shape } from 'react-konva';

export default function Section1() {
  const handleDragEnd = (e) => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };
  const handleDragStart = (e) => {
    e.target.setAttrs({
      shadowOffset: { x: 15, y: 15 },
      scaleX: 1.2,
      scaleY: 1.2
    });
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill="red"
          shadowBlur={5}
        />
        <Circle
          x={200}
          y={200}
          width={100}
          height={200}
          stroke="blue"
          draggable
        />
        <RegularPolygon
          sides={5}
          x={300}
          y={200}
          width={100}
          height={100}
          stroke="yellow"
          strokeWidth={5}
          draggable
        />
      </Layer>
      <Layer>
        <Circle
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          draggable
          x={50}
          y={50}
          width={100}
          height={100}
          fill="purple"
          stroke="black"
          strokeWidth={4}
        />
        <Shape
          draggable
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(0, 50);
            context.bezierCurveTo(100, 200, 100, 400, 200, 0);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="#00D2FF"
          stroke="black"
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
}
