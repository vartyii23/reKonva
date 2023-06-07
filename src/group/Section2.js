//appsloveworld.com
//how to make konva react responsive (scaling) canvas
//according to device size /resolution
import { useState, useEffect } from 'react';
import { Stage, Layer, Text } from 'react-konva';

export default function Section2() {
  //resize stage on window size changes
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  //listening to window size
  useEffect(() => {
    const checkSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <Stage width={size.width} height={size.height}>
      <Layer>
        <Text text="how are you" />
      </Layer>
    </Stage>
  );
}
