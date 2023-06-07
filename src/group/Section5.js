import { Layer, Image, Stage, Text } from 'react-konva';
import { useEffect, useState, useRef } from 'react';
import Konva from 'konva';

const Section5 = () => {
  const imageRef = useRef();
  const [image, setImage] = useState(new window.Image());
  const [image2, setImage2] = useState(new window.Image());

  useEffect(() => {
    const img = new window.Image();
    img.src = './image/boxed.jpg';
    setImage(img);
  }, []);

  useEffect(() => {
    const img2 = new window.Image();
    img2.src = './image/ivana.jpg';
    setImage2(img2);
  }, []);

  //use ref to cache the original image
  //then use the getLayer and batchDraw to apply the filter

  useEffect(() => {
    if (image2) {
      imageRef.current.cache();
      imageRef.current.getLayer().batchDraw();
    }
  }, [image2]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image x={50} y={50} image={image} width={500} height={500} />
        <Text text="with effect for second picture" />
        <Image
          x={600}
          y={50}
          draggable
          width={500}
          height={500}
          image={image2}
          blurRadius={50}
          filter={[Konva.Filters.Blur]}
          ref={imageRef}
        />
      </Layer>
    </Stage>
  );
};

export default Section5;
