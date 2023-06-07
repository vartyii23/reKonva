import { Circle, Layer, Stage } from 'react-konva';

const Section3 = () => {
  const sayHello = () => {
    console.log('hello');
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Circle fill="red" radius={60} x={50} y={50} onMouseOver={sayHello} />
      </Layer>
    </Stage>
  );
};

export default Section3;
