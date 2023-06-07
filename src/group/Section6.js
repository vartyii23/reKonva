import { useRef, useEffect, useState } from 'react';
import { Circle, Layer, Stage, Transformer, Text } from 'react-konva';

//custom circle component
const circ = () => {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Circle
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
      {isSelect && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

//initial circles component group attribute
const initialCircles = [
  {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: 'blue',
    id: 'circ1'
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    fill: 'green',
    id: 'circ2'
  }
];
const Section6 = () => {
  const [circles, setCircles] = useState(initialCircles);
  const [selectId, setSelectId] = useState(null);
  return (
    <Stage
      onMouseDown={(e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
          selectId(null);
        }
      }}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Layer>
        <Text text="this is a tranform feature apply to a group of custom circles" />
        {circles.map((c, i) => {
          return (
            <circ
              key={i}
              shapeProps={c}
              isSelected={c.id === selectId}
              onSelect={() => {
                setSelectId(c.id);
              }}
              onChange={(newAttrs) => {
                const circs = circles.slice();
                circs[i] = newAttrs;
                setCircles(circs);
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Section6;

//adding extra feature to Stage component - onMouseDown
